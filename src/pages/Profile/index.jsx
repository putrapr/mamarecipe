const Profile = () => {
  return (
    <>
      {/* Photo Profile Start */}
      <section className="flex flex-col justify-center items-center mt-40">
        <div className="w-36 relative flex justify-center">
          <img src="img/profile/dp.jpg" alt="dp" className="w-32 rounded-full"/>
          <button className="absolute bottom-0 right-0">
            <img src="img/profile/icon-pencil.svg" alt="icon-pencil" className="w-5"/>
          </button>
        </div>
        <p className="mt-8 font-bold text-xl px-10 border-b-2">Putra Prasetya</p>
      </section>
      {/* Photo Profile End */}

      <div className="mb-40"></div>
      {/* Trigger Tab Start */}
      <section>
        <div className="w-full flex max-[370px]:justify-center border-b max-[370px]:ps-0 max-lg:ps-12 ps-28 pb-6 max-[530px]:gap-5 gap-20 max-[530px]:text-sm max-lg:text-base text-lg tracking-wide font-bold">
          <button className="">My Recipe</button>
          <button className=" text-[#666666]">Saved Recipe</button>
          <button className=" text-[#666666]">Liked Recipe</button>
        </div>
      </section>
      {/* Trigger Tab End */}

      <div className="grid max-[639px]:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 my-10 max-lg:mx-12 mx-28 gap-6">
        <div className="relative">
          <img src="img/profile/1.svg" alt="img-1" className="w-full h-full object-cover rounded-md"/>
          <div className="w-full absolute left-0 max-lg:bottom-2 bottom-5 bg-[rgba(0,0,0,.3)]">
            <p className="text-white max-lg:text-lg text-xl px-5">Bomb Chicken</p>
          </div>        
        </div>

        <div className="relative">
          <img src="img/profile/2.svg" alt="img-2" className="w-full h-full object-cover rounded-md"/>
          <div className="w-full absolute left-0 max-lg:bottom-2 bottom-5 bg-[rgba(0,0,0,.3)]">
            <p className="text-white max-lg:text-lg text-xl px-5">Bananas Pancake</p>
          </div>        
        </div>

        <div className="relative">
          <img src="img/profile/3.svg" alt="img-2" className="w-full h-full object-cover rounded-md"/>
          <div className="w-full absolute left-0 max-lg:bottom-2 bottom-5 bg-[rgba(0,0,0,.3)]">
            <p className="text-white max-lg:text-lg text-xl px-5">Sugar Salmon</p>
          </div>        
        </div>
        
        <div className="relative">
          <img src="img/profile/4.svg" alt="img-2" className="w-full h-full object-cover rounded-md"/>
          <div className="w-full absolute left-0 max-lg:bottom-2 bottom-5 bg-[rgba(0,0,0,.3)]">
            <p className="text-white max-lg:text-lg text-xl px-5">Indian Salad</p>
          </div>        
        </div>  
      </div>
    </>
  )
}

export default Profile