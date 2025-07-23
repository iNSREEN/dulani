const PageBorders = () => {
  return (
    <>
      {/* Left Border Pattern */}
      <div className="fixed left-0 top-20 bottom-16 w-20 z-30 pointer-events-none">
        <div className="absolute inset-0 opacity-25 transform rotate-90 origin-center"
             style={{ 
               backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", 
               backgroundSize: "120px auto", 
               backgroundRepeat: "repeat",
               backgroundPosition: "center"
             }}>
        </div>
        {/* Gradient overlay to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background/70"></div>
        
        {/* Floating logo accents */}
        <div className="absolute top-1/4 left-3 w-10 h-10 opacity-30">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-1000" />
        </div>
        <div className="absolute top-1/2 left-3 w-8 h-8 opacity-20">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-2000" />
        </div>
        <div className="absolute top-3/4 left-3 w-10 h-10 opacity-30">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Right Border Pattern */}
      <div className="fixed right-0 top-20 bottom-16 w-20 z-30 pointer-events-none">
        <div className="absolute inset-0 opacity-25 transform rotate-90 origin-center"
             style={{ 
               backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", 
               backgroundSize: "120px auto", 
               backgroundRepeat: "repeat",
               backgroundPosition: "center"
             }}>
        </div>
        {/* Gradient overlay to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background/70"></div>
        
        {/* Floating logo accents */}
        <div className="absolute top-1/3 right-3 w-8 h-8 opacity-20">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-1500" />
        </div>
        <div className="absolute top-2/3 right-3 w-10 h-10 opacity-30">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-700" />
        </div>
        <div className="absolute bottom-1/4 right-3 w-8 h-8 opacity-20">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-300" />
        </div>
      </div>
    </>
  );
};

export default PageBorders;