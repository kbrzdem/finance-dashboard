
import { NavLink } from "react-router-dom"
const Aside = ({ headers }) => {

    const resultHTML = [];
    headers.forEach(({ id, title, link,icon }) => {
        resultHTML.push(<NavLink exact to={link} 
        key={id}> <span className="material-icons material-icons--navbar">
        {icon}</span>
        {title} 
    </NavLink>)
    });

    return (
        <>
            <aside className="aside">
                <div className="container">
                    <div className="nav-wrap">
                        <figure className="nav-wrap__img">
                            <NavLink to=" "><img src="https://i.resmim.net/i/logo.png.png" alt="logo" />Virtual Dashboard</NavLink>

                        </figure>
                        <div className="row">
                        <nav className="nav-wrap__nav">
                            {resultHTML}
                        </nav>
                        </div>
                        
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
                </div>
            </aside>
        </>
    )
};

export default Aside
