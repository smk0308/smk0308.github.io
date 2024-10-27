document.getElementById("date-time").innerHTML = "Date: " + Date();

const greet = document.getElementById("greet-button");

greet.addEventListener("click", () => {
    var name = document.getElementById("user-name").value;
    var mood = document.getElementById("user-mood").value;

    alert(`Silly Kitty Cat Trees welcomes you, ${name}!
We're glad you are doing ${mood}!`);
});

const polygon = document.getElementById("poly-button");

polygon.addEventListener("click", () => {
    var input = Math.abs(parseInt(document.getElementById("user-number").value));

    switch (input) {
        case 0:
            alert("Your favorite number does not match a polygon! How sad. :(");
            break;
        case 1:
            alert("Your favorite number does not match a polygon! Circles do not count..");
            break;
        case 2:
            alert("Your favorite number matches a digon or bigon. Two times the fun!");
            break;
        case 3:
            alert("Your favorite number matches a triangle! I hope you remember the pythagorean theorem.");
            break;
        case 4:
            alert("Your favorite number matches a quadrilateral! Four times as much space.");
            break;
        case 5:
            alert("Your favorite number matches a pentagon! What do they call the bathroom at the pentagon? The pentajohn!");
            break;
        case 6:
            alert("Your favorite number matches a hexgon! My favorite hex code is #feb9c4");
            break;
        case 7:
            alert(`Your favorite number matches a heptagon! Octagon told Heptagon. "‘I’m sorry son, Grandma passed away."
            Heptagon said, “Nonagon?"`);
            break;
        case 8:
            alert("Your favorite number matches an octagon! The Pentagon was initially supposed to be The Octagon. Unfortunately the contractors cut corners.");
            break;
        case 9:
            alert("Your favorite number matches a nonagon! ....I'm running out of dad jokes.");
            break;
        case 10:
            alert("Your favorite number matches a decagon! My favorite cards are missing. Decagon!");
            break;
    }
});


const catNameButton = document.getElementById("cat-name-button");

catNameButton.addEventListener("click", () => {
    var origName = document.getElementById("cat-name").value;
    var catName = document.getElementById("cat-name").value.toLowerCase();
    switch (catName) {
        case "oreo":
            alert(`${origName}? Were you seven when you named your cat?`);
            break;
        case "kitty":
            alert("Did you even try?");
            break;
        case "luna":
            alert("It's alright I guess.");
            break;
        case "simba":
            alert("Everything the light touches is yours..");
            break;
        default:
            alert("Original! I love that name.");
            break;
    }
});

const catAgeButton = document.getElementById("cat-age-button");
catAgeButton.addEventListener("click", () => {
    var catAge = Math.abs(parseInt(document.getElementById("cat-age").value));
    if (catAge >= 1) {
        switch (catAge) {
            case 1:
                alert("Your cat is fifteen in human years!");
                break;
            case 2:
                alert("Your cat is twenty-four in human years!");
                break;
            case 3:
                alert("Your cat is twenty-eight in human years!");
                break;
            case 4:
                alert("Your cat is thirty-two in human years!");
                break;
            case 5:
                alert("Your cat is thirty-six in human years!");
                break;
            case 6:
                alert("Your cat is fourty in human years!");
                break;
            case 7:
                alert("Your cat is fourty-four in human years!");
                break;
            case 8:
                alert("Your cat is fourty-eight in human years!");
                break;
            case 9:
                alert("Your cat is fifty-two in human years!");
                break;
            case 10:
                alert("Your cat is fifty-six in human years!");
                break;
            case 11:
                alert("Your cat is sixty in human years!");
                break;
            case 12:
                alert("Your cat is sixty-four in human years!");
                break;
            case 13:
                alert("Your cat is sixty-eight in human years!");
                break;
            case 14:
                alert("Your cat is seventy-two in human years!");
                break;
            case 15:
                alert("Your cat is seventy-six in human years!");
                break;
            default:
                alert("That is one old cat..");
                break;
        }
    } else {
        alert("Your cat is still a baby!");
    }
});

const catActivityButton = document.getElementById("cat-activity-button");

catActivityButton.addEventListener("click", () => {
    var catActivity = document.getElementById("cat-activity").value.toLowerCase();
    switch (catActivity) {
        case "scratching":
            alert("We have the purrrfect scratching posts for you, then! Stop on by!");
            break;
        case "playing":
            alert("We have plenty of toys for your furry friend to play with!");
            break;
        case "sleeping":
            alert("Our custom-made cat beds are made with memory foam for the utmost comfort!");
            break;
        case "hunting":
            alert("Unforunately, we do not sell live mice for your cat to hunt. So sorry!");
            break;
        case "eating":
            alert("This is not a cat food store!");
            break;
        default:
            alert("That doesn't sound like a fun cat activity...");
            break;

    }
});

const catWeightButton = document.getElementById("cat-weight-button");

catWeightButton.addEventListener("click", () => {
    var catWeight = Math.abs(parseInt(document.getElementById("cat-weight").value));

    if (catWeight <= 12 && catWeight > 0) {
        alert("That is one lean cat!");
    } else if (catWeight > 12) {
        alert("Your cat might break our trees...");
    } else {
        alert("Are you sure you input your cat's weight correctly?");
    }
});

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

yesButton.addEventListener("click", () => {
    alert("Your cat is so cute!");
});


noButton.addEventListener("click", () => {
    var catNum = Math.floor(Math.random() * 5) + 1;
    var catImage = document.getElementById("cat-img");
    switch (catNum) {
        case 1:
            catImage.src = "./images/cat-1.jpg";
            break;
        case 2:
            catImage.src = "./images/cat-2.jpg";
            break;
        case 3:
            catImage.src = "./images/cat-3.jpg";
            break;
        case 4:
            catImage.src = "./images/cat-4.jpg";
            break;
        case 5:
            catImage.src = "./images/cat-5.jpg";
            break;
    }
});