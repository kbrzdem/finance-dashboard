
import Section1 from  "./Section1";
import Section2 from  "./Section2";

const Dashboard = () => {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <Section1 />
                </div>
            </section>
            <section className="section2">
                <div className="container">
                    <Section2 />
                </div>
            </section>
        </>
    )
};

export default Dashboard
