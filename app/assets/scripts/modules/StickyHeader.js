import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll'

class StickyHeader {

    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.triggerHeaderEl = $('.large-hero__title');
        this.createHeaderWayPoint();
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createPageSectionWayPoint();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', function () {
            Waypoint.refreshAll();
        });
    }

    createHeaderWayPoint() {
        const main = this;

        new Waypoint({
            element: main.triggerHeaderEl[0],
            handler: function (direction) {
                if (direction === 'down') {
                    main.siteHeader.addClass('site-header--dark');
                } else {
                    main.siteHeader.removeClass('site-header--dark');
                }
            },
        });
    }

    createPageSectionWayPoint() {
        const main = this;

        this.pageSections.each(function () {

            const currentElement = this;

            new Waypoint({
              element: currentElement,
              handler: function (direction) {
                  if (direction === 'down') {
                    const matchingHeaderLink = currentElement.getAttribute('data-matching-link');
                    main.headerLinks.removeClass('is-current-link');
                    $(matchingHeaderLink).addClass('is-current-link');
                  }
              },
              offset: '18%'
            });

            new Waypoint({
              element: currentElement,
              handler: function(direction) {
                if (direction === 'up') {
                  const matchingHeaderLink = currentElement.getAttribute('data-matching-link');
                  main.headerLinks.removeClass('is-current-link');
                  $(matchingHeaderLink).addClass('is-current-link');
                }
              },
              offset: '-80%'
            });
        });
    }
}

export default StickyHeader;
