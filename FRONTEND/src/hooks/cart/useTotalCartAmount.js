import { useAssets } from '../assets/useAssets';
import useCart from '../context/useCart';


const useTotalCartAmount = () => {
    const { products } = useAssets()
     const { cartItems} = useCart()
  let totalAmout = 0
    for (let items in cartItems) {
     let itemInfo = products.find(
       (product) => product._id === items
      );
      //console.log("item info", itemInfo);
      for (let sizes in cartItems[items]) {
        if (cartItems[items][sizes] > 0) {
          totalAmout += itemInfo.price * cartItems[items][sizes];
        }
          }
    }
    
    return totalAmout
}

export default useTotalCartAmount
