import data from "./data.json";
import Chartmonths from "./chartmonths";
import Chartyears from "./Chartyears";

//vievBox={"0 0 ${400px} ${height}"} 
const Chart = ({ children, height, width }) => (
  <svg height={height} width={400}>
    {children}
    
  </svg>
);

const Bar = ({
  fill = "#8D49F2",
  rx = "10",
  ry = "10",
  x,
  y,
  height,
  width,
}) => (
  <rect fill={fill} rx={rx} ry={ry} x={x} y={y} height={height} width={width} />
);

/*const Bar =({props}) => <rect {...props} /> */
const greatestValue = (values) =>
  values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);

const BarChart = ({ data }) => {
  const barWidth = 16;
  const barMargin = 37;
  const width = data.length * (barWidth + barMargin);
  const height = greatestValue(data.map((datam) => datam.LessonsWatched));
  return (
    <Chart height={height} width={width} >
      {data.map((datam, index) => (
        <Bar
          rx="8"
          ry="8"
          key={datam.name}
          fill="#5e27c5ec"
          x={index * (barWidth + barMargin)}
          y={height - datam.LessonsWatched}
          width={barWidth}
          height={datam.LessonsWatched}
        />
      ))}
    </Chart>
  );
};

const Bchart = () => {
  return (
    <>
      <div className="profile">
        <div className="profile__growth">
          <div className="col-6 col-md-6 col-lg-7">
            <div className="profile__overal">
              <h3>Profile Growth</h3>
              <p>Overal Information</p>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <div className="button">
              <a href="/#" className="button__one">
                Monts
              </a>
              <a href="/#" className="button__two">
                Years
              </a>
            </div>
          </div>
        </div>
        
        <div className="profile__chart">
        
          <BarChart data={data} />
          
          <div className="profile__chartsept">
            <div>
            <span className="profile__chart--sept">10 of September</span>

            </div>
            <div>
            <p className="profile__chart--dlr">
              $123001
            </p>
            </div>
          </div> 
          
          <span className="profile__chart--number">90</span>
          <span className="profile__chart--number profile__chart--number1">130</span>
          <span className="profile__chart--number profile__chart--number2">190</span>
          <span className="profile__chart--border"></span>
          <span className="profile__chart--border profile__chart--border--1"></span>
          <span className="profile__chart--border profile__chart--border--2"></span>
          <span className="profile__chart--border profile__chart--border--3"></span>
          <Chartmonths />
          <Chartyears />
        </div>
      </div>
    </>
  );
};

export default Bchart;
