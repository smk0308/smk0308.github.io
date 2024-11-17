document.addEventListener("DOMContentLoaded", function () {

    fetch("menu.json")
        .then(response => response.json())
        .then(data => {
           
            const menuContainer = document.getElementById("header-menu");
            data.forEach(item => {
                
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                menuContainer.appendChild(menuItem);
            });
        })
        .catch(error => console.error("Error fetching menu:", error));
});