var submit = document.querySelector("input[type=submit]");
var fullName = document.querySelector("#fullname");
var email = document.querySelector("#email");
var title = document.querySelector("#title");
var message = document.querySelector("#message");



var checkEmail = () => {
    // console.log("hello");
    var field = email.value;
    var a = field.toString();
    console.log(a);
    // const field = "emex4gman@gmail.com";
    // const rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // const isValid = rejex.test(field)
    // if (isValid === true) {
    //     console.log("name is corect");
    // } else {
    //     console.log("name is not corect");
    // };

    // return isValid;

}





submit.addEventListener("click", () => {
    alert("form is not read");
    window.location.assign("chukwuemeka.html");
    window.location.reload(true);
})