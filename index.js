const header = document.querySelector(".header");
      const SCROLLED = "scrolled";

      document.addEventListener("scroll", (e) => {
        const { clientHeight } = document.querySelector(".slider");

        if (window.pageYOffset + 80 > clientHeight) {
          header.classList.add(SCROLLED);
        } else {
          header.classList.remove(SCROLLED);
        }
      });

      const burger = document.querySelector(".burger-btn");

      burger.addEventListener("click", (e) => {
        burger.classList.toggle("burger-active");
      });

      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const user = {
          name: document.querySelector("#name").value,
          lastname: document.querySelector("#lastname").value,
          phone: document.querySelector("#phone").value,
          text: document.querySelector("#text").value,
        };

        console.log(user);
      });
      