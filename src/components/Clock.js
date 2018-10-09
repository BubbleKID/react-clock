import React, { Component } from 'react';

const styles ={
  clockCube:{
    background: "#fa7d5a",
    flex: "0 0 auto",
    justifyContent: "center",
    flexDirection: "column",
    width:"400px",
    height: "300px",
    margin:"100px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  clockDate:{
    height: "60px",
    background: "#e27354",
    lineHeight: "60px",
  },
  clockTimeFrame:{
    width: "60px",
    height: "60px",
    background: "#e27354",
    margin: "auto",
    display: "flex",
    alignItems: "center", /*指定垂直居中*/
    justifyContent: "center",
  },
  clockTimeWrap:{
    margin: "50px",
    display: "flex",
  },
  clockCity:{
    margin: "30px",
  },
  clockColon:{
    lineHeight: "60px",
  }
}

class Clock extends Component {
  constructor(){
    super();
    this.state = { time: new Date() };
  }

  componentDidMount(){
    this.updateTime();
  }
  updateTime(){
    this.timerID = setInterval(()=>{
      this.setState({ time: new Date() });
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

 

  render() {
    var moment = require('moment-timezone');
    var time = moment.tz(this.state.time, this.props.timezone);
    var displayDate = time.format('EE MMM DD YYYY');
    var hour = time.format('HH');
    var min = time.format('mm');
    var sec = time.format('ss');
    return (
      <div className="clockCube" style={ styles.clockCube }>
        <div className="clockDate" style={ styles.clockDate } >
          { displayDate }
        </div>
        <div className="clockTime">
          <div style={ styles.clockCity }>
            { this.props.city }
          </div>
          <div style={ styles.clockTimeWrap }>
            <div style={ styles.clockTimeFrame }>{ hour }</div>
            <div style={ styles.clockColon }>: </div>
            <div style={ styles.clockTimeFrame }>{ min }</div>
            <div style={ styles.clockColon }>: </div>
            <div style={ styles.clockTimeFrame }>{ sec }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
