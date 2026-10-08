//get references for text input and button fields
var fName = document.getElementById("fName")
var message = document.getElementById("message")
var submitBtn = document.getElementById("submitBtn")


//add click event listener, to get data when data is entered
submitBtn.addEventListener("click", function(){
    document.getElementById("textAppear").textContent = "The Almighty Gregor will not be satisfied with this message.\nContact us some other way...";
}
