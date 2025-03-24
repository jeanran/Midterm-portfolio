
function openSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    const openNav = document.getElementById("openNav");

    sidebar.style.width = "90px";
    main.style.marginLeft = "80px";
    openNav.style.display = "none";
}

function closeSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    const openNav = document.getElementById("openNav");

    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    openNav.style.display = "inline-block";
}
