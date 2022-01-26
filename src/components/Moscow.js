import React from 'react';


class Moscow extends React.Component {
  render() {
    return (
      <div className="main-container">

        <section className="city">
          <span onClick={this.props.ottawaWeather}>Ottawa</span>
          <span class="current" onClick={this.props.moscowWeather}> Moscow</span>
          <span onClick={this.props.tokyoWeather}> Tokyo</span>
        </section>

        <main className="container">
          <section>
            <h1>Today</h1>
            <i className="far fa-snowflake" id="snowflake"></i>
            <h1 id="temp">{this.props.moscowCurrentTemp}</h1>
            <span id="degree">o</span>
           <h1 id="descr">{this.props.moscowDescr}</h1>
          </section>

          <section className="one-fourth">
            <h1 class="day">{this.props.moscowDay2}</h1>
            <i className="far fa-snowflake" id="snow"></i>
            <h1 class="day-temp">{this.props.moscowDay2Temp}</h1>
            <span class="temp-degree">o</span>
          </section>

          <section className="one-fourth">
            <h1 className="day">{this.props.moscowDay3}</h1>
            <i className="fas fa-cloud"></i>
            <h1 className="day-temp">{this.props.moscowDay3Temp}</h1>
            <span class="temp-degree">o</span>
          </section>
          
          <section className="one-fourth">
            <h1 className="day">{this.props.moscowDay4}</h1>
            <i className="far fa-snowflake" id="snow"></i>
            <h1 className="day-temp">{this.props.moscowDay4Temp}</h1>
            <span class="temp-degree">o</span>
          </section>

          <section className="one-fourth">
            <h1 className="day">{this.props.moscowDay5}</h1>
            <i className="far fa-snowflake" id="snow"></i>
            <h1 className="day-temp">{this.props.moscowDay5Temp}</h1>
            <span class="temp-degree">o</span>
          </section>
      </main>    
  </div>
    );

  }

}

export default Moscow;
