import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import "./App.css";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import chartexample from "./chartexample.jsx";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class Charts extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Card className="card-chart">
          <CardHeader>Bar Chart</CardHeader>
          <CardBody>
            <div className="chart-area">
              <Bar data={chartexample.data} options={chartexample.options} />
            </div>
          </CardBody>
        </Card> */}
        <Bar
          data={data}
          width={100}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default Charts;
