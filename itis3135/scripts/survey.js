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

courseButton.addEventListener("click", (event) => { 
    preventDefault();
    
});