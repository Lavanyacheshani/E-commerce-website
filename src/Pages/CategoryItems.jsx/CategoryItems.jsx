
import { ListItemButton, Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { useEffect, useState } from "react";
import getDataFromSubCollection from "../../Utils/dataFetch/getdataFromSubCollection";
import Loading from "../../components/Loading/Loading";

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const { categoryId } = useParams();
  const [categoryTitle] = category.filter((ele) => ele.id === categoryId);

  const [categoryItemsData, setCategoryItemsData] = useState([]);

  useEffect(() => {
    getDataFromSubCollection(
      "category",
      categoryId,
      categoryId,
      setCategoryItemsData
    );
  }, [categoryId]);

  console.log("category data ", categoryItemsData);

  if (categoryItemsData.length === 0) {
    return <Loading />;
  }

  return (
    <div className=" px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
      <h1 className=" text-lg md:text-2xl font-bold mt-2 ml-2 mb-3">
        {categoryTitle.title}
      </h1>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 grid-rows[auto] gap-4">
        {categoryItemsData?.map(({ img, title }, index) => (
          <CategoryItemUnit key={index} imageUrl={img} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemUnit = ({ imageUrl, title }) => (
  <ListItemButton
    sx={{
      padding: 0,
      margin: 0,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }}
  >
    <div className=" w-full">
      <img src={imageUrl} alt={title} className=" w-full object-contain" />

      <div className=" w-full mx-1 md:mx-2 mb-2">
        <h3 className=" text-left text-sm font-bold text-black">{title}</h3>
        <Rating
          name={imageUrl}
          value={3.5}
          precision={0.1}
          size="small"
          readOnly
        />
      </div>
    </div>
  </ListItemButton>
);
