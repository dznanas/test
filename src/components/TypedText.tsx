import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  className = '',
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      typedRef.current = new Typed(elementRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        backDelay: 1000,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={elementRef} className={className}></span>;
};

export default TypedText;