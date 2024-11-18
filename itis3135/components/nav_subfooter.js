document.addEventListener("DOMContentLoaded", function () {

    fetch("./components/nav_subfooter.json")
        .then((response) => response.json())
        .then((data) => {
           
            const menuContainer = document.getElementById("nav-subfooter");
            const quote = document.createElement("p");
            quote.innerHTML = `<i>"Because every kitty should get the chance to be silly."</i>`;
            menuContainer.appendChild(quote);
            const designedBy = document.createTextNode("Designed by ");
            menuContainer.appendChild(designedBy);
            const krupaDesigns = document.createElement("a");
            krupaDesigns.textContent = data[0].name;
            krupaDesigns.href = data[0].url;
            menuContainer.appendChild(krupaDesigns);
            const copyRight = document.createTextNode(" © 2024, ");
            menuContainer.appendChild(copyRight);
            const certifiedWebDesign = document.createElement("a");
            certifiedWebDesign.textContent = data[1].name;
            certifiedWebDesign.href = data[1].url;
            menuContainer.appendChild(certifiedWebDesign);
        })
        .catch((error) => console.error("Error fetching menu:", error));
});