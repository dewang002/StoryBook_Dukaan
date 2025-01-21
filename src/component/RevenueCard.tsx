
function RevenueCard({title,money,orders,time}:any) {
  return (
    <>
    <div className="bg-blue-600 ml-64 col-span-3 w-full transition-ease duration-300 flex flex-col hover:bg-blue-800 rounded-xl overflow-hidden">
        <div className="p-3  text-white">
            <h3 className="text-lg" >{title} <span>?</span></h3>
        </div>
        <div className=" flex justify-between items-center px-3 text-white">
            <h1 className="text-[2.5vw] font-bold">{money}</h1>
            <h4><span className="text-lg leading-tight border-b-2">{orders} Orders</span> <span>▶</span></h4>
        </div>
        <div className="flex justify-between items-center p-3 text-lg  bg-blue-800 text-white">
            <h4>Next Payment Date:</h4>
            <h4>Today, {time}</h4>
        </div>
    </div>
    </>

  )
}

export default RevenueCard