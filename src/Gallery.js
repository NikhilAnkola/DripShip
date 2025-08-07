import React, { useState } from "react";
import products from "./data";

function Gallery() {
  const [visibleDetails, setVisibleDetails] = useState({});

  const handleToggleDetails = (id) => {
    setVisibleDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id] // Toggle visibility for this product
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
    padding: "20px"
  },
  card: {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "5px"
  },
  description: {
    marginTop: "10px",
    color: "#333",
    fontSize: "14px"
  }
};

export default Gallery;
