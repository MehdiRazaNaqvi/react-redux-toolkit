import { useState } from "react"




import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { increment } from './store/counterslice'


import { signInWithPopup } from "firebase/auth"

import { auth } from "./firebase/firebase"
import { GoogleAuthProvider } from "firebase/auth"








const App = () => {


    const navigate = useNavigate();

    // const count = useSelector(state => state.counter)


    const dispatch = useDispatch()

    const [pic, setpic] = useState("");

    const [payload, setpayload] = useState({ username: "", userpic: "", pic: pic })




    const google_login = () => {






        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {



                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;

                setpayload({ username: user.displayName, userpic: user.photoURL, pic: payload.pic })




            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // const email = error.email;

                // const credential = GoogleAuthProvider.credentialFromError(error);

            });





    }







    return (
        <div >


            <button className="btn btn-outline-dark" onClick={() => google_login()} >Log in</button>
            <input className="form-control" type="text" onChange={(e) => { setpayload({ ...payload, pic: e.target.value }); console.log(payload) }} />


            <button onClick={() => { dispatch(increment(payload)); }} >Click kro</button>


        </div>
    )
}


export default App

