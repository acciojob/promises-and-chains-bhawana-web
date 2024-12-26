//your JS code here. If required.
document.getElementById("btn").addEventListener("click",function(event){

    event.preventDefault()
    fetchData();
})



function getData(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
const age=document.getElementById('age').value
const name=document.getElementById('name').value


if (age>18) {
    resolve(Welcome, ${name}. You can vote.)
}
else{
    reject(Oh sorry ${name}. You aren't old enough.)
}

        },4000)


    })







}

async function fetchData(){
try{
    const data=await getData()
   alert(data)
}
catch(error){
alert(error)


}



}