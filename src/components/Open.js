const Open = () => {
    
  return (
    <>
      <div className="usertitle">
        <div className="usertitle__wrap">
          <div className="usertitle__namewrap">
            <figure className="usertitle__img">
              <img src="https://i.resmim.net/i/user.png" alt="" />
            </figure>
            <div>
              <h3 className="usertitle__name">Mike Lock</h3>
              <p className="usertitle__job">UI Designer</p>
            </div>
          </div>
          <div>
            <span className="usertitle__handle"> </span>
            <span className="usertitle__handle usertitle__handle--two"> </span>
          </div>
        </div>
      </div>
      <div className="opentitle">
        <div className="subtitle">

          <div className="opentitle__pro">
            <span className="opentitle__sub">Open Projects</span>
            <span className="opentitle__sub1">500</span>
          </div>

          <div className="opentitle__detail">
            <span class="material-icons material-icons--open ">
              chevron_right
            </span>
          </div>
        </div>

        <div className="subtitle">
          <div className="opentitle__pro">
            <span className="opentitle__sub">Successfully Completed</span>
            <span className="opentitle__sub1">3502</span>
          </div>

          <div className="opentitle__detail">
            <span class="material-icons material-icons--open">
              chevron_right
            </span>
          </div>
        </div>

        <div className="subtitle">
          <div className="opentitle__pro">
            <span className="opentitle__sub">Earned This Month</span>
            <span className="opentitle__sub1">$523001</span>
          </div>

          <div className="opentitle__detail">
            <span class="material-icons material-icons--open">
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Open;
