import '../App.css';
import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { AddProduct } from "./AddProduct";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) =>
        setProducts(data.products)
      )
      .catch((error) => console.log(error));
  };

  const onAdd = async (title, price, brand, description) => {
    await fetch('https://dummyjson.com/products/add', {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        title: title,
        price: price,
        brand: brand,
        description: description
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) =>
        setProducts([...products, {
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100), 
          title: title,
          price: price,
          brand: brand,
          description: description
        }])
      )
      .catch((error) => console.log(error));
    console.log("object", products)
    alert("New Product Added")
  };

  const onEdit = async (id, title, description) => {
    console.log("edited id", id)
    console.log("edited description", description)
    console.log("edited title", title)
    const updatedProducts = (products.map((product) => {
      if (product.id === id) {
        console.log("product", product.id)
        product.title = title;
        product.description = description;
      }
      return products;
    })
    )

    setProducts(...updatedProducts);
    console.log("object", updatedProducts)
    alert("Product Edited Successfully")
  };

  const onDelete = async (id) => {
    console.log("id", id)
    setProducts(products.filter((product) => {
      return product.id !== id;
    }))
    alert("Product Deleted Successfully")
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload()
    console.log("loggedOut");
    alert("Logged Out Successfully")
  }

  return (
    <div className="App">
      <h1>Products</h1>

      <button onClick={handleLogout}>Logout</button>

      <AddProduct onAdd={onAdd} />
      <h1>Products List</h1>

      <div className="container">

        <div className="table">
          <div className="table-header">
            <div className="header__item"><p id="name" className="filter__link">Name</p></div>
            <div className="header__item"><p id="name" className="filter__link">Price</p></div>
            <div className="header__item"><p id="name" className="filter__link">Brand</p></div>
            <div className="header__item"><p id="name" className="filter__link">Description</p></div>
            <div className="header__item"><p id="name" className="filter__link">Actions</p></div>
          </div>
          {products && products.map((product, index) => (
            <Product
              key={index}
              id={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              description={product.description}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}

        </div>
      </div>
    </div>
  );
}