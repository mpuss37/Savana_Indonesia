// Ambil elemen sidebar dan elemen utama
const sidebar = document.getElementById('sidebar');
const sidebarIcon = document.querySelector('.sidebar-icon');
const mainContent = document.getElementById('main');

// Fungsi untuk membuka sidebar
function openSidebar() {
  sidebar.style.width = "250px";
  mainContent.style.marginLeft = "250px";
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
  sidebar.style.width = "0";
  mainContent.style.marginLeft = "0";
}

// Event listener untuk membuka sidebar saat ikon diklik
sidebarIcon.addEventListener('click', () => {
  if (sidebar.style.width === "250px") {
    closeSidebar(); // Tutup jika sudah terbuka
  } else {
    openSidebar(); // Buka jika tertutup
  }
});
