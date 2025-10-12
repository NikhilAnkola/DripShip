import React, { useState, useEffect } from "react";

function Gallery() {
  // State to store products fetched from backend
  const [products, setProducts] = useState([]);

  // State to handle which product details are visible
  const [visibleDetails, setVisibleDetails] = useState({});

  // Fetch products from backend API when component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/products") // API endpoint from backend
      .then((response) => response.json())
      .then((data) => {
        // Map MongoDB _id to id
        const productsWithId = data.map(product => ({
          ...product,
          id: product._id
        }));
        setProducts(productsWithId);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // empty dependency array → runs only once on page load

  // Toggle "View Details" visibility for each product
  const handleToggleDetails = (id) => {
    setVisibleDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div style={styles.galleryContainer}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleToggleDetails(product.id)}>
            {visibleDetails[product.id] ? "Hide Details" : "View Details"}
          </button>

          {visibleDetails[product.id] && (
            <p style={styles.description}>{product.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  card: {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },
  description: {
    marginTop: "10px",
    color: "#333",
    fontSize: "14px",
  },
};

export default Gallery;