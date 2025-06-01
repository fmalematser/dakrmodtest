// Elements
const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');

const googleLoginBtn = document.getElementById('google-login');
const facebookLoginBtn = document.getElementById('facebook-login');

const userAvatar = document.getElementById('user-avatar');
const userDropdown = document.getElementById('user-dropdown');
const logoutBtn = document.getElementById('logout-btn');
const settingsLink = document.getElementById('settings-link');

const aboutBtn = document.getElementById('about-btn');
const aboutDropdown = document.getElementById('about-dropdown');

const logoutModal = document.getElementById('logout-modal');
const confirmLogout = document.getElementById('confirm-logout');
const cancelLogout = document.getElementById('cancel-logout');

const userNameSpan = document.getElementById('user-name');

let currentUser = null;

// Toggle dropdown helper
function toggleDropdown(dropdown) {
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden');
  } else {
    dropdown.classList.add('hidden');
  }
}

// Hide all dropdowns
function hideDropdowns() {
  aboutDropdown.classList.add('hidden');
  userDropdown.classList.add('hidden');
}

// Firebase auth state change listener
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    showDashboard(user);
  } else {
    showLogin();
  }
});

function showDashboard(user) {
  loginScreen.classList.add('hidden');
  dashboard.classList.remove('hidden');

  userNameSpan.textContent = user.displayName || "User";
  if(user.photoURL) {
    userAvatar.src = user.photoURL;
    userAvatar.classList.remove('hidden');
  }

  hideDropdowns();
}

function showLogin() {
  loginScreen.classList.remove('hidden');
  dashboard.classList.add('hidden');
  userAvatar.classList.add('hidden');
  currentUser = null;
}

// Dropdown event listeners
userAvatar.addEventListener('click', () => {
  toggleDropdown(userDropdown);
  aboutDropdown.classList.add('hidden');
});

aboutBtn.addEventListener('click', () => {
  toggleDropdown(aboutDropdown);
  userDropdown.classList.add('hidden');
});

// Logout button click
logoutBtn.addEventListener('click', () => {
  logoutModal.classList.remove('hidden');
  hideDropdowns();
});

// Logout confirmation
confirmLogout.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    logoutModal.classList.add('hidden');
  });
});

cancelLogout.addEventListener('click', () => {
  logoutModal.classList.add('hidden');
});

// Close dropdowns if clicking outside
window.addEventListener('click', e => {
  if (!e.target.closest('.right-menu') && !e.target.closest('#user-avatar')) {
    userDropdown.classList.add('hidden');
  }
  if (!e.target.closest('.left-menu') && !e.target.closest('#about-btn')) {
    aboutDropdown.classList.add('hidden');
  }
});
