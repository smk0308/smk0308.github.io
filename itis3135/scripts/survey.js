/* Function to validate form */
function validateForm() {
    var fields = ['name', 'mascot', 'caption',
        'personal-background', 'professional-background', 'academic-background',
        'web-background', 'platform'];

    for (let i = 0; i < fields.length - 1; i++) {
        const value = document.getElementById(fields[i]).value.trim("");
        if (value === "") {
            return false;
        }
    }

    if (!document.getElementById("agree").checked) {
        return false;
    }

    return true;
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
    newDiv.id = 'div-${counter}';
    newDiv.innerHTML += `<br><span>Course #: ${counter}</span><input type="text" id="course-${counter}">`;

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
    if (validateForm) { 
        document.getElementById("form-section").style.display = "none";
        document.getElementById("user-section").style.display = "block";
        document.getElementById("user-name").innerText = document.getElementById("name").value + " " + document.getElementById("mascot").value;
        document.getElementById("user-personal").innerText = document.getElementById("personal-background").value;
        document.getElementById("user-academic").innerText = document.getElementById("academic-background").value;
        document.getElementById("user-web").innerText = document.getElementById("web-background").value;
        document.getElementById("user-platform").innerText = document.getElementById("platform").value;
        document.getElementById("user-funny").innerText = document.getElementById("funny").value;
        document.getElementById("user-extra").innerText = document.getElementById("anything").value;
        
        document.getElementById('test-result').innerText = "What the hell";
        const userCourses = document.getElementById("user-courses");
        for (let i = 1; i < counter; i++) { 
            userCourses.appendChild(document.getElementById(`div-${counter}`));
        }
        
        const resetFormButton = document.createElement('button');
        resetFormButton.textContent = "Reset Form";
        resetFormButton.onclick = reset();
    }
}

document.getElementById("submit").addEventListener("click", function (event) { 
    event.preventDefault();
    createPage();
});