//עובד

///last last
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userContext } from "./userContext";
import ChildrenDetails2 from "./ChildrenDetails2";
import { useNavigate } from "react-router-dom";
import BayBay from "./BayBay";

export default function UserDetails2(props) {
  const userCtx = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("add");
    console.log(
      userCtx.idUser,
      userCtx.firstName,
      userCtx.lastName,
      userCtx.dateOfBirth,
      userCtx.min,
      userCtx.hmd
    );
    axios
      .post("https://localhost:7068/api/User", {
        IdUser: userCtx.idUser,
        FirstName: userCtx.firstName,
        LastName: userCtx.lastName,
        DateOfBirth: userCtx.dateOfBirth,
        Min: userCtx.min,
        HMO: userCtx.hmd,
      })
      .then((result) => {
        console.log(result);
        console.log("good post=add");
      })
      .catch((error) => {
        console.log(error);
        console.log(
          "wrong post user הנננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננננ"
        );
      });
  };

  const navigate = useNavigate();
  const navigate1 = useNavigate();

  function goToChildren() {
    navigate("/ChildrenDetails2");
    <ChildrenDetails2></ChildrenDetails2>;
    console.log("navigate ChildrenDetails2");
  }
  function bay() {
    navigate1("/BayBay");
    <BayBay></BayBay>;
    console.log("navigate BayBay");
  }
  const Example = () => {
    const letterChange = (e) => {
      console.log(e.currentTarget.value);
    };
  };
  return (
    <div className="card border-primary mb-3">
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <label>Id:</label>
        <input
          onInput={(e) => {
            userCtx.setIdUser(e.target.value);
          }}
          defaultValue={userCtx.idUser}
          type="text"
          placeholder="Id"
          name="Id"
          required="required"
          maxLength={9}
          {...register("Id", {
            required: true,
            minLength: 9,
            maxLength: 9,
            pattern: "^[0-9.]*$",
          })}
        ></input>
        {errors.Id && errors.Id.type == "pattern" && <p>הקש ספרות בלבד</p>}
        <br></br>

        <label>First Name:</label>
        <input
          onInput={(e) => {
            userCtx.setFirstName(e.target.value);
          }}
          defaultValue={userCtx.firstName}
          required="required"
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
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
            userCtx.setLastName(e.target.value);
          }}
          defaultValue={userCtx.lastName}
          required="required"
          type="text"
          placeholder="Last name"
          {...register("lastName", {
            required: true,
            minLength: 2,
            maxLength: 10,
            pattern: "/[A-Za-z]",
          })}
        />
        {errors.lastName && errors.lastName.type == "minLength" && (
          <p>"אנא בדוק שהקשת שם נכון </p>
        )}
        {errors.lastName && errors.lastName.type == "maxLength" && (
          <p>"אנא בדוק שהקשת שם נכון </p>
        )}
        <br></br>
        {errors.lastName && <p style={{ color: "red" }}>mast be letters</p>}
        <br></br>

        <label>Date Of Birth:</label>
        <input
          onInput={(e) => {
            userCtx.setDateOfBirth(e.target.value);
          }}
          defaultValue={userCtx.dateOfBirth}
          required="required"
          type="Date"
          placeholder="Date Of Birth"
          {...register("DateOfBirth", { required: true })}
        ></input>

        <br></br>
        <br></br>
        <br></br>
        <label>Gender:</label>
        <select
          onInput={(e) => {
            userCtx.setMin(e.target.value);
          }}
          defaultValue={userCtx.min}
          className="btn btn-primary dropdown-toggle"
          type="text"
          {...register("min", { required: true })}
        >
          {errors.min && errors.min.type == "required" && (
            <p>שדה זה הינו חובה </p>
          )}
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <br></br>
        <br></br>
        <br></br>

        <label>HMO </label>
        <select
          onInput={(e) => {
            userCtx.sethmd(e.target.value);
          }}
          defaultValue={userCtx.hmd}
          className="btn btn-primary dropdown-toggle"
          type="text"
          {...register("hmd", { required: true })}
        >
          {errors.hmd && errors.hmd.type === "required" && (
            <p>שדה זה הינו חובה </p>
          )}
          <option value="leumit">Leumit</option>
          <option value="clalit">Clalit</option>
          <option value="meuchedet">Meuchedet</option>
          <option value="macabi">Macabi</option>
        </select>
        <br></br>
        <br></br>
        <br></br>

        <input className="btn btn-info" type="submit" />
      </form>
      {/* <div><Link to={ChildrenDetails2}></Link> add c</div> */}

      <button className="btn btn-primary" onClick={goToChildren}>
        add children
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button className="btn btn-info" onClick={bay}>
        Good Bay
      </button>
    </div>
  );
}
