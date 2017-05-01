import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignupForm.scss';
import Link from '../Link';

function LoginForm({ className }) {
  return (
    <div>
			<form>
				Name:<br/>
			  <input type="text" name="firstname" value="Mickey"/>
			  <br/>
			  Username:<br/>
			  <input type="text" name="firstname" value="Mickey"/>
			  <br/>
			  Password:<br/>
			  <input type="text" name="lastname" value="Mouse"/>
			  <br></br>
			  <input type="submit" value="Submit"/>
			</form> 
    </div>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default withStyles(LoginForm, s);
