import { Strategy as GithubStrategy } from 'passport-github';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import passport from 'passport';
import { User } from '../models/models';
import { createJWT } from '../utils/createJwtToken';
import { UserProps } from '../models/interfaces';
 
const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_JWT_KEY
};

passport.use('jwt', new JwtStrategy(options, (jwt_payload, done) => {
  console.log(jwt_payload);
  done(null, jwt_payload);
}));

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID || 'random string',
  clientSecret: process.env.GITHUB_CLIENT_SECRET || 'random string',
  callbackURL: "http://localhost:4000/auth/github/callback"
},
  async (accessToken, refreshToken, profile, done) => {
    try {
      console.log('GitHub profile - ', profile);

      const condidate = await User.findOne({where: {userName: profile.username!}});

      if (condidate) {
        return done(undefined, {...condidate.toJSON(), token: createJWT(condidate.toJSON())});
      }

      const user = await User.create({
        fullName: '',
        avatarUrl: profile.photos?.[0].value || '',
        isActive: false,
        phone: '',
        userName: profile.username!,
        email: ''
      });
      return done(undefined, {...user.toJSON(), token: createJWT(user.toJSON())});
    } catch (error) {
      console.log(error);
      done(error);
    }
  }
));

passport.serializeUser(async (user, done) => {
  try {
    return done(false, user);
  } catch (error) {
    console.log(error);
    return done(true);
  }
});

passport.deserializeUser(async (user: UserProps, done) => {
  try {
    const condidate = await User.findByPk(user.id);

    if (!condidate) {
      return done(true);
    }

    return done(undefined, condidate);
  } catch (error) {
    console.log(error);
    return done(true);
  }
});

export { passport };