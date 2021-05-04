
import Section1 from "./Section1";
import Section2 from "./Section2";

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8">

                        <section className="section1">
                            <Section1 />
                        </section>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <section className="section2">
                            <div className="container">

                                <Section2 />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Dashboard
