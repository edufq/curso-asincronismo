const promise = new Promise(function(resolve, reject){
    resolve('hey!')
});

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`we have ${cows} cows on the farm`);
    } else {
        reject('there is no enough cows');
    }
});

countCows.then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('finally'));


