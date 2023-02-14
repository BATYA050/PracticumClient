import UserDetails2 from "./Components/UserDetails2";
import { Route,Router,Routes,BrowserRouter,Link} from "react-router-dom";
import "./App.css";
import ChildrenDetails2 from "./Components/ChildrenDetails2";
import FormMy from "./Components/FormMy";
import UserContext from "./Components/userContext";
import BayBay from "./Components/BayBay";
import Help from "./Components/Help";
//import Ruter from "./Components/Ruter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>  <Link to="./UserDetails2">UserDetails</Link> </div>
      <div> <Link to="./FormMy">FormMy</Link></div>
      <UserContext>
      <Routes>
         {/* <Route path="/" element={<formMy />}/> */}
          <Route path="/ChildrenDetails2" element={<ChildrenDetails2 />} />
          <Route path="/UserDetails2" element={   <UserDetails2 />  }/>
          <Route path="/FormMy" element={<FormMy />} />
          <Route path="/BayBay" element={<BayBay/>} />
          <Route path="/Help" element={<Help/>} />
          {/* <Route path="/BayBay" element={<BayBay/>} /> */}
       </Routes>
        </UserContext>
     </BrowserRouter> 
    </div>
  );
}

export default App;
