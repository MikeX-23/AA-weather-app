import React from 'react';
import './App.css';
import Ottawa from './components/Ottawa.js'
import Moscow from './components/Moscow.js'
import Tokyo from './components/Tokyo.js'


class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      ottawa: true,
      moscow: false,
      tokyo: false,


      ottawaCurrentTemp: "-23",
      ottawaDescr: "Clear",
      ottawaDay2: "Wed",
      ottawaDay2Temp:"-18",
      ottawaDay3: "Thur",
      ottawaDay3Temp:"-7",
      ottawaDay4: "Fri",
      ottawaDay4Temp: "-18",
      ottawaDay5: "Sat",
      ottawaDay5Temp:"-14",

      moscowCurrentTemp: "",
      moscowDescr: "",
      moscowDay2: "",
      moscowDay2Temp:"",
      moscowDay3: "",
      moscowDay3Temp:"",
      moscowDay4: "",
      moscowDay4Temp: "",
      moscowDay5: "",
      moscowDay5Temp:"",

      tokyoCurrentTemp: "",
      tokyoDescr: "",
      tokyoDay2: "",
      tokyoDay2Temp:"",
      tokyoDay3: "",
      tokyoDay3Temp:"",
      tokyoDay4: "",
      tokyoDay4Temp: "",
      tokyoDay5: "",
      tokyoDay5Temp:""
    }
  }


  ottawaWeather = async () => {
   
   const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=45.4112&lon=-75.6981&units=metric&exclude=minutely,hourly,alerts&appid=a3fffcb0da23155f14880a3e37a63487`)

   const data = await api_call.json();
   

  // Today's Current Temperature and Description
   this.setState({
     ottawaCurrentTemp: Math.round(data.current.temp),
     ottawaDescr: data.current.weather[0].main,

    // 5 Day Forecast
    ottawaDay2Temp: Math.round(data.daily[0].temp.day),
    ottawaDay3Temp: Math.round(data.daily[1].temp.day),
    ottawaDay4Temp: Math.round(data.daily[2].temp.day),
    ottawaDay5Temp: Math.round(data.daily[3].temp.day)
   })
 
   var date = new Date()

   // Getting Unix dates
   var timestamp1 = data.daily[0].dt
   var timestamp2 = data.daily[1].dt
   var timestamp3 = data.daily[2].dt
   var timestamp4 = data.daily[3].dt

   // Converting timestamp to miliseconds
   var mili1 = date.setTime(timestamp1*1000)
   var mili2 = date.setTime(timestamp2*1000)
   var mili3 = date.setTime(timestamp3*1000)
   var mili4 = date.setTime(timestamp4*1000)

   // Converting new timestamp to day of the week (1-7)
   var newDay1  = new Date(mili1).getDay();
   var newDay2  = new Date(mili2).getDay();
   var newDay3  = new Date(mili3).getDay();
   var newDay4  = new Date(mili4).getDay();

   // Getting the day of the week in words
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day1 = weekday[newDay1];
  const day2 = weekday[newDay2];
  const day3 = weekday[newDay3];
  const day4 = weekday[newDay4];

    this.setState({
      ottawaDay2: day1,
      ottawaDay3: day2,
      ottawaDay4: day3,
      ottawaDay5: day4
    })

    this.setState({
      ottawa: true,
      moscow: false,
      tokyo: false
    })

  }

  moscowWeather = async () => {
   
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=55.7522&lon=37.6156&units=metric&exclude=minutely,hourly,alerts&appid=a3fffcb0da23155f14880a3e37a63487`)
 
    const data = await api_call.json();
    
 
   // Today's Current Temperature and Description
    this.setState({
      moscowCurrentTemp: Math.round(data.current.temp),
      moscowDescr: data.current.weather[0].main,
 
     // 5 Day Forecast
     moscowDay2Temp: Math.round(data.daily[0].temp.day),
     moscowDay3Temp: Math.round(data.daily[1].temp.day),
     moscowDay4Temp: Math.round(data.daily[2].temp.day),
     moscowDay5Temp: Math.round(data.daily[3].temp.day)
    })
  
    var date = new Date()
 
    // Getting Unix dates
    var timestamp1 = data.daily[0].dt
    var timestamp2 = data.daily[1].dt
    var timestamp3 = data.daily[2].dt
    var timestamp4 = data.daily[3].dt
 
    // Converting timestamp to miliseconds
    var mili1 = date.setTime(timestamp1*1000)
    var mili2 = date.setTime(timestamp2*1000)
    var mili3 = date.setTime(timestamp3*1000)
    var mili4 = date.setTime(timestamp4*1000)
 
    // Converting new timestamp to day of the week (1-7)
    var newDay1  = new Date(mili1).getDay();
    var newDay2  = new Date(mili2).getDay();
    var newDay3  = new Date(mili3).getDay();
    var newDay4  = new Date(mili4).getDay();
 
    // Getting the day of the week in words
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const day1 = weekday[newDay1];
   const day2 = weekday[newDay2];
   const day3 = weekday[newDay3];
   const day4 = weekday[newDay4];
 
  this.setState({
    moscowDay2: day1,
    moscowDay3: day2,
    moscowDay4: day3,
    moscowDay5: day4

  })

  this.setState({
    moscow: true,
    ottawa: false,
    tokyo: false
  })
}

tokyoWeather = async () => {
   
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=35.6895&lon=139.6917&units=metric&exclude=minutely,hourly,alerts&appid=a3fffcb0da23155f14880a3e37a63487`)

  const data = await api_call.json();
  

 // Today's Current Temperature and Description
  this.setState({
    tokyoCurrentTemp: Math.round(data.current.temp),
    tokyoDescr: data.current.weather[0].main,

   // 5 Day Forecast
   tokyoDay2Temp: Math.round(data.daily[0].temp.day),
   tokyoDay3Temp: Math.round(data.daily[1].temp.day),
   tokyoDay4Temp: Math.round(data.daily[2].temp.day),
   tokyoDay5Temp: Math.round(data.daily[3].temp.day)
  })

  var date = new Date()

  // Getting Unix dates
  var timestamp1 = data.daily[0].dt
  var timestamp2 = data.daily[1].dt
  var timestamp3 = data.daily[2].dt
  var timestamp4 = data.daily[3].dt

  // Converting timestamp to miliseconds
  var mili1 = date.setTime(timestamp1*1000)
  var mili2 = date.setTime(timestamp2*1000)
  var mili3 = date.setTime(timestamp3*1000)
  var mili4 = date.setTime(timestamp4*1000)

  // Converting new timestamp to day of the week (1-7)
  var newDay1  = new Date(mili1).getDay();
  var newDay2  = new Date(mili2).getDay();
  var newDay3  = new Date(mili3).getDay();
  var newDay4  = new Date(mili4).getDay();

  // Getting the day of the week in words
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const day1 = weekday[newDay1];
 const day2 = weekday[newDay2];
 const day3 = weekday[newDay3];
 const day4 = weekday[newDay4];

this.setState({
  tokyoDay2: day1,
  tokyoDay3: day2,
  tokyoDay4: day3,
  tokyoDay5: day4

})

this.setState({
  tokyo: true,
  moscow: false,
  ottawa: false
})
}


  render() {
    if (this.state.ottawa) {
     var ottawa = <Ottawa 
        ottawaWeather = {this.ottawaWeather}

        ottawaCurrentTemp = {this.state.ottawaCurrentTemp}
        ottawaDescr = {this.state.ottawaDescr}
        ottawaDay2 = {this.state.ottawaDay2}
        ottawaDay2Temp = {this.state.ottawaDay2Temp}
        ottawaDay3 = {this.state.ottawaDay3}
        ottawaDay3Temp = {this.state.ottawaDay3Temp}
        ottawaDay4 = {this.state.ottawaDay4}
        ottawaDay4Temp = {this.state.ottawaDay4Temp}
        ottawaDay5 = {this.state.ottawaDay5}
        ottawaDay5Temp = {this.state.ottawaDay5Temp}

        moscowWeather = {this.moscowWeather}
        tokyoWeather = {this.tokyoWeather}

        />
    } else if (this.state.moscow) {
      var moscow = <Moscow 

      moscowWeather = {this.moscowWeather}

      moscowCurrentTemp = {this.state.moscowCurrentTemp}
      moscowDescr = {this.state.moscowDescr}
      moscowDay2 = {this.state.moscowDay2}
      moscowDay2Temp = {this.state.moscowDay2Temp}
      moscowDay3 = {this.state.moscowDay3}
      moscowDay3Temp = {this.state.moscowDay3Temp}
      moscowDay4 = {this.state.moscowDay4}
      moscowDay4Temp = {this.state.moscowDay4Temp}
      moscowDay5 = {this.state.moscowDay5}
      moscowDay5Temp = {this.state.moscowDay5Temp}

      ottawaWeather = {this.ottawaWeather}
      tokyoWeather = {this.tokyoWeather} />
    } else {
      var tokyo = <Tokyo 
      tokyoWeather = {this.tokyoWeather}

      tokyoCurrentTemp = {this.state.tokyoCurrentTemp}
      tokyoDescr = {this.state.tokyoDescr}
      tokyoDay2 = {this.state.tokyoDay2}
      tokyoDay2Temp = {this.state.tokyoDay2Temp}
      tokyoDay3 = {this.state.tokyoDay3}
      tokyoDay3Temp = {this.state.tokyoDay3Temp}
      tokyoDay4 = {this.state.tokyoDay4}
      tokyoDay4Temp = {this.state.tokyoDay4Temp}
      tokyoDay5 = {this.state.tokyoDay5}
      tokyoDay5Temp = {this.state.tokyoDay5Temp}

      ottawaWeather = {this.ottawaWeather}
      moscowWeather = {this.moscowWeather}
      />
    }
    return (
      <div>
        { ottawa }
        { moscow } 
        { tokyo }
      </div>
    );
  }
}

export default App;
