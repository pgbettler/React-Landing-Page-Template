import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
// import Features from './components/features';
import About from './components/about';
import Services from './components/services';
// import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
//import Team from './components/Team';
import Family from './components/Family';
import FAQ from './components/FAQ';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        {/* <Gallery /> */}
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Family data={this.state.landingPageData.Family} />
        <FAQ data={this.state.landingPageData.FAQ}/>
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
