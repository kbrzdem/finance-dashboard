
import { NavLink } from "react-router-dom"
const Aside = ({ headers }) => {

    const resultHTML = [];
    headers.forEach(({ id, title, link,icon }) => {
        resultHTML.push(<NavLink className="nav-wrap__navlink" exact to={link} 
        key={id}> 
        <div className="icon"><span className="material-icons material-icons--navbar">
        {icon}</span></div> 
        {title} 
    </NavLink>)
    });

    return (
        <>
            <aside className="aside">
                    <div className="nav-wrap">
                        <figure className="nav-wrap__img">
                            <NavLink to=" "><img src="https://i.resmim.net/i/logo.png.png" alt="logo" />Virtual Dashboard</NavLink>

                        </figure>
                        
                        <nav className="nav-wrap__nav">
                            {resultHTML}
                        </nav>
                        
                        
                        <div className="nav-wrap__card">
                            <span class="material-icons material-icons--navcard ">
                                restore
                            </span>
                            <h4>History available</h4>
                            <span>Check your weekly transaction reports</span>
                            <span className="after" ></span>
                            <span className="after after--card" ></span>
                            <span className="after after--card2" ></span>

                        </div>
                    </div>
            </aside>
        </>
    )
};

export default Aside
