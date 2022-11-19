import routes from '../../routes';
import {Link} from 'react-router-dom';

import "../../index.css"
import { useCookies } from "react-cookie";


function Nav(props){

const [cookies, setCookie, removeCookie] = useCookies(["currentUser"])
const handelLogout = () => {
  removeCookie("currentUser");
};
  return(
    <>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-danger text-decoration-none">
        <span className="fs-4" style={{color:"#EB6440"}} >Top News</span>
      </a>

      <ul className="nav nav-pills"  >
      {
          routes.filter(
            item => item.isNav
          ).map(
            (item,index) =>
              <li className="nav-item"  key={index}><Link className="nav-link" to={item.path}>{item.title}</Link></li>
          )
        }
        {console.log(cookies.currentUser == null)}
              <li className="nav-item">
                {cookies.currentUser == null && <Link className="nav-link" to="/login">Login</Link>}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {cookies.currentUser != null && (
                    <span onClick={handelLogout}  className="nav-link p-0">logout</span>
                  )}
                </Link>
              </li>
            </ul>
            {/* <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <TiTimes /> : <FaBars />}
            </button> */}
    

    </header>
  </div>
  </>
  );
}

export default Nav;