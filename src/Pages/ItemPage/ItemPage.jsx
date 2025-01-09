import { ListItemButton, Rating } from "@mui/material";
import { useRef } from "react";

const itemImageArr = [
  "https://wallpaperaccess.com/full/267434.jpg",
  "https://wallpaperaccess.com/full/267434.jpg",
  "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
  "https://wallpaperaccess.com/full/267434.jpg",
];

const ItemPage = () => {
  console.log("item page reRender");
  const mainImageRef = useRef();
  const subImagesRef = useRef([]);

  return (
    <div className=" px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
      {/* Main Title */}
      <h1 className=" text-lg font-bold px-3 mb-7">Item Title</h1>
      {/* Main Image */}
      <img
        ref={mainImageRef}
        src={itemImageArr[0]}
        alt="main item"
        className=" w-full object-contain rounded-md"
      />
      {/* Item Imagers */}
      <div className=" w-full mt-2 grid grid-cols-4 text-center grid-rows-1 gap-2">
        {itemImageArr.map((ele, index) => (
          <ListItemButton
            key={index}
            sx={{
              padding: "0",
              borderRadius: "2px",
            }}
            onClick={() => {
              subImagesRef.current[index].style.border = "2px solid gold";
              mainImageRef.current.src = subImagesRef.current[index].src;
              for (let i = 0; i < itemImageArr.length; i++) {
                if (i !== index) {
                  subImagesRef.current[i].style.border = "none";
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImagesRef.current[index] = refEle)}
              name={`item image ref : ${index}`}
              src={ele}
              alt={ele}
              className=" w-full object-contain rounded-sm"
            />
          </ListItemButton>
        ))}
      </div>
      {/* product details */}
      <div className=" w-full h-[1px] mt-7 mb-3 bg-slate-400" />
      <div>
        <h3 className=" text-3xl font-bold">
          <span className=" font-normal text-red-700">-40%</span> Rs.{" "}
        </h3>
        <p className=" font-semibold text-gray-700">
        </p>
        <p className=" text-green-900 font-semibold text-base">In Stock</p>
        <Rating value={3.5} precision={0.1} readOnly />
        <p className=" font-semibold text-gray-800 text-xs">AUK Products</p>
        <div className=" w-full h-[1px] bg-slate-400 my-3" />
        <p>
          Condition: <span className=" font-semibold">Brand New</span>
        </p>
        <div className=" flex items-center mt-1 gap-2">
          <p>Quantity:</p>
          <input
            className=" py-1 px-3 w-[70px] border rounded-lg border-gray-500 outline-none font-semibold"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;