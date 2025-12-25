 

 function Card(props){
    return(
        <>
        
        <div className=" bg-blue-500 flex flex-col items-center h-100 w-70 raduse mt-10">
           <img className="bg-red-400 h-20 w-20 mt-4"src="" alt="" />
           <h1 className="text-3xl">{props.fname}</h1>
           <h2 className="text-2xl">{props.lname}</h2>
           <h3>{props.job}</h3>
           <p className="text-red-900">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Incidunt, nemo, 
            illum corporis laudantium, laboriosam recusandae
             quidem maxime numquam doloribus ullam amet dolor
             um quisquam aperiam cum commodi quasi ipsam 
             rerum. Soluta.</p>
           <button className="bg-amber-300 cursor-pointer">more</button>
        </div>
        </>
    )
 }
 export default Card;