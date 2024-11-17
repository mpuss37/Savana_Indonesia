// get sidebar element
const sidebar = document.getElementById('sidebar');
const sidebarIcon = document.querySelector('.sidebar-icon');
const mainContent = document.getElementById('main');

function openSidebar() {
  sidebar.style.width = "250px";
  mainContent.style.marginLeft = "250px";
}

function closeSidebar() {
  sidebar.style.width = "0";
  mainContent.style.marginLeft = "0";
}

// listener function for click sidebar
sidebarIcon.addEventListener('click', () => {
  if (sidebar.style.width === "250px") {
    closeSidebar(); 
  } else {
    openSidebar();
  }
});
