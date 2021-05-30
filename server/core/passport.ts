import {Strategy as GithubStrategy} from 'passport-github';
import passport from 'passport';

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID || 'random string',
  clientSecret: process.env.GITHUB_CLIENT_SECRET || 'random string',
  callbackURL: "http://localhost:4000/auth/github/callback"
},
  (accessToken, refreshToken, profile, cb) => {
    const user = {
      fullname: profile.displayName,
      avatarUrl: profile.photos?.[0].value
    };
  }
));

export { passport };