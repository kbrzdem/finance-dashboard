

const Reviews = () => {
  return (
    <>
      <div className="progresscard">
            <div className="box">
                <div className="percent">
                    <svg className="psvg"  viewBox="0 0 240 240">
                        <circle className="pcrc" cx="120" cy="120" r="100"></circle>
                        <circle className="pcrc pcrc1" cx="120" cy="120" r="100"></circle>
                    </svg>
                    <div className="percent__number">
                        <h1 className="percent__nbr">75<span>%</span> </h1>
                        <span className="percent__text">Rewievs</span>
                    </div>
                </div>
            </div>
            </div> 
            <div className="progresscircle">
            <div className="box-circle">
                <div className="percentcircle">
                    <svg className="svgcircle" viewBox="0 -25 100 250">
                        <circle className="crc-circle" cx="50" cy="50" r="50"></circle>
                        <circle className="crc-circle1 " cx="52" cy="52" r="64"></circle>
                    </svg> 
                </div>
            </div>
            </div>  
    </>

  );
};

export default Reviews;

 
