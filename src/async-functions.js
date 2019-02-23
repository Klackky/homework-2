const giveItBackLater = (value, callback) => {
    setTimeout( function(){
        callback(value)
      }, 200 );
}


const promiseToGiveItBackLater = (value) => {
    return new Promise((resolve, reject) => {
        giveItBackLater(value, resolve);
      })
}

const addSomePromises = (somePromise) => {
    return somePromise
                .then(result => result.repeat(2))
                .catch(result => result.repeat(3))
}


module.exports = { giveItBackLater, promiseToGiveItBackLater, addSomePromises }