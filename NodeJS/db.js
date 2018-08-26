const mongoose = require('mongoose');

mongoose.connect('mongodb://jfuerlinger.documents.azure.com:10255/<databasename>?ssl=true', {
    auth: {
      user: 'jfuerlinger',
      password: 'rpNFuY1bwjDsbdgK12T6YuvsO5c9n3xlbixKMAKIho6Crs4KbZzi4rgwVrtGmubBtjoOYXnL08Q3ZgD4ojErCA=='
    },
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connection succeeded.'))
  .catch((err) => console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2))
);


module.exports = mongoose;