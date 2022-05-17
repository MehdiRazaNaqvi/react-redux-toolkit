
import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import { increment, decrement, likefn, currentuser } from "./store/counterslice"
import { useEffect } from 'react';

import unlike from "./pics/heart.svg"
import likepic from "./pics/heart-fill.svg"

import { set, ref, onValue, remove } from 'firebase/database';
import { database } from "./firebase/firebase";

import Example from "./navbar"



import { auth } from "./firebase/firebase"
import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom';



import alanBtn from "@alan-ai/alan-sdk-web";

function App() {


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const fetchfirebase = () => {



    const starCountRef = ref(database, 'pics/');

    onValue(starCountRef, (snapshot) => {

      const data = snapshot.val();


      const firebasedata = (Object.values(data))



      dispatch(decrement(firebasedata))

    });


  }






  // useEffect(() => {


  //   fetchfirebase()



  // }, [110000])






  useEffect(() => {

    fetchfirebase()

    alanBtn({

      key: "c6eb400ab872978fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {

        // console.log(commandD.command)
        if (commandData.command == "login") {
          // navigate("/")
          google_login()
        }
      }


    });

  }, []);








  const count = useSelector(state => state.counter)
  console.log(count.posts)






  const like = (payload) => {





    set(ref(database, `pics/${payload.id}`), {

      pic: payload.pic,
      username: payload.username,
      userpic: payload.userpic,
      id: payload.id,
      // like : true
      // likers: [count.currentUser]



    });




  }






  const google_login = () => {






    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {



        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        dispatch(currentuser(user))




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
          <img className="navbar-brand" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

          <div className='content' >

            <p onClick={() => navigate("/feed")} >Feed</p><p onClick={() => { count.currentUser.providerId == "firebase" ? navigate("/") : alert("log in first") }} >Post</p><p onClick={() => google_login()} >Log in</p> {count.currentUser.providerId == "firebase" ? <img referrerPolicy="no-referrer" className='round_img' src={count.currentUser.photoURL} /> : null}

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

            <img onClick={() => like(v)} src={unlike} />

          </div>



        </div>


      )}


    </div>






  )
}




export default App;
