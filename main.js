document.addEventListener("DOMContentLoaded", () => {
  // About popup elements
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutPopup = document.getElementById("aboutPopup");
  const closeBtn = document.getElementById("closeAboutBtn");

  // User profile elements
  const userProfile = document.getElementById("userProfile");
  const userPhoto = document.getElementById("userPhoto");

  // Logout confirmation elements
  const logoutConfirm = document.getElementById("logoutConfirm");
  const confirmLogoutBtn = document.getElementById("confirmLogoutBtn");
  const cancelLogoutBtn = document.getElementById("cancelLogoutBtn");

  // Main buttons
  const downloadBtn = document.getElementById("downloadBtn");
  const discordBtn = document.getElementById("discordBtn");
  const tutorialBtn = document.getElementById("tutorialBtn");

  // Show About popup
  aboutBtn.addEventListener("click", () => {
    aboutPopup.style.display = "block";
  });

  // Hide About popup
  closeBtn.addEventListener("click", () => {
    aboutPopup.style.display = "none";
  });

  // User profile click => open user settings or logout confirmation
  userProfile.addEventListener("click", () => {
    logoutConfirm.style.display = "block";
  });

  // Logout confirmation buttons
  confirmLogoutBtn.addEventListener("click", () => {
    // Call your logout logic here, e.g., Firebase logout
    firebase.auth().signOut().then(() => {
      logoutConfirm.style.display = "none";
      alert("You have been logged out.");
      // Redirect or update UI after logout
      location.reload();
    });
  });

  cancelLogoutBtn.addEventListener("click", () => {
    logoutConfirm.style.display = "none";
  });

  // Main buttons - replace links in () with your URLs
  downloadBtn.addEventListener("click", () => {
    window.open("ENTER_DOWNLOAD_LINK_HERE", "_blank");
  });

  discordBtn.addEventListener("click", () => {
    window.open("ENTER_DISCORD_INVITE_LINK_HERE", "_blank");
  });

  tutorialBtn.addEventListener("click", () => {
    window.open("ENTER_TUTORIAL_LINK_HERE", "_blank");
  });

  // Firebase Auth listener for showing user profile photo
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userPhoto.src = user.photoURL || "default-user.png"; // fallback image if no photo
      userProfile.style.display = "block";
    } else {
      userProfile.style.display = "none";
    }
  });
});
