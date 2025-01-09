import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


const categoryArr = [
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
        title:"1",
        categoryId:"1",
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
        title:"2",
        categoryId:"2",
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
        title:"3",
        categoryId:"3",
    },
    {
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5vUHZltp3HtZcoA3724cZuUkL0XOGDwLTg&s",
        title:"4",
        categoryId:"4",
    }
];

const Category = () => {
    return (
        <div className=" px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll">
          <section
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className=" w-full p-2"
          >
            <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">Watches</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-[auto] gap-5">
                {categoryArr.map(({ imageUrl , title , categoryId }, index ) => (
   
                    <CategoryUnitItems key={index} imageUrl={imageUrl} title={title}
                    categoryId={categoryId}  />
                ))}
            </div>
          </section>
        </div>
    );
};

export default Category;

const CategoryUnitItems = ({ imageUrl, title, categoryId }) => (
    
        <Link to={'/category/${categoryId}'}>
      <IconButton
        sx={{
          color:'gray',
          padding: "1px",
          margin: 0,
          borderRadius: "6px",
        }}
      >
            <div 
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                className=" m-1 w-full py-6 px-3 rounded-md flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className=" rounded-full w-[50px] h-[50px]"
        />
        <h2 className=" text-[10px] sm:text-sm text-black mt-3 font-bold">
          {title}
        </h2>
      </div>
    </IconButton>
  </Link>
);


