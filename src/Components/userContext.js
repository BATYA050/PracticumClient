import { useState, useContext, createContext } from "react";
export const userContext = createContext();
//עובד
export default function UserContext(props) {
  const [idUser, setIdUser] = useState("");
  const [idUserC, setIdUserC] = useState("");
  //const [idRun, setIdRun] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(Date);
  const [min, setMin] = useState("");
  const [hmd, sethmd] = useState("");
  const [firstNameC, setFirstNameC] = useState("");
  const [lastNameC, setLastNameC] = useState("");
  const [dateOfBirthC, setDateOfBirthC] = useState(Date);
  console.log("context")
    return (
        <userContext.Provider value={{idUser ,setIdUser,
            // idRun,setIdRun,
             firstName,setFirstName, lastName, setLastName, dateOfBirth,setDateOfBirth,min, setMin,hmd,sethmd
       ,idUserC,setIdUserC,firstNameC,setFirstNameC,lastNameC,setLastNameC,dateOfBirthC,setDateOfBirthC}}>
            {props.children}
        </userContext.Provider>
       
    );
}