import React from "react";

const CartView = (prop) =>{

    return(
        <>
        <div style={{width:"100%", backgroundColor:"white"}}>
            <div style={{width:"100%", height:"12vh", backgroundColor:"#4B0082", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1 style={{textAlign:"center", color:"white"}}>Cart Items</h1>
            </div>       
            <div style={{width:"100%", display:"flex", flexWrap:"wrap"}}>
                {prop.cartItem.map((data) =>{
                    return(
                        <>
                            <div style={{ display:"flex", flexDirection:"column", margin:"20px", border:"2px solid black", width:"25%", justifyContent:"center",alignItems:"center",padding:"10px",backgroundColor:"thistle",boxSizing:"border-box",color:"black",}}> 
                                <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"4px 0"}}><span style={{fontWeight:"bold", marginLeft:"10%"}}></span><span style={{marginRight:"35%"}}>{data.image}</span></div>
                                <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"4px 0"}}><span style={{fontWeight:"bold", marginLeft:"10%"}}>Title:</span> <span style={{marginRight:"40%"}}>{data.title}</span></div>
                                <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"4px 0"}}><span style={{fontWeight:"bold", marginLeft:"10%"}}>Details:</span> <span style={{marginRight:"26%"}}>{data.description}</span></div>
                                <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"4px 0"}}><span style={{fontWeight:"bold", marginLeft:"10%"}}>Price:</span> <span style={{marginRight:"45%"}}>{data.price}</span></div>
                            </div>
                        </>
                    )
                })}
            </div>
                <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5%"}}>
                    <button style={{ display:"flex",alignItems:"center", justifyContent:"center",width:"15%", height:"5%", marginRight:"2%", backgroundColor:"goldenrod", border:"none", cursor:"pointer", color:"white",position: "fixed", left: "50px", bottom: "20px",fontWeight:"bolder" ,padding:"2% 5%",textAlign:"center"}} onClick={() =>prop.setCartToogle(false)}>Add More</button>
                </div>
            </div>
        </>
    )
}
export default CartView;