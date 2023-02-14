import { userContext } from "./userContext";
import { useEffect,useContext } from "react"
import ChildrenDetails2 from "./ChildrenDetails2";
import { useNavigate } from "react-router-dom";

export default function Help(props) {
        const userCtx = useContext(userContext);
        const navigate1 = useNavigate();
        function bay() {
          navigate1("/ChildrenDetails2");
          <ChildrenDetails2></ChildrenDetails2>;
          console.log("  enter navigate Help");
        }
        useEffect(() => {
            userCtx.setFirstNameC('')
             userCtx.setIdUserC('')
            userCtx.setDateOfBirthC('')
    
        },[])

return bay();

        
    }
    