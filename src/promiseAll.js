const fs = require('fs');

function promiseAll (arr) {
  return Promise.all(arr)
  .then(function success(res){
    return res.map(a => JSON.parse(a))
    .reduce((init,actual) => { 
      init = init.concat(actual)
      return init; 
    },[]);
  })
  .catch(function error(err) {
    throw err; 
  });
}

function readFile (path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path,'utf8',function(err, res) {
      err ? reject(err) : resolve(res);
    });
  });
}

promiseAll([
  readFile('./file01.json'),
  readFile('./file02.json')
])
.then( res =>  console.log(res))
.catch(err => console.error(err));