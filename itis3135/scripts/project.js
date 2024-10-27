/* Name randomization */
const charaName = document.getElementById("chara-name");
const nameChange = document.getElementById("name-change");
const names = ["Karn Thunderheart", "Elaris Frostsong",
    "Drakon Steelclaw", "Sylith Willowshade", "Halric Beastcaller",
    "Caden Melodyhart", "Avelin Roguestep", "Ember Lyricshade", "Durnik Quickfoot",
    "Bunnar Emberdagger", "Kelthar Moonshadow", "Zaelith Sunstrider",
    "Lunara Duskwhisper", "Maelis Frostspark", "Briar Blackthorn",
    "Vesper Thievesbane", "Glimmer Stonehart", "Wren Firewhisper",
    "Kestrel Fizzleforge", "Pip Hearthcaster"];

nameChange.addEventListener("click", () => {
    const randomName = Math.floor(Math.random() * names.length);
    charaName.textContent = names[randomName];
})


function toggleSection(e) {
    document.getElementById('home-section').style.display = "none";
    document.getElementById('campaign-section').style.display = "none";
    document.getElementById('dm-section').style.display = "none";
    document.getElementById('character-section').style.display = "none";
    document.getElementById('apply-section').style.display = "none";

    document.getElementById(e).style.display = "block";

}

/* Avatar Changing */
var avatar = document.getElementById("avatar");
var gender = document.getElementsByName("gender");

function dispRadio() {
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            if (gender[i].value === "male") {
                switch (document.getElementById("race-dropdown").value) {
                    case "Dwarf":
                        avatar.src = "../images/dwarf_male.png";
                        break;
                    case "Elf":
                        avatar.src = "../images/elf_male.png";
                        break;
                    case "Human":
                        avatar.src = "../images/human_male.png"

                }
            } else {
                switch (document.getElementById("race-dropdown").value) {
                    case "Dwarf":
                        avatar.src = "../images/dwarf_female.png";
                        break;
                    case "Elf":
                        avatar.src = "../images/elf_female.png";
                        break;
                    case "Human":
                        avatar.src = "../images/human_female.png"
                }
            }
        }
    }
}

/* Stat changes */
var userClass = document.getElementById("class-dropdown");
var result = document.getElementById("result");
var classValue = document.getElementById("class-dropdown").value;


/* Base stats */
var strBase = document.getElementById("str-base");
var dexBase = document.getElementById("dex-base");
var intBase = document.getElementById("int-base");
var chrBase = document.getElementById("chr-base");
var wisBase = document.getElementById("wis-base");
var conBase = document.getElementById("con-base");

/* Modifiers */
var strMod = document.getElementById("str-mod");
var dexMod = document.getElementById("dex-mod");
var intMod = document.getElementById("int-mod");
var chrMod = document.getElementById("chr-mod");
var wisMod = document.getElementById("wis-mod");
var conMod = document.getElementById("con-mod");

/* Change base stats based on selected class */
userClass.addEventListener("change", () => {
    switch (document.getElementById("class-dropdown").value) {
        case "Barbarian":
            document.getElementById("points").innerText = "0";
            strBase.innerText = "15";
            strMod.innerText = "+2";
            dexBase.innerText = "10";
            dexMod.innerText = "+0";
            conBase.innerText = "15";
            conMod.innerText = "+2"
            intBase.innerText = "8";
            intMod.innerText = "+0";
            wisBase.innerTest = "11";
            wisMod.innerText = "+0";
            chrBase.innerText = "12";
            chrMod.innerText = "+1";
            break;
        case "Bard":
            document.getElementById("points").innerText = "0";
            strBase.innerText = "10";
            strMod.innerText = "+0";
            dexBase.innerText = "15";
            dexMod.innerText = "+2";
            conBase.innerText = "15";
            conMod.innerText = "+2"
            intBase.innerText = "8";
            intMod.innerText = "-1";
            wisBase.innerTest = "11";
            wisMod.innerText = "+0";
            chrBase.innerText = "12";
            chrMod.innerText = "+1";
            break;
        case "Rogue":
            document.getElementById("points").innerText = "0";
            strBase.innerText = "8";
            strMod.innerText = "+0";
            dexBase.innerText = "15";
            dexMod.innerText = "+2";
            conBase.innerText = "15";
            conMod.innerText = "+2"
            intBase.innerText = "8";
            intMod.innerText = "-1";
            wisBase.innerTest = "11";
            wisMod.innerText = "+0";
            chrBase.innerText = "12";
            chrMod.innerText = "+1";
            break;
        case "Sorcerer":
            document.getElementById("points").innerText = "0";
            strBase.innerText = "8";
            strMod.innerText = "+0";
            dexBase.innerText = "15";
            dexMod.innerText = "+2";
            conBase.innerText = "15";
            conMod.innerText = "+2"
            intBase.innerText = "8";
            intMod.innerText = "-1";
            wisBase.innerTest = "11";
            wisMod.innerText = "+0";
            chrBase.innerText = "12";
            chrMod.innerText = "+1";
            break;
    }
})


/* Plus and Minus Stats */

function incBase(e, f) {
    var points = parseInt(document.getElementById("points").innerText);
    if (points > 0) {
        document.getElementById(e).innerText = parseInt(document.getElementById(e).innerText) + 1;
        points--;
        document.getElementById("points").innerText = points;
        checkMod(parseInt(document.getElementById(e)), f);
    } else {
        alert("You have no points to spend!");
    }
}

function decBase(e, f) {
    var points = parseInt(document.getElementById("points").innerText);
    document.getElementById(e).innerText = parseInt(document.getElementById(e).innerText) - 1;
    points++;
    document.getElementById("points").innerText = points;
    checkMod(parseInt(document.getElementById(e)), f);
}


function checkMod(e, f) {
    if (e >= 4 && e <= 18) {
        document.getElementById(f).innerText = e / 4;
    } else if (e < 4) {
        document.getElementById(f).innerText = 0;
    } else {
        alert("Stat is not within range!");
    }
}

/* Reset Form to Starting Values */
function resetForm() {
    avatar.src = "../images/dwarf_female.png";
}

