/* Function to validate form */
function validateForm() {
    const requiredInput = form.querySelectorAll('input[required]');

    let emptyForm = false;

    requiredInput.forEach((input) => {
        if (input.value.trim() === "") {
            emptyForm = true;
        }
    });

    return emptyForm;
}


/* Reset form */
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    document.getElementById("byo-form").reset();
});

/* Add new course text box */

const courseButton = document.getElementById("courses-button");
var counter = 1;


courseButton.addEventListener("click", function () {
    const courseList = document.getElementById("course-list");
    const newDiv = document.createElement('div');
    newDiv.id = `div-${counter}`;
    newDiv.innerHTML += `<br><span>Course #: ${counter}</span><input type="text" id="course-${counter}"><span>Course Info</span><input type="text" id="course-info-${counter}">`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        courseList.removeChild(newDiv);
    };
    counter++;
    newDiv.appendChild(deleteButton);
    courseList.appendChild(newDiv);

});

/* Create elements from */
function createPage() {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("user-section").style.display = "block";
    /* Handle Image Upload */

    const userImage = document.getElementById("user-image");
    const imageFile = document.getElementById("image");
    userImage.src = imageFile.value;


    document.getElementById("user-fig").innerHTML = `<i>${document.getElementById("caption").value}</i>`
    document.getElementById("user-name").innerText = document.getElementById("name").value + " " + document.getElementById("mascot").value;
    document.getElementById("user-personal").innerText = "Personal Background: " + document.getElementById("personal-background").value;
    document.getElementById("user-academic").innerText = "Professional Background: " + document.getElementById("academic-background").value;
    document.getElementById("user-web").innerText = "Background in Web Development: " + document.getElementById("web-background").value;
    document.getElementById("user-platform").innerText = "Primary Computer Platform: " + document.getElementById("platform").value;
    document.getElementById("user-funny").innerText = "Funny/Interesting Item to Remember me by: " + document.getElementById("funny").value;
    document.getElementById("user-extra").innerText = "I'd Also Like to Share: " + document.getElementById("anything").value;


    const courseList = document.getElementById("course-list-ul");
    var containerDiv = document.getElementById("course-list");
    for (let i = 0; i < containerDiv.getElementsByTagName("div").length; i++) {
        var li = document.createElement("li");
        var courseDivId = (containerDiv.childNodes[i].id).slice(-1);
        li.appendChild(document.createTextNode(document.getElementById(`course-${courseDivId}`).value + ': ' + document.getElementById(`course-info-${courseDivId}`).value));
        courseList.appendChild(li);
    }

    const resetFormButton = document.createElement('button');
    resetFormButton.textContent = "Reset Form";
    resetFormButton.onclick = function () {
        window.location.reload();
    }
    document.getElementById("user-reset").appendChild(resetFormButton);
}


document.getElementById("submit").addEventListener("click", function (event) {
    if (validateForm) {
        event.preventDefault();
    }
    createPage();
});