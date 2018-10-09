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
    background: "#e27354"
  },
  clockTimeFrame:{
    background: "#e27354"
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

    time = time.format('HH:mm:ss'); 
    return (
      <div className="clockCube" style={ styles.clockCube }>
        <div className="clockDate" style={ styles.clockDate } >
          { displayDate }
        </div>
        <div className="clockTime">
          <label>
            { this.props.city }
          </label>
          <div>
            <span style={ styles.clockTimeFrame }>{ hour }</span>:<span style={ styles.clockTimeFrame }>{min}</span>:<span style={ styles.clockTimeFrame }>{sec}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
