import {BrowserRouter , Routes , Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import Counter from "./Counter.js"
import Effect from "./Effect.js"
import Reducer from "./Reducer.js"
import Callback from "./Callbacks.js"
export default function App(){
  return(
    // <BrowserRouter>
    //   <Routes>
    //      <Route path="/" element={<Layout/>}>
    //      <Route index element={<Home/>}/>
    //      <Route path="about" element={<About/>}/>
    //      <Route path="contact" element={<Contact/>}/>
    //      <Route path="service" element={<Service/>}/>
    //       </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Counter/>
      <Effect/>
      <Reducer/>
      <Callback/>
    </div>
  )
}
// import React from 'react'
// import Basic from './Events/Basic'
// import Counter from './Hooks/Usestate/Counter'
// import Layout from './Layout'


// export default function App() {
//   return (
//     <div>
//       <Basic/>
//       <Counter/>
//       <Layout/>
//     </div>
//   )
// }