
// const addvegies= (callback)=>{
//     setTimeout(()=>{
//        const veg="🍅🥒" ;
//        console.log("veg is prepared");
//        callback(veg);

//     },1000);

// } 

// const addtikki=(veg,callback)=>{
//     setTimeout(()=>{
//         const tikki=veg+"🫓";  
//         console.log("tikki is prepared");
//         callback(tikki);

//     },2000)

// }


// const addbread=(veg,tikki,callback)=>{
//     setTimeout(()=>{
//         const bread=veg+tikki+"🍞";
//         console.log("bread is prepared");
//         callback();
//     },1000)
// }




// addvegies((veg) => {
//     console.log("pass to tikki");
//     addtikki(veg,(tikki) => {
//         console.log("pass to bread");
//         addbread(veg, tikki, (bread) => {
//             console.log("burger ready");
//         })
//     })
// }) 

// const placeorder=(()=>{
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("order is taken");
//         resolve();
//        },2000) 
//     })
// })

// const startproduction=(()=>{
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("production is done");
//         resolve();
//        },2000) 
//     })
// })

// const printid=(()=>{
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("id is printed");
//         resolve();
//        },2000) 
//     })
// })

// const productname=(()=>{
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("product name is printed");
//         resolve();
//        },2000) 
//     })
// })


// const productdesc=(()=>{
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("product desc is done");
//         resolve();
//        },2000) 
//     })
// })











// console.log("order is now going to take");
// placeorder()
// .then(()=>{
//     console.log("product is in production....");
//     return startproduction();
// })
// .then(()=>{
//     console.log("id printing started....");
//     return printid();
// })
// .then(()=>{
//     console.log("product name started printing......");
//     return productname();
// })
// .then(()=>{
//     console.log("product descriptio started printing.......");
//     return productdesc ();
// })
const user = (callback) => {
    setTimeout(() => {
     console.log("user is typing message ");
     callback();
    }, 1000);
 }
 
 const message = (callback) => {
     setTimeout(() => {
         const msg = "hello dost"; // Fixed variable name to "msg"
         console.log("message is send ");
         callback(msg);
     }, 2000);
 }
 
 const receiver = (mssg, callback) => {
     setTimeout(() => {
      console.log("message is received");
      console.log("the message received is", mssg);
      callback();
     }, 3000);
 }
 
 user(() => {
     console.log("user done");
     message((mssg) => { // Pass the message as an argument
         console.log("message done");
         receiver(mssg, () => {
             console.log("receiver done");
         })
     })
 })
 