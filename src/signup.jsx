import React, { useState } from "react";
import {Input, Button} from "antd"

const SignUpPage = (props) =>{
    const [createdUserName, setCreateUserName] = useState('');
    const [createdPassword, setCreatePassword] = useState('');
    function success(){
        setCreateUserName('')
        setCreatePassword('')
        alert("Registration Successful");
    }
    return(
        <>
            <div style={{width:"100%", height:"100vh", background:"url(https://img.freepik.com/premium-photo/concept-online-shopping-shopping-cart-floating-laptop-3d-illustration-banner-e-commerce_522591-1459.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%", display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
            <div style={{width:"30%", height:"70%", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundBlendMode:"lighten",marginRight:"15%"}}>
            <div style={{width:"80%", height:"15%", display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    Username <Input value={createdUserName} placeholder='Create UserName' onChange={(e)=>setCreateUserName(e.target.value)} style={{width:"70%", height:"40px", margin:"12px",  fontSize:"15px", border:"2px solid grey"}}/>
            </div>
            <div style={{width:"80%", height:"15%", display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    Password <Input.Password placeholder='Create Password' value={createdPassword} onChange={(e)=>setCreatePassword(e.target.value)}  style={{width:"70%", height:"40px", margin:"12px",  fontSize:"15px", border:"2px solid grey"}}/>
            </div>
                <div style={{width:"100%", height:"15%", display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <Button onClick={()=>{props.setSignUpUser(createdUserName); props.setSignUpPass(createdPassword); success()}} style={{width:"80px", height:"40px", margin:"15px", cursor:"pointer", backgroundColor:"#DB7093", fontSize:"15px", fontWeight:"bolder", color:"black"}} >Signup</Button>
                    <Button style={{width:"120px", height:"40px", margin:"15px", cursor:"pointer", backgroundColor:"#DB7093",  fontSize:"15px", fontWeight:"bolder", color:"black"}} onClick={()=> props.setToggle(false)}>Go to Login</Button>
                </div>
                </div>
            </div>
        </> 
    )
}
export default SignUpPage;