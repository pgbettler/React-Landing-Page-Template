import React, { Component } from "react";

export class Family extends Component {
  render() {
    return (
      <div>
        <div id="family" className="text-center">
            <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
                <h2>Meet the Family</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                dapibus leonec.
                </p>
            </div>
            <div id="row">
                {this.props.data
                ? this.props.data.map((d, i) => (
                    <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 family">
                        <div className="thumbnail">
                        {" "}
                        <img src={d.img} alt="..." className="family-img" />
                        <div className="caption">
                            <h4>{d.title}</h4>
                            <p>{d.description}</p>
                        </div>
                        </div>
                    </div>
                    ))
                : "loading"}
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Family;
