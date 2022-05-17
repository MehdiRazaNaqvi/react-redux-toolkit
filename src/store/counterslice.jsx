import { createSlice } from '@reduxjs/toolkit'
import { database } from "../firebase/firebase";

import { set, ref, onValue, remove } from 'firebase/database';
import { async } from '@firebase/util';




const initialState = {

  posts: [],
  currentUser: {}

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
        id: rnd,
        like: false,
        likers: []
      });


      console.log("chalchuka")






    },






    decrement: (state, payload) => {


      state.posts = payload.payload


    },




    currentuser: (state, pd) => {


      state.currentUser = pd.payload

      // console.log(state.currentUser)

      // console.log(payload.payload)

    },


    

    likefn: (state, py) => {


  






    }



  },
})




export const { increment, decrement, currentuser, likefn } = counterSlice.actions

export default counterSlice.reducer