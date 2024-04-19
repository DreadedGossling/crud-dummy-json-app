import React from "react";

export const AddProduct = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.price.value, evt.target.brand.value, evt.target.description.value);
    evt.target.title.value = "";
    evt.target.price.value = "";
    evt.target.brand.value = "";
    evt.target.description.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit} className="addForm">
      <h3>Add Product</h3>
      <input placeholder="Title" name="title" required />
      <input placeholder="Price" name="price" required/>
      <input placeholder="Brand" name="brand" required/>
      <input placeholder="Description" name="description"required />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
