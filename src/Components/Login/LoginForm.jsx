// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link , useNavigate } from "react-router-dom";


// const LoginForm = () => {
//   const navigate = useNavigate()
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // TODO: Implement login logic
//   }

//   const handleEmail = (e) => {
//     setEmail(e.target.value)
//   }

//   const handlePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   const handleApi = () =>{
//     console.log(email , password);
//     axios.post('https://reqres.in/api/login',{
//       email:email,
//       password:password
//     })
//     .then(result =>{
//       console.log(result.data);
//       alert("Sucess");
//       localStorage.setItem('token',result.data.token)
//       navigate('/dashboard')
//     })
//     .catch(error =>{
//       console.log(error);
//     })
//   }

//   return (
//    <div className="container">
//     <div className="row">
//       <div className="col-lg-12">
//         <div className="card">
//           <div className="card-body">
//             <form onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={handleEmail} />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handlePassword} />
//                 </div>
//                 <button type="submit" className="btn btn-primary"  onClick={handleApi}>Login</button>
//               </form>                    
//           </div>
//         </div>
//       </div>
//     </div>
//    </div>


//   );
// }

// export default LoginForm;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../State/actions/authActions';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate('/dashboard')));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={handleEmail} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handlePassword} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
                {error && <div className="text-danger">{error}</div>}
              </form>                    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;



// LoginForm.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { login } from './authActions';

// const LoginForm = () => {
// const dispatch = useDispatch();
// const navigate = useNavigate();

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const isLoading = useSelector((state) => state.auth.isLoading);
// const error = useSelector((state) => state.auth.error);

// const handleLogin = (e) => {
// e.preventDefault();
// dispatch(login(email, password));
// };

// const handleEmail = (e) => {
// setEmail(e.target.value);
// };

// const handlePassword = (e) => {
// setPassword(e.target.value);
// };

// return (
// <div className="container">
// <div className="row">
// <div className="col-lg-12">
// <div className="card">
// <div className="card-body">
// <form onSubmit={handleLogin}>
// <div className="form-group">
// <label>Email</label>
// <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={handleEmail} />
// </div>
// <div className="form-group">
// <label>Password</label>
// <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handlePassword} />
// </div>
// <button type="submit" className="btn btn-primary" disabled={isLoading}>
// {isLoading ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> : null}
// Login
// </button>
// </form>
// {error ? <div className="alert alert-danger mt-3">{error}</div> : null}
// </div>
// </div>
// </div>
// </div>
// </div>
// );
// };

// export default LoginForm;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { login } from '../../State/actions/authActions';

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const error = useSelector((state) => state.auth.error);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password, navigate));
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={handleEmail} />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={handlePassword} />
//                 </div>
//                 <button type="submit" className="btn btn-primary" disabled={isLoading}>
//                   {isLoading ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> : null}
//                   Login
//                 </button>
//               </form>
//               {error ? <div className="alert alert-danger mt-3">{error}</div> : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;







