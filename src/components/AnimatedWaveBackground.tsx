import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedWaveBackgroundProps {
  className?: string;
}

const AnimatedWaveBackground = ({ className }: AnimatedWaveBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      {/* Animated wave layers */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 20% 80%, hsl(var(--wave-primary) / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 30% 70%, hsl(var(--wave-primary) / 0.4) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 50% at 20% 80%, hsl(var(--wave-primary) / 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 70% 60% at 70% 90%, hsl(var(--wave-secondary) / 0.35) 0%, transparent 50%)",
            "radial-gradient(ellipse 70% 60% at 80% 80%, hsl(var(--wave-secondary) / 0.35) 0%, transparent 50%)",
            "radial-gradient(ellipse 70% 60% at 70% 90%, hsl(var(--wave-secondary) / 0.35) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--wave-tertiary) / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse 60% 40% at 40% 95%, hsl(var(--wave-tertiary) / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse 60% 40% at 60% 100%, hsl(var(--wave-tertiary) / 0.3) 0%, transparent 40%)",
            "radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--wave-tertiary) / 0.3) 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive glow that follows mouse */}
      <motion.div
        className="absolute w-96 h-96 pointer-events-none"
        animate={{
          x: ["-50%", "-50%"],
          y: ["-50%", "-50%"],
          background: [
            "radial-gradient(circle, hsl(var(--wave-primary) / 0.2) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(var(--wave-secondary) / 0.2) 0%, transparent 70%)",
            "radial-gradient(circle, hsl(var(--wave-primary) / 0.2) 0%, transparent 70%)",
          ],
        }}
        style={{
          left: "50%",
          top: "50%",
        }}
        transition={{
          background: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.2 }}
      />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
    </div>
  );
};

export default AnimatedWaveBackground;
