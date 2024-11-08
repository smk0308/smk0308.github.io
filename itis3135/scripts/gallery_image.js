/* Image gallery */
let num = 1;
let galleryImage = document.getElementById("gallery-image");
const nextButton = document.getElementById("next-button");

if (nextButton != null) {
    nextButton.addEventListener("click", () => {
        num++;
        console.log(`Current num: ${num}`);
        if (num > 5) {
            num = 1;
        }
        switch (num) {
            case 1:
                galleryImage.src = "../images/dnddwarf.png";
                break;
            case 2:
                galleryImage.src = "../images/faerun.jpg";
                break;
            case 3:
                galleryImage.src = "../images/beholder.jpg";
                break;
            case 4:
                galleryImage.src = "../images/baldursgate.jpg";
                break;
            case 5:
                galleryImage.src = "../images/neverwinter.png";
                break;
        }
    });
}