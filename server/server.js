const express = require('express');
require('dotenv').config();
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./modules/discord.strategy');

// Route includes
const eventRouter = require('./routes/event.router');
const authRouter = require('./routes/auth.router');

// Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// Initialize Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/events', eventRouter);
app.use('/api/auth', authRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
