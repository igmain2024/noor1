// function buttonHome(){
//     window.history.pushState("http://localhost:8888/", "");
//     window.location.replace("html/new.html")
// }
// function ButtonRedirect(){
//     window.history.pushState("http://localhost:8888/", "");
//     window.location.replace("https://nathanspelts.com/")
//     console.log("Redirected to https://nathanspelts.com/")

// }
// function ButtonGame(){
//     if(window.confirm("Are you *really* sure you want to play the game?")){
//         let name = prompt("Enter your name","");
//         if(name==null || name =="") {
//             name="bro";
//         }
//         alert(name+", your name is "+name.length+" characters long!");
//     }
// }
// function ButtonInspire(){
//     alert("You can do it!")
// }
/*This toggles the contents appearing in the dropdown menu based on an ID*/
function toggleDropdown(ID) {
    document.getElementById(ID).classList.toggle("showContents");
}
/*This disables showing the dropdown menu contents if clicking off the menu*/
function disableDropdownOOB(){

}
