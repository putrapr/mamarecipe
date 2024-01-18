import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Recipes, NewRecipe, RecipeSearch } from '../../redux/action/recipeAction'
import { useEffect, useState } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  const { recipes, currentPage, totalPage, keyword, loading, error, newRecipe, popularRecipe } = useSelector((state) => state.recipe)
  const [sortBy, setSortBy] = useState('')

  const getRecipes = async () => {
    try {
      if (keyword == '')
        await dispatch(Recipes(sortBy, currentPage, 3))      
    } catch (err) { /* empty */ }
  }

  const getNewRecipe = async () => {
    try {
      await dispatch(NewRecipe())
    } catch (err) { /* empty */ }
  }

  const handleSortBy = (e) => {    
    setSortBy(e.target.value)
  }

  const handleNext = () => {
    dispatch({
      type: 'RECIPE_EDITPAGE',
      payload: currentPage + 1
    })
  }

  const handlePrev = () => {
    dispatch({
      type: 'RECIPE_EDITPAGE',
      payload: currentPage - 1
    })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    await dispatch(RecipeSearch(e.target.search.value))
    window.location.href = "#list-recipe";
  }
  useEffect(() => {
    getRecipes()
    getNewRecipe()
  },[sortBy, currentPage, keyword])

  return (
    <>
    { loading ? <h1>Loading</h1> 
      : error ? <h1>Error</h1> : 
      <>
      {/* {recipes[0] ? console.log(recipes[0].image): console.log('recipe loading')} */}
        {/* Search Start */}
        <section className="max-[500px]:h-[30rem] h-[26rem] md:h-[30rem] lg:h-[40rem] xl:h-[52rem] relative">
          <div className="flex w-full h-full">
            <div className="w-[73%] h-full flex flex-col sm:justify-center">
              <div className="sm:hidden relative mt-20 ms-14">
                <input type="text" className="bg-[#EFEFEF] rounded-md w-full p-3 focus:outline-primary indent-7 text-sm" placeholder="Search Restaurant, Food"/>
                <button className="absolute top-3.5 left-4 w-3.5 active:w-5 active:top-3 active:left-3"> 
                  <img src="img/landing-page/icon-search.svg" alt="icon-search"/>
                </button>
              </div>
              <h2 className="text-[#2E266F] text-2xl sm:text-3xl lg:text-[3.2rem]/[4rem] font-bold ms-10 md:ms-16 xl:ms-24 max-sm:ms-14 max-[500px]:mt-3 max-sm:mt-8 xl:-mt-16">
                Discover Recipe <br/> & Delicious Food    
              </h2>
              <form onSubmit={handleSearch} action="#list-recipe" className="relative max-sm:hidden w-48 sm:w-72 lg:w-1/2 rounded-md ms-10 md:ms-16 xl:ms-24 mt-5">
                <input type="text" name="search" placeholder="Search Restaurant, Food" className="bg-[#EFEFEF] rounded-md xl:rounded-lg w-full p-3 xl:p-5 focus:outline-primary indent-7 text-sm"/>
                <button type='submit' htmlFor="search" className="absolute top-3.5 left-4 w-3.5 xl:w-4 xl:left-6 xl:top-5 active:w-5 active:top-3 active:left-3"> 
                  <img src="img/landing-page/icon-search.svg" id="search" alt="icon-search"/>
                </button>      
              </form>
            </div>
            <div className="bg-primary w-[27%] h-full"></div>
          </div>
          <img className="absolute w-48 sm:w-56 md:w-64 lg:w-96 xl:w-[36.5%] right-12 sm:right-16 md:right-28 xl:right-24 max-[500px]:top-52 top-40 sm:top-24 md:top-32 xl:top-36"
            src="img/landing-page/1.svg"  
            alt="img-landing"/>
        </section>
        {/* Search End */}

        {/* Popular For You ! Start */}
        <section className={keyword && 'hidden'}> 
          <div className="flex items-center gap-2 lg:gap-4 xl:gap-6 mb-9 lg:mb-12 xl:mb-20 px-10 md:px-16 xl:px-28">
            <div className="h-10 md:h-12 lg:h-16 xl:h-28 w-2 xl:w-5 bg-primary"></div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Popular For You !</h3>
          </div>

          <div className="w-full md:flex px-10 md:px-16 xl:px-20">
            <img src={popularRecipe?.image}  alt="img-popular" className="w-72 md:w-1/2 outline-corner xl:outline-corner-lg mb-12 rounded-md"/>
            
            <div className="md:ps-16 lg:ps-32 xl:ps-40 md:flex md:flex-col md:justify-center">
              <h2 className="text-[#3F3A3A] text-xl md:text-2xl lg:text-3xl xl:text-[2.7rem]/[3.5rem] font-bold">{popularRecipe?.title}</h2>
              <div className="w-10 xl:w-20 h-2 border-b border-[#6F6A40]"></div>
              {/* <p className="text-[#3F3A3A] mt-3 mb-8 text-sm xl:text-xl">Quick + Easy Chicken Bone Broth Ramen Healthy chicken ramen in a hurry? That&apos;s right!</p> */}
              <Link to={`/recipe/${popularRecipe?.id}`} className="mt-10 bg-primary text-xs px-[1.35rem] py-3 xl:px-[2.65rem] xl:py-4 rounded xl:rounded-md text-white tracking-wider xl:tracking-widest active:ring md:w-28 xl:w-40">Learn More</Link>
            </div>
          </div>
        </section>
        {/* Popular For You ! End */}

        {/* New Recipe Start */}
        <section className={keyword && 'hidden'}>
          <div className="flex items-center gap-2 lg:gap-4 xl:gap-5 px-10 md:px-16 xl:px-28 mt-16 xl:my-20 md:mt-12 mb-9 lg:mb-12">
            <div className="h-10 md:h-12 lg:h-16 xl:h-28 w-2 xl:w-5 bg-primary"></div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">New Recipe</h3>
          </div>

          <div className="relative w-full md:flex px-10 md:px-16 xl:px-20 mb-16 md:mb-24 xl:mb-44">
            <div className="w-2/5 h-80 md:h-full bg-primary absolute left-0 top-0"></div>
            
            <img src={newRecipe?.image} alt="img-new" className="h-80 w-80 md:w-1/2 md:h-auto object-cover relative top-7 xl:top-16 rounded-md"/>
            <div className="mt-14 md:ps-16 lg:ps-32 xl:ps-40 md:flex md:flex-col md:justify-center">
              <h2 className="text-[#3F3A3A] text-xl md:text-2xl lg:text-3xl xl:text-[2.7rem]/[3.5rem] font-bold">{newRecipe?.title}</h2>
              <div className="w-10 xl:w-20 h-2 border-b border-[#6F6A40]"></div>
              {/* <p className="text-[#3F3A3A] mt-3 mb-8 text-sm xl:text-xl">Quick + Easy Chicken Bone Broth Ramen Healthy chicken ramen in a hurry? That&apos;s right!</p> */}
              <Link to={`/recipe/${newRecipe?.id}`} className="mt-10 bg-primary text-xs px-[1.35rem] py-3 xl:px-[2.65rem] xl:py-4 rounded xl:rounded-md text-white tracking-wider xl:tracking-widest active:ring md:w-28 xl:w-40">Learn more</Link>
            </div>
          </div>    
        </section>  
        {/* New Recipe End */}

        {/* Popular Recipe Start */}
        <section className="px-10 md:px-16 xl:px-28 mb-20" id="list-recipe">          
          <div className="flex items-center gap-2 lg:gap-4 xl:gap-5 mb-9 lg:mb-12 xl:mb-20">
            <div className="h-10 md:h-12 lg:h-16 xl:h-28 w-2 xl:w-5 bg-primary"></div>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">{keyword? 'Result':'Popular Recipe'}</h3>
          </div>

          <div className={`relative mb-10 flex justify-end ` + (keyword && 'hidden')}>  
            <select onChange={handleSortBy} className="w-32 font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
              <option value="" selected disabled hidden>Sort by</option>
              <option value="">New Recipe</option>
              <option value="ASC">A - Z</option>
              <option value="DESC">Z - A</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-14">
            { recipes?.map((item) => (
              <Link to={`/recipe/${item?.id}`} className="relative max-md:h-56 md:h-64 xl:h-72" key={item?.id}>
                <img src={ item?.image } alt="thumbnail-recipe" className='rounded-md object-cover w-full h-full'/>
                <div className="w-full absolute left-0 bottom-5 bg-[rgba(255,255,255,.3)]">
                  <p className="text-[#3F3A3A] font-bold text-xl xl:text-2xl px-5">{ item?.title }</p>
                </div>        
              </Link>
            ))}
          </div>
                  
          <div className={`flex justify-between mt-8 `+ (keyword && 'hidden')}>
            <div className={currentPage == 1 ? 'flex': 'hidden'}></div>
            <button onClick={handlePrev} className={currentPage == 1 ? 'hidden': 'flex' + ` items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900`}>
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Prev
            </button>
            <button onClick={handleNext} className={ currentPage == totalPage ? 'hidden': 'flex' +` items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900`}>
                Next
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
        </section>
        {/* Popular Recipe End */}
      </>
      }
    </>
  )
}

export default Home