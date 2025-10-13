// src/Gallery.js
import React, { useState, useEffect } from "react";

function Gallery() {
  // State to store all products fetched from backend
  const [products, setProducts] = useState([]);

  // State to handle which product details are visible
  const [visibleDetails, setVisibleDetails] = useState({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Only show 4 products per page

  // Fetch products from backend API when component loads
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const productsWithId = data.map((product) => ({
          ...product,
          id: product._id,
        }));
        setProducts(productsWithId);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Toggle "View Details" visibility for each product
  const handleToggleDetails = (id) => {
    setVisibleDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // -------- Add to Cart handler (frontend) ----------
  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Product added to cart.");
      } else {
        // backend might return messages like "Product already in cart"
        alert(data.message || "Could not add to cart. Try again.");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Server error while adding to cart. Try again later.");
    }
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle Next/Previous
  const handleNext = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.galleryContainer}>
        {currentProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            {/* ADD TO CART button (above View Details) */}
            <button
              style={styles.addToCartBtn}
              onClick={() => handleAddToCart(product.id)}
            >
              + Add to Cart
            </button>

            <button onClick={() => handleToggleDetails(product.id)}>
              {visibleDetails[product.id] ? "Hide Details" : "View Details"}
            </button>

            {visibleDetails[product.id] && (
              <p style={styles.description}>{product.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={styles.pagination}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          ◀ Previous
        </button>
        <span style={styles.pageInfo}>
          Page {currentPage} of {Math.ceil(products.length / productsPerPage)}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(products.length / productsPerPage)}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    padding: "20px",
  },
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    minHeight: "400px",
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
  addToCartBtn: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "8px 10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
  },
  pagination: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  pageInfo: {
    fontWeight: "bold",
  },
};

export default Gallery;
