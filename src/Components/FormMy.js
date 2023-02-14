import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ChildrenDetails2 from "./ChildrenDetails2";
import { userContext } from "./userContext";
import { useState, useContext, createContext } from "react";

export default function FormMy() {
  const userCtx = useContext(userContext);

  return (
    <div>
      <h1>שלום</h1>
      <h3>
        {userCtx.firstName} {userCtx.lastName}
      </h3>
      <h3>אנחנו שמחים שהצטרפת אלינו</h3>
      כדי למלא נכון את הטפסים נא הצמד להוראות הבאות
      <br></br>
      בכל דף שתפתח יהיה לך צד אחד של נתונים שאתה צריך להזין
      <br></br>
      ובצד השני תצטרך להזין את הנתונים
      <br></br>
      אנא בדוק שהינך מכניס את הנתונים הנכונים וממלא את כל השדות
      <br></br>
      ברגע ששימת להזין את כל המידע לחץ על כפתור שליחה
      <br></br>
      ופרתיך ישמרו במערכת 
      <br></br>
      אם ברצונך להוסיף ילד לחץ על כפתור שליחה ולאחריו על כפתור 
      <br></br>
      add children
      <br></br>
     <h6> במקרה ותראה שנתוני בנך לא נכנסו ומגיעה שגיאה </h6>
      <br></br>
     <h4> זה כיוון שאתה לא נמצא במאגר אנא הכנס פרטיך </h4>
      <h4>זכור</h4>
      <h5>כל השדות הינם חובה </h5>
    </div>
  );
}
