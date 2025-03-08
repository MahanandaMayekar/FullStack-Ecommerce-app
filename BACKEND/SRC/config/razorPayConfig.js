import { RAZORPAR_KEY_ID, RAZORPAR_KEY_SECRET } from './serverConfig.js';
import razorpay from "razorpay"


const instance = new razorpay({
  key_id: RAZORPAR_KEY_ID,
  key_secret: RAZORPAR_KEY_SECRET,
});

export default instance