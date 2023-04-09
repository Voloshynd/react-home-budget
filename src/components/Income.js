import React, { useState } from "react";
import ListIncomes from "./ListIncomes";
import EditItem from "./EditItem";
import Overlay from "./Overlay";

const Income = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [incomes, setIncomes] = useState([]);
  const [modalOpen, isModalOpen] = useState(false);
  const [overlay, setOverlayOpen] = useState(false);
  const [index, setIndex] = useState(null);

  const handleAddIncomes = () => {
    const data = {
      title: "",
      amount: "",
    };

    if (title === "" || amount === "") {
      return;
    } else {
      data.title = title;
      data.amount = +amount;
      setTitle("");
      setAmount("");
      setIncomes([...incomes, data]);
    }
  };

  const handleRemove = (i) => {
    setIncomes(incomes.filter((item, index) => index !== i));
  };

  const openEditModalWindow = (i) => {
    setIndex(i);
    openModal();
  };

  const openModal = () => {
    isModalOpen(true);
    setOverlayOpen(!overlay);
  };

  const closeModal = () => {
    isModalOpen(false);
    setOverlayOpen(!overlay);
  };

  const handleConfirm = (newEditedData) => {
    const newEditedArr = [...incomes];
    newEditedArr[index] = newEditedData;
    setIncomes(newEditedArr);
    closeModal();
  };

  return (
    <div className="income">
      <p className="title">Przychody</p>
      <input
        type="text"
        id="name-of-income"
        placeholder="Nazwa przychodu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        id="sum-of-income"
        placeholder="Kwota"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button id="add-income" onClick={handleAddIncomes}>
        Dodaj
      </button>
      <ListIncomes
        data={incomes}
        handleRemove={handleRemove}
        openEditModalWindow={openEditModalWindow}
      />
      <EditItem
        isModalOpen={modalOpen}
        closeModal={closeModal}
        handleConfirm={handleConfirm}
      />
      {overlay && <Overlay in={!overlay} closeModal={closeModal}></Overlay>}
    </div>
  );
};

export default Income;
