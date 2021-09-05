(() => {
    const productItems = document.querySelectorAll(".cards__item");
    const prefixIdForModal = "-modal";
    // const btnClose = document.querySelectorAll()
    let popupItems = [];

    productItems.forEach((item) => {
        let popupItem = document.querySelector("#" + item.getAttribute("id") + prefixIdForModal);
        // let nameProduct = item.querySelector(".popup__title");
        // let moreInfoBtn = item.querySelector("");
        let btnsClose = item.querySelector(".popup__close");


        item.addEventListener("click", function() {
            if(this.getAttribute("id") !== "" && this.getAttribute("id")) {
                showCurrentModal(document.querySelector("#" + item.getAttribute("id") + prefixIdForModal));
            }
        });

        btnsClose.addEventListener("click", function () {
            closeCurrentModal(this.closest(".popup"));
        });

        console.log(popupItem);

        popupItems.push();
    });

    console.log(popupItems);
    // console.log(productItems);

    function showCurrentModal(modal) {
        // Добавить стили модалки
        modal.classList.add("popup__show");
        modal.querySelector(".popup__bg")?.classList.add("popup__bg-show");
        modal.querySelector(".popup__body")?.classList.add("popup__body-show");
    }
    
    function closeCurrentModal(modal) {
        modal.querySelector(".popup__body")?.classList.remove("popup__body-show");
        modal.querySelector(".popup__bg")?.classList.remove("popup__bg-show");
        modal.classList.remove("popup__show");
    }

})();