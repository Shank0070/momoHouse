import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";


function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(state.cartItems);
  const totalAmount=state.cartItems.reduce((acc,item)=>{
    return acc+item.caloriesPerServing*item.qty
  },0)
  const totalCartItem=state.cartItems.reduce((acc,item)=>{
    return acc+item.qty
  },0)
  

  return (
    <div>
      <div>
        {state.cartItems?.length > 0 ? (
          <div className="flex justify-around">
            <div>
              {state.cartItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-2 shadow-xl inset-shadow-gray-800 rounded-2xl mt-10 w-[800px]"
                  >
                    <img className="h-32" src={item.image} alt="" />
                    <h1 className="w-72 h-16"> {item.name}</h1>
                    <div className="h-14">
                      <h1 className="">Rs.{item.caloriesPerServing}</h1>
                      <button
                      onClick={()=>{
                        dispatch({
                          type:"Delete",
                          payload:{id: item.id},
                        });
                      }}
                      ><MdDelete  size={32} color="red"/></button>
                    </div>
                    <div className="h-10 gap-2 w-20 flex items-center">
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Increment",
                            payload: { id: item.id },
                          });
                        }}
                        className="bg-gray-500 h-5 w-5 text-center flex justify-center items-center rounded"
                      >
                        +
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Decrement",
                            payload: { id: item.id },
                          });
                        }}
                        className="bg-gray-500 h-5 w-5 text-center flex justify-center items-center rounded"
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-2 p-2 border-red-600 h-80 w-80">
              <h1>Order Summary</h1>
              <h1>Price Rs.{totalAmount}</h1>
              <button
              onClick={()=>{
                navigate("/payment",{
                  state: { totalAmount: totalAmount, totalCartItem},
                })
              }}
               className="bg-orange-600 p-3 text-white rounded-xl"><NavLink to="/payment">PROCEED TO CHECKOUT({totalCartItem})</NavLink></button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center items-center flex-col">
            <img className="w-[500px]" src="https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small/empty-cart-flat-illustration-concept-vector.jpg" alt="" />
            <h1>Cart Is Empty{""}
            <NavLink className="underline text-red-600 font-bold text-xl" to="/ourMenu">Shop Now</NavLink>{""}
            </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
