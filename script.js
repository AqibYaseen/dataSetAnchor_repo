let table = document.getElementById("tbody");
let link = document.getElementById("link");


table.addEventListener('click',function(e){
    //retrieves id of the row that was clicked then stores the array of elements of that row inside tar
    let tar = document.getElementById(e.target.parentNode.parentNode.id).getElementsByTagName('td');
    
    /*passing id of clicked item through session storage using index of table data
    sessionStorage.setItem("name",tar[2].innerText);
    */
   
   e.target.dataset.nam = tar[0].innerText;
   e.target.dataset.age = tar[1].innerText;
   e.target.dataset.idd = tar[2].innerText;
    console.log(tar[0]);

    //passing id of clicked item through session storage using data set property
    
    sessionStorage.setItem("name",e.target.dataset.nam);
    sessionStorage.setItem("age",e.target.dataset.age);
    sessionStorage.setItem("id",e.target.dataset.idd);

    
    
    // console.log(x);
    
    
    
    console.log();
    
    // sessionStorage.setItem("name",);
    // console.log(sessionStorage.getItem("name"));
    // let row = ;
    // e.target.parentNode;
    // console.log(row);
    // console.log(tar[2].innerText);
});