const handleToggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("-right-full")) {
        sidebar.classList.remove("-right-full");
        sidebar.classList.add("right-0");
    } else {
        sidebar.classList.remove("right-0");
        sidebar.classList.add("-right-full");
    }
}

const navLinks = document.querySelectorAll("#sidebar li a")
navLinks.forEach(link => {
    link.addEventListener("click" , function() {
        navLinks.forEach(link => {
            link.classList.remove("text-primary");
        });

        this.classList.add("text-primary");
    });
});
