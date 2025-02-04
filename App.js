import logo from './logo.svg';

import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Footer from './components/Footer';
const App = () => {
  return (
    <div classname = 'app'>
      <Navbar/>
      <Main/>
      <div  className='sidebar'>
      <Sidebar1/>
      <Sidebar2/>
      </div>
      <Footer/>
    </div>
  )
}

// function App() {
 
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
      
//       <h1 style={{color:"red"}}>Hello sir</h1>
//       <h1 style={{color:"red"}}>One hour is wasted because of vaishali</h1>
//     </div>
//   );
// }

// export default App;




export default App