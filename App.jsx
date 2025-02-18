// import React from 'react'
// import Navbar from './components/Navbar';
// import {BrowserRouter  , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Clasroom from './pages/Clasroom';
// import Assessments from './pages/Assessments';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import Profile from './pages/Profile';
// import PageNotFound from './pages/PageNotFound';
// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Clasroom/>}/>
//             <Route path='/assessment' element={<Assessments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}> 

import { Provider } from "react-redux"
import CakeContainer from "./reduxcomponent/CakeContainer"

//                <Route  path='/profile/myaccount' element={<MyAccount/>}/>
//                <Route  path='/profile/mysettings' element={<MySettings/>}/>
//              </Route>       
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


// import React from 'react'
// import Navbar from './components/Navbar';
// import {BrowserRouter  , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Clasroom from './pages/Clasroom';
// import Assessments from './pages/Assessments';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Clasroom/>}/>
//             <Route path='/assessment' element={<Assessments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}>
//                     <Route path='/profile/myaccount' element={<MyAccount/>}/>
//                     <Route path='/profile/mysettings' element={<MySettings/>}/>
//             </Route>
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



// import React from 'react'
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Home from './crudcomponents/Home';
// import Create from './crudcomponents/Create';
// import Edit from './crudcomponents/Edit';
// import {ToastContainer} from "react-toastify";
// const App = () => {
//   return (
//     <BrowserRouter>
//     <ToastContainer/>
//       <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/create' element={<Create/>}/>
//       <Route path='/edit/:userId' element={<Edit/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from "react"
import CakeContainer from "./reduxcomponent/CakeContainer"
import { Provider } from "react-redux"
import store from "./redux/store"

const App =()=>{
  return(
    <Provider store ={store}>
      <CakeContainer/>
    </Provider>
  )
}
export default App;