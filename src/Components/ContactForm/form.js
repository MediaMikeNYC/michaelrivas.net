import React, { useState } from "react";
import Axios from "axios";
import "./form.css";
import SuccessFlashMessage from "../FlashMessages/SuccessFlashMessage";
import FailedFlashMessage from "../FlashMessages/FailedFlashMessage";

function ContactInput(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  //const [password, setPassword] = useState();
  const [flashMessage, setFlashMessage] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("https://backendformyporfolio.herokuapp.com/register", { username, email, password: "hello7777777!!!" });
      console.log("user was successfully created");
      setFlashMessage(true);
    } catch (e) {
      console.log("there was an error");
      setFailedMessage(true);
    }
  }

  return (
    <div className="mainDiv">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Name</label>
          <input className="inputField" onChange={e => setUsername(e.target.value)} type="text" placeholder="First name only" name="username"></input>
        </div>
        <div className="inputDiv">
          <label>Email</label>
          <input className="inputField" onChange={e => setEmail(e.target.value)} type="text" email="Email"></input>
        </div>
        {/*   <div>
          <label>Password </label>
          <input onChange={e => setPassword(e.target.value)} type="text" email="email"></input>
        </div>
  */}
        <div>
          <input type="submit" className="inputButton" value="Submit"></input>
        </div>
      </form>

      {flashMessage ? <SuccessFlashMessage /> : null}
      {failedMessage ? <FailedFlashMessage /> : null}
    </div>
  );
}

export default ContactInput;
