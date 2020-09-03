import Home from "./components/Home";
import Login from './components/Login';
import Signup from "./components/Signup";
import Lobby from "./components/Lobby";
import Game from "./components/Game";

export default [
    {path:'/', component: Home, meta:{title:'Home'}},
    {path:'/login', component: Login, meta:{title:'Login'}},
    {path:'/signup', component: Signup, meta:{title:'Signup'}},
    {path:'/lobby', component: Lobby, meta:{title:'Lobby'}},
    {path:'/game', component: Game, meta:{title:'Game'}},
]