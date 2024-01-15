import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { RecipesByUser } from '../../redux/action/recipeAction'

const Profile = () => {
  // const BASE_URL = import.meta.env.VITE_API_URL
  // const user_id = 1
  const { recipesUser, loading, error, errorMessage } = useSelector((state) => state.recipe)
  const dispatch = useDispatch()
  console.log('loading: '+loading)
  console.log('error: '+error)
  // const [recipes, setRecipes] = useState([])
  // const [recipe, setRecipe] = useState({})
  // const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)
  // const [errorMessage, setErrorMessage] = useState("")
  const [showModal, setShowModal] = useState(false)

  const getRecipes = async () => {
    // axios.get(`${BASE_URL}/recipeByUserId/${user_id}`)
    //   .then((res) => {
    //     setRecipes(res.data.data)
    //   })
    //   .catch((err) => {
    //     setIsError(true)
    //     setErrorMessage(err.message)
    //   })
    //   .finally(() => {
    //     setIsLoading(false)
    //   })
    await dispatch(RecipesByUser()) 
  };

  useEffect( () => {
    console.log('masuk use effect')
    // getRecipes();
    dispatch(RecipesByUser())
    // dispatch(RecipesByUser())    
    console.log(recipesUser)
  }, []);

  const handleDelete = (e) => {
    const result = confirm("Are you sure to delete?");
    if (!result) return

    const id = e.target.id;
    axios.delete(`${BASE_URL}/recipe/${id}`)
      .then(() => {
        alert("Berhasil dihapus")
        getRecipes()
      })
      .catch((err) => {
        // setIsError(true)
        // setErrorMessage(err.message)
      })
  };

  const updateClick = (e) => {
    e.preventDefault()    
    // for (let i=0; i< recipes.length; i++){
    //   if (recipes[i].id == e.target.id)
    //     setRecipe(recipes[i])
    // }
    setShowModal(true)
  }

  const handleUpdate = (e) => {
    e.preventDefault(); 
    const formData = new FormData(document.getElementById("updateForm"));
    // axios.put(`${BASE_URL}/recipe/${recipe.id}`, formData)
    //   .then(() => {
    //     setShowModal(false)
    //     alert("Recipe Updated")
    //     getRecipes()           
    //   })
    //   .catch((err) => {        
    //     // setIsError(true);
    //     // setErrorMessage(err.message)
    //     setShowModal(false)
    //     alert("Update Recipe Failed")
    //   });
  }

  return (
    <>
      { !loading ? <h1>Loading</h1> 
        : error ? <h1>Error</h1> : 
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
            {              
              recipesUser.map((item) => (
                <div className="relative" key={item.id}>
                  <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt="img-1" className="w-full h-full object-cover rounded-md"/>
                  </Link>                  
                  <div className="w-full absolute left-0 max-lg:bottom-2 bottom-5 bg-[rgba(0,0,0,.3)]">
                    <p className="text-white max-lg:text-lg text-xl px-5">{ item.title }</p>
                  </div>
                  <button type="button" onClick={(e) => updateClick(e)} id={item.id} className="absolute top-2 left-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
                  <button type="button" id={item.id} onClick={e => handleDelete(e)} className="absolute top-2 right-0 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                </div>
              ))
            }
          </div>

          {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[80%] my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Update Recipe
                    </h3>
                    <button
                      className="p-1 ml-auto bg-white border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-red-500"
                      >X</span>
                    </button>
                  </div>
                  <form onSubmit={handleUpdate} id="updateForm">
                    {/*body*/}                  
                    <div className="relative p-6 flex-auto">
                      <div className='grid grid-cols-[100px_auto] gap-2'>
                        <input type="hidden" name="user_id" value={recipe.user_id}/>

                        <label className='p-2'>Image</label>
                        <input type="file" name="image" className='p-2'/>

                        <label htmlFor="title" className='p-2'>Title</label>
                        <input type="text" name="title" defaultValue={recipe.title} id="title" className='w-full border p-2'/>

                        <label htmlFor="ingredient" className='p-2'>Ingredient</label>
                        <textarea cols="30" rows="10" className='border p-2'
                          placeholder="Ingredients"
                          name="ingredient"
                          id="ingredient"                        
                        >{recipe.ingredient}</textarea>

                        <label htmlFor="video_link" className='p-2'>Video Link</label>
                        <input type="text" name='video_link' defaultValue={recipe.video_link} id="video_link" className='border p-2'/>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >Close</button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >Update Recipe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
          ) : null} 
        </>
      }
    </>
  )
}

export default Profile