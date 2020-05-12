import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      chartOption:props.chartOption
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={
            {
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:15
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }
          }
        />
      </div>
    )
  }
}

export default LineChart;
