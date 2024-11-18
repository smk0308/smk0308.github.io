document.addEventListener("DOMContentLoaded", function () {

    fetch("./components/nav_footer.json")
        .then((response) => response.json())
        .then((data) => {
           
            const menuContainer = document.getElementById("nav-footer");
            let index = 0;
            data.forEach((item) => {
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;
                menuItem.classList.add("menu-item");
                menuContainer.appendChild(menuItem);
                if (index < data.length - 1) {
                    const divider = document.createElement("b");
                    divider.textContent = " ✿ ";
                    menuContainer.appendChild(divider);
                }
                index++;
            });
        })
        .catch((error) => console.error("Error fetching menu:", error));
});