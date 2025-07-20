const CircularText = ({ text, className = "" }) => {
    const letters = Array.from(text);
  
    return (
      <div className={`absolute inset-0 animate-spin ${className}`} style={{ animationDuration: '15s' }}>
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-xs md:text-sm font-light text-gray-500"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${rotationDeg}deg) translateY(-45px)`
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    );
  };
  
  export default CircularText;