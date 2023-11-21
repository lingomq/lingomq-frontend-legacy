import { useState } from "react";
import SignUpModal from "./sign-up/SignUpModal.jsx";
import SignInModal from "./sign-in/SignInModal.jsx";

const SignModal = () => {

    const [isSignIn, setSignIn] = useState(true);

    const handleChangeWindow = () => {
        setSignIn(!isSignIn);
    }

    return (
        <div>{isSignIn ? <SignInModal method={handleChangeWindow}/> : <SignUpModal method={handleChangeWindow}/>}</div>
    );
}

export default SignModal;