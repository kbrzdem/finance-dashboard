

const Sessions = () => {


    return (
        <>
            <div className="sessionscard">
                <span class="material-icons material-icons--sessions ">
                    timer
                </span>
                <p className="sessionscard__title">Sessions</p>
                <p className="sessionscard__title1" >24k</p>
                <span className="sessionscard__title2">+33.45%</span>
            </div>
            <div className="sessionscard">
                <span class="material-icons material-icons--sessions">
                    desktop_mac
                </span>
                <p className="sessionscard__title" >Avg.Sessions</p>
                <p className="sessionscard__title1" >00:18</p>
                <span className="sessionscard__title2">-112.45%</span>
            </div>
            <div className="sessionscard">
                <span class="material-icons material-icons--sessions">
                    av_timer
            </span>
                <p className="sessionscard__title">Bounce Rate</p>
                <p className="sessionscard__title1">$2400</p>
                <span className="sessionscard__title2">+62.10%</span>
            </div>
            <div className="sessionscard">
                <span class="material-icons material-icons--sessions">
                    event_note
            </span>
                <p className="sessionscard__title">Avg.Watsh time</p>
                <p className="sessionscard__title1" >45.42</p>
                <span className="sessionscard__title2">+4.46%</span>
            </div>
        </>
    )
};

export default Sessions