import Open from "./Open";
import Analytics from "./Analytics";
import Date from "./Date";
import Audit from "./Audit";
import Reviews from "./Reviews";

const User = () => {
    return (
        <>
            <div className="open">
                <div >
                    <Open />
                </div>
                <div  >
                    <Analytics />
                </div>
                <div  >
                    <Date />
                </div>
                <div  >
                    <Audit />
                </div>
                <div  >
                    <Reviews />
                </div>
            </div>

        </>
    )
};

export default User;