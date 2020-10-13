import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./chart.css";

class PopChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "New Songs",
          data: ["2040", 3350, 3560, 4020, 2480, 2220],
        },
        {
          name: "Old Songs",
          data: [3410, 2410, 5530, 9570, 8730, 4010],
        },
        {
          name: "Favorites",
          data: [4270, 3390, 4100, 3090, 2400, 5260],
        },
        {
          name: "2020 Hits ",
          data: [4100, 2300, 3200, 2100, 3200, 3440],
        },
        {
          name: "Spotify top 100",
          data: [4100, 2300, 3200, 2100, 3200, 3440],
        },
        {
          name: "Recently Played",
          data: [4200, 2350, 2200, 5100, 2200, 4440],
        },
        {
          name: "Your Top songs of 2018",
          data: [4200, 2350, 2200, 5100, 2200, 4440],
        },
      ],

      options: {
        chart: {
          height: 450,
          type: "heatmap",
        },
        dataLabels: {
          enabled: false,
        },
        colors: [
          "#C61619",
          "#2522E9",
          "#1C1B5B",
          "#343324",
          "#F37B11",
          "#E5DB18",
        ],
        xaxis: {
          type: "category",
          categories: [" "],
        },
        title: {
          text: "Album Cover",
        },
        grid: {
          padding: {
            right: 20,
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="layout">
        <div className="searchBar">
          <input placeholder="Search for playlist" className="userInput" />
        </div>

        <div className="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="heatmap"
            height={300}
            width={"70%"}
          />
        </div>
      </div>
    );
  }
}

export default PopChart;
