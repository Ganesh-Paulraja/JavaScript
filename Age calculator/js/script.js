function ageInDays(){
    var prompt_1 = prompt("dob?");
    var age=  2021 - prompt_1;
    var ageInDays = age*365;
    
    var h1 = document.createElement("h1");
    h1.setAttribute("class","fw-light")
    h1.setAttribute("Id","result")
    var innerText = document.createTextNode("Your age is "+ ageInDays + " days");
    h1.append(innerText);
    document.getElementById("ageInDays").append(h1);

}
document.getElementById("click-me").addEventListener("click", ageInDays);

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("result").remove();
})