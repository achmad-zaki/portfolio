const handleToggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("right-0")) {
        sidebar.classList.remove("right-0");
        sidebar.classList.add("-right-full");
    } else {
        sidebar.classList.remove("-right-full");
        sidebar.classList.add("right-0");
    }
}
