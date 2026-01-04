

//this is a navbar
function Header() {
    return(
        <>
           <div className=" bg-amber-300 h-20 flex justify-between">
             <h1 className="font-bold m-6">my header</h1>
             <ul className="flex ">
                <li className="p-6 cursor-pointer">Item1</li>
                <li className="p-6 cursor-pointer">Item2</li>
                <li className="p-6 cursor-pointer ">Item3</li>
                <li className="p-6 cursor-pointer">Item4</li>
             </ul>
           </div>
        
        </>
    )
}
export default Header;
