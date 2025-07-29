import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { qtyIncr, qtyDecr, proRemove } from "./cartslice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify';



const MyCart = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  
  const dispatch = useDispatch();

 let TotAmount = 0;
let SNo = 0;

const ans = cartData.map((key) => {
  SNo++;
  TotAmount += key.qnty * parseInt(key.price.match(/\d+/)[0]);

 return (
      <>
        <tr>
          <td style={{textAlign:"center"}}>{SNo}</td>
          <td style={{textAlign:"center"}}>
            
            <img src={key.image} width="100" height="100" />
          </td>
          <td > {key.name} </td>
          <td > {key.description} </td>
         <td style={{ fontSize: "20px", textAlign: "center" }}>
  <FaMinusSquare
    onClick={() => dispatch(qtyDecr({ id: key.id }))}
    style={{
      cursor: "pointer",
      marginRight: "10px",
      color: "#dc3545", 
      fontSize: "24px"
    }}
  />
  <span style={{ margin: "0 10px", fontWeight: "bold", fontSize: "22px" }}>
    {key.qnty}
  </span>
  <FaPlusSquare
    onClick={() => dispatch(qtyIncr({ id: key.id }))}
    style={{
      cursor: "pointer",
      marginLeft: "10px",
      color: "#28a745", 
      fontSize: "24px"
    }}
  />
</td>

        <td style={{textAlign:"center"}}> {key.price} </td>
<td style={{textAlign:"center"}}>
 Rs.{key.qnty * parseInt(key.price.match(/\d+/)[0])}
</td>

          <td style={{textAlign:"center"}}>
           <Button
  variant="danger"
  onClick={() => {
    dispatch(proRemove({ id: key.id }));
    toast.error(<strong>Item removed from cart</strong>);
  }}
>
  Remove
</Button>

          </td>
        </tr>
      </>
    );
  });
  return (
    <>
     <h1
  style={{
    textAlign: "center",
    margin: "40px 0",
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: "#333",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
  }}
>
  🛒 Welcome to My Cart 
</h1>

     <h2
  style={{
    textAlign: "center",
    color: "#2E8B57",
    fontSize: "2rem",
    margin: "30px 0",
    fontWeight: "600",
    fontFamily: "Segoe UI, sans-serif",
    textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.1)"
  }}
>
  <FaIndianRupeeSign style={{ marginRight: "8px", color: "#2E8B57" }} />
  {TotAmount}
</h2>

     <hr style={{ width: "60%", margin: "0 auto 30px", borderTop: "2px solid #ccc" }} />

     <br />
     <br />
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>S.No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th> Quantity</th>
            <th>Price</th>
            <th> Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};
export default MyCart;
