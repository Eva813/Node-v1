const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  //add a route handler to our express application to handle a user coming back to our application on this route '/auth/google/callback'.
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done ) => {
  //Access and Refresh Tokens
  console.log('accessToken',accessToken);
  console.log('refreshToken',refreshToken);
  console.log('profile',profile);
}));

// Google auth
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 8000;
app.listen(PORT)
