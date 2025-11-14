'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { cn } from '@/lib/utils';

interface CountingNumberProps {
  number: number;
  fromNumber?: number;
  duration?: number;
  delay?: number;
  className?: string;
  padStart?: boolean;
  decimalSeparator?: string;
  decimalPlaces?: number;
  suffix?: string;
  prefix?: string;
}

export const CountingNumber = ({
  number,
  fromNumber = 0,
  duration = 2,
  delay = 0,
  className,
  padStart = false,
  decimalSeparator = '.',
  decimalPlaces = 0,
  suffix = '',
  prefix = '',
}: CountingNumberProps) => {
  const [count, setCount] = useState(fromNumber);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = fromNumber;
      const endValue = number;
      const difference = endValue - startValue;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutCubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentCount = startValue + difference * eased;

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, number, fromNumber, duration, delay]);

  const formatNumber = (num: number) => {
    let formatted = num.toFixed(decimalPlaces);
    
    if (decimalSeparator !== '.') {
      formatted = formatted.replace('.', decimalSeparator);
    }
    
    if (padStart && decimalPlaces === 0) {
      const numStr = Math.floor(num).toString();
      formatted = numStr.padStart(String(number).length, '0');
    }
    
    return `${prefix}${formatted}${suffix}`;
  };

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {formatNumber(count)}
    </span>
  );
};
