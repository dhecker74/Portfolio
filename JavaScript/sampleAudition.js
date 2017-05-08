function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["displayEvens"].elements.length;
        loopCounter++) {
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["displayEvens"]["startNum"].value = "";
    document.forms["displayEvens"]["endNum"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    document.forms["displayEvens"]["startNum"].focus();
}

function validateItems() {
    clearErrors();
    var startNum = document.forms["displayEvens"]["startNum"].value;
    var endNum = document.forms["displayEvens"]["endNum"].value;
    var step = document.forms["displayEvens"]["step"].value;

    if (startNum == "" || isNaN(startNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["displayEvens"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startNum"].focus();
        return false;
    }
    if (endNum == "" || isNaN(endNum)) {
        alert("End Number must be filled in with a number.");
        document.forms["displayEvens"]["endNum"].parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["endNum"].focus();
        return false;
    }
    if (step == "" || isNaN(step) || step < 0) {
        alert("Step must be filled in with a positive number.");
        document.forms["displayEvens"]["step"].parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["step"].focus();
        return false;
    }
    if (Number(endNum) <= Number(startNum)) {
        alert("The Ending Number must be greater than the Starting Number");
        document.forms["displayEvens"]["endNum"].parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["endNum"].focus();
        return false;
    }

    document.getElementById("results").style.display = "block";
    //document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("headerResult").innerText =
    "Hear are the even numbers between " + Number(startNum) + " and " + Number(endNum) + " by " + Number(step) +"'s:";

    for (var i=startNum, idx=0; i <= endNum; i += step)
    {
        if (!(i%2)) {

        }
    }
    //document.getElementById("subtractResult").innerText = startNum - endNum;
    //document.getElementById("multiplyResult").innerText = startNum * endNum;
    //document.getElementById("divideResult").innerText = startNum / endNum;
    // We are returning false so that the form doesn't submit
    // and so that we can see the results
    return false;
}
