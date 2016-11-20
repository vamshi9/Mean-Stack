var mongoose = require('mongoose');
var gracefulShutdown;
//var dbURL = 'mongodb://http://vb9.herokuapp.com/vb9';
//mongoose.connect(dbURL);

mongoose.connection.on('connected',function(){
  console.log('mongoose conencted to ' + dbURL);
});

mongoose.connection.on('error',function(){
  console.log('Mongoose connection error is ' +err);
});

mongoose.connection.on('disconnected',function(){
  console.log('Mongoose connection is diconnected');
});

gracefulShutdown = function(msg,callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

//nodemon uses SIGUSR2
process.once('SIGUSR2',function(){
  gracefulShutdown('nodemon restart',function(){
    process.kill(process.pid,'SIGUSR2');
  });
});

//application termination
process.on('SIGINT',function(){
  gracefulShutdown('app termination',function(){
    process.exit(0);
  });
});

//heroku shutdowns process
process.on('SIGTERM',function(){
  gracefulShutdown('Heroku app shutdown',function(){
    process.exit(0);
  });
});
