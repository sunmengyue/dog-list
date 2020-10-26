import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogDetails.css';

class DogDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="DogDetails row justify-content-center mt-5">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img
                className="card-img-top"
                src={this.props.dog.src}
                alt={this.props.dog.name}
              />
              <div className="card-body">
                <h2 className="card-title">{this.props.dog.name}</h2>
                <h4 className="card-subtitle text-muted">
                  {this.props.dog.age} months old
                </h4>
              </div>
              <ul className="list-group list-group-flush">
                {this.props.dog.facts.map((f, i) => (
                  <li className="list-group-item" key={i}>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <Link className="btn btn-info" to="/dogs">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;
