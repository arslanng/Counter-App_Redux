import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // state e ulaşmak için kullanacağız.
  initialState: {
    // statein başlangıç anındaki değerlerini girdiğimiz kısım
    value: 0,
  },
  reducers: {
    // statei günceleyecek tanımlar
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action)=> {
      state.value += Number(action.payload); // action.payload fonksiyona parametre olarak girilen değeri verir. Bu veri obje dahil tüm veri tiplerinde olabilir. // veri string olarak geldi. Biz de Number fonksiyonu ile sayıya çevirdik.
    },
    decrementByAmount: (state, action)=> {
      state.value -= Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions; // fonksiyonları dışa aktarıyoruz.
export default counterSlice.reducer;
