$(document).ready(function(){
  let link = $('.menu-link');
  let linkActive = $('menu-link_active');
  let menu = $('.menu');
  let nav_link = $('.menu a');


  link.click(function(){
      link.toggleClass('menu-link_active');
      menu.toggleClass('menu_active');
    });
  nav_link.click(function(){
    link.removeClass('menu-link_active');
    menu.toggleClass('menu_active');
  })
});