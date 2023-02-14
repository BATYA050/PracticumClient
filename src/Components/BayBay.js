import { useEffect,useContext } from "react"
//import React from "react";
//import UserContext from "./userContext";
import { userContext } from "./userContext";


export default  function BayBay()
{
    const userCtx = useContext(userContext);

    useEffect(() => {

        userCtx.setIdUser('')

        userCtx.setIdUserC('')

        userCtx.setFirstName('')

        userCtx.setDateOfBirth('')

        userCtx.setMin('')

        userCtx.sethmd('')

        userCtx.setFirstNameC('')

        userCtx.setDateOfBirthC('')

    },[])

    return (

        <h1>הפרטים נשמרו בהצלחה!!</h1>

    )

}