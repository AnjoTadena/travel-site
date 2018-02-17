'use strict';

import $ from  'jquery';

class MobileMenu {
    constructor() {
        console.log('Mobile menu constructor!');

        this.siteHeader = $('.site-header');

        this.menuIcon = $('.site-header__menu-icon');

        this.menuContent = $('.site-header__menu-content');

        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        console.log('Horroy icon is click!');
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;
