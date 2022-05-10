import { createSlice } from '@reduxjs/toolkit'
import { database } from "../firebase/firebase";

import { set, ref, onValue } from 'firebase/database';
import { async } from '@firebase/util';




const initialState = {
  value: 0,
  posts: []
}





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
      decrement()




    },






    decrement: (state , payload) => {


        state.posts = payload.payload









      // const fetchfirebase = async () => {


      //   // const starCountRef = ref(database, 'pics/');

      //   // onValue(starCountRef, (snapshot) => {

      //   //   const data = snapshot.val();


      //   //   const firebasedata = (Object.values(data))

      //     // const firebasedata = ["mehdu", "shahhhahha"]

      //     return firebasedata








      //   // });



      // }













    },





    likefn: (state, py) => {

      console.log(py.payload.count)
      console.log(py.payload.v)


      {
        py.payload.count.map((v, i) => v.id == py.payload.v.id ? v.like == "true" : console.log("nae hai ander"))
      }


      // return state



    }



  },
})




export const { increment, decrement, likefn, fetchfirebase } = counterSlice.actions

export default counterSlice.reducer