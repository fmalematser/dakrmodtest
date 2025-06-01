window.onload = () => {
  const loginScreen = document.getElementById("login-screen");
  const mainContent = document.getElementById("main-content");
  const userPhoto = document.getElementById("user-photo");
  const profileSection = document.getElementById("profile-section");
  const logoutModal = document.getElementById("logout-modal");
  const logoutBtn = document.getElementById("logout-btn");
  const cancelLogout = document.getElementById("cancel-logout");
  const aboutBtn = document.getElementById("about-btn");
  const aboutModal = document.getElementById("about-modal");
  const closeAbout = document.getElementById("close-about");

  const googleLoginBtn = document.getElementById("google-login");
  const facebookLoginBtn = document.getElementById("facebook-login");

  const downloadBtn = document.getElementById("download-btn");
  const discordBtn = document.getElementById("discord-btn");
  const tutorialBtn = document.getElementById("tutorial-btn");

  // Auth state check
  auth.onAuthStateChanged(user => {
    if (user) {
      loginScreen.classList.add("hidden");
      mainContent.classList.remove("hidden");
      userPhoto.src = user.photoURL;
      profileSection.classList.remove("hidden");
    } else {
      loginScreen.classList.remove("hidden");
      mainContent.classList.add("hidden");
      profileSection.classList.add("hidden");
    }
  });

  // Google login
  googleLoginBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  });

  // Facebook login
  facebookLoginBtn.addEventListener("click", () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  });

  // Logout modal
  userPhoto.addEventListener("click", () => {
    logoutModal.classList.remove("hidden");
  });

  cancelLogout.addEventListener("click", () => {
    logoutModal.classList.add("hidden");
  });

  logoutBtn.addEventListener("click", () => {
    auth.signOut();
    logoutModal.classList.add("hidden");
  });

  // About modal
  aboutBtn.addEventListener("click", () => {
    aboutModal.classList.remove("hidden");
  });

  closeAbout.addEventListener("click", () => {
    aboutModal.classList.add("hidden");
  });

  // Add links here
  downloadBtn.onclick = () => window.open("https://enter-download-link", "_blank");
  discordBtn.onclick = () => window.open("https://enter-discord-link", "_blank");
  tutorialBtn.onclick = () => window.open("https://enter-tutorial-link", "_blank");
};
