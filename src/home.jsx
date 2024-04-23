import React, { useState } from "react";
import {Button, Rate, Modal, Drawer} from "antd";
import axios from "axios";

const HomePage=()=>{
    const [apiData,setApiData] = useState(null);
    const [popUp, setPopUp] = useState(false);
    const [viewData,setViewData] = useState(null);
    const [cartValue,setCartValue] = useState([]);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
    const onClose = () => {
        setOpen(false);
      };
      
  const removeItem = (data) => {
    setCartValue(cartValue.filter((cartItem) => cartItem.id !== data.id));
  };
  const addToCart = (data) => {
    const itemIndex = cartValue.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      // If the item already exists in the cart, increase its quantity
      const updatedCart = [...cartValue];
      updatedCart[itemIndex].quantity += 1;
      setCartValue(updatedCart);
    } else {
      // If it's a new item, add it to the cart with a quantity of 1
      setCartValue([...cartValue, { ...data, quantity: 1 }]);
    }
  };
  const reduceQuantity = (data) => {
    const itemIndex = cartValue.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      // If the item exists in the cart and the quantity is more than 1, reduce the quantity by 1
      if (cartValue[itemIndex].quantity > 1) {
        const updatedCart = [...cartValue];
        updatedCart[itemIndex].quantity -= 1;
        setCartValue(updatedCart);
      } else {
        // If the quantity is 1, remove the item from the cart
        setCartValue(cartValue.filter((item) => item.id !== data.id));
      }
    }
  };
  const addQuantity = (data) => {
    const itemIndex = cartValue.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      // If the item exists in the cart, increase its quantity by 1
      const updatedCart = [...cartValue];
      updatedCart[itemIndex].quantity += 1;
      setCartValue(updatedCart);
    }
  };
    async function getData(){
        const result = await axios.get('https://fakestoreapi.com/products');
        setApiData(result.data);
    }
    console.log({cartValue})
    return(
        <>
        <div style={{display:"flex",flexDirection:'column',height:"100%",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"#0E8FE4"}}>
            <Button onClick={getData()} style={{width:"95%",marginTop:"30px",textAlign:"center",fontSize:"15px",fontWeight:"bolder"}}> E-Com website </Button>          
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%",color:"black",justifyContent:"flex-start",alignItems:"center"}}>
            {apiData  && apiData.map((data)=>{
                return(
                    <>
                    <div style={{display:"flex",flexWrap:"wrap",width:"20%", height:"400px",marginLeft:"40px",marginTop:"40px",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",border:"none",boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",padding:"5px",backgroundColor:"lightgray"}}>
                        <img src={data.image} alt="Product"  onClick={()=>{setPopUp(true); setViewData(data)}} height={150} width={150} style={{cursor:"pointer"}}></img>
                        <div  style={{display:"flex",flexDirection:"column",alignItems:'left',justifyContent:"left",margin:"20px 10px",width:"100%"}}>
                        <div onClick={()=>{setPopUp(true); setViewData(data)}} style={{fontWeight:"bold",fontSize:"15px",marginLeft:"10px",cursor:"pointer"}}>{data.title}</div><br></br>
                        <div style={{fontSize:"13px",marginLeft:"10px",marginTop:"3px"}}>Ratings: <Rate disabled value={data.rating.rate} /> ({data.rating.count}) </div>
                        <div style={{fontSize:"13px",marginLeft:"10px",marginTop:"5px"}}>Price: ¥ {data.price} </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:"30px", marginTop:"20px"}}> 
                        <Button onClick={()=>{setCartValue([...cartValue, data]); addToCart(data)}}>Add to Cart</Button>
                        </div>
                        </div>
                    </div>
                    </>
                )
            })}
         </div>
        <div>                        
            <br></br>
        </div>
      <Button style={{ position: "fixed", right: "50px", bottom: "20px",fontWeight:"bolder" ,padding:"2% 5%",textAlign:"center",backgroundColor:"greenyellow", display: "flex", justifyContent: "center", alignItems: "center"  }}  onClick={showDrawer}> View Cart </Button>
        <div>                        
            <br></br>
        </div>
        <div>                        
            <br></br>
        </div>
        </div>
        <Drawer title="Cart Items" placement="right" onClose={onClose} open={open}>
        {cartValue.map((data) => (
          <div style={{ marginTop:"15px", padding:"10px",border:"1px solid grey",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <p style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"center"}}><img src={data.image} alt="Product" height={50} width={50} ></img></p>
            <p><b>{data.title}</b></p>
            <p>Quantity:<Button onClick={() => reduceQuantity(data)}  style={{ fontSize: "20px",fontWeight:"bold" ,padding: "4px 8px",border:"none" }}>-</Button> 
            <input type="text" value={data.quantity} style={{width:"20px",fontWeight:"bold",textAlign:"center"}}></input>
            <Button onClick={() => addQuantity(data)} style={{ fontSize: "20px", padding: "4px 8px",border:"none",fontWeight:"bold" }}>+</Button></p>
            <p>Price: ¥ {data.price}
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",padding:'0px 10px'}}>            
            <Button onClick={() => removeItem(data)} style={{backgroundColor:"red",color:"white"}}>Remove item</Button>
            </div></p>
          </div>
        ))}
        <div style={{display:"flex",flexDirection:'row',alignItems:"center",justifyContent:"center",margin:"10px"}} >
        <Button type="primary" block style={{margin:"5px"}}>Cancel</Button>
        <Button type="primary" block style={{margin:"5px"}}>Buy Now</Button>
        </div>
      </Drawer>
        <Modal title="Product Details" open={popUp} onCancel={()=>{setPopUp(false)}} onOk={()=>{setPopUp(false)}}>
            <><img src={viewData && viewData.image} alt="Product" height={50} width={50}></img></>
            <p><b>Details:</b> {viewData && viewData.description}</p>
            <p><b>Ratings:</b> {viewData && <Rate disabled value={viewData.rating.rate} /> }</p>
            <p><b>Price:</b> ¥ {viewData && viewData.price}</p>
        </Modal>

        </>
    )
}
export default HomePage