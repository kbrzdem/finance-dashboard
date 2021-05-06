import data from "./data.json";

const Chart = ({ children, height, width }) => (
  <svg vievBox={"0 0 ${400px} ${height}"} height={height} width={400}>
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
  const barWidth = 15;
  const barMargin = 35;
  const rx = 10;
  const width = data.length * (barWidth + barMargin);
  const height = greatestValue(data.map((datam) => datam.LessonsWatched));
  return (
    <Chart height={height} width={width}>
      {data.map((datam, index) => (
        <Bar
          rx="7"
          ry="7"
          key={datam.name}
          fill="#8D49F2"
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
        </div>
      </div>
    </>
  );
};

export default Bchart;
