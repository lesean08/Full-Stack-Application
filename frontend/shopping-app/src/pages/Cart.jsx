import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import classes from "./Navbar.css"; // Import CSS module


export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default function Navbar(props) {
  const { isLoggedIn, setSearch } = props;
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearch(inputValue);
  };

  const userHandler = () => {
    if (isLoggedIn) {
      navigate("/user");
    } else {
      navigate("/signup");
    }
  };

  const shoppingCartHandler = () => {
    navigate("/cart");
  };

  return (
    <nav className={classes.navigation}>
      <div className={classes.iconLeft}>
        <PersonIcon className={classes.personIcon} onClick={userHandler} />
        {isLoggedIn && (
          <p className={classes.loggedInText}>logged in</p>
        )}
      </div>
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="search by title/description..."
          id="search-input"
          onChange={handleChange}
        />
        <SearchIcon className={classes.searchIcon} />
      </div>
      <div className={classes.iconRight}>
        <p className={classes.cartCount}>{cartCount}</p>
        <ShoppingCartIcon
          className={classes.shoppingCart}
          onClick={shoppingCartHandler}
        />
      </div>
    </nav>
  );
}
