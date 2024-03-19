import React from 'react';
import './Watch.css';

interface State {
  currentTime: string;
}

export class Watch extends React.Component<Record<string, never>, State> {
  timerID: NodeJS.Timer | undefined;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = { currentTime: new Date().toLocaleTimeString() }; 
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 
    );
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID); 
    }
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    });
  }

  render() {
    return (
      <div className='watch'>{this.state.currentTime}</div> 
    );
  }
}
