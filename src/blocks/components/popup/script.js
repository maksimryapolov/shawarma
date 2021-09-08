(() => {
    const prefixIdForModal = "-modal";

    document.querySelectorAll(".popup").forEach((item) => {
        const idProduct = item.getAttribute("id").substr(0, item.getAttribute("id").indexOf(prefixIdForModal));
        const entity = document.querySelector(`#${idProduct}`);

        setContentModal(entity, item);        

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
        modal.classList.remove("popup__show");
        modal.querySelector(".popup__bg")?.classList.remove("popup__bg-show");
        modal.querySelector(".popup__body")?.classList.remove("popup__body-show");
    }

    document.addEventListener("keyup", function(e) {
        const modal = this.querySelector(".popup__show");
        if(e.code === "Escape" && modal) {
            closeCurrentModal(modal);
        }
    });

    function setContentModal(entity, el) {
        /* Получение и сохр. свойств */
        const titleModal = entity.querySelector("[data-title]")?.dataset.title;
        const descModal = entity.querySelector("[data-desc]")?.dataset.desc;
        const sizeModal = entity.querySelector("[data-size]")?.dataset.size;
        const priceModal = entity.querySelector("[data-price]")?.dataset.price;

        el.querySelector(".popup__title").innerHTML = titleModal;
        el.querySelector(".popup__text-item").innerHTML = descModal;
        el.querySelector(".popup__size").innerHTML = sizeModal;
        el.querySelector(".popup__price").innerHTML = priceModal;
    }
})();