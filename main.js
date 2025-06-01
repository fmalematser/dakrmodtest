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
  userProfile
