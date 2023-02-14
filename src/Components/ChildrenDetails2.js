import React from "react";
import { useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userContext } from "./userContext";
import BayBay from "./BayBay";
import { useNavigate } from "react-router-dom";
import Help from "./Help";
export default function ChildrenDetails2(props) {
  const userCtx = useContext(userContext);
  const navigate1 = useNavigate();
  function bay() {
    navigate1("/BayBay");
    <BayBay></BayBay>;
    console.log("navigate BayBay");
  }
  function help()
  {
    navigate1("/Help");
    <Help></Help>;
    console.log("navigate Help");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  function addOther() {
    // help();
    navigate1("/Help");
    <Help></Help>;
    console.log("navigate Help");
  }
  let parents;
  let currentParent;
  async function onSubmit() {
    console.log("enter to add ");
   // console.log(userCtx.idUser + "id user");
    await axios.get(`https://localhost:7068/api/User`).then((res) => {
      parents = res.data;
      console.log(parents);
      currentParent = res.data.find((p) => p.idUser === userCtx.idUser);
      // if(currentParent.id=null)
      // return <h1>אתה מנסה להוסיף ילד לאבא שאינו קיים </h1>
      console.log("current iduser", currentParent.id);
    axios
      .post(`https://localhost:7068/api/Children`, {
        IdChildren: userCtx.idUserC,
        FirstName: userCtx.firstNameC,
        LastName: userCtx.lastNameC,
        DateOfBirth: userCtx.dateOfBirthC,
        IdUser: currentParent.id,
      })
      .then((r) => {
        console.log(r.data);
        console.log("good post=add בילד");
      })
      .catch((error) => {
        console.log(error);
        console.log(
          "wrong post children הנננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננ" +
            error
        );
      });
    });
  }

  return (
    <div>
      <form>
        <label>Id:</label>
        <input
          onInput={(e) => {
            userCtx.setIdUserC(e.target.value);
            console.log("idc");
          }}
          defaultValue={userCtx.idUserC}
          type="text"
          placeholder="IdChildren"
          name="Idc"
          required="required"
          {...register("Idc", {
            required: true,
            minLength: 9,
            maxLength: 9,
            pattern: "^[0-9.]*$",
          })}
        ></input>
        {errors.Idc && errors.Idc.type === "maxLength" && (
          <p>הקש 9 ספרות בלבד</p>
        )}
        {errors.Idc && errors.Idc.type === "minLength" && (
          <p>הקש 9 ספרות בלבד</p>
        )}
        {errors.Idc && errors.Idc.type === "pattern" && <p>הקש ספרות בלבד</p>}
        <br></br>
        <br></br>

        <label>First Name:</label>
        <input
          onInput={(e) => {
            userCtx.setFirstNameC(e.target.value);
            console.log("first");
          }}
          defaultValue={userCtx.firstNameC}
          required="required"
          {...register("firstName", {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
          name="firstName"
          type="text"
          placeholder="First name"
        />
        {errors.firstName && errors.firstName.type == "minLength" && (
          <p>"אנא בדוק שהקשת שם נכון </p>
        )}
        {errors.firstName && errors.firstName.type == "maxLength" && (
          <p>"אנא בדוק שהקשת שם נכון </p>
        )}
        <br></br>

        <label>Last Name:</label>
        <input
          onInput={(e) => {
            userCtx.setLastNameC(e.target.value);
          }}
          defaultValue={userCtx.lastNameC}
          required="required"
          {...register("lastName", {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
          name="lastName"
          type="text"
          placeholder="Last name"
        />
        {errors.lastName && errors.lastName.type == "minLength" && (
          <p>"אנא בדוק שהקשת שם נכון </p>
        )}
        {errors.lastName && errors.lastName.type == "maxLength" && (
          <p>"אנא בדוק שהקשת שם נכון </p>
        )}
        <br></br>

        <label>Date Of Birth:</label>
        <input
          onInput={(e) => {
            userCtx.setDateOfBirthC(e.target.value);
            console.log(
              userCtx.idUser,
              userCtx.firstNameC,
              userCtx.lastNameC,
              userCtx.dateOfBirthC
            );
          }}
          defaultValue={userCtx.dateOfBirthC}
          required="required"
          type="Date"
          placeholder="Date Of Birth"
          {...register("DateOfBirth", {
            required: true,
            minLength: 6,
            pattern: "^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]d{4}$",
            maxLength: 6,
          })}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </form>
      <button className="btn btn-info" onClick={onSubmit}>
        SEND
      </button>
      <br></br>
       <br></br>
      <button className="btn btn-info" onClick={bay}>
        Good Bay
      </button>
      <br></br>
      <br></br>
      <br></br>

      <button className="btn btn-primary" onClick={addOther}>
        to add other
      </button>
    </div>
  );
}
