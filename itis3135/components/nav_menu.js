document.addEventListener("DOMContentLoaded", function () {

    fetch("./components/nav_menu.json")
        .then((response) => response.json())
        .then((data) => {
           
            const menuContainer = document.getElementById("nav-menu");
            let index = 0;
            data.forEach((item) => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;
                menuItem.classList.add("menu-item");
                menuContainer.appendChild(menuItem);
                if (index < data.length - 1) {
                    const divider = document.createTextNode(" - ");
                    menuContainer.appendChild(divider);
                }
                index++;
            });
        })
        .catch((error) => console.error("Error fetching menu:", error));
});