import { createSlice } from '@reduxjs/toolkit'
import { database } from "../firebase/firebase";

import { set, ref, onValue } from 'firebase/database';



const initialState = [
  
]



export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {


    increment: (state = initialState, hanji) => {




      var rnd = "";
      var char = "kjdjdnckjdnfv"
      for (var i = 0; i < char.length; i++) {


        rnd += char.charAt(Math.floor(Math.random() * char.length))

      }



      set(ref(database, 'pics/' + rnd), {

        pic: hanji.payload.pic,
        username: hanji.payload.username,
        userpic: hanji.payload.userpic,
        id: rnd
      });

      console.log("chalchuka")


    },


    decrement: (state = initialState) => {

      const starCountRef = ref(database, 'pics/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        state = (Object.values(data))
        
        


      });

      return state



    },




    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer