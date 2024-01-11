import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddRecipe = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL
  const [showImage, setShowImage] = useState("");


  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(document.querySelector("form"))
    axios.post(`${BASE_URL}/recipe`, formData)
      .then(() => {
        alert("Recipe Added")
        navigate('/profile')
      })
      .catch((err) => {
        console.log(err.message)
        navigate('/recipe-add')
      })
  }

  function handleChangeImage(e) {
    const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setShowImage(reader.result);
		};
		reader.readAsDataURL(file);
  }

  return (
    <>
      {/* Form Add Recipe Start */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center max-[767px]:mx-[5%] mx-[16%] gap-10 mt-40 mb-20">
        <input type="text" name="user_id" value="1" hidden/>
        <label htmlFor="add-photo" className="bg-[#F6F5F4] w-full h-96 rounded-lg flex flex-col justify-center items-center gap-4 text-lg font-bold text-[#666666] cursor-pointer">
          <img src="img/add-recipe/icon-addimage.svg" alt="icon-image" className="w-12"/>
          <p>Add Photo</p>
        </label>
        <input type="file" id="add-photo" name="image" onChange={handleChangeImage} hidden/>
        {showImage && (
          <img src={showImage ?? ""} alt="show" className='w-52 sm:w-96 sm:h-96 rounded object-cover' />
        )}


        <input className="bg-[#F6F5F4] w-full h-20 rounded-lg indent-10 text-lg placeholder:text-[#666666] placeholder:font-bold placeholder:tracking-wider" 
          placeholder="Title"
          type="text"
          name="title"
        />        
        <textarea cols="30" rows="10" className="bg-[#F6F5F4] w-full rounded-lg px-8 py-6 text-lg placeholder:text-[#666666] placeholder:font-bold placeholder:tracking-wider" 
          placeholder="Ingredients"
          name="ingredient"
        ></textarea>
        <input className="bg-[#F6F5F4] w-full h-20 rounded-lg indent-10 text-lg placeholder:text-[#666666] placeholder:font-bold placeholder:tracking-wider" 
          placeholder="Youtube Video Link"
          type="text"
          name="video_link"
        />
        <button className="bg-primary w-80 h-12 rounded text-xs text-white mt-10"
          type="submit"
        >Post</button>
      </form>
      {/* Form Add Recipe End */}
    </>
  )
}

export default AddRecipe