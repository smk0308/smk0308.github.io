/* Function to validate form */
function validateForm() {
    var fields = ['name', 'mascot', 'image', 'caption',
        'personal-background', 'professional-background', 'academic-background',
        'web-background', 'platform'];
    
    for (let i = 0; i < fields.length; i++) { 
        const value = document.getElementById(fields[i]).value;
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
var counter = 0;

courseButton.addEventListener("click", () => { 
    counter++;

    const courseInput = document.createElement('input');    
    courseInput.type = 'text';
    courseInput.id = `course-${counter}`;

    const courseInfo = document.createElement('input');
    courseInfo.type = 'text';
    courseInfo.id = `course-info-${counter}`;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.id = `delete-${counter}`;
    deleteButton.addEventListener("click", () => { 
        document.getElementById(`course-${counter}`).remove;
        document.getElementById(`course-info-${counter}`).remove;
        document.getElementById(`delete-${counter}`).remove;
    });
    
});