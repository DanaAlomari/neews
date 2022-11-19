import Home from './components/page/Home';
import News from './components/page/News';
import NewsDetail from './components/page/NewsDetail';
import NewsSearch from './components/page/components/NewsSearch';
import About from './components/page/About';
import Contact from './components/page/Contact';
import Login from './components/page/Login';
import Signup from './components/page/Signup';

const routes = [
  {title: "Home", path:"/", element:Home, isNav:false},
  {title: "Home", path:"home", element:Home, isNav:true},
  {title: "About", path:"about", element:About, isNav:true},
  {title: "News", path:"news", element:News, isNav:true},
  {title: "Contact", path:"contact", element:Contact, isNav:true},
  {title: "Login", path:"login", element:Login, isNav:false},
  {title: "Signup", path:"signup", element:Signup, isNav:false},
  {title: "NewsDetail", path:"news/:params", element:NewsDetail, isNav:false},
  {title: "NewsSearch", path:"/search", element:NewsSearch, isNav:false},
]

export default routes;