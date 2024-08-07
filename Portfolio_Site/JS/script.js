/* ------------------------------- scrolltotop functionality ------------------------------ */

document.addEventListener("DOMContentLoaded", function (event) {
  // DOM is loaded and ready
  let scrollTopBtn = document.getElementById("scrollTop");
  let hb_logo = document.getElementById("hb-logo");
  let rootElement = document.getElementById("pageContent");

  hb_logo, scrollTopBtn.addEventListener("click", scrollTopFn);
  //   hb_logo.addEventListener("click", scrollTopFn);

  function scrollTopFn() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* --------------------------- Open/Close SideBar --------------------------- */

  let menuIcon = document.getElementById("menu-icon");
  let closeIcon = document.getElementById("close-icon");
  let navOpts = document.querySelectorAll("a[data-text]");
  let navMenu = document.getElementById("ul");
  menuIcon.addEventListener("click", openSideBar);
  closeIcon.addEventListener("click", closeSideBar);

  function openSideBar() {
    navMenu.style.display = 'block';
  }
  function closeSideBar() {
    navMenu.style.display = 'none';
  }

  navOpts.forEach(function(ele){
    ele.addEventListener('click', closeSideBar);
  })

});
