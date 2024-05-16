function header_scroll () {
    let header = document.querySelector("header");
    let drop_down = document.querySelector(".drop-down > ul");

    if (this.scrollY > 1) {
        header.style.margin = 0;
        header.style.borderRadius = 0;
        header.style.position = "sticky";
        header.style.top = 0;
        drop_down.style.top = "3.6rem";
    } else {
        header.style.margin = "1rem 2rem 2rem";
        header.style.borderRadius = "1.2rem";
        header.style.position = "static";
        header.style.top = "none";
        drop_down.style.top = "4.5rem";
    }
  }

  window.addEventListener("scroll", header_scroll);