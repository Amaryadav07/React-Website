import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import  { MenUrl } from "../config/backendapi";
import { addToCart } from "./cartslice";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

const Men = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();


  const cartItems = useSelector((state) => state.mycart.cart);

  const loadData = async () => {
    try {
      let response = await axios.get(MenUrl);
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
      toast.error("Failed to load products!");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

 
  const ans = data.map((key) => {
    const handleAddToCart = () => {
      const alreadyInCart = cartItems.some((item) => item.id === key.id);

      if (alreadyInCart) {
        toast.info("This product is already in the cart!");
      } else {
        dispatch(
          addToCart({
            id: key.id,
            name: key.name,
            description: key.description,
            price: key.price,
            image: key.image,
            qnty: 1,
          })
        );
        toast.success("Item added to cart!");
      }
    };

    return (
      <Card key={key.id} className="product-card">
        <Card.Img variant="top" src={key.image} style={{ height: "270px" }} />
        <Card.Body style={{ height: "160px", color: "black" }}>
          <Card.Title style={{ fontSize: "15px", fontWeight: "700" }}>
            {key.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "13px", marginBottom: "10px" }}>
            {key.description}
          </Card.Text>
          <Card.Text style={{ fontSize: "13px", fontWeight: "500" }}>
            {key.price}
          </Card.Text>
          <Button className="cartbtn" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "'Brush Script MT', 'Pacifico', cursive",
          marginTop: "70px",
          marginBottom: "30px",
          color: "#b45f06",
          letterSpacing: "1px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        Men Category
      </h2>

      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            minHeight: "100vh",
          }}
        >
          {ans}
        </div>
      </div>
    </>
  );
};

export default Men;
