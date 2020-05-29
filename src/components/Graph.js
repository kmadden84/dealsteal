import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { search, setHistory, setPrices } from '../actions';
import { connect } from 'react-redux';
import { Chart } from "react-google-charts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import $ from 'jquery';
import { defaultCipherList } from 'constants';
import { contains } from '@amcharts/amcharts4/.internal/core/utils/Iterator';


class Graph extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount = () => {

let history = [];

let allHistory = this.props.historyData;

allHistory.forEach(function (snap, i) {
history.push(snap.snapshots)
})
console.log(allHistory)
    var snapshots = [];
    var prices = [];
    var mappedArray = [];
    var finalArray = []
    for (var key in history) {
      var obj = history[key];
      snapshots.push(obj)
    }

    snapshots.forEach(function (arrayItem, i) {
      var x = arrayItem.map(item => {
        return {
          item
        }
      });
      prices.push(x);
    });

    var array = []
    prices.forEach(function (priceItem, i) {
      priceItem.forEach(function (values, i) {
        priceItem.map(d => {
          //d.map(item => {
          array = Array.from(Object.values(d));
          //})
        })
        mappedArray.push(array);
      })
    })



    mappedArray.forEach(function (item, i) {
      // console.log(mappedArray[i]);
      mappedArray[i].map(objects => {
        Object.assign(objects, { product_title: objects.catalog.product_title })
        finalArray.push(objects)
      })
    })



    this.props.setPrices(finalArray);


    var data = finalArray;



    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Increase contrast by taking evey second color
    chart.colors.step = 2;

    // Add data

    chart.data = history;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    // Create series
    function createAxisAndSeries(field, name, opposite, bullet) {
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.tensionX = 0.8;

      var interfaceColors = new am4core.InterfaceColorSet();

      switch (bullet) {
        case "triangle":
          var bullet = series.bullets.push(new am4charts.Bullet());
          bullet.width = 12;
          bullet.height = 12;
          bullet.horizontalCenter = "middle";
          bullet.verticalCenter = "middle";

          var triangle = bullet.createChild(am4core.Triangle);
          triangle.stroke = interfaceColors.getFor("background");
          triangle.strokeWidth = 2;
          triangle.direction = "top";
          triangle.width = 12;
          triangle.height = 12;
          break;
        case "rectangle":
          var bullet = series.bullets.push(new am4charts.Bullet());
          bullet.width = 10;
          bullet.height = 10;
          bullet.horizontalCenter = "middle";
          bullet.verticalCenter = "middle";

          var rectangle = bullet.createChild(am4core.Rectangle);
          rectangle.stroke = interfaceColors.getFor("background");
          rectangle.strokeWidth = 2;
          rectangle.width = 10;
          rectangle.height = 10;
          break;
        default:
          var bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.stroke = interfaceColors.getFor("background");
          bullet.circle.strokeWidth = 2;
          break;
      }

      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
      valueAxis.renderer.grid.template.disabled = true
    }

    const products = [...data].map(item => item.catalog_id)
      .filter((value, index, self) => self.indexOf(value) === index)


    let newData = [];
    history.forEach(x => {
      newData = newData.concat(x);
    });
    console.log(newData);
    const sorted = newData.sort(function (a, b) {
      a = new Date(a.snapshot_time);
      b = new Date(b.snapshot_time);
      return a < b ? -1 : a > b ? 1 : 0;
    });
    console.log(sorted);
    const chartData = [];
    const lastPrice = {};
    history.forEach(item => {
      lastPrice[item[0].catalog_id] = 0;
    });
    console.log(history);
    sorted.forEach(snapshot => {
      const chartItem = {
        date: new Date(snapshot.snapshot_time)
      };
      lastPrice[snapshot.catalog_id] = snapshot.product_price;
      products.forEach(product => {
        chartItem[product] = lastPrice[product];
      });

      chartData.push(chartItem);
    });

    chart.data = chartData;

    history.map(item => {
      console.log(item);
      createAxisAndSeries(
        item[0].catalog_id,
        `${item[0].catalog.product_title}\n${item[0].catalog.merchant.merchant_name}`,
        false,
        "circle"
      );
    })







    // Add legend
    chart.legend = new am4charts.Legend();

    // Add cursor
    chart.cursor = new am4charts.XYCursor();


    this.chart = chart;



  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }


  render() {




    return (
      <div>

        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

      </div>
    )
  }
  //}
}

const mapStateToProps = (state) => {
  return {
    historyData: state.history.history,
    searchData: state.search.search,
    priceData: state.prices.prices
  }
};

Graph.propTypes = {
  search: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
  setPrices: PropTypes.func.isRequired,
  historyData: PropTypes.array.isRequired,
  searchData: PropTypes.array.isRequired,
  priceData: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { search, setHistory, setPrices })(Graph)