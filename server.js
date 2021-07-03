const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware (Used to accept json data from req.body)
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ Welcome: "Welcome to Alex's Cricket Info API..." }));

// Define Routes
// @user & auth
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
// @cricket info
app.use('/api/countries', require('./routes/country'));
app.use('/api/teams', require('./routes/teams'));
app.use('/api/players', require('./routes/players'));
app.use('/api/venue', require('./routes/venue'));
app.use('/api/matches', require('./routes/matches'));
app.use('/api/results', require('./routes/results'));
app.use('/api/tournament', require('./routes/tournamentScoreTable'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));