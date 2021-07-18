$(document).ready(function(){
    $.validator.addMethod("wordCount",
     function(value, element, params) {
        var typedWords = jQuery.trim(value).split(' ').length;
            if(typedWords <= params[0]) {
            return true;
            }
        },
        jQuery.format("Only {0} words allowed.")
    );

    $("#myform").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            text: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            name: "Must be 2 characters or more",
            email: "Please enter a valid email adresse",
            text:  "Text must be minimum 3 words"
        }
    });
    
    const width = window.innerWidth;
    console.log(width);
    if(width <= 600){
        $(".nav-container").hide()
        $("#indexH1").hide()
        $(".nav-dropdown").show()
    }else{
        $(".nav-container").show()
        $(".nav-dropdown").hide()
    }
});
