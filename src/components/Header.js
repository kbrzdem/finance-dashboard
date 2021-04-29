
import { NavLink } from "react-router-dom"
const Header = ({headers}) => {

    const resultHTML = [];
    headers.forEach(({id,title,link}) => {
        resultHTML.push(<NavLink exact to={link} key={id}>{title} </NavLink>)        
    });

    return (
        <>
            <aside className="header">
                <div className="container">
                    <div className="nav-wrap">
                        <figure className="nav-wrap__img">
                            <NavLink to=" "><img src="https://i.resmim.net/i/logo.png.png" alt="logo" />Virtual Dashboard</NavLink>

                        </figure>

                        <nav className="nav-wrap__nav">
                            {resultHTML} 
                        </nav>
                        <div className="nav-wrap__card">
                            
                               <p>History available</p> 
                               <span>Check your weekly transaction reports</span>
                            
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
};

export default Header
