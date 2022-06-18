let table = document.getElementById("tbody");
let link = document.getElementById("link");


table.addEventListener('click',function(e){
    //retrieves id of the row that was clicked then stores the array of elements of that row inside tar
    let tar = document.getElementById(e.target.parentNode.parentElement.id).getElementsByTagName('td');
    
    /*passing id of clicked item through session storage using index of table data
    sessionStorage.setItem("name",tar[2].innerText);
    */

    e.target.dataset.nam = tar[0].innerText;
    e.target.dataset.age = tar[1].innerText;
    e.target.dataset.idd = tar[2].innerText;

    console.log(e.target.parentElement.parentElement.children[e.target.parentElement.parentElement.children.length - 1]);
    console.log(e.target.nodeName);

    if(e.target.nodeName=="A"){
    e.target.parentElement.parentElement.children[e.target.parentElement.parentElement.children.length - 1].style.backgroundColor = "green";
    }

    //passing id of clicked item through session storage using data set property
    
    sessionStorage.setItem("name",e.target.dataset.nam);
    sessionStorage.setItem("age",e.target.dataset.age);
    sessionStorage.setItem("id",e.target.dataset.idd);

    // link.dataset.nam = tar[0].innerText;
    // link.dataset.idd = tar[2].innerText;
    // link.dataset.age = tar[1].innerText;

    // document.getElementById("div1").innerText=link.dataset.nam;
    // document.getElementById("div1").innerText =` Age : ${link.dataset.age} Name: ${link.dataset.nam} Id ${link.dataset.idd}`;
    // document.getElementById("div1").innerText=link.dataset.idd;

    
    // console.log(x);
    
    
    
    // console.log(Math.random());
    
    // sessionStorage.setItem("name",);
    // console.log(sessionStorage.getItem("name"));
    // let row = ;
    // e.target.parentNode;
    // console.log(row);
    // console.log(tar[2].innerText);
});