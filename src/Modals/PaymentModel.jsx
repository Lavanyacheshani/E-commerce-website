import { Modal } from "@mui/material";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useImperativeHandle, useState, forwardRef } from "react";
import db from "../Firebase/Firebase";

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  const addData = async () => {
    try {
      await setDoc(doc(db, "cities", "1000"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className=" flex flex-col items-center justify-center"
    >
      <div className=" w-[90%] bg-white">Lavanya
      <button onClick={addData}>click</button>
      </div>
    </Modal>
  );
};

export default forwardRef(PaymentModal);
