const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { SECRET } = require('../utils/jwt');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}, (jwtPayload, done) => {
    const user = jwtPayload.user;
    return done(null, user);
}));

const authenticate = passport.authenticate('jwt', { session: false });

module.exports = authenticate;