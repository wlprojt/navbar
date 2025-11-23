"use client";

import { useEffect, useState } from "react";

export default function Payment() {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePay = async () => {
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return alert("Please enter a valid amount");
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: numericAmount }),
    });

    const order = await res.json();

    const rzp = new (window as any).Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "My Store",
      description: "Premium Purchase",
      theme: {
        color: "#6366f1",
      },
      handler: (res: any) => {
        alert("Payment Success: " + res.razorpay_payment_id);
      },
    });

    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl p-8 rounded-2xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          💳 Make a Payment
        </h1>

        <input
          type="number"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white outline-none focus:border-purple-400 transition"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // FIXED
        />

        <button
          onClick={handlePay}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold hover:shadow-xl hover:scale-[1.02] active:scale-95 transition"
        >
          Pay Now
        </button>

        <p className="text-gray-300 text-center mt-4 text-sm">
          Secure payment powered by Razorpay 🔐
        </p>
      </div>
    </div>
  );
}
