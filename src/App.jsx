
import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import { increment, decrement, likefn } from "./store/counterslice"
import { useEffect } from 'react';

import unlike from "./pics/heart.svg"
import like from "./pics/heart-fill.svg"

import { set, ref, onValue } from 'firebase/database';
import { database } from "./firebase/firebase";



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









  return (







    <div className="parent">

      {/* <button onClick={() => { dispatch(decrement()); console.log(count) }} > Click kro</button> */}

      {count.posts.map((v, i) =>

        <div className="post" key={i} >

          <div className="name">

            <div className="name_img">

              <img className="round"
                src={v.userpic} />

              <p className='p'>{v.username} </p>

            </div>



            <p className="time">12:48</p>
          </div>


          <img className="post_img"
            src={v.pic} />



          <div className="like">

            <img src={v.like == true ? like : unlike} />

          </div>

        </div>


      )}


    </div>






  )
}




export default App;
