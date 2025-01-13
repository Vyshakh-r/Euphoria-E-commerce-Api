import React, { useEffect, useState } from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import ProductDescription from './ProductDescription';
import ProductDetails from './ProductDetails';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePage() {
  const { id } = useParams(); // Get the product ID from the URL
  const [data, setData] = useState(null);
  const [description, setDescription] = useState(null); // State to store fetched product description

  useEffect(() => {
    // Fetch product details by ID from the API
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setData(response.data); // Set the fetched product data
        setDescription(response.description);
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
      });
  }, [id]); // Depend on 'id' to re-run the effect when the ID changes

  if (!data) {
    return <div>Loading...</div>; // Show a loading message or spinner while data is being fetched
  }

  return (
    <>
      <Header />
      <ProductDetails data={data} />
      <ProductDescription description={description} /> {/* Pass data to ProductDescription if needed */}
      <Footer />
    </>
  );
}

export default SinglePage;

