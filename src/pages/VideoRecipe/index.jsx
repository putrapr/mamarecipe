const VideoRecipe = () => {
  return (
    <>
      <div className="w-[4%] h-full bg-primary absolute left-0 top-0"></div>
      <div className="flex max-lg:flex-col max-sm:mx-[5%] max-md:mx-20 mx-40 gap-14 mt-28">
        {/* Main Video Start */}
        <section className="w-[74%] max-lg:w-full">
          <img src="img/video-recipe/main.svg" alt="main-video"/>
          <h3 className="mt-8 text-2xl font-bold">
            Beef Steak with Curry Sauce - [Step 4] <br/>
            Cut the condiment and then mix it
          </h3>
          <p className="text-[#AAAAAA]">3 month ago</p>
        </section>
        {/* Main Video End */}

        {/* Next Video Start */}
        <aside className="w-[26%] max-lg:w-full">
          <h5 className="font-bold text-xl ms-3 mb-5">Next</h5>
          <div className="mb-8">        
            <img src="img/video-recipe/1.svg" alt="video-1" className="w-60 max-lg:w-3/4"/>
            <p className="text-sm mt-3 mb-1 font-bold">
              Beef Steak with Curry Sauce - [Step 5] <br/>
              Saute condiments together until turn brown
            </p>
            <p className="text-xs text-[#AAAAAA]">HanaLohana - 3 month ago</p>
          </div>
          
          <div className="mb-8">        
            <img src="img/video-recipe/2.svg" alt="video-1" className="w-60 max-lg:w-3/4"/>
            <p className="text-sm mt-3 mb-1 font-bold">
              Beef Steak with Curry Sauce - [Step 6] <br/>
              Roast beef until it’s medium rare
            </p>
            <p className="text-xs text-[#AAAAAA]">HanaLohana - 3 month ago</p>
          </div>

          <div className="mb-8">        
            <img src="img/video-recipe/3.svg" alt="video-1" className="w-60 max-lg:w-3/4"/>
            <p className="text-sm mt-3 mb-1 font-bold">
              Beef Steak with Curry Sauce - [Step 7] <br/>
              Roast beef until it’s medium rare
            </p>
            <p className="text-xs text-[#AAAAAA]">HanaLohana - 3 month ago</p>
          </div>

        </aside>
        {/* Next Video End */}
      </div>
    </>
  )
}

export default VideoRecipe