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
});


function toggleSection(e) {
    document.getElementById('home-section').style.display = "none";
    document.getElementById('campaign-section').style.display = "none";
    document.getElementById('dm-section').style.display = "none";
    document.getElementById('character-section').style.display = "none";
    document.getElementById('apply-section').style.display = "none";

    document.getElementById(e).style.display = "block";

}

document.getElementById("home-btn").addEventListener("click", function (event) {
    toggleSection("home-section");
});

document.getElementById("campaign-btn").addEventListener("click", function (event) {
    toggleSection("campaign-section");
});

document.getElementById("dm-btn").addEventListener("click", function (event) {
    toggleSection("dm-section");
});

document.getElementById("character-btn").addEventListener("click", function (event) {
    toggleSection("character-section");
});

document.getElementById("apply-btn").addEventListener("click", function (event) {
    toggleSection("apply-section");
});

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
                        avatar.src = "../images/human_male.png";

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
                        avatar.src = "../images/human_female.png";
                }
            }
        }
    }
}

const radios = document.querySelectorAll('input[name="gender"]');

radios.forEach(radio = () => {
    radio.addEventListener('change', function (event) {
        dispRadio();
    });
});

document.getElementById("race-dropdown").addEventListener("change", function (event) {
    dispRadio();
});

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
            document.getElementById("points").innerText = "10";
            strBase.innerText = "15";
            strMod.innerText = "3";
            dexBase.innerText = "10";
            dexMod.innerText = "0";
            conBase.innerText = "15";
            conMod.innerText = "2";
            intBase.innerText = "8";
            intMod.innerText = "0";
            wisBase.innerTest = "11";
            wisMod.innerText = "0";
            chrBase.innerText = "12";
            chrMod.innerText = "1";
            break;
        case "Bard":
            document.getElementById("points").innerText = "10";
            strBase.innerText = "8";
            strMod.innerText = "2";
            dexBase.innerText = "14";
            dexMod.innerText = "3";
            conBase.innerText = "13";
            conMod.innerText = "3";
            intBase.innerText = "10";
            intMod.innerText = "2";
            wisBase.innerTest = "12";
            wisMod.innerText = "3";
            chrBase.innerText = "15";
            chrMod.innerText = "3";
            break;
        case "Rogue":
            document.getElementById("points").innerText = "10";
            strBase.innerText = "8";
            strMod.innerText = "2";
            dexBase.innerText = "15";
            dexMod.innerText = "3";
            conBase.innerText = "14";
            conMod.innerText = "3";
            intBase.innerText = "10";
            intMod.innerText = "2";
            wisBase.innerTest = "13";
            wisMod.innerText = "3";
            chrBase.innerText = "12";
            chrMod.innerText = "3";
            break;
        case "Sorcerer":
            document.getElementById("points").innerText = "10";
            strBase.innerText = "8";
            strMod.innerText = "2";
            dexBase.innerText = "13";
            dexMod.innerText = "3";
            conBase.innerText = "14";
            conMod.innerText = "3";
            intBase.innerText = "12";
            intMod.innerText = "3";
            wisBase.innerTest = "10";
            wisMod.innerText = "2";
            chrBase.innerText = "15";
            chrMod.innerText = "3";
            break;
    }
});

/* Plus and Minus Stats */

function checkMod(e, f) {
    if (e >= 4 && e <= 18) {
        document.getElementById(f).innerText = Math.floor(e / 4);
    } else if (e < 4) {
        document.getElementById(f).innerText = 0;
    } else {
        alert("Stat is not within range!");
    }
}

function incBase(e, f) {
    var points = parseInt(document.getElementById("points").innerText);
    if (points > 0) {
        document.getElementById(e).innerText = parseInt(document.getElementById(e).innerText) + 1;
        points--;
        document.getElementById("points").innerText = points;
        checkMod(parseInt(document.getElementById(e).innerText), f);
    } else {
        alert("You have no points to spend!");
    }
}

function decBase(e, f) {
    var points = parseInt(document.getElementById("points").innerText);
    document.getElementById(e).innerText = parseInt(document.getElementById(e).innerText) - 1;
    points++;
    document.getElementById("points").innerText = points;
    checkMod(parseInt(document.getElementById(e).innerText), f);
}

document.getElementById("str-plus").addEventListener('click', function (event) {
    incBase('str-base', 'str-mod');
});


document.getElementById("str-minus").addEventListener('click', function (event) {
    decBase('str-base', 'str-mod');
});

document.getElementById("dex-plus").addEventListener('click', function (event) {
    incBase('dex-base', 'dex-mod');
});

document.getElementById("dex-minus").addEventListener('click', function (event) {
    decBase('dex-base', 'dex-mod');
});

document.getElementById("int-plus").addEventListener('click', function (event) {
    incBase('int-base', 'int-mod');
});

document.getElementById("int-minus").addEventListener('click', function (event) {
    decBase('int-base', 'int-mod');
});

document.getElementById("chr-plus").addEventListener('click', function (event) {
    incBase('chr-base', 'chr-mod');
});

document.getElementById("chr-minus").addEventListener('click', function (event) {
    decBase('chr-base', 'chr-mod');
});

document.getElementById("wis-plus").addEventListener('click', function (event) {
    incBase('wis-base', 'wis-mod');
});

document.getElementById("wis-minus").addEventListener('click', function (event) {
    decBase('wis-base', 'wis-mod');
});

document.getElementById("con-plus").addEventListener('click', function (event) {
    incBase('con-base', 'con-mod');
});

document.getElementById("con-minus").addEventListener('click', function (event) {
    decBase('con-base', 'con-mod');
});


/* Reset Form to Starting Values */
document.getElementById("reset-form").addEventListener("click", () => {
    avatar.src = avatar.src = "../images/dwarf_female.png";
    charaName.innerText = "Kestrel Fizzleforge";
    document.getElementById("points").innerText = "10";
    strBase.innerText = "15";
    strMod.innerText = "3";
    dexBase.innerText = "10";
    dexMod.innerText = "0";
    conBase.innerText = "15";
    conMod.innerText = "2";
    intBase.innerText = "8";
    intMod.innerText = "0";
    wisBase.innerTest = "11";
    wisMod.innerText = "0";
    chrBase.innerText = "12";
    chrMod.innerText = "1";
    document.getElementById("character-form").reset();
});


/* Image gallery */
var imgNum = 1;
var galleryImg = document.getElementById("gallery-img");

document.getElementById('next').addEventListener("click", () => {
    imgNum++;
    if (imgNum <= 5) {
        switch (imgNum) {
            case 1:
                galleryImg.src = "../images/dnddwarf.png";
                break;
            case 2:
                galleryImg.src = "../images/faerun.jpg";
                break;
            case 3:
                galleryImg.src = "../images/beholder.jpg";
                break;
            case 4:
                galleryImg.src = "../images/baldursgate.jpg";
                break;
            case 5:
                galleryImg.src = "../images/neverwinter.png";
                break;
        }
    } else {
        imgNum = 1;
        galleryImg.src = "../images/dnddwarf.png";
    }
});


