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
            
                <div className="card row">
                    <Sessions />
                </div>
            
                <div className="row">
                    <Chart/>
                </div>
               
                <div className="card row">
                <Subscribers />
                </div>
            
            
            <div className="profıt row">
                <Profıt />
            </div>
        </>
    )
};

export default Section1;
