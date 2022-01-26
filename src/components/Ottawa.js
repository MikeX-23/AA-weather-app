import React from 'react';


class Ottawa extends React.Component {
  render() {
    return (
      <div className="main-container">

        <section className="city">
          <span class="current" onClick={this.props.ottawaWeather}>Ottawa</span>
          <span onClick={this.props.moscowWeather}> Moscow</span>
          <span onClick={this.props.tokyoWeather}> Tokyo</span>
        </section>

        <main className="container">
          <section>
            <h1>Today</h1>
            <i className="fas fa-cloud"></i>
            <h1 id="temp">{this.props.ottawaCurrentTemp}</h1>
            <span id="degree">o</span>
           <h1 id="descr">{this.props.ottawaDescr}</h1>
          </section>

          <section className="one-fourth">
            <h1 class="day">{this.props.ottawaDay2}</h1>
            <i class="fas fa-sun"></i>
            <h1 class="day-temp">{this.props.ottawaDay2Temp}</h1>
            <span class="temp-degree">o</span>
          </section>

          <section className="one-fourth">
            <h1 className="day">{this.props.ottawaDay3}</h1>
            <i class="far fa-snowflake" id="snow"></i>
            <h1 className="day-temp">{this.props.ottawaDay3Temp}</h1>
            <span class="temp-degree">o</span>
          </section>
          
          <section className="one-fourth">
            <h1 className="day">{this.props.ottawaDay4}</h1>
            <i class="fas fa-sun"></i>
            <h1 className="day-temp">{this.props.ottawaDay4Temp}</h1>
            <span class="temp-degree">o</span>
          </section>

          <section className="one-fourth">
            <h1 className="day">{this.props.ottawaDay5}</h1>
            <i className="fas fa-cloud"></i>
            <h1 className="day-temp">{this.props.ottawaDay5Temp}</h1>
            <span class="temp-degree">o</span>
          </section>
      </main>    
  </div>
    );

  }

}

export default Ottawa;
