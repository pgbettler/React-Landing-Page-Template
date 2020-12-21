import React, { Component } from "react";

export class FAQ extends Component {
  render() {
    return (
      <div id="FAQ">
        <div className="container">
          <div className="section-title text-center">
            <h2>FAQs</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="FAQ">
                      <div className="FAQ-content">
                        <p>Q: {d.question}</p>
                        <div className="FAQ-meta"> A: {d.answer} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
