function redirectToUSPage() {
  let userLanguage = navigator.language || navigator.userLanguage;
  const currentURL = window.location.href;
  const usENPagePath = "/us-en/index.html";
  let languageSwitched = sessionStorage.getItem("languageSwitched");
  if (!languageSwitched && userLanguage.toLowerCase() !== "pt-br") {
    let newURL = currentURL.replace(/\/[^/]*$/, "") + usENPagePath;
    window.location.href = newURL;

    sessionStorage.setItem("redirectionDone", "true");
  }
}
redirectToUSPage();
