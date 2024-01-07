

const AddRecipe = () => {
  return (
    <>
      {/* Form Add Recipe Start */}
      <form action="../profile" className="flex flex-col items-center max-[767px]:mx-[5%] mx-[16%] gap-10 mt-40 mb-20">
        <label htmlFor="add-photo" className="bg-[#F6F5F4] w-full h-96 rounded-lg flex flex-col justify-center items-center gap-4 text-lg font-bold text-[#666666] cursor-pointer">
          <img src="img/add-recipe/icon-addimage.svg" alt="icon-image" className="w-12"/>
          <p>Add Photo</p>
        </label>
        <input type="file" id="add-photo" className="hidden"/>
        <input type="text" className="bg-[#F6F5F4] w-full h-20 rounded-lg indent-10 text-lg placeholder:text-[#666666] placeholder:font-bold placeholder:tracking-wider" placeholder="Title"/>
        <textarea cols="30" rows="10" className="bg-[#F6F5F4] w-full rounded-lg px-8 py-6 text-lg placeholder:text-[#666666] placeholder:font-bold placeholder:tracking-wider" placeholder="Ingredients"></textarea>
        <input type="text" className="bg-[#F6F5F4] w-full h-20 rounded-lg indent-10 text-lg placeholder:text-[#666666] placeholder:font-bold placeholder:tracking-wider" placeholder="Video Link"/>
        <button className="bg-primary w-80 h-12 rounded text-xs text-white mt-10">Post</button>
      </form>
      {/* Form Add Recipe End */}
    </>
  )
}

export default AddRecipe