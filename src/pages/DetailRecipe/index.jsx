import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from'react-redux'
import { SingleRecipe } from '../../redux/action/recipeAction'

const DetailRecipe = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { recipe, loading, error, errorMessage } = useSelector((state) => state.recipe)

  const getRecipe = () => {
    dispatch(SingleRecipe(id))
  }

  const getIdYoutube = (video_link) => {
    if (video_link) {
      const arrVideo = video_link.split("=")
      video_link = arrVideo[1]
      return video_link
    }
  }

  useEffect( () => {
    getRecipe()
  }, []);
  
  return (
    <>
      { loading ? <h1>Loading</h1> 
        : error ? <h1>{ errorMessage }</h1> : 
        <>
        
          {/* Title Start */}
          <section className="flex flex-col justify-start items-center mt-28 gap-14">
            <h1 className="max-lg:text-5xl text-[3.5rem] text-[#2E266F] font-bold text-center mx-5">{ recipe.title }</h1>
            <img src={ recipe.image } alt="food" className="max-[400px]:w-[80%] w-[56%] max-md:rounded rounded-md"/>
          </section>
          {/* Title End */}

          <div className="max-sm:mx-[10%] mx-[15%]">
            {/* Ingredient Start */}
            <section className="mt-20">
              <h2 className="max-lg:text-3xl text-4xl font-bold text-[#3F3A3A] tracking-wide mb-10">Ingredients</h2>
              {
                recipe?.ingredient?.split("\n").map((data, index) => (
                  <p className="max-lg:text-2xl text-3xl leading-10" key={index}>{data} &nbsp;</p>
                ))
              }
            </section>
            {/* Ingredient End */}
          
            {/* Video Start */}
            <section className="mt-20 mb-28">
              <h2 className="text-[#3F3A3A] max-lg:text-3xl text-4xl font-bold tracking-wide">Video</h2>
              <div className="max-lg:w-full w-[75%] mt-12 ">
                <iframe className="w-full aspect-video" 
                  src={ "https://www.youtube.com/embed/"+ getIdYoutube(recipe.video_link) }
                ></iframe>
              </div>
            </section>            
            {/* Video End */}
          
            {/* Comment Start */}
            {/* <section className="mt-28 flex flex-col max-sm:mx-0 mx-5 mb-44">
              <textarea rows="9" cols="50" className="border bg-[#F6F5F4] rounded-lg p-7 font-bold text-[#666666] text-lg" placeholder="Comment :"></textarea>
              <button className="w-80 h-12 rounded bg-primary self-center mt-7 text-xs text-white">Send</button>
              <h2 className="text-[#3F3A3A] max-lg:text-3xl text-4xl font-bold tracking-wide mt-12 mb-10">Comment</h2>
              <div className="flex max-sm:gap-3 gap-7">
                <img src="../img/detail-recipe/dp.jpg" alt="dp" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p className="font-bold text-lg">Putra Prasetya</p>
                  <p className="text-lg">Nice Recipe. Simple And Delicious, Thankyou</p>
                </div>
              </div>  
            </section>     */}
            {/* Comment End */}
          </div>
        </>
      }
    </>
  )
}

export default DetailRecipe