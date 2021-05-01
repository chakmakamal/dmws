function showMenu(){
    const x = document.getElementById("dmws_menus");
    if(x.style.display === "block")
    {
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

function donatePage(){

    const donatePage = document.getElementById("donatePage");
    if( donatePage.style.display === "block")
    {
        donatePage.style.display = "none";
    }else{
        donatePage.style.display = "block";
    }
}
const dmwsBody = document.getElementById("main");
dmwsBody.addEventListener("click", function(){
    let x = document.getElementById("dmws_menus");
    if( x.style.display === "block")
    {
        x.style.display = "none";
    }
})
// closing donate page
const whoweare = document.getElementById("dmws_whoweare");
whoweare.addEventListener("click", function(){
    const donatePage= document.getElementById("donatePage");
    if(donatePage.style.display === "block")
    {
        donatePage.style.display = "none";
    }
})

//close donate page function
const closeDonatePage = document.getElementById("closeDonatePage");

closeDonatePage.addEventListener("click",function(){
    const donatePage = document.getElementById("donatePage");
    if( donatePage.style.display === "block")
    {
        donatePage.style.display = "none";
    }
})
