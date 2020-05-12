import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import WaterfallChart from './components/WaterfallChart'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData:{}
    }
    console.log('This is a component instance:', this);
  }
  componentWillMount() {
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },
      waterfallChartData : {
        datasets: [
          {
            label: 'Closing Costs',
            data: [50],
            backgroundColor: '#e8cdd7',
            stack: 'stack 1',
          },
          {
            label: 'Purchase Price',
            data: [700],
            backgroundColor: '#d29baf',
            stack: 'stack 1',
          },
          {
            data: [200],
            waterfall: {
              dummyStack: true,
            },
            stack: 'stack 2',
          },
          {
            label: 'Opening Loan Balance',
            data: [550],
            backgroundColor: '#bb6987',
            stack: 'stack 2',
          },
          {
            label: 'Initial Cash Investment',
            data: [200],
            backgroundColor: '#a53860',
            stack: 'stack 3',
          },
        ]
      },
      waterfallChartOptions: {
        waterFallPlugin: {
          stepLines: {
            enabled: true,
            startColorStop: 0,
            endColorStop: 0.6,
            startColor: 'rgba(0, 0, 0, 0.55)',
            endColor: 'rgba(0, 0, 0, 0)',
            diagonalStepLines: false,
          },
        },
      }
    });
  }

  render() {
  return (
      <div className="App">
        <div style={{width: 70+'%'}}>
          <BarChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
          <br/><br/><br/>
          <LineChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
          <br/><br/><br/>
          <PieChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
        </div>
        <br/><br/><br/>
        <div style={{width: 70+'%'}}>
          <WaterfallChart chartData={this.state.waterfallChartData} options={this.state.waterfallChartOptions} plugins="waterFallPlugin"/>
        </div>
        
      </div>
    );
  }
}

export default App;
