import { NavLink } from "react-router-dom"
import "./NavBrend.css"
const NavBrend =() =>{
    return(
        <div className="NavBrendBox">
            <div className="Brends">
                <NavLink to='/krasovki'>Кросовки</NavLink>
                <NavLink to='/odejda'>Одежда</NavLink>
                <NavLink to='/accesories'>Аксессуары</NavLink>
                <NavLink to='./BlogPage'>Блог</NavLink>
                <NavLink to='./otziv'>Отзывы</NavLink>
            </div>
            <div className="BrendInput">
                <form action="">
                    <input type="text" title="poisk" />
                    <button className="SearchBut"><svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_68)"><path d="M19.3749 17.0682C22.736 12.4275 21.6119 6.00151 16.8657 2.71589C12.1196 -0.56973 5.54754 0.528617 2.18724 5.1701C-1.17305 9.81079 -0.0497416 16.236 4.69723 19.5216C8.08482 21.8667 12.5636 22.0473 16.1367 19.9841L23.9003 27.5296C24.7386 28.3924 26.1333 28.427 27.0157 27.6073C27.8981 26.7885 27.9334 25.4248 27.096 24.5619C27.0695 24.5345 27.0438 24.5093 27.0157 24.4834L19.3749 17.0682ZM10.7747 17.7717C7.02414 17.7724 3.98342 14.8016 3.98101 11.1345C3.9802 7.46729 7.01852 4.49413 10.7698 4.49256C14.5156 4.49099 17.5547 7.45708 17.5619 11.1195C17.5683 14.7875 14.5316 17.7654 10.7795 17.7717C10.7779 17.7717 10.7771 17.7717 10.7747 17.7717Z" fill="white"/></g><defs><clipPath id="clip0_2_68"><rect width="28" height="27.3778" fill="white" transform="translate(0 0.822235)"/></clipPath></defs></svg></button>
                </form>


            </div>

        </div>
    )
}
export default NavBrend