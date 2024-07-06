import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import LoadingBar from 'react-top-loading-bar';
import './App.css';

class App extends Component {
  pageSize = 9;
  apikey = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        <div>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" heading="InsightsDaily - Topstories" />} />
            <Route exact path="/business" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business" heading="InsightsDaily - Business" subheading="Top Business Headlines" />} />
            <Route exact path="/entertainment" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" heading="InsightsDaily - Entertainment" subheading="Top Entertainment Headlines" />} />
            <Route exact path="/health" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health" heading="InsightsDaily - Health" subheading="Top Health Headlines" />} />
            <Route exact path="/science" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science" heading="InsightsDaily - Science" subheading="Top Science Headlines" />} />
            <Route exact path="/sports" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports" heading="InsightsDaily - Sports" subheading="Top Sports Headlines" />} />
            <Route exact path="/technology" element={<NewsComp setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology" heading="InsightsDaily - Technology" subheading="Top Tech Headlines" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
