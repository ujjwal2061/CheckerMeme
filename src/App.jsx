import { useState } from 'react'
import './App.css'
import Twitter from './URL/Twitter';

function App() {
const [userName ,setuserName]=useState("");
const [joke ,setjoke]=useState("")

 const getname =(event )=>{
  setuserName(event.target.value)
   event.target.value="";// Clear the input after enter for new one 
 }
 // function that mutiple the string sum value with random math
  function totalnum(total){
    const valueofstring=Math.floor(Math.random()*total*15);
    console.log( "Total :",valueofstring)
  }
 
 // function that find totalIndex of Striing that have change from thhe string to array

 function findSumofArray(newarr){
  let totalIndex=0; 
 for (let i=0; i< newarr.length; i++)
   totalIndex +=i;
   return totalIndex ;
 }
  function submit(){
    if(userName==""){
      alert('Please enter user name ?')
    }else{
    // console.log("User name is :",userName)
    const url ="https://v2.jokeapi.dev/joke/Programming?type=single"
    fetch(url)
   .then((res)=>res.json())
   .then((data)=>{
    setjoke(data.joke)
   setuserName("");

  /// function change the username into array

  function changeArray(){
 const newarr=[...userName]; 
  // this (...) is use to breake the string in array format

  // now get total sum of thee string throght the indexvalue 

  // assigin the findSumof Array to  and pass the arugument to the function 

  const total=findSumofArray(newarr)
  console.log("Total number of string",total);
  console.log("User name in array:",newarr)
  totalnum(total);
  } 
    changeArray()// change the string to array 

 })}
}
 return(
  <>  
  <div>

    <label>  
      UserName:
    </label>
      <input type="text"
      value={userName}
      placeholder='@username'
      onChange={getname}>
      </input>
    
</div>
<button onClick={submit}>Submit </button>
<Twitter name={userName} joke={joke} />
</>
 )
}

export default App;