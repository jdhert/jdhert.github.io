"use client"

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-60" />
      
      {/* Floating blobs */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl animate-blob" />
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-accent/15 to-primary/10 blur-3xl animate-blob-delayed" />
      <div className="absolute -bottom-40 left-1/3 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-primary/15 to-chart-3/10 blur-3xl animate-blob-slow" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.2 0.02 280) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.2 0.02 280) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  )
}
