import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Success() {
  const [search] = useSearchParams();
  const data=search.get("data")
  const decoded = atob(data);
  const info=JSON.parse(decoded)
  console.log(info);
  return (
    <div>
      <div className="shadow-2xl shadow-gray-700 m-auto flex justify-center mt-10 items-center flex-col w-96 p-5">
        <img className="h-44" src="https://icpih.com/media-intestinal-health-ihsig/PAYMENT-SUCCESS.png" alt="" />
        <h1>Status:{info.status}</h1>
        <h1>Total Amount: Rs.{info.total_amount}</h1>
      </div>
    </div>
  )
}

export default Success
