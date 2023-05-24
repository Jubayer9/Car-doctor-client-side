import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn}= useContext(AuthContext)
    const handleGoogleSinIn = ()=>{
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(err => {
            console.error(err)
        });
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
            <button  onClick={handleGoogleSinIn} className="btn btn-circle btn-outline">

  G
</button>
            </div>
        </div>
    );
};

export default SocialLogin;