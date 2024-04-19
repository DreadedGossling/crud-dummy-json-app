import React, { useState } from "react";

export const Product = ({ title, brand, price, description, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.description.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Title" name="title" defaultValue={title} />
          <input placeholder="Email" name="description" defaultValue={description} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (

        <div className="table-content">
          <div className="table-row">
            <div className="table-data">{title}</div>
            <div className="table-data">{price}</div>
            <div className="table-data">{brand}</div>
            <div className="table-data">{description}</div>
            <div className="table-data">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
          {/* <div class="table-row">
                <div class="table-data">Dick</div>
                <div class="table-data">1</div>
                <div class="table-data">1</div>
                <div class="table-data">2</div>
                <div class="table-data">3</div>
              </div>
              <div class="table-row">
                <div class="table-data">Harry</div>
                <div class="table-data">0</div>
                <div class="table-data">2</div>
                <div class="table-data">2</div>
                <div class="table-data">2</div>
              </div> */}
        </div>
        //   </div>
        // </div>

        // <div className="user">
        //   <span className="user-name">{title}</span>
        //   <span className="user-email">{description}</span>
        //   <div>
        //     <button onClick={handleEdit}>Edit</button>
        //     <button onClick={handleDelete}>Delete</button>
        //   </div>
        // </div>
      )}
    </div>
  );
};
