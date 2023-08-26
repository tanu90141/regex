const user = (callback) => {
   setTimeout(()=>{
    console.log("user is typing message ");
    // const mssg="hello dost";
     callback();
   },1000);
}

const message = (callback) => {
    setTimeout(()=>{  
    const msg="hello dost";
     console.log("message is send ");
      callback(msg);
    },2000);
 }

 const receiver = (mssg,callback) => {
    setTimeout(()=>{

     console.log("message is received");
     console.log("the message received is",mssg);
      callback();
    },3000);
 }

 user(() => { 
    console.log("user done");
    message(fun)
    })


function fun(mssg)
    {
        console.log("message done");
        receiver(mssg,() => {
            console.log("receiver done");})
    } 
