import Sessions from  "./Sessions";
import Subscribers from  "./Subscribers";



const Section1 = () => {
    return (
        <>
            <div>
                <input type="text" name="" placeholder="Search" id="" />
            </div>
            <div className="card">
                <Sessions />
            </div>
            <div>
                <Sessions />
            </div>
            <div className="card">
                <Subscribers />
            </div>
            <div>
                <Sessions />
            </div>

        </>
    )
};

export default Section1;
