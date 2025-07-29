import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/srk2.jpg";
import img2 from "../images/srk1.avif";
import img3 from "../images/kid.avif";
import img4 from "../images/imagegif.gif";
import img5 from "../images/women.jpg";
import img6 from "../images/kids.jpg";
import couple from "../images/couple.avif"
import b4 from "../images/banner.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import BackendUrl from "../config/backendapi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GiButterflyFlower } from "react-icons/gi";
import { addToCart } from "./cartslice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartPlus } from "react-icons/fa";
import logo from "../images/manyavar logo.webp";
import { useNavigate } from "react-router-dom";
import { GiVineFlower } from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);
  const dispatch = useDispatch();

  const customerReviews = [
    {
      name: "Aman Sharma",
      review: "Great quality and quick delivery. Will shop again!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Riya Mehta",
      review: "Stylish collection and amazing support. Loved it!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Kunal Joshi",
      review: "Affordable prices with good packaging.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Sneha Kapoor",
      review: "Customer care was super helpful.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      name: "Rahul Verma",
      review: "Very user-friendly website. Impressed!",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Anjali Rao",
      review: "Trendy and comfy clothes, highly recommend.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Dev Patel",
      review: "Easy checkout and fast shipping!",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Priya Singh",
      review: "Loved the packaging and attention to detail.",
      image: "https://randomuser.me/api/portraits/women/39.jpg",
    },
  ];


   const blogPosts = [
    {
      image: 'https://manyavar.scene7.com/is/image/manyavar/Blog_TileImage_ReceptionOutfits_D-M_14-09-2023-09-05?$WT_Blogs_Tiles_D%26M$', 
      title: 'The Art of Choosing Your Wedding Reception Outfit',
    },
    {
      image: 'https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_WeddingRituals_D_revised_11-08-2023-12-37?$WT_Blogs_Tiles_D%26M$',
      title: 'Five Unique Wedding Rituals in India',
    },
    {
      image: 'https://manyavar.scene7.com/is/image/manyavar/Blog%5FTile%5FWeddingTrends%5FDM%5F07%2D11%2D2023%2D05%2D08?$WT%5FBlogs%5FTiles%5FD%26M$', 
      title: 'The Biggest Wedding Trends of 2024',
    },
  ];

  const cart = useSelector((state) => state.mycart.cart); 

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(BackendUrl);
        setMyData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadData();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.info("This product is already in the cart!");
    } else {
      dispatch(addToCart(product));
      toast.success("Item added to cart!");
    }
  };

  return (
    <>
     <Carousel>
  <Carousel.Item>
    <div style={{ position: "relative" }}>
      <img src={img1} alt="" style={{ height: "650px", width: "100%" }} />
      <div 
        style={{
          position: "absolute", 
          top: "80%", 
          left: "45%", 
          transform: "translate(-50%, -50%)", 
          fontFamily: "'Brush Script MT', 'Pacifico', cursive", 
          color: "white", 
           
          fontWeight: "bolder", 
          letterSpacing: "3px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
      >
        <h3 style={{fontSize:"55px"}}>Modern Elegance for Every Occasion</h3>
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div style={{ position: "relative" }}>
      <img src={img2} alt="" style={{ height: "650px", width: "100%" }} />
      <div 
        style={{
          position: "absolute", 
          top: "80%", 
          left: "45%", 
          transform: "translate(-50%, -50%)",
          fontFamily: "'Brush Script MT', 'Pacifico', cursive", 
          color: "white", 
          fontSize: "90px", 
          fontWeight: "bolder", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          letterSpacing: "3px",
        }}
      >
        <h3 style={{fontSize:"55px"}}>Stylish and Chic for Every Trendsetter</h3>
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div style={{ position: "relative" }}>
      <img src={img3} alt="" style={{ height: "650px", width: "100%" }} />
      <div 
        style={{
          position: "absolute", 
          top: "80%", 
          left: "45%", 
          transform: "translate(-50%, -50%)", 
          fontFamily: "'Brush Script MT', 'Pacifico', cursive", 
          color: "white", 
          fontSize: "90px", 
          fontWeight: "bolder", 
          letterSpacing: "3px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
      >
        <h3 style={{fontSize:"55px"}}>Elegance with a Modern Twist</h3>
      </div>
    </div>
  </Carousel.Item>
</Carousel>


      <div className="banner">
        <div className="corner top-left">
          <img className="corner-img" src={b4} alt="corner decor" />
        </div>
        <div className="corner top-right">
          <img className="corner-img" src={b4} alt="corner decor" />
        </div>
        <div className="corner bottom-left">
          <img className="corner-img" src={b4} alt="corner decor" />
        </div>
        <div className="corner bottom-right">
          <img className="corner-img" src={b4} alt="corner decor" />
        </div>
        <GiButterflyFlower className="flower" />
        <h2 className="banner-heading">
          <strong
            style={{
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "'Brush Script MT', 'Pacifico', cursive",
              marginTop: "40px",
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
            Shop By Category
          </strong>
        </h2>
        <GiButterflyFlower className="flower1" />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          marginTop: "5%",
          alignItems: "center",
        }}
      >
        {[
             { src: img4, label: "", route: "" },
    { src: img1, label: <strong  style={{  fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "'Brush Script MT', 'Pacifico', cursive",letterSpacing:"2px"}}>Men</strong>, route: "/men" },
    { src: img5, label: <strong style={{  fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "'Brush Script MT', 'Pacifico', cursive",letterSpacing:"2px"}}>Women</strong>, route: "/women" },
    { src: img6, label: <strong style={{  fontSize: "3rem",
          fontWeight: "bold",
          fontFamily: "'Brush Script MT', 'Pacifico', cursive",letterSpacing:"2px"}}>Kids</strong>, route: "/kids" },
        ].map((item, index) => (
          <div
            key={index}
            style={{ textAlign: "center"}}
             onClick={() => {
            if (item.route) navigate(item.route);
          }}
          >
            <img
              src={item.src}
              alt={item.label}

              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "whitesmoke",
                borderRadius: "60%",
                objectFit: "cover",
              }}
            />
            <h2
              style={{
                marginTop: "20px",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              {item.label}
            </h2>
          </div>
        ))}
      </div>

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
        <GiVineFlower />{" "}Recommended by
        <img
          src={logo}
          alt="Manyavar & Mohey Logo"
          style={{ height: "60px", objectFit: "contain" }}
        /> <GiVineFlower />
      </h2>

      <hr
        style={{
          width: "80px",
          height: "3px",
          backgroundColor: "#fd7e14",
          margin: "10px auto 30px",
          border: "none",
          borderRadius: "4px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          marginTop: "5%",
          justifyContent: "center",
        }}
      >
        {myData.map((product) => (
          <Card
            key={product.id}
            style={{
              width: "15rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "200px", overflow: "hidden" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "250px", height: "100%" }}
              />
            </div>
            <Card.Body
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Card.Title
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "capitalize",
                  letterSpacing: "0.5px",
                }}
              >
                {product.name}
              </Card.Title>

              <Card.Text
                style={{
                  flexGrow: 1,
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "10px",
                  lineHeight: "1.5",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <strong style={{ color: "#000" }}>Description:</strong>{" "}
                {product.description}
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                <strong style={{ color: "#e67e22" }}>Price:</strong> ₹
                {product.price}
              </Card.Text>

              <Button
                variant="primary"
                style={{
                  backgroundColor: "#fd7e14",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#fff",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
                onClick={() =>
                  handleAddToCart({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    image: product.image,
                    qnty: 1,
                    price: product.price,
                  })
                }
                className="add-to-cart-button"
              >
                <FaCartPlus style={{ marginRight: "8px" }} /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

     
      <br />
        <h1  style={{textAlign:"center",marginTop:"50px", fontFamily: "'Brush Script MT', 'Pacifico', cursive", fontSize: "3rem",
          fontWeight: "bold",letterSpacing:"3px"}}> <GiVineFlower />{" "}The <span style={{ color: "#b45f06"}}>Wedding</span>  Edit <GiVineFlower /></h1>
          <br /> <br /><br />
       <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
       backgroundColor:"#FFF3DD",
        padding: '50px 20px',
      }}
    >
    
      <div style={{ flex: '1 1 400px', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' , fontFamily: "'Brush Script MT', 'Pacifico', cursive", fontSize: "3rem",
          fontWeight: "bold",letterSpacing:"3px"}}>
          Your personal stylist <em style={{ fontStyle: 'italic' }}>at your service!</em>
        </h1>
        <p style={{ marginTop: '20px', fontSize: '1rem', color: '#555' }}>
          Consult our expert stylist to curate a look for your D day
        </p>
        <button
          style={{
            marginTop: '30px',
            backgroundColor: '#E75C23',
            color: '#fff',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          BOOK A VIDEO CALL
        </button>
      </div>

     
      <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
        <img
          src={couple}
          alt="Stylist Banner"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
     
      <br />
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "'Brush Script MT', 'Pacifico', cursive",letterSpacing:"3px",marginTop:"30px"}}><GiVineFlower />{" "}From The <span style={{ color: "#b45f06"}}>Blog</span>  <GiVineFlower /></h2>
      
<br /><br />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px',
        
      }}>
        {blogPosts.map((post, index) => (
          <div key={index} style={{ width: '400px', textAlign: 'left' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '8px' }} />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{post.title}</p>
            <a href="#" style={{ color: 'red', fontSize: '14px' }}>Read the story &rarr;</a>
          </div>
        ))}
      </div>
    </div>
      <div
        style={{ marginTop: "5%", padding: "40px", backgroundColor: "#f9f9f9" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "'Brush Script MT', 'Pacifico', cursive",
            marginTop: "40px",
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
         <GiVineFlower />{" "}What Our Customers Say <GiVineFlower />
        </h2>
        <Carousel indicators={false} interval={4000}>
          {Array.from({ length: Math.ceil(customerReviews.length / 3) }).map(
            (_, i) => (
              <Carousel.Item key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    flexWrap: "wrap",
                  }}
                >
                  {customerReviews.slice(i * 3, i * 3 + 3).map((rev, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: "400px",
                        padding: "20px",
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={rev.image}
                        alt={rev.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          marginBottom: "30px",
                        }}
                      />
                      <p style={{ fontSize: "14px", color: "#555" }}>
                        {rev.review}
                      </p>
                      <p
                        style={{
                          fontWeight: "bold",
                          marginTop: "10px",
                          color: "#333",
                        }}
                      >
                        — {rev.name}
                      </p>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            )
          )}
        </Carousel>
      </div>

      
      

     <br /><br />
      <div style={{ width: '100%', padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "'Brush Script MT', 'Pacifico', cursive",letterSpacing:"3px", color: "#b45f06"}}><GiVineFlower /> Visit Our Store <GiVineFlower /></h2>
      <p>We're happy to welcome you at our physical location.</p>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        height: '550px',
        margin: '20px auto',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <iframe
          title="store-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.74934683295!2d77.40589145!3d23.199409700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1747035146928!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
      
    </>
  );
};

export default Home;



