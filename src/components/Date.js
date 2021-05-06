const Date = () => {
  return (
    <>
      <div className="date">
        <div className="date__day">
          <span>Mo</span>
          <span className="date__daysub">12</span>
        </div>
        <div className="date__day date__day--background">
          <span>Tu</span>
          <span className="date__daysub date__daysub--color">13</span>
        </div>
        <div className="date__day">
          <span>We</span>
          <span className="date__daysub">14</span>
        </div>
        <div className="date__day">
          <span>Th</span>
          <span className="date__daysub">15</span>
        </div>
        <div className="date__day date__day--after">
          <span>Fr</span>
          <span className="date__daysub date__daysub">16</span>
        </div>
        <div className="date__day">
          <span>Sa</span>
          <span className="date__daysub">17</span>
        </div>
        <div className="date__day">
          <span>Su</span>
          <span className="date__daysub">18</span>
        </div>
      </div>
    </>
  );
};

export default Date;
