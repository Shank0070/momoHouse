import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";

function ProductDescription() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const {dispatch} = useContext(CartContext);
  const getProduct = async () => {
    let response = await fetch(`https://dummyjson.com/recipes/${id}`);
    response = await response.json();
    console.log("instructions", response.instructions);
    setIngredients(response.ingredients);
    setInstructions(response.instructions);

    setProduct(response);
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div>
      {product ? (
        <div>
          <div className="flex p-12 shadow-xl shadow-state-600 my-5">
            <div className=" ml-20">
              <img className="h-80" src={product.image} alt="" />
            </div>
            <div className="ml-10 p-5 space-y-7">
              <h1>{product.name}</h1>
              <p>Rs.{product.caloriesPerServing}</p>
              <p>{product.rating}</p>
              <div className="space-x-5">
                <button
                onClick={()=>{
                  navigate("/payment",{
                    state:{
                      totalAmount: product.caloriesPerServing,
                      totalCartItem:1,
                    }
                  })
                }}
                
                className="bg-sky-500 w-52 p-3">Buy Now</button>
                <button
                onClick={()=>{
                  dispatch({type:"AddToCart",payload:product});
                }} className="bg-orange-500 w-52 p-3">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl mb-20 rounded-2xl shadow-black p-5">
            <div className="flex justify-around w-[600px] ml-10 my-3">
              <div>
                <h1>
                  Difficulty:{""}
                  <span className="text-red-600">{product.difficulty}</span>
                </h1>
                <h1>
                  Cuisine :{""}
                  <span className="text-red-600">{product.cuisine}</span>
                </h1>
                <h1>
                  Review Count :{""}
                  <span className="text-red-600">{product.reviewCount}</span>
                </h1>
              </div>
              <div>
                <h1>
                  Servings:{""}
                  <span className="text-red-600">{product.servings}</span>
                </h1>
                <h1>
                  Prep Time In Minutes :{""}
                  <span className="text-red-600">
                    {product.prepTimeMinutes}mins
                  </span>
                </h1>
                <h1>
                  Cook Time In Minutes:{""}
                  <span className="text-red-600">
                    {product.cookTimeMinutes}mins
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex justify-around">
              <div>
                <h1 className="text-3xl font-bold">Ingredients</h1>
                <div>
                  {ingredients.length > 0 && (
                    <div>
                      {ingredients.map((item, index) => {
                        return (
                          <div key={index}>
                            <li>{item}</li>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Instructions</h1>
                <div>
                  {instructions.length > 0 && (
                    <div>
                      {instructions.map((instructions, index) => {
                        return (
                          <div key={index}>
                            <li>{instructions}</li>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div> data not found </div>
      )}
    </div>
  );
}

export default ProductDescription;
