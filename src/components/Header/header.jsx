import menu from "../../img/menu-svgrepo-com.svg"
import cart from "../../img/cart-check-svgrepo-com.svg"
import search from "../../img/search-svgrepo-com.svg"


const Header = () => {
    return <header className="w-full p-5 ">
            {/* Header left */}
            <div>
                <img src={menu}alt="menu" />
                <h1> LavSan <span>Store</span>  </h1>
                <div>
                    <input type="text" placeholder="Search"/>
                    <img src={search} alt="search" />
                </div>
            </div>
            {/* Header right */}
            <img src={cart} alt="cart" />
        </header>;
    
};

export default Header;


