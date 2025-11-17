interface GradientMaskProps {
    gradientColor?: string;
    dotSize?: number;
    dotSpacing?: number;
    width?: number;
    height?: number;
  }
  
  export function GradientMask({ 
    gradientColor = "#3b82f6", // blue-500 as default
    dotSize = 2,
    dotSpacing = 12,
    width = 308,
    height = 360
  }: GradientMaskProps) {
    // Calculate how many dots we need
    const cols = Math.ceil(width / dotSpacing) + 1;
    const rows = Math.ceil(height / dotSpacing) + 1;
    
    const dots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: col * dotSpacing,
          y: row * dotSpacing,
          key: `${row}-${col}`
        });
      }
    }
  
    return (
      <div className="relative" style={{ width, height }}>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0"
          style={{ mixBlendMode: 'normal' }}
        >
          <defs>
            {/* Define the radial gradient */}
            <radialGradient id="circularGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={gradientColor} stopOpacity="1" />
              <stop offset="100%" stopColor={gradientColor} stopOpacity="0" />
            </radialGradient>
            
            {/* Define the dot pattern mask */}
            <mask id="dotMask">
              <rect width={width} height={height} fill="black" />
              {dots.map(dot => (
                <circle
                  key={dot.key}
                  cx={dot.x}
                  cy={dot.y}
                  r={dotSize}
                  fill="white"
                />
              ))}
            </mask>
          </defs>
          
          {/* Apply gradient with mask */}
          <circle
            cx={width / 2}
            cy={height / 2}
            r={Math.max(width, height) / 2}
            fill="url(#circularGradient)"
            mask="url(#dotMask)"
          />
        </svg>
      </div>
    );
  }
  