import { Rating } from "@mui/material"
import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { useParams } from "react-router-dom";

const categoryItemArr = [
  {
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
      title:"1",
      
  },
  {
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
      title:"2",
      
  },
  {
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
      title:"3",
      
  },
  {
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
      title:"4",
      
  }
];
const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const { categoryId } = useParams();
  const [categoryTitle] = category.filter((ele) => ele.id === categoryId);


  return (
    <div className=" px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
      <h1 className=" text-lg md:text-2xl font-bold mt-2 ml-2 mb-3">
        {categoryTitle.title}
      </h1>
      <div className=" w-full grid grid-cols-2 sm:grid-cols-3 grid-rows[auto] gap-4">
          {categoryItemArr.map(({ imageUrl, title }, index) => (
              <CategoryItemUnit key={index} ImageUrl={imageUrl} title={title} />
          ))}
      </div>
    </div>
  );
};

export default CategoryItems

const CategoryItemUnit = ({ImageUrl, title}) => 
  <div>
    <img src={ImageUrl} alt={title} className=" w-full object-contain"/>
    <h3>{title}</h3>
    <Rating 
        name={ImageUrl}
        value={3.5}
        precision={0.1}
        size="small"
        readOnly
      />
    </div>



