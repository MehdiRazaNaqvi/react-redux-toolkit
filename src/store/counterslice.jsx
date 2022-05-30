import { createSlice } from '@reduxjs/toolkit'

import { database } from "../firebase/firebase";

import { set, ref, onValue, remove } from 'firebase/database';





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
        likers: ""
      });


      console.log("chalchuka")






    },






    decrement: (state, payload) => {


      state.posts = payload.payload


    },




    currentuser: (state, pd) => {

      // console.log(pd.payload)
      state.currentUser.username = pd.payload.username
      state.currentUser.photoURL = pd.payload.photoURL
      state.currentUser.providerId = pd.payload.providerId
      state.currentUser.uid = pd.payload.uid

  


    },




    likefn: (state, py) => {









    },




    nayafn: (state, word) => {
      console.log(word.payload)
      const arr = [];
      state.posts.map((v, i) => v.val == word.payload ? arr.push(v) : null)
      console.log(arr)
      state.posts = arr


      // console.log(word.payload)
    }



  },
})




export const { increment, decrement, currentuser, likefn, nayafn } = counterSlice.actions

export default counterSlice.reducer