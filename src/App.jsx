
import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import { increment, decrement, likefn, currentuser, nayafn } from "./store/counterslice"
import { useEffect } from 'react';

import unlike from "./pics/heart.svg"
import likepic from "./pics/heart-fill.svg"
import comment from "./pics/coment.png"

import { set, ref, onValue, remove } from 'firebase/database';
import { database } from "./firebase/firebase";

import Example from "./navbar"

import { useLayoutEffect } from 'react';



import { auth } from "./firebase/firebase"
import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom';



import alanBtn from "@alan-ai/alan-sdk-web";
import { useState } from 'react';

function App() {


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [commentshow, setcommentshow] = useState(false);

  // console.log(count.posts)

  const fetchfirebase = () => {



    const starCountRef = ref(database, 'pics/');

    onValue(starCountRef, (snapshot) => {

      const data = snapshot.val();


      const firebasedata = (Object.values(data))



      dispatch(decrement(firebasedata))

    });


  }






  useEffect(() => {


    fetchfirebase()



  }, [])



  const count = useSelector(state => state.counter)




  useLayoutEffect(() => {
    function updateScreen(time) {

      alanBtn({
        key: "c6eb400ab872978fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "filter") {

            dispatch(nayafn(commandData.data))
          }


        }
      })
    }

    requestAnimationFrame(updateScreen);
  }, [])

















  const like = (payload) => {


    {
      count.currentUser.providerId ?


        set(ref(database, `pics/${payload.id}`), {

          pic: payload.pic,
          username: payload.username,
          userpic: payload.userpic,
          id: payload.id,
          likers: count.currentUser.uid



        })

        :
        alert("log in first")
    }



  }






  const google_login = () => {






    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {



        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;



        const obj = { username: user.displayName, photoURL: user.photoURL, providerId: user.providerId, uid: user.uid }


        dispatch(currentuser(obj))




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


      <nav className="navbar">

        <div className="container-fluid">
          {/* <a class="navbar-brand" </a> */}
          <img onClick={() => fetchfirebase()} className="navbar-brand" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

          <div className='content' >

            <p onClick={() => { navigate("/react-redux-toolkit"); fetchfirebase() }} >Feed</p><p onClick={() => { count.currentUser.providerId == "firebase" ? navigate("/react-redux-toolkit/post") : alert("log in first") }} >Post</p><p onClick={() => google_login()} >Log in</p> {count.currentUser.providerId == "firebase" ? <img referrerPolicy="no-referrer" className='round_img' src={count.currentUser.photoURL} /> : null}

          </div>
        </div>

      </nav>













      <hr />


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

            <img className='like_img' onClick={() => like(v)} src={v.likers == count.currentUser.uid ? likepic : unlike} />

            <img className='comment_img' src={comment} />


          </div>







        </div>


      )}


    </div>






  )
}




export default App;
