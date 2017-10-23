import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
    	<div className="btn-holder"> 
    		<button className="btn waves-effect waves-light amber darken-4" 
				  type="submit" 
				  name="action"
				  onClick={this.props.actionHandler}>{this.props.text}
        </button>
    	</div>
    )
  }
}

export default Button