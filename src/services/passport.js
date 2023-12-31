const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  //add a route handler to our express application to handle a user coming back to our application on this route '/auth/google/callback'.
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  //Access and Refresh Tokens
  console.log('accessToken', accessToken);
  console.log('refreshToken', refreshToken);
  console.log('profile', profile);
}));

