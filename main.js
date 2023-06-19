$(function(){

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    });
});   

function submit(){
    var first_name_input = document.getElementById("first_name_input").value;
    var last_name_input = document.getElementById("last_name_input").value;
    var gender = document.querySelector('input[name="gender_input_name"]:checked').value;
    var full_dob = document.getElementById("dob_input").value;  
    var gender_selected = "";

    if (gender == "male" || gender == "female"){
        gender_selected == "yes";
        console.log(gender)
    } else {
        gender_selected == "no"
        alert("Please fill out all the input fields!");
    }

    if (first_name_input == "" || last_name_input == "" ) {
        alert("Please fill out all the input fields!");
    }
    else {
        console.log("Loading") 
    }
} 

// || gender == "no" || full_dob == ""
//var dob_components = full_dob.split("-");
//var date = dob_components[0];
//var month = dob_components[1];
//var year = dob_components[2];