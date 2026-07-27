document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  const shareButton = document.getElementById("shareButton");
  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        text: "Confira este site incrível!",
        url: window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert("Link copiado para a área de transferência!");
        } catch (copyError) {
          console.error(copyError);
        }
      }
    });
  }

  const cookieBox = document.getElementById("cookie-box");
  if (cookieBox) {
    if (!localStorage.getItem("cookieConsent")) {
      setTimeout(() => cookieBox.classList.add("show"), 300);
    }

    const acceptButton = document.getElementById("acceptCookies");
    const declineButton = document.getElementById("declineCookies");

    if (acceptButton) {
      acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBox.classList.remove("show");
      });
    }

    if (declineButton) {
      declineButton.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined");
        cookieBox.classList.remove("show");
        console.log("Cookies recusados pelo usuário.");
      });
    }
  }
});
