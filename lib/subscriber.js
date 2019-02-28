const io = require('socket.io-client');

class Subscriber {
  constructor(namespace){
    // ~~~ connect to namespace ~~~
    this.namespace = namespace;
    this.serverConnection = io.connect(`https://fl-401-final-back-end-q.herokuapp.com/${namespace}`);
    this.subArr = [];
  }

  subscribe(room, cb){
    // console.log(`subscriber: ${room}, ${this.namespace}`);
    // ~~~ connect to room ~~~
    this.serverConnection.emit('join', room);
    
    // push room to subArr (if not already there)
    this.subArr.push(room);

    this.serverConnection.on(room, (payload)=>{
      cb(payload);
    });
  }

  subscriptions(){
    return this.subArr;
  }
}

export default Subscriber;
