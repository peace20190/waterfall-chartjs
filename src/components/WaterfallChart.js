import React, {Component} from 'react';
import {Chart, Bar} from 'react-chartjs-2';
import waterFallPlugin from 'chartjs-plugin-waterfall';

class WaterfallChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      chartOption:props.chartOption,
      plugins:props.plugins
    }
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={this.state.chartOption}
          plugins={[waterFallPlugin]}
        />
      </div>
    )
  }
}

export default WaterfallChart;
