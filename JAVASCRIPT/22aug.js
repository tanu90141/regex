//-----------------------async with await-------------------------------------------------------------------------;
// async function main() {
//     console.log("order is going to taken");
//     await placeorder();
//     console.log("production is going to start")
//     await startproduction();
//     console.log("id is going to print")
//     await printid();
//     console.log("product naming is going to start")
//     await productname();
//     console.log("product desc  is going to start")
//     await productdesc();
// }


// async function placeorder() {
//     await delay(2000);
//     console.log("order is done")
// }
// async function startproduction() {
//     await delay(3000);
//     console.log("startproduction is done")
// }

// async function printid() {
//     await delay(1000);
//     console.log("printid is done")
// }
// async function productname() {
//     await delay(1000);
//     console.log("naming  is done")
// }
// async function productdesc() {
//     await delay(3000);
//     console.log("productdesc is done")
// }
//----------------------------------------------fetch()-------------------------------------------------------------;
// async function fetchdata(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/todos");
//         // console.log(response);
//         if(!response.ok){
//             throw new Error("network response was not ok")
//         }
//         const data= await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("errpr fetching data:",error);
//     }
    
//     }
//     fetchdata();
 