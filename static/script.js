function loadData(){

fetch("/api")

.then(res=>res.json())

.then(data=>{

document.getElementById("result").innerHTML=

JSON.stringify(data,null,4);

});

}
