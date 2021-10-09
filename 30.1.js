const testNum = (num) => new Promise ((resolve, reject) => {
    if (num > 10) {
      resolve('is more than 10')
    } else {
      reject('is even or lass then 10')
    }
  })
  
  testNum(11)
      .then(function(value) {
    console.log(value)
  })
  .catch(function(error) {
    console.log(error)
  })