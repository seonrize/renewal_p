const elMain = document.querySelector("main"),
        elAside = document.querySelector("aside"),
        elSec = document.querySelectorAll("section");

      let pos = { y: 0, y2: 0, state: true };
      let offset = [];
      let y = 0;

      elSec.forEach(function (section) {
        offset.push(section.offsetTop);
      });

      let move = 0;
      elSec.forEach(function (elSection, key) {
        elAside.innerHTML += "<button></button>";
        elSection.addEventListener("wheel", function () {
          animation(key);
        });
      });

      let b = 0;
      
      const elBtns = document.querySelectorAll("aside button");
      elBtns.forEach(function (btn, key) {
        btn.addEventListener("click", function () {
          update(key);
          animation(key);
        });
      });

      function update(key) {
        elBtns[b].classList.remove("active");
        elBtns[key].classList.add("active");
        b = key;
      }

      
      function animation(key) {    
        try {
          if (e.wheelDelta < 0) {
            move = elSec[key].nextElementSibling.offsetTop;
            key++;
          } else if (e.wheelDelta > 0) {
            move = elSec[key].previousElementSibling.offsetTop;
            key--;
          } else {
            move = elSec[key].offsetTop;
          }
        } catch {}
        elMain.style = `transform:translateY(-${move}px)`;

        update(key);
      }


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
