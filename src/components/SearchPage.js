import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

import { keyframes } from 'styled-components';
import styled from 'styled-components';
import {search, setHistory} from '../actions';
//import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux'
import $ from 'jquery';


export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const Ball = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite;
  animation: ${spin} 2s linear infinite;
  position: relative;
  left: 47%;
  top: 200px;
`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // toggleContent: "",
      // content: "",
      // pages:"",
      // pageNum: "",
      // searchState: "",
      // loader: ""
    }
   // this.performToggle = this.performToggle.bind(this);
    this.compare = this.compare.bind(this);

  }
  // componentDidMount(props) {
  // //  (this.props.data)
  //     //? this.performToggle(this.props.data)
  //     this.performToggle(1)
  // }


compare() {

  let compareArray = [];
  let snaps = []
$('.photo-container .grid-33').each(function() {

  if ($(this).find('input[type="checkbox"]').is(':checked')) {
    var i = parseInt($(this).index() - 1);
    compareArray.push(i)
  }

})
for (var i = 0; i < compareArray.length; i++) {
var index = compareArray[i];
snaps.push(this.props.searchData[index])
}
this.props.setHistory(snaps)
this.props.history.push("/graph");
console.log(snaps)
}


  //setSearchState = (search, ...store) => {
    // var urls = [];

    // for (var i = 0; i < store.length; i++) {
    //   var status = store[i][1];
    //   if (status == true) {
    //     urls.push(store[i][0])
    //   } else {
    //     urls.splice(store[i][0], 1)
    //   }
    // }
  //  var url = ""
  //  if (urls.length <= 0) {
    //  if (this.state.pageNum !== "") {
     // url = "http://localhost:5000/api/prices/" + this.state.pageNum + "search?term=" + search;
     // } else {
    //  var url = "http://localhost:5000/api/prices/" + "search?term=" + search;

     // }
    //   console.log(url)
    //   return new Promise((resolve, reject) => {
    //     fetch(url, {
    //       method: "GET",
    //       mode: "cors",
    //     })
    //       .then((response) => {
    //         if (response.status === 200) {
    //           this.setState({
    //             loader: false
    //           });
    //         }
    //         response.json().then((responseJson) => {
    //           console.log(responseJson)
    //           resolve(responseJson)
    //           if (responseJson) {
    //             this.setState({
    //               content: responseJson.results,
    //               pages: responseJson.pages
    //             });
    //           }
    //         })
    //       })
    //       .catch((error) => {
    //         reject(error);
    //         this.props.history.push("/error")
    //       })
    //   })
    // } 
    
  //   else if (urls.length === 1) {
  //     if (this.state.pageNum !== "") {
  //     url = "http://localhost:5000/api/prices/" + urls  + "/" + this.state.pageNum + "/search?term=" + search;
  //     } else {
  //      url = "http://localhost:5000/api/prices/" + urls + "/search?term=" + search;
  //     }
  //     console.log(url)
  //     return new Promise((resolve, reject) => {
  //       fetch(url, {
  //         method: "GET",
  //         mode: "cors",
  //       })
  //         .then((response) => {
  //           if (response.status === 200) {
  //             this.setState({
  //               loader: false
  //             });
  //           }
  //           response.json().then((responseJson) => {
  //             resolve(responseJson)
  //             if (responseJson) {
  //               this.setState({
  //                 content: responseJson.results,
  //                 pages: responseJson.pages
  //               });
  //             }
  //           })
  //         })
  //         .catch((error) => {
  //           reject(error);
  //           this.props.history.push("/error")
  //         })
  //     })
  //   }
  //  else  {
  //     var multiUrls = [];
  //     for (i = 0; i < urls.length; i++) {
  //       if (this.state.pageNum !== "") {
  //       var multiUrl = "http://localhost:5000/api/prices/" + urls[i] + "/" + this.state.pageNum + "/search?term=" + search;
  //       } else {
  //         var multiUrl = "http://localhost:5000/api/prices/" + urls[i] + "/search?term=" + search;

  //       }
  //       multiUrls.push(multiUrl)
  //     }
  //     console.log(multiUrls)
  //     Promise.all(multiUrls.map(u => fetch(u))).then(responses =>
  //       Promise.all(responses.map(res => res.json()))
  //     ).then((responseJson) => {
  //       if (responseJson) {
  //         this.setState({
  //           content: responseJson.results,
  //           pages: responseJson.pages
  //         });
  //       }
  //       console.log(this.state.content)
  //     })
  //   }
//}
  // performToggle = (query) => {
  //   console.log(this.state.pageNum)
  //   return new Promise((resolve, reject) => {
  //     fetch("http://localhost:5000/api/prices/" + query, {
  //       method: "GET",
  //       mode: "cors",
  //     })
  //       .then((response) => {
  //         if (response.status === 200) {
  //           this.setState({
  //             successful: true
  //           });
  //         }
  //         response.json().then((responseJson) => {
  //           resolve(responseJson)
  //           if (responseJson) {
  //             this.setState({
  //               content: responseJson.results,
  //               pages: responseJson.pages
  //             });
  //           }
  //         })
  //       })
  //       .catch((error) => {
  //         reject(error);
  //         this.props.history.push("/error")
  //       })
  //   })
  // }

  render(props) {

    console.log(this.props.searchData)


// const search = useSelector(state => state.search)
// const history = useSelector(state => state.history)


    var dealTile = [];
    var topDeals = [];
    var pages = this.state.pages


// function createPages() {
//     var elem = '';
//     for (i=1;i<=pages; i++) {
//       var pageNum = i;
//       elem += `<a class="toggleButton" data="${pageNum}" onClick={this.setPageState}>${pageNum}</a>`;
//     }
//     return {__html: elem};
//   }



if (typeof this.props.searchData == 'object') {
var data = this.props.searchData;
//  console.log(this.props.searchData.snapshots.snapshot_time)


console.log(data.length)


// var snaps = [];
//   for (var i = 0; i < data.length; i++) {
//        var length = data[i]["snapshots"].length -1;
//        length = parseInt(length)
//      //snaps += data[i]["snapshots"][length].snapshot_time;
//      const chartItem = {
//       date: new Date(data[i]["snapshots"][length].snapshot_time)
//       };
//       snaps.push(chartItem)
//      }

  const sorted = data.sort(function (a, b) {
   var index = a["snapshots"][a["snapshots"].length -1].snapshot_time;

   if (index.length > 0 && index != "undefined") {
      a = new Date(a["snapshots"][a["snapshots"].length -1].snapshot_time)
     b = new Date(b["snapshots"][b["snapshots"].length -1].snapshot_time)
     return a > b ? -1 : a < b ? 1 : 0;
   }
   });
   console.log(sorted);





    for (var i = 0; i < this.props.searchData.length; i++) {
      
      var price = this.props.searchData[i].product_price;
      var title = this.props.searchData[i].product_title;
      var link = this.props.searchData[i].product_urlCode;

      var fullLink = "//bit.ly/" + link;
      var merchant;
      switch(this.props.searchData[i].merchant_id) {
        case 1:
          merchant = "Amazon.ca"
          break;
        case 2:
          merchant = "Best Buy"
          break;
        case 3:
          merchant = "Walmart"
          break;
        case 4:
          merchant = "Toys R Us"
          break;
        case 5:
          merchant = "EB Games"
          break;
        case 6:
          merchant = "Think Geek"
          break;
        case 7:
          merchant = "One Plus"
          break;
        case 8:
          merchant = "Amazon Japan"
          break;
         case 9:
          merchant = "Amazon Us"
          break;
        default:
      }
      if (price > 0) {
      dealTile.push(
        <div className="grid-33" key={i}>
        <input type="checkbox" />
          <a className="course--module course--link" target="_blank" href={fullLink}>
            <h3 className="content--price">{merchant}</h3>
            <h3 className="content--title">{title}</h3>
            <h3 className="content--price">{price}</h3>
          </a>
        </div>
      )
      }



      if (this.props.searchData[i].snapshots && this.props.searchData[i].snapshots.product_price < this.props.searchData[i].product_price) {
      topDeals.push(
        <div className="grid-33" key={i}>
          <a className="course--module course--link" target="_blank" href={fullLink}>
            <h3 className="content--title">{title}</h3>
            <h3 className="content--price">{price} <span className="newPrice">{this.props.searchData[i].snapshots.price}</span></h3>
          </a>
        </div>
      )
      }


      // let childArray = this.props.searchData[i];
      // for(let j = 0; j < childArray.length; j++){
      //   var price = childArray[j].product_price;
      //   var title = childArray[j].product_title;
      //   var link = childArray[j].product_urlCode;
      //   switch(childArray[j].merchant_id) {
      //     case 1:
      //       merchant = "Amazon.ca"
      //       break;
      //     case 2:
      //       merchant = "Best Buy"
      //       break;
      //     case 3:
      //       merchant = "Walmart"
      //       break;
      //     case 4:
      //       merchant = "Toys R Us"
      //       break;
      //     case 5:
      //       merchant = "EB Games"
      //       break;
      //     case 6:
      //       merchant = "Think Geek"
      //       break;
      //     case 7:
      //       merchant = "One Plus"
      //       break;
      //     case 8:
      //       merchant = "Amazon Japan"
      //       break;
      //      case 9:
      //       merchant = "Amazon Us"
      //       break;
      //     default:
      //   }
      //   if (link != undefined) {
      //   var fullLink = "//bit.ly/" + link;
      //   }
      //   if (price > 0) {
      //   dealTile.push(
      //     <div className="grid-33" key={j}>
      //     <input type="checkbox" name="vehicle1" value="Bike"> 
      //       <a className="course--module course--link" target="_blank" href={fullLink}>
      //       <h3 className="content--price">{merchant}</h3>
      //         <h3 className="content--title">{title}</h3>
      //         <h3 className="content--price">{price}</h3>
      //       </a>
      //     </div>
      //   )
      //   }
      //    }

         
  }

}

    return (
      <div className="container">
        {
          (this.state.loader)
            ? <Ball />
            : ""
        }
        {/* <NavToggle click={this.performToggle} {...this.props} /> */}
        <Search submit={this.setSearchState} {...this.props} />
        <div className="photo-container">

          <ul>
          {/* <h2>Top Deals</h2>
          <h2>Top Deals</h2>
          {topDeals} */}
          <h2>Results</h2>
            {dealTile}
            <button onClick={this.compare}>Compare</button>
            {/* <div dangerouslySetInnerHTML={createPages()}></div> */}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   historyData: state.historyData,
   searchData: state.search.search
 }
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
  historyData: PropTypes.array.isRequired,
  searchData: PropTypes.array.isRequired
};

export default connect(mapStateToProps, {search, setHistory})(SearchPage)