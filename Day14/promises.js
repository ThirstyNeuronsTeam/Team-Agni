/* 
setTimeout(() => {
  console.log("C");
  setTimeout(() => {
    console.log("E");
    setTimeout(() => {
      console.log("F");
    }, 1000);
  }, 1000);
}, 1000); */



const tetch = (timerValue) => new Promise((resolve,reject)=>{
    setTimeout(resolve,timerValue)
})


tetch(1000)
    .then(()=>{
        console.log("A")
        return tetch(2000)
    })
    .catch(()=>{

    })
    .then(()=>{
        console.log("B")
        return tetch(3000)
    })
    .then(()=>{
        console.log("C")
    })

const p1 =tetch(1000)
const p2 =tetch(2000)

Promise.all([p1,p2]).then(()=>{})

async function runTimers(){
   await Promise.all([p1,p2])
}







