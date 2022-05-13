
import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import { increment, decrement, likefn, currentuser } from "./store/counterslice"
import { useEffect } from 'react';

import unlike from "./pics/heart.svg"
import likepic from "./pics/heart-fill.svg"

import { set, ref, onValue, remove } from 'firebase/database';
import { database } from "./firebase/firebase";





import { auth } from "./firebase/firebase"
import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"




function App() {


  const dispatch = useDispatch()


  const fetchfirebase = () => {



    const starCountRef = ref(database, 'pics/');

    onValue(starCountRef, (snapshot) => {

      const data = snapshot.val();


      const firebasedata = (Object.values(data))



      dispatch(decrement(firebasedata))

    });


  }






  // useEffect(() => {

  //   dispatch(decrement())



  // }, [110000])





  const count = useSelector(state => state.counter)
  console.log(count.posts)
  console.log(count.currentUser)





  const like = (payload) => {





    set(ref(database, `pics/${payload.id}`), {

      pic: payload.pic,
      username: payload.username,
      userpic: payload.userpic,
      id: payload.id,
      // like : true
      likers: [count.currentUser]



    });




  }






  const google_login = () => {






    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {



        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        dispatch(currentuser(user.displayName))




      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // const email = error.email;

        // const credential = GoogleAuthProvider.credentialFromError(error);

      });





  }










  return (







    <div className="parent">

      {/* <button onClick={() => { dispatch(decrement()); console.log(count) }} > Click kro</button> */}
      <button onClick={() => fetchfirebase()} >Click kro to</button>
      <button onClick={() => google_login()} >Google login</button>

      {count.posts.map((v, i) =>

        <div className="post" key={i} >

          <div className="name">

            <div className="name_img">

              <img className="round"
                src={v.userpic}
                referrerPolicy="no-referrer"
              />

              <p className='p'>{v.username} </p>

            </div>



            <p className="time">12:48</p>
          </div>


          <img className="post_img"
            src={v.pic} />



          <div className="like">

            <img onClick={() => like(v)} src={v.likers.includes(count.currentUser)? likepic : unlike} />

          </div>


          {/* <div className='coment' >
            Comment

          </div> */}

        </div>


      )}


    </div>






  )
}




export default App;
