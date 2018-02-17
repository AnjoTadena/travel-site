'use strict';

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";

const mm = new MobileMenu();
const sh = new StickyHeader();

new RevealOnScroll($(".feature-item"), "85%");

new RevealOnScroll($('.testimonial'), '85%');
