import Open from "./Open";
import Analytics from "./Analytics";
import Date from "./Date";
import Audit from "./Audit";
import Reviews from "./Reviews";
import Privilege from "./Privilege";

const User = () => {
  return (
    <>
      <div className="open">
        <Open />

        <Analytics />

        <Date />

        <Audit />
        
        <Reviews />

        <Privilege />
      </div>
    </>
  );
};

export default User;
