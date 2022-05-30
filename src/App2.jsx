import { useState } from "react"




import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { decrement, increment, currentuser } from './store/counterslice'






// import { PowerBIEmbed } from 'powerbi-client-react';




const App = () => {


    const navigate = useNavigate();




    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)


    const [payload, setpayload] = useState({ username: count.currentUser.username, userpic: count.currentUser.photoURL, pic: "" })









    return (
        <div >


            <input className="form-control" type="text" onChange={(e) => { setpayload({ ...payload, pic: e.target.value }); console.log(payload) }} />


            <button className="btn btn-outline-success" onClick={() => { dispatch(increment(payload)); navigate('/react-redux-toolkit') }} >Post Now</button>












        </div>
    )
}


export default App

