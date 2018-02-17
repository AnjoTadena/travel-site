'use strict';

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from './modules/RevealOnScroll';
import $ from "jquery";

const mm = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($('.testimonial'), '85%');
