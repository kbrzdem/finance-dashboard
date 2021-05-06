const Analytics = () => {
  return (
    <>
      <div className="analytics">
        <div className="analytics__wrap">
          <div>
            <p className="analytics__title">Analytics</p>
          </div>
          <div>
            <span className="after after--color"></span>
            <span className="after after--card after--color"></span>
            <span className="after after--card2 after--color"></span>
          </div>
        </div>

        <div className="analytics__date">
          <div className="analytics__date-sub">
            <p className="analytics__date-subtitle">23</p>
            <span>March</span>
          </div>
          <div className="analytics__date-sub analytics__date-sub--padding">
            <p className="analytics__date-subtitle">30</p>
            <span>Aug</span>
          </div>
          <div className="analytics__date-sub">
            <p className="analytics__date-subtitle">25</p>
            <span>Sep</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
