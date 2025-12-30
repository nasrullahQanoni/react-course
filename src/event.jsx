

function Event(props) {
    let handler = (e)=>{
        let message = e.target.textContent
        alert(message)
    }

 let change = (e)=>{
   let text = e.target.value
   console.log(text);
   
 }

 let check = (e)=>{
    let che = e.target.checked;
    console.log(che);
    
 }

  let check2 = (e)=>{
    let che2 = e.target.value;
    console.log(che2);
    
 }

    return(
        <>
         <button onClick={handler} className="bg-blue-300">{props.text}</button>
       <input onChange={change} className="" type="text" />
       <input onChange={check} type="checkbox" />
       <input onChange={check2} type="password" />

        </>
    )
}
export default Event;