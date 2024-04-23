import React,{useState} from "react";
import HomePage from "./home";
import LoginPage from "./login.jsx"
import SignUpPage from "./signup.jsx"
import CartView from "./cart";

const TotalControl = () =>{
  
  const [toggle, setToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(false);
  const [cartToggle, setCartToogle] = useState(false);
  
  const [logInUser, setLogInUser] = useState('')
  const [logInPass, setLogInPass] = useState('')
  const [signUpUser, setSignUpUser] = useState('empty')
  const [signUpPass, setSignUpPass] = useState('empty')
  const [cartItem,setCartItem] = useState([]);
  const validate = () =>{
      if(logInUser===signUpUser && logInPass===signUpPass){
           <HomePage/>
          setLoginToggle(true)
      }
      else{
           <LoginPage/>
          alert('Enter valid username and password')
      }
  }
  return(
    <>{toggle===false && loginToggle===false && <LoginPage 
      setToggle={setToggle} 
      setLoginToggle={setLoginToggle}
      setLogInUser={setLogInUser}
      setLogInPass={setLogInPass}
      validate={validate}/>
      }
      {toggle===true && <SignUpPage 
          setToggle={setToggle}
          setSignUpUser={setSignUpUser}
          setSignUpPass={setSignUpPass}/>
      }
      { loginToggle===true && cartToggle===false && <HomePage
          setCartToogle = {setCartToogle}
          cartItem = {cartItem}
          setCartItem = {setCartItem}/>
      }
      {cartToggle === true && <CartView
      setCartToogle={setCartToogle}
      cartItem = {cartItem}/>
      }
    </>
  )
}
export default TotalControl;