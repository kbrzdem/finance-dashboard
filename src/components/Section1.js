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
            <div className="card">
                <Sessions />
            </div>
            <div>
                <Chart/>
            </div>
            <div className="card">
                <Subscribers />
            </div>
            <div className="profıt">
                <Profıt />
            </div>

        </>
    )
};

export default Section1;
