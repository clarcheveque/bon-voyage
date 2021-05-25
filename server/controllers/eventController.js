const db = require('../models/model.js');

const eventController = {};

eventController.getEvent = (req, res, next) => {
  return (
    res.status(200).json([{
    time: '10 AM',
    location: 'Griffith Observatory',
    description: 'went for a hike then watched the stars',
    people: 'Cam Simmons',
    link: 'http://griffithobservatory.com'
  }, {
    time: '11 AM',
    location: 'UCLA',
    description: 'toured campus',
    people: 'Larry Han',
    link: 'http://ucla.edu'
  }]))
}

module.exports = eventController;
