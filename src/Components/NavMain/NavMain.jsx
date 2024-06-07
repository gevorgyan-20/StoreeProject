import NavHed from '../NavHed/NavHed';
import NavLog from '../NavLog/NavLog';
import NavBrend from '../NavBrend/NavBrend';
import './NavMain.css'
const NavMain = () =>{
    return(
        <div className="NavMainBox">
            <NavHed/>
            <NavLog/>
            <NavBrend/>
        </div>
    );
}
export default NavMain;