import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom";

function OurMenu() {

  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();

    console.log(response.recipes)
    setProduct(response.recipes);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product? (
        <div className="mt-16 px-30 flex flex-wrap gap-6 items-center justify-center p-5">
          {product.map((item) => {
            return( 
            <NavLink  key={item.id} to={`/productDescription/${item.id}`}>

            
            <div className= "  flex flex-col justify-between items-center p-2 shadow-2xl shadow-gray-700 rounded-3xl h-[240px] w-[250px]" >

              <img className=" rounded-3xl h-40" src={item.image} alt=""/>
              <h1>{item.name}</h1>
              <h1>Rs.{item.caloriesPerServing}</h1>
              </div>
              </NavLink>
            )

          })}
          </div>
      ) : (
        <div>Loading....</div>
      )

      }
      
    </div>
  )

}

export default OurMenu
