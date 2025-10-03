export const GlowingCircles = () => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center opacity-5">
      <div className="relative">
        {/* Outermost Circle - White (lowest z-index, appears in back) */}
        <div className="absolute w-[312px] h-[312px] rounded-full  bg-white z-10 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
        
        {/* Third Circle - Black */}
        <div className="absolute w-[248px] h-[248px] rounded-full  bg-black/95 z-20 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
        
        {/* Second Circle - White */}
        <div className="absolute w-48 h-48 rounded-full bg-white  z-30 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
        
        {/* Inner Circle - Black (highest z-index, appears on top) */}
        <div className="absolute w-32 h-32 rounded-full bg-black  z-40 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
      </div>
    </div>
  );
};
