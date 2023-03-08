// import './App.css';
// import Home from './Components/Home/Home';
// import LoginForm from './Components/Login/LoginForm';
// import { Route, Routes } from "react-router-dom";
// import Dashboard from './Components/Dashboard/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       {/* <Home/> */}
      
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={ <LoginForm/> } />
//       <Route path="/dashboard" element={ <Dashboard/> } />
//     </Routes>
//      </div>
//   );
// }

// export default App;


import './App.css';
import Home from './Components/Home/Home';
import LoginForm from './Components/Login/LoginForm';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './State/store';


function App() {

  

  return (
    <Provider store={store}>
    <div className="App">
      {/* <Home/> */}
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={ <LoginForm/> } />
      <Route path="/dashboard" element={ <Dashboard/> } />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
