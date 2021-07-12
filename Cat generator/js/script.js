function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("box-2");
    image.setAttribute("src","https://thecatapi.com/api/images/get?format=src&type=gif&size=small")


    div.append(image);
    
}
document.getElementById("generate_cat").addEventListener("click",generateCat);