
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useState } from 'react';

let clicked = false;

const Header = ({ paymentModalRef }) => {
    const[isSearch, setIsSearch] = useState(false)
    return (
        <header className="fixed top-0 left-0 z-[100] w-full p-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow ">
            {/* Header left */}
            <div className="flex items-center ">
                <IconButton>
                    <MenuIcon 
                        sx={{
                            color: "white",
                        }}
                    />
                </IconButton>
                
                <h1 className=" ml-2 text-sm font-semibold text-orange-500  ">
                    LavSan <span className="text-white">Store</span>
                </h1>  
                <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#f1e6e6]">

                    <input 
                    type="text" 
                    placeholder="Search" 
                    style={{
                        display:isSearch?'inline-block': 'none'
                    }}
                    className=" hidden sm:inline-block  ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"/>
                    <IconButton onClick={() => setIsSearch(true)}>
                        <SearchIcon  sx={{color:"gray"}}/></IconButton>
                </div>
            </div>
            {/* Header right */}
            <IconButton>
                <div className='relative p-1'>
                < ShoppingCartIcon sx={{color:"white"}}/>
                <div className='absolute top-[2px] right-0 font-semibold flex items-center w-3 h-3 text-[7px] justify-center text-black bg-white rounded-full'>2</div>
                </div>

                
            </IconButton>


        </header>
    );
};

export default Header;
