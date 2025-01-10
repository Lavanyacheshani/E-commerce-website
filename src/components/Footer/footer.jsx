import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });
  return (
    <footer className=" fixed bottom-0 left-0 z-[100] w-full p-3 bg-my-background flex items-center justify-between md:gap-5 drop-shadow-header-shadow">
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        iconText="Home"
      />
      <div className="flex-1 flex justify-center"></div>
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AppsOutlinedIcon}
        iconText="Category"
      />
      <div className=" md:flex-1 md:text-right">
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={AccountCircleOutlinedIcon}
          iconText="Profile"
        />
      </div>
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText, clickFun }) => {
  const clickHandle = () => {
    const obj = {
      Home: true,
      Category: false,
      Profile: false,
    };
    if (iconText === "Category") {
      obj.Category = true;
      obj.Home = false;
      obj.Profile = false;
    } else if (iconText === "Profile") {
      obj.Profile = true;
      obj.Home = false;
      obj.Category = false;
    }

    clickFun.setWhoIsClick(obj);
  };

  return (
    <Link to={iconText === "Home" ? "/" : `/${String(iconText).toLowerCase()}`}>
      <IconButton
        sx={{
          padding: "4px",
          paddingTop: "0",
          borderRadius: "5px",
          color: "red",
        }}
        onClick={clickHandle}
      >
                  <div
          style={{
            color: clickFun.whoIsClick[iconText] && "#FFA500",
          }}
          className='text-white hover:text-orange-500 transition-all duration-300 '>
          <Icon />
          <p className=" text-xs font-semibold">{iconText}</p>
        </div>
      </IconButton>
    </Link>
  );
};
