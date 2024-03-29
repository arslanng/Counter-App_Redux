import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const countValue = useSelector((state) => state.counter.value); // statein altındaki counter altındaki value değerini aldık.
  const dispatch = useDispatch();
  // useDispatch, dispatch değişkenine tanımlandı.
  const [amount, setAmount] = useState(0); // formdan veri almak için oluşturuldu. formdan aldığı veriyi counterSlice içine gönderiyoruz.

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* dispatch içinde çağırdığımız fonksiyonu kullanıyoruz. */}

      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(decrementByAmount(amount))}>
        Decrement by Amount
      </button>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </div>
  );
}

export default Counter;
