// fetch() method: it is defined on the window Object,
// which we can use to perform requestAnimationFrame.
//This method will return promise.
//Promise will eihter be fullfilled or rejected.

window.onload = () =>{
    document.getElementById('restApiBtn').onclick = async () =>{

    fetch('https://fakestoreapi.com/products').then((data)=>{
        console.log(data);
        // converts data into array of object format
        return data.json() 
    }).then((completedata)=>{
        //console.log(completedata);
        let data="";
        completedata.map((values)=>{
            data+= `<div class="card">
                <h1 class="title">${values.title   }</h1>
                <img src=${values.image} alt="" class="images">
                <p>${values.description}</p>
                <p class="category">${values.category}</p>
                <p class="price">${values.price}</p>
            </div>`
        });
        document.getElementById("cards").innerHTML=data;
    }).catch((err)=>{
        console.log(err);
    })
}
}