import React, { useState } from "react";
import {Input, Button} from "antd"

const LoginPage = (props) =>{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    props.setLogInUser(username)
    props.setLogInPass(password)
    return(
        <>
            <div style={{width:"100%", height:"100vh", background:"url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=826&t=st=1713878748~exp=1713879348~hmac=4318d406b5bd9226c73782fd2c36e6113beb96edb41b610345e03dd5cce532f4)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"  ,display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                <div style={{width:"30%", height:"70%", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center", backgroundBlendMode:"lighten",marginLeft:"15%",marginTop:"0px"}}>
                    <div style={{margin:"10px",  fontSize:"20px", fontWeight:"bolder"}}>Login-Page</div>
                    <Input type="text" placeholder='Enter Your UserName' onChange={(e)=>setUserName(e.target.value)} style={{width:"80%", height:"50px", margin:"15px",  fontSize:"15px", border:"2px solid grey"}}/>
                    <Input.Password placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}  style={{width:"80%", height:"50px", margin:"15px",  fontSize:"15px", border:"2px solid grey"}}/>
                    <div style={{width:"80%", height:"15%", display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <Button style={{width:"200px", height:"40px", margin:"10px", cursor:"pointer", backgroundColor:"#7FFF00", border:"none", fontSize:"20px"}} onClick={()=> props.setToggle(true)} >Register</Button>
                        <Button style={{width:"200px", height:"40px", margin:"10px", cursor:"pointer", backgroundColor:"#7FFF00", border:"none", fontSize:"20px"}} onClick={()=>{props.validate()}}>Login</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;