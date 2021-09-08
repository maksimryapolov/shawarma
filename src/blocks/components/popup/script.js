(() => {
    const prefixIdForModal = "-modal";

    document.querySelectorAll(".popup").forEach((item) => {
        const idProduct = item.getAttribute("id").substr(0, item.getAttribute("id").indexOf(prefixIdForModal));
        const entity = document.querySelector(`#${idProduct}`);
        const titleModal = entity.querySelector("[data-title]")?.dataset.title;
        
        item.querySelector(".popup__title").textContent = titleModal;

        document.querySelector(`#${idProduct}`)?.addEventListener("click", function() {
            if(this.getAttribute("id") !== "" && this.getAttribute("id")) {
                showCurrentModal(document.querySelector(`#${this.getAttribute("id")}${prefixIdForModal}`));
            }
        });

        item.querySelector(".popup__close")?.addEventListener("click", function () {
            closeCurrentModal(this.closest(".popup"));
        });

        item.querySelector(".popup__bg")?.addEventListener("click", function(e) {
            if(e.target == this) {
                closeCurrentModal(this.closest(".popup"));
            }
        });
    });

    function showCurrentModal(modal) {
        modal.classList.add("popup__show");
        modal.querySelector(".popup__bg")?.classList.add("popup__bg-show");
        modal.querySelector(".popup__body")?.classList.add("popup__body-show");
    }
    
    function closeCurrentModal(modal) {
        modal.querySelector(".popup__bg")?.classList.remove("popup__bg-show");
        modal.querySelector(".popup__body")?.classList.remove("popup__body-show");
        modal.classList.remove("popup__show");
    }

})();