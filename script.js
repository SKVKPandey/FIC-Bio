document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var videoBackground = document.getElementById("video-background");
    var video = document.getElementById("background-video");

    video.style.opacity = 0;

    setTimeout(function() {
      videoBackground.removeChild(video);
    }, 2000);
  }, 3000);
});

const linkedinIcon = document.getElementById("linkedin");
const facebookIcon = document.getElementById("facebook");
const emailIcon = document.getElementById("email");
const instaIcon = document.getElementById("instagram");
const twitterIcon = document.getElementById("twitter");
const spotifyIcon = document.getElementById("spotify");

linkedinIcon.addEventListener("click", function() {
  window.open("https://www.linkedin.com/company/fic-arsd/", "_blank");
});

facebookIcon.addEventListener("click", function() {
  window.open("https://www.facebook.com/ficarsd/", "_blank");
});

emailIcon.addEventListener("click", function() {
  window.open("ficarsd19@gmail.com", "_blank");
});

instaIcon.addEventListener("click", function() {
  window.open("https://instagram.com/ficarsd", "_blank");
});

twitterIcon.addEventListener("click", function() {
  window.open("https://twitter.com/fic_arsd", "_blank");
});

spotifyIcon.addEventListener("click", function() {
  window.open("https://open.spotify.com/show/0o3f4G8SFqz1g5S59zJxUu", "_blank");
});







  
  