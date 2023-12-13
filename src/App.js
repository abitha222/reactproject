// import logo from './logo.svg';
// import './App.css';
// import LoginForm from './component/LoginForm';
// //import RegistrationForm from './component/RegistrationForm';
// function App() {
//   return (
//     <div className="App">
//     <LoginForm/>
//       {/* <RegistrationForm/> */}
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginForm';

import './App.css'
import RegistrationForm from './component/RegistrationForm';

function App() {
 return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;