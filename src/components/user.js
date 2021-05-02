import Open from  "./Open";
import Analytics from  "./Analytics";
import Audit from  "./Audit";

const User = () => {
    return (
        <>
            <div className="open" >
                <Open />
            </div>
            <div className="analytics" >
                <Analytics />
            </div>
            <div className="audit" >
                <Audit />
            </div>
        </>
    )
};

export default User;