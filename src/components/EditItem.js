import React, { useState } from "react";

const EditItem = ({ isModalOpen, closeModal, handleConfirm }) => {
  const [title, setNewTitle] = useState("");
  const [amount, setNewAmount] = useState("");

  const handleEdit = () => {
    const editedData = {
      title: "",
      amount: "",
    };

    if (title === "" || amount === "") {
      return;
    } else {
      editedData.title = title;
      editedData.amount = +amount;
      setNewTitle("");
      setNewAmount("");
      handleConfirm(editedData);
    }
  };

  if (!isModalOpen) return null;
  return (
    <div className="modal">
      <div>
        <p className="close-btn" onClick={closeModal}>
          x
        </p>
      </div>
      <div className="edit-data">
        <input
          type="text"
          placeholder="Nazwa przychodu"
          style={{ width: "110px" }}
          value={title}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Kwota"
          style={{ width: "110px", marginRight: "5px" }}
          value={amount}
          onChange={(e) => setNewAmount(e.target.value)}
        />
        <button onClick={handleEdit}>Zatwierdź</button>
        <button onClick={closeModal}>Anuluj</button>
      </div>
    </div>
  );
};

export default EditItem;
