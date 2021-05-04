import Sessions from  "./Sessions";
import Subscribers from  "./Subscribers";
import Profıt from  "./Profıt";
import Chart from  "./Chart";
import Search from  "./Search";

const Section1 = () => {
    return (
        <>
            <div className="search">
                <Search />
            </div>
            <div className="row">
                <div className="card">
                    <Sessions />
                </div>
            </div>
                <div className="row">
                    <Chart/>
                </div>
            <div className="row">    
                <div className="card">
                <Subscribers />
                </div>
            </div>
            <div className="row"> 
            <div className="profıt">
                <Profıt />
            </div>
            </div>
        </>
    )
};

export default Section1;
