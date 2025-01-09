import { Modal } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { useImperativeHandle, useState, forwardRef } from "react";
import db from "../Firebase/firebase";

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    handleOpen: () => setOpen(true),
  }));

  const addData = () => {
    setDoc(doc(db, "category/category4/category4", "category4_item1"), {
      title: "category4 title 1",
      img: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
      rating: 2.3,
    })
      .then(() => {
        console.log("Document written with ID: ");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className=" flex flex-col items-center justify-center"
    >
      <div className=" w-[90%] bg-white">
        Lavanya
        <button onClick={addData}>click</button>
      </div>
    </Modal>
  );
};

export default forwardRef(PaymentModal);