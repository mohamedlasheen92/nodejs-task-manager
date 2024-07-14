const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => { 
    console.log('Connected on Database Successfully');
  })
  .catch((reason) => { 
    console.log(reason);
    process.exit(1)
  })