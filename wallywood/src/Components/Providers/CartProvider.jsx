import { createContext, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {}); 
};
