import Open from "./Open";
import Analytics from "./Analytics";
import Audit from "./Audit";
import Date from "./Date";
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
            </div>

        </>
    )
};

export default User;