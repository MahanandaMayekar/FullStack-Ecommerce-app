import {  useState } from 'react'
import PlaceOrder from './PlaceOrder'


const PlaceOrderContainer = () => {

    const [payMethod, setPayMethod] = useState("");
  return <PlaceOrder setPayMethod={setPayMethod} payMethod={payMethod} />;
}

export default PlaceOrderContainer
