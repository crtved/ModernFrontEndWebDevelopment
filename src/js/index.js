'use strict';

import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import 'bootstrap';
import Typed from 'typed.js';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('introductionTitle'));

// typed
const options = {
  strings: [
    'a Front End Web Developer',
    'a UX/UI enthusiast',
    'an aspiring Graphic Designer',
    'Art San Diego',
  ],
  backDelay: 1500,
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
  smartBackspace: true,
};
let typed = new Typed('#description', options);

// indicator
$('._init_indicators_item').on('click', function() {
  $('._init_indicators_item').removeClass('active');
  $(this).addClass('active');
});

// burger
$('._init_burger').on('click', function() {
  $(this).toggleClass('open');
  $('._init_nav').toggleClass('open');
});

// navigation
$('._init_nav_item').on('click', function() {
  $('._init_nav_item').removeClass('active');
  $(this).addClass('active');
});

// scroll
let scrll = function(target, ind) {
  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= $(target).position().top) {
      $('._init_indicators_item').removeClass('active');
      $(ind).addClass('active');
    }
  });
};
scrll('#introduction', '#intro');
scrll('#best_practices', '#bp');
scrll('#build_tools', '#bt');
scrll('#frameworks', '#f');

// nav
let navi = function(target, ind) {
  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= $(target).position().top) {
      $('._init_nav_item').removeClass('active');
      $(ind).addClass('active');
    }
  });
};
navi('#introduction', '#nav_intro');
navi('#best_practices', '#nav_bp');
navi('#build_tools', '#nav_bt');
navi('#frameworks', '#nav_f');

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    800,
  );
});
