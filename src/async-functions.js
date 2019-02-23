const giveItBackLater = (value, callback) => {
    setTimeout( function(){
        callback(value)
      }, 200 );
}


const promiseToGiveItBackLater = (value) => {
    return new Promise(function (resolve, reject) {
        resolve(giveItBackLater(value, console.log(value)));
    
        reject(new Error("…")); // ignored
      })
}


