import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Login from './login';

export default class SignIn extends Component{
    render() {
        const responseFacebook = (response) => {
          console.log(response);
        }
        const responseGoogle = (response) => {
        console.log(response);
        }
        return (

          <div className="btn">
            <Login />
            < br />
            < br />
            <br />

          <FacebookLogin
            appId="205017580922731" //APP ID NOT CREATED YET
            buttonText="Login with Facebook"
            fields="name,email,picture"

            callback={responseFacebook}
              />
              <br />
              <br />
              <br />

             <GoogleLogin
              clientId="517842773584-p82a9otp63rpv4cs1gsleelhitlevbud.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              />
              </div>
            );
          }
}
