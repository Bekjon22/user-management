// import React,{useEffect, useState} from 'react';
// import {AvForm, AvField} from 'availity-reactstrap-validation';
// import axios from "axios";
// import {API_PATH, TOKEN_NAME, tokenHeader} from "../component/Constants";
// import {toast} from "react-toastify";
// import {useNavigate} from "react-router-dom";
// import SpinnerLoad from "../page to section/SpinnerLoad";
//
// const LoginPage = () => {
//     const history = useNavigate()
//     const [isLoading, setIsLoading] = useState(true);
//
//     let usernamee = ''
//     let n = [];
//
//     useEffect(() => {
//
//         // Wait for 3 seconds
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1500);
//     }, []);
//
//     function login(event, values) {
//         // console.log(values.username)
//         // console.log(values)
//         usernamee = values.username;
//         axios.post(API_PATH + 'auth/login', {
//             username: values.username,
//             password: values.password
//         }).then((res) => {
//             // console.log(res.data)
//             localStorage.setItem(TOKEN_NAME, "Bearer " + res.data);
//             // console.log(usernamee)
//             axios.get(API_PATH + 'user/role?username=' + usernamee,tokenHeader).then(res => {
//                 // console.log(res.data.name)
//                 n = (res.data.name)
//             })
//             if (n === 'SupperAdmin') {
//                 // console.log(tokenHeader)
//                 history('/catalog')
//             } else if (n === 'Director' || n === 'COORDINATOR') {
//                 // window.location.reload()
//                 history('/dashboard')
//             }
//             // toast.success("Ruhsat")
//         }).catch((error) => {
//             // console.log(error);
//             toast.error("Xatolik!");
//         })
//
//     }
//
//     // function passwordOpen(event) {
//     //     if (event === "password"){
//     //         passwordChange = "text"
//     //     } else {
//     //         event = "password"
//     //         passwordChange = "password"
//     //     }
//     // }
//
//     return isLoading ?
//         <SpinnerLoad/> : (
//
//             <div>
//                 <div className="container mt-5">
//                     <div className="row">
//                         <div className="col-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <AvForm onValidSubmit={login}>
//                                         <AvField
//                                             name="username"
//                                             placeholder="Login"
//                                             type="text"
//                                             required/>
//                                         <AvField
//                                             name="password"
//                                             placeholder="Password"
//                                             type="password"
//                                             required/>
//                                         <button type='submit'
//                                                 className='btn btn-success btn-block'>
//                                             Login
//
//                                         </button>
//                                     </AvForm>
//
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
// };
//
// export default LoginPage;