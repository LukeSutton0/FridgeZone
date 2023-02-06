import { useLogin } from "./useLogin"
import { useAuthContext } from "../../hooks/useAuthContext";

//fix later



// function checkAuth(nextState, replace, next) {

//   const{login} = useLogin()
//   const navigate = useNavigate()
//   const {user} = useAuthContext()

//   const handleSubmit = async (e) =>{
//     e.preventDefault() //stops page refreshing
//     await login(username,password)
//     navigate('/home');
//     }


//     //const response = await fetch('/')

//     // if (!authenticated) {
//     //   replace({
//     //     pathname: "/",
//     //     state: {nextPathname: nextState.location.pathname}
//     //   });
//     // }
//     // next();
  //}