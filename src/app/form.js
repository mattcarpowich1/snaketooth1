import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
    	<div className={this.props.fadeIn}>
		    <form className="col s12">
	        <div className="input-field col s12">
	        	<label htmlFor="name">Name</label><br />
	          <input placeholder="" 
	          	id="name" 
	          	type="text" 
	          	className="validate"
	          	onChange={this.props.nameHandler} />
	        </div>
	        <div className="input-field col s12">
	        	<label htmlFor="pass">Enter Password</label><br />
	          <input placeholder="" 
	          	id="pass" 
	          	type="password" 
	          	className="validate"
	          	onChange={this.props.passHandler} />
	        </div>
	        <div className="input-field col s12">
	        	<label htmlFor="passconf">Confirm Password</label><br />
	          <input 
	          	placeholder="" 
	          	id="passconf" 
	          	type="password" 
	          	className="validate"
	          	onChange={this.props.confHandler} />
	        </div>
	      </form>
      </div>
    )
  }
}

export default Form