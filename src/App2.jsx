import { useState } from "react"




import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { decrement, increment, currentuser } from './store/counterslice'


import { signInWithPopup } from "firebase/auth"

import { auth } from "./firebase/firebase"
import { GoogleAuthProvider } from "firebase/auth"




// import { PowerBIEmbed } from 'powerbi-client-react';




const App = () => {


    const navigate = useNavigate();

    // const count = useSelector(state => state.counter)


    const dispatch = useDispatch()


    const [payload, setpayload] = useState({ username: "", userpic: "", pic: "" })




    const google_login = () => {






        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {



                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;

                setpayload({ username: user.displayName, userpic: user.photoURL, pic: payload.pic })

                dispatch(currentuser(user.displayName))




            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // const email = error.email;

                // const credential = GoogleAuthProvider.credentialFromError(error);

            });

        navigate("/feed")



    }







    // return (
        // <div >

        //     {/* 
        //     <button className="btn btn-outline-dark" onClick={() => google_login()} >Log in</button>
        //     <input className="form-control" type="text" onChange={(e) => { setpayload({ ...payload, pic: e.target.value }); console.log(payload) }} />


        //     <button onClick={() => { dispatch(increment(payload)); navigate('/feed') }} >Click kro</button> */}






        //     <PowerBIEmbed
        //         embedConfig={{
        //             type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        //             id: '<Report Id>',
        //             embedUrl: '<Embed Url>',
        //             accessToken: '<Access Token>',
        //             tokenType: models.TokenType.Embed,
        //             settings: {
        //                 panes: {
        //                     filters: {
        //                         expanded: false,
        //                         visible: false
        //                     }
        //                 },
        //                 background: models.BackgroundType.Transparent,
        //             }
        //         }}

        //         eventHandlers={
        //             new Map([
        //                 ['loaded', function () { console.log('Report loaded'); }],
        //                 ['rendered', function () { console.log('Report rendered'); }],
        //                 ['error', function (event) { console.log(event.detail); }]
        //             ])
        //         }

        //         cssClassName={"report-style-class"}

        //         getEmbeddedComponent={(embeddedReport) => {
        //             window.report = embeddedReport;
        //         }}
        //     />
        //     How to bootstrap a PowerBI report:
        //     <PowerBIEmbed
        //         embedConfig={{
        //             type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        //             id: undefined,
        //             embedUrl: undefined,
        //             accessToken: undefined,    // Keep as empty string, null or undefined
        //             tokenType: models.TokenType.Embed
        //         }}
        //     />










    //     </div>
    // )
}


export default App

