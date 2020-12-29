const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const sidebarInner = document.querySelector('.sidebar-inner');


toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar-active');
    sidebarInner.classList.add('sidebar-inner-active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-active');
    sidebarInner.classList.remove('sidebar-inner-active');
})