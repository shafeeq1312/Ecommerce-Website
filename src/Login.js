import React from 'react'
import  './Login.css';


const Login = () => {
  const signup=() =>{
  
  var userdata=[
    { username:"shafeeq",passcode: 1234,cart:[]},
    { username:"mohamed",passcode: 4321,cart:[]},
    { username:"sancse",passcode: 12345,cart:[]}

  ];
  
 
    var username=document.getElementById('username').value;
    var userpasscode=document.getElementById('passcode').value;
    var activeuserdetails=userdata.filter((data)=>
    {
      return username==data.username;
    });
console.log(activeuserdetails);
if(activeuserdetails.length>0)
{
  console.log(activeuserdetails)
  if(activeuserdetails[0].passcode==userpasscode)
  {
    localStorage.setItem('username',username);
    localStorage.setItem('passcode',userpasscode);
    window.location.replace("/Home")
  }
   

  
  else{
    console.log("wronong password");
   
     }
    }
  } ;
  return (
   
    <div className='first'>    
        <div className='second' >
          <h1>Login Page</h1>
          
            <input className='class1' id='username' placeholder='USERNAME'></input>
            <input className='class1' id='passcode' type='password' placeholder='PASSWORD'></input>
           
            <button className='btn' onClick={signup}>Login</button>
            <h5>Forgotten Password</h5>


        </div>
      

    </div>
  
  );
};

export default Login;