'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface HighlightContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
  mode: 'children' | 'parent';
  hover: boolean;
  exitDelay: number;
}

const HighlightContext = createContext<HighlightContextValue | null>(null);

interface HighlightProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
  containerClassName?: string;
  mode?: 'children' | 'parent';
  exitDelay?: number;
  hover?: boolean;
  onValueChange?: (value: string) => void;
}

export function Highlight({
  children,
  defaultValue,
  className,
  containerClassName,
  mode = 'children',
  exitDelay = 200,
  hover = false,
  onValueChange,
}: HighlightProps) {
  const [activeValue, setActiveValue] = useState(defaultValue || '');
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const exitTimeoutRef = useRef<NodeJS.Timeout>();

  const handleValueChange = (value: string) => {
    setActiveValue(value);
    onValueChange?.(value);
  };

  useEffect(() => {
    const updateDimensions = () => {
      const container = containerRef.current;
      if (!container) return;

      const targetValue = hover ? (hoveredValue || activeValue) : activeValue;
      const activeElement = container.querySelector(`[data-value="${targetValue}"]`);
      
      if (activeElement && container) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
        
        setDimensions({
          left: activeRect.left - containerRect.left,
          top: activeRect.top - containerRect.top,
          width: activeRect.width,
          height: activeRect.height,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [activeValue, hoveredValue, hover]);

  const handleMouseEnter = (value: string) => {
    if (hover) {
      clearTimeout(exitTimeoutRef.current);
      setHoveredValue(value);
    }
  };

  const handleMouseLeave = () => {
    if (hover) {
      exitTimeoutRef.current = setTimeout(() => {
        setHoveredValue(null);
      }, exitDelay);
    }
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const value = child.props['data-value'];
      return React.cloneElement(child as React.ReactElement<any>, {
        onClick: () => value && handleValueChange(value),
        onMouseEnter: () => value && handleMouseEnter(value),
        onMouseLeave: handleMouseLeave,
        'data-active': value === activeValue,
      });
    }
    return child;
  });

  return (
    <HighlightContext.Provider
      value={{
        activeValue,
        setActiveValue: handleValueChange,
        mode,
        hover,
        exitDelay,
      }}
    >
      <div
        ref={containerRef}
        className={cn('relative', mode === 'parent' ? containerClassName : '')}
      >
        {dimensions.width > 0 && (
          <motion.div
            className={cn('absolute', className)}
            initial={false}
            animate={{
              left: dimensions.left,
              top: dimensions.top,
              width: dimensions.width,
              height: dimensions.height,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
          />
        )}
        {mode === 'children' ? (
          <div className={containerClassName}>{childrenWithProps}</div>
        ) : (
          childrenWithProps
        )}
      </div>
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  const context = useContext(HighlightContext);
  if (!context) {
    throw new Error('useHighlight must be used within a Highlight component');
  }
  return context;
}
