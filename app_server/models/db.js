var mongoose = require('mongoose');
require('./locations');
var gracefulShutdown;

// process termination windows
/*
var readLine = require('readline');
if(process.platform='win32'){
   var r1 = readLine.createInterface({
       input:process.stdin,
       output:process.stdout
   });
   r1.on('SIGINT',function(){
        process.emit('SIGINT');
   });
 }
 */

var dbURI = 'mongodb://localhost/vb9';
mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
  console.log('mongoose conencted to ' + dbURI);
});

mongoose.connection.on('error',function(){
  console.log('Mongoose connection error is ' +err);
});

mongoose.connection.on('disconnected',function(){
  console.log('Mongoose connection is disconnected');
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
