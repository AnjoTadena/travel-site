import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor (el, offset) {
        this.itemsToReavel = el;
        this.offset = offset;
        this.hideInitial();
        this.createWayPoints();
    }

    hideInitial() {
        this.itemsToReavel.addClass('reavel-item');
    }

    createWayPoints() {
        const thisMain = this;

        this.itemsToReavel.each(function () {
            const currentItem = this;

            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('reavel-item--is-visible');
                },
                offset: thisMain.offset
            });
        });
    }
}

export default RevealOnScroll;