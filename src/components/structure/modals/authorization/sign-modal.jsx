import { useState } from "react";
import SignInModal from "../../modals/authorization/sign-in/sign-in-modal.jsx";
import SignUpModal from "../../modals/authorization/sign-up/sign-up-modal.jsx";

const SignModal = () => {

    const [isSignIn, setSignIn] = useState(false);

    const handleChangeWindow = () => {
        setSignIn(!isSignIn);
    }

    return (
        <div>{isSignIn ? <SignInModal method={handleChangeWindow}/> : <SignUpModal method={handleChangeWindow}/>}</div>
    );
}

export default SignModal;