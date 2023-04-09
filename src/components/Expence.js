import React, { useState } from "react";
import ListExpences from "./ListExpences";
import EditItem from "./EditItem";
import Overlay from "./Overlay";

const Expences = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expences, setExpences] = useState([]);
  const [modalOpen, isModalOpen] = useState(false);
  const [overlay, setOverlayOpen] = useState(false);
  const [index, setIndex] = useState(null);

  const handleAddExpences = () => {
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
      setExpences([...expences, data]);
    }
  };

  const handleRemove = (i) => {
    setExpences(expences.filter((item, index) => index !== i));
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
    const newEditedArr = [...expences];
    newEditedArr[index] = newEditedData;
    setExpences(newEditedArr);
    closeModal();
  };

  return (
    <div className="expenses">
      <p className="title">Wydatki</p>
      <input
        type="text"
        id="name-of-expenses"
        placeholder="Nazwa wydatku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        id="sum-of-expenses"
        placeholder="Kwota"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button id="add-expenses" onClick={handleAddExpences}>
        Dodaj
      </button>
      <div id="list-of-expenses"></div>
      <p id="total-expenses-sum"></p>
      <ListExpences
        data={expences}
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

export default Expences;
