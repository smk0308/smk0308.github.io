/* Add new course text box */
const courseButton = document.getElementById("courses-button");
var counter = 1;

courseButton.addEventListener("click", function () {
    const courseList = document.getElementById("course-list");
    const newDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    newDiv.id = `div-${counter}`;
    newDiv.innerHTML += `<br><span>Course #: ${counter}</span><input type="text" id="course-${counter}"><span>Course Info</span><input type="text" id="course-info-${counter}">`;

    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        courseList.removeChild(newDiv);
    };
    counter++;
    newDiv.appendChild(deleteButton);
    courseList.appendChild(newDiv);
});

/* Handle Image Upload */
document.getElementById("image-input").addEventListener("change", function () {
    if (this.files[0].type === "image/png" || this.files[0].type === "image/jpeg" || this.files[0].type === "image/jpg" || this.files[0].type === "image/webp") {
        document.getElementById("user-image").src = window.URL.createObjectURL(this.files[0]);
    } else {
        document.getElementById("image-input").value = null;
        alert("Not an image");
    }
});

/* Create elements from */
function createPage() {
    const courseList = document.getElementById("course-list-ul");
    const resetFormButton = document.createElement('button');
    var containerDiv = document.getElementById("course-list");

    //Fix later: academic background text(?)
    document.getElementById("form-section").style.display = "none";
    document.getElementById("user-section").style.display = "block";
    document.getElementById("user-fig").innerHTML = `<i>${document.getElementById("caption-input").value}</i>`;
    document.getElementById("user-name").innerText = document.getElementById("name-input").value + " " + document.getElementById("mascot-input").value;
    document.getElementById("user-personal").innerText = "Personal Background: " + document.getElementById("personal-input").value;
    document.getElementById("user-academic").innerText = "Academic Background: " + document.getElementById("academic-input").value;
    document.getElementById("user-professional").innerText = "Professional Background: " + document.getElementById("professional-input").value;
    document.getElementById("user-web").innerText = "Background in Web Development: " + document.getElementById("web-input").value;
    document.getElementById("user-platform").innerText = "Primary Computer Platform: " + document.getElementById("platform-input").value;
    document.getElementById("user-funny").innerText = "Funny/Interesting Item to Remember me by: " + document.getElementById("funny-input").value;
    document.getElementById("user-extra").innerText = "I'd Also Like to Share: " + document.getElementById("anything-input").value;

    for (let i = 0; i < containerDiv.getElementsByTagName("div").length; i++) {
        var li = document.createElement("li");
        var courseDivId = (containerDiv.childNodes[i].id).slice(-1);
        li.appendChild(document.createTextNode(document.getElementById(`course-${courseDivId}`).value + ': ' + document.getElementById(`course-info-${courseDivId}`).value));
        courseList.appendChild(li);
    }

    resetFormButton.textContent = "Reset Form";
    resetFormButton.onclick = function () {
        window.location.reload();
    };
    document.getElementById("user-reset").appendChild(resetFormButton);
}

/* Function to validate form */
document.getElementById("byo-form").addEventListener("submit", function (event) {
    event.preventDefault();
    createPage();
});

/* Reset form */
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    document.getElementById("byo-form").reset();
});
