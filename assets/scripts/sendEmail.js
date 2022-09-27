function sendMail(contactform){
    emailjs.send("service_vdfvl0e", "tribal_minds", {
        "from_name": contactform.feedback_name.value,
        "from_email": contactform.feedback_email.value,
        "feedback_summary": contactform.feedback_message.value
    })
    .then(function(response){
        console.log("SUCCESS", response);
    },
    function(error){
        console.log("FAILED", error);
    })
    contactform.feedback_name.value = "";
    contactform.feedback_email.value = "";
    contactform.feedback_message.value = "";
    return false
}