import { useCookies } from "react-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

function Login(props) {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or password",
        denyButtonColor: "#8E05C2",
      });
    }

    function checkUser() {
      console.log(allUsers);
      let user = allUsers.AllUsers.filter(
        (user) => user.email == currentUser.email
      );
      if (user.length > 0) return true;
    }
  };
    return(
    <div>
<form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvR_24ysMgxsu92-mgl8G-ZqpMrQp11mGolGIH07zN5F1TS0c3VkWrhqqllUshVoThS4&usqp=CAU" alt="Avatar" class="avatar"/>
  </div>

  <div class="container" >
    <label for="uname"><b>Username</b></label>
    <input type="text" id="email" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" id="password" placeholder="Enter Password" name="psw" required/>

    <button type="button"  onClick={handelSubmit}>Login</button>
    <Link
                        to="/signup"
                         style={{color:"#497174",margin:"10px",fontSize:"15px"}}
                      >
                        <small>Create new account</small>
                      </Link>


    
  </div>


</form>
</div>

  );
}

export default Login ;