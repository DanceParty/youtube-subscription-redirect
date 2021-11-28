function redirectYoutubeHomeLinks() {
  console.log("redirecting home links...")
  const youtubeLogoLink = document.querySelector("ytd-topbar-logo-renderer")
  const newLink = "<a href=\"https://youtube.com/feed/subscriptions\" style=\"color: var(--yt-spec-text-primary); font-family: Roboto; font-size: 2.2rem; font-weight: 400; text-decoration: none;\">YouTube</a>"
  if (youtubeLogoLink.outerHTML) {
    youtubeLogoLink.outerHTML = newLink
  } else {
    // outerHTML not supported
    console.log("outerHTML is not supported")
  }
}

document.addEventListener("DOMContentLoaded", redirectYoutubeHomeLinks)