
import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import { increment, decrement } from "./store/counterslice"
import { useEffect } from 'react';



function App() {


  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(decrement())



  }, [100])


  


  const count = useSelector(state => state.counter)
  console.log(count)








  return (


    <div className="parent">

      {/* <button onClick={() => { dispatch(decrement()); console.log(count) }} > Click kro</button> */}

      {count.map((v, i) =>

        <div className="post" key={i} >

          <div className="name">

            <div className="name_img">
              <img className="round"
                src={v.userpic} />
              <p>{v.username} </p>
            </div>



            <p className="time">12:48</p>
          </div>


          <img className="post_img"
            src={v.pic} />



          <div className="like"></div>

        </div>


      )}


    </div>






  )
}

export default App;
