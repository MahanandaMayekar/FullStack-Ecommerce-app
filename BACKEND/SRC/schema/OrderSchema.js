import mongoose from "mongoose"
const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    paymentMethod: {
      type: String,
      enum: ["Stripe", "RazorPay", "Cash on Delivery"],
      default: "cash on delivery",
    },
    payment: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      enum: [
        "Order Placed",
        "Pending",
        "Processing",
        "Out for Delivery",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Order=mongoose.model("Order",OrderSchema)