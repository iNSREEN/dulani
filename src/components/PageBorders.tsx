const PageBorders = () => {
  return (
    <>
      {/* Left Border Pattern */}
      <div className="fixed left-0 top-0 bottom-0 w-16 z-40 pointer-events-none">
        <div className="absolute inset-0 opacity-15"
             style={{ 
               backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", 
               backgroundSize: "64px auto", 
               backgroundRepeat: "repeat-y",
               backgroundPosition: "center"
             }}>
        </div>
        {/* Gradient overlay to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/60"></div>
        
        {/* Floating logo accents */}
        <div className="absolute top-20 left-2 w-8 h-8 opacity-20">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-1000" />
        </div>
        <div className="absolute top-1/2 left-2 w-6 h-6 opacity-15">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-2000" />
        </div>
        <div className="absolute bottom-32 left-2 w-8 h-8 opacity-20">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Right Border Pattern */}
      <div className="fixed right-0 top-0 bottom-0 w-16 z-40 pointer-events-none">
        <div className="absolute inset-0 opacity-15"
             style={{ 
               backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", 
               backgroundSize: "64px auto", 
               backgroundRepeat: "repeat-y",
               backgroundPosition: "center"
             }}>
        </div>
        {/* Gradient overlay to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background/60"></div>
        
        {/* Floating logo accents */}
        <div className="absolute top-32 right-2 w-6 h-6 opacity-15">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-1500" />
        </div>
        <div className="absolute top-2/3 right-2 w-8 h-8 opacity-20">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-700" />
        </div>
        <div className="absolute bottom-20 right-2 w-6 h-6 opacity-15">
          <img src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" alt="" className="w-full h-full animate-pulse delay-300" />
        </div>
      </div>
    </>
  );
};

export default PageBorders;