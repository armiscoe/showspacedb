import React from "react"
import PropTypes from "prop-types"




class HelloWorld extends React.Component {

  getThings = () => {
    console.log("IT WORKED")
  }
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingBtn" onClick={this.getThings}>getThings</button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
