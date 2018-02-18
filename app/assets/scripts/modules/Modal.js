import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.document = $(document);

        this.events();
    }

    openModal() {
        this.modal.addClass('modal--is-visible');

        return false;
    }

    closeModal() {

        this.modal.removeClass('modal--is-visible');

        return false;
    }

    keyUp(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    events() {
        // click the open modal
        this.openModalButton.click(this.openModal.bind(this));

        // click x modal close
        this.closeModalButton.click(this.closeModal.bind(this));

        // pushes any key
        this.document.keyup(this.keyUp.bind(this));
    }
}

export default Modal;
