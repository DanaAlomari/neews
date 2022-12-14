
// import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};

function Signup(props){
    const [cookies, setCookie] = useCookies(["currentUser"]);
    const [allUsers, setAllusers] = useCookies(["AllUsers"]);
  
    const [allUsersArray, setAllusersArray] = useState([]);
    const navigate = useNavigate();
    const handelSubmit = () => {
      let email = document.getElementById("email").value;
      let name = document.getElementById("name").value;
      let password = document.getElementById("password").value;
      let ConfirmPassword = document.getElementById("ConfirmPassword").value;
  
      if (
        patterns.email.test(email) &&
        patterns.password.test(password) &&
        password == ConfirmPassword
      ) {
        console.log("tets");
        if (checkEmail(email)) {
          let newUser = { name: name, email: email, password: password };
          setAllusersArray([...allUsersArray, newUser]);
          console.log(allUsersArray);
          setCookie("currentUser", newUser, { path: "/" });
          setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
          navigate("/");
        } else {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "This Email is already used",
              denyButtonColor: "#8E05C2",
            });
          }
        } else {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Password or Email pattern ",
            denyButtonColor: "#8E05C2",
          });
        }
      };
    
      function checkEmail(E) {
        let rightUser = allUsersArray?.filter((user) => {
          if (user.email == E) return true;
        });
        if (rightUser[0] == null) {
          return true;
        }
    
        return false;
      }

    
  
    return(
    <div>
<form >
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    {/* <hr> */}

    <label for="nam"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="Name"  id={"name"}
required/>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id={"email"}
 required/>

    <label for="psw"><b>Password</b></label>
    <input type="password"  placeholder="Enter Password" name="psw" id={"password"}
 required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id={"ConfirmPassword"}
 required/>



    <div class="clearfix">
      <button type="button" class="signupbtn" onClick={handelSubmit}
>Sign Up</button>
     

      </div>
</div>

</form>
</div>

  );
}

export default Signup ;