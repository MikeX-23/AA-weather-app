import React from 'react';


class Tokyo extends React.Component {
  render() {
    return (
      <div className="main-container">

        <section className="city">
          <span onClick={this.props.ottawaWeather}>Ottawa</span>
          <span onClick={this.props.moscowWeather}> Moscow</span>
          <span class="current" onClick={this.props.tokyoWeather}> Tokyo</span>
        </section>

        <main className="container">
          <section>
            <h1>Today</h1>
            <i className="fas fa-cloud"></i>
            <h1 id="temp">{this.props.tokyoCurrentTemp}</h1>
            <span id="degree">o</span>
           <h1 id="descr">{this.props.tokyoDescr}</h1>
          </section>

          <section className="one-fourth">
            <h1 class="day">{this.props.tokyoDay2}</h1>
            <i class="fas fa-cloud-rain"></i>
            <h1 class="day-temp">{this.props.tokyoDay2Temp}</h1>
            <span class="temp-degree">o</span>
          </section>

          <section className="one-fourth">
            <h1 className="day">{this.props.tokyoDay3}</h1>
            <i className="fas fa-cloud"></i>
            <h1 className="day-temp">{this.props.tokyoDay3Temp}</h1>
            <span class="temp-degree">o</span>
          </section>
          
          <section className="one-fourth">
            <h1 className="day">{this.props.tokyoDay4}</h1>
            <i className="fas fa-cloud"></i>
            <h1 className="day-temp">{this.props.tokyoDay4Temp}</h1>
            <span class="temp-degree">o</span>
          </section>

          <section className="one-fourth">
            <h1 className="day">{this.props.tokyoDay5}</h1>
            <i class="fas fa-cloud-rain"></i>
            <h1 className="day-temp">{this.props.tokyoDay5Temp}</h1>
            <span class="temp-degree">o</span>
          </section>
      </main>    
  </div>
    );

  }

}

export default Tokyo;
