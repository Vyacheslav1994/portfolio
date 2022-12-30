document.addEventListener('DOMContentLoaded', function() {
    class InputTypeFileCustom {
      constructor(fileInputIDName, fileSelectSelectorName) {
        this.fileInputIDName = fileInputIDName;
        this.fileSelectSelectorName = fileSelectSelectorName;
      }

      init() {
        let fileInput = document.querySelector(`#${this.fileInputIDName}`);
        let fileSelect = fileInput.parentNode;

        fileSelect.onclick = function () {
          fileInput.click();
        };

        fileInput.onchange = function () {
          let filename = fileInput.files[0].name;
          let selectName =
            fileSelect.getElementsByClassName("file-select-name")[0];
          selectName.innerText = filename;
        };
      }
    }

    class CustomSelect {
      constructor() {}

      init() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /* Look for any elements with the class "custom-select": */
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /* For each element, create a new DIV that will act as the selected item: */
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /* For each element, create a new DIV that will contain the option list: */
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
              /* When an item is clicked, update the original select box,
                and the selected item: */
              var y, i, k, s, h, sl, yl;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              sl = s.length;
              h = this.parentNode.previousSibling;
              for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y =
                    this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              }
              h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
          });
        }

        function closeAllSelect(elmnt) {
          /* A function that will close all select boxes in the document,
        except the current select box: */
          var x,
            y,
            i,
            xl,
            yl,
            arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i);
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }

        /* If the user clicks anywhere outside the select box,
        then close all select boxes: */
        document.addEventListener("click", closeAllSelect);
      }
    }

    class AccordionCustom {
      constructor(selector) {
        this.$accordionButtonsList = document.querySelectorAll(selector);
      }

      toggleAccordion(accordion) {
        accordion.onclick = function () {
          this.classList.toggle("is-open");

          let content = this.nextElementSibling;

          if (content && content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
          } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
          }
        };
      }

      init() {
        this.$accordionButtonsList.forEach((accordion) =>
          this.toggleAccordion(accordion)
        );
      }
    }

    class DeleteProduct {
      constructor($product, deleteButtonSelector) {
        this.$product = $product;
        this.$deleteButton = this.$product.querySelector(deleteButtonSelector);
      }

      addDeleteButtonsEventListeners() {
        this.$deleteButton.addEventListener("click", () => {
          console.log(this.$product.parentNode.parentNode);

          const $listItem_wrapper = this.$product.parentNode;
          const $productsList = $listItem_wrapper.parentNode;
          const productsQuantity = $productsList.querySelectorAll("li").length;

          productsQuantity === 1
            ? (this.$product.parentNode.parentNode.textContent = "")
            : this.$product.parentNode.remove();
        });
      }

      init() {
        this.addDeleteButtonsEventListeners();
      }
    }

    class Like {
      constructor($like) {
        this.$like = $like;
      }

      toggleLike() {
        this.$like.classList.contains("active")
          ? this.$like.classList.remove("active")
          : this.$like.classList.add("active");
      }

      provideClickEventListener() {
        this.$like.addEventListener("click", () => this.toggleLike());
      }

      init() {
        this.provideClickEventListener();
      }
    }

    class InputTypeRangeCustom {
      constructor() {
        this.$rangeLabel = document.querySelector("#value");
        this.$maxValue = document.querySelector(".range-custom__max-value");
        this.maxValue = Number(this.$maxValue.textContent.replace(/\s/g, ""));
        this.range = document.getElementById("range");
        this.base = window
          .getComputedStyle(document.body)
          .getPropertyValue("--base");
        this.second = window
          .getComputedStyle(document.body)
          .getPropertyValue("--second");
      }

      // ACTION METHODS
      updateValue = (value) => {
        document.getElementById("value").innerHTML = Math.floor(value);
      };

      updateVar = (value) => {
        document.documentElement.style.setProperty(
          "--deg",
          value * 3.6 + "deg"
        );
        document.documentElement.style.setProperty("--range", value + "%");
        if (value >= 100) {
          document.documentElement.style.setProperty(
            "--trackball",
            this.second
          );
        } else {
          document.documentElement.style.setProperty("--trackball", this.base);
        }
      };

      setStartValue() {
        console.log("this.$rangeLabel:", this.$rangeLabel.textContent);

        this.$rangeLabel.textContent =
          "до " +
          this.convertPriceNumberToSpacedString(
            (this.maxValue / 100) * this.$rangeLabel.textContent
          ) +
          " руб.";
      }

      // CONVERT VALUES METHODS
      convertPriceNumberToSpacedString(numberValue) {
        const number_string = String(numberValue);

        let number_stringSpaced = [];

        number_string
          .split("")
          .reverse()
          .forEach((letter, index) => {
            if ((index + 1) % 3 === 0) {
              letter = letter + " ";
              number_stringSpaced.push(letter);
            } else {
              number_stringSpaced.push(letter);
            }
          });

        number_stringSpaced = number_stringSpaced
          .join("")
          .split("")
          .reverse()
          .join("");

        return number_stringSpaced;
      }

      // INIT METHODS
      initAddEventListener() {
        this.range.addEventListener("input", () => {
          this.updateVar(this.range.value);
          this.updateValue(this.range.value);

          this.$rangeLabel.textContent =
            "до " +
            this.convertPriceNumberToSpacedString(
              (this.maxValue / 100) * this.$rangeLabel.textContent
            ) +
            " руб.";
          console.log("this.$rangeLabel:", this.$rangeLabel.textContent);
        });
      }

      initRangeCustom = (value) => {
        document.getElementById("value").innerHTML = value;
        document.documentElement.style.setProperty("--range", value + "%");
      };

      init() {
        this.initAddEventListener();
        this.initRangeCustom(this.range.value);
        this.setStartValue();
      }
    }

    // DELETE CLASS INSTANCES INIT
    if (document.querySelector(".personal-product-list-item")) {
      const $productsList = Array.from(
        document.querySelectorAll(".personal-product-list-item")
      );

      $productsList.forEach(($product) => {
        const deleteProductInstance = new DeleteProduct(
          $product,
          ".address-item__delete"
        );

        deleteProductInstance.init();
      });
    }

    if (document.querySelector(".waiting-list-item")) {
      const $productsList = Array.from(
        document.querySelectorAll(".waiting-list-item")
      );

      $productsList.forEach(($product) => {
        const deleteProductInstance = new DeleteProduct(
          $product,
          ".address-item__delete"
        );

        deleteProductInstance.init();
      });
    }

    // LIKE INIT
    if (document.querySelector(".catalog-item__like-item")) {
      const $likesList = Array.from(
        document.querySelectorAll(".catalog-item__like-item")
      );

      $likesList.forEach(($likeItem) => {
        const likeInstance = new Like($likeItem);

        likeInstance.init();
      });
    }

    if (document.querySelector("#file-upload-input__new-message")) {
      this.inputTypeFileCustomInstance = new InputTypeFileCustom(
        "file-upload-input__new-message",
        "file-select-name"
      );

      this.inputTypeFileCustomInstance.init();
    }

    if (document.querySelector(".custom-select")) {
      const customSelectInstance = new CustomSelect();

      customSelectInstance.init();
    }

    if (document.querySelector(".accordion")) {
      const accordionCustomInstance = new AccordionCustom(".accordion");

      accordionCustomInstance.init();
    }

    // INPUT TYPE RANGE CUSTOM INIT
    if (document.querySelector(".range-custom__wrapper")) {
      const inputTypeRangeCustomInstance = new InputTypeRangeCustom();

      inputTypeRangeCustomInstance.init();
    }


    // CATALOG SLIDER INIT
    $(document).ready(function () {
      $('.owl-carousel.catalog-slider').owlCarousel({
        items: 3,
        nav: true,
        dots: true,
        dotsEach: true,
        margin: 20,
      });
    });

})