import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from './cartslice';
import BackendURL from '../config/backendapi'; 

const Search = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  const fetchProducts = async () => {
    try {
      const response = await axios.get(BackendURL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        marginBottom: '30px',
        color: '#2c3e50',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        Search Results for: <span style={{ color: '#e74c3c' }}>{searchQuery}</span>
      </h1>
      
      <div style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        gap: '25px', 
        padding: '15px 10px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#3498db #f1f1f1'
      }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} style={{ 
              minWidth: '280px',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.03)'
              }
            }}>
              <Card style={{ 
                width: '100%',
                height: '420px',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s ease',
                ':hover': {
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                }
              }}>
                <div style={{
                  height: '180px',
                  overflow: 'hidden',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px'
                }}>
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    style={{ 
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      ':hover': {
                        transform: 'scale(1.1)'
                      }
                    }} 
                  />
                </div>
                <Card.Body style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px'
                }}>
                  <div>
                    <Card.Title style={{ 
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: '#2c3e50'
                    }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text style={{ 
                      fontSize: '14px',
                      color: '#7f8c8d',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      {product.description.substring(0, 70)}...
                    </Card.Text>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#e74c3c',
                      marginBottom: '15px'
                    }}>
                      ₹{product.price}
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      style={{
                        backgroundColor: '#3498db',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px 15px',
                        fontWeight: '500',
                        width: '100%',
                        transition: 'background-color 0.3s ease',
                        ':hover': {
                          backgroundColor: '#2980b9'
                        }
                      }}
                      onClick={() => dispatch(addToCart({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        category: product.category,
                        image: product.image,
                        qnty: 1,
                        price: parseFloat(product.price),
                      }))}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div style={{
            width: '100%',
            textAlign: 'center',
            padding: '40px',
            color: '#7f8c8d',
            fontSize: '18px'
          }}>
            No products found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;