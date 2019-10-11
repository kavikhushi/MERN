import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4 text-info font-italic">
                  Capgemini
                </h3>
                <p className="lead font-italic">
                  {" "}
                  Capgemini was founded by Serge Kampf in 1967 as an enterprise
                  management and data processing company. The company was
                  inaugurated as the Société pour la Gestion de l'Entreprise et
                  le Traitement de l'Information (Sogeti). In 1974 Sogeti
                  acquired Gemini Computers Systems, a US company based in New
                  York. In 1975, having made two major acquisitions of CAP and
                  Gemini Computer Systems, and following resolution of a dispute
                  with the similarly-named CAP UK over the international use of
                  the name 'CAP', Sogeti renamed itself as CAP Gemini Sogeti.Cap
                  Gemini Sogeti launched US operations in 1981.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
