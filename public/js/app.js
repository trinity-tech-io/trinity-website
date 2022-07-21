/* Theme Name: Dorsin - Responsive Landing page template
   Author: Themesbrand
   Version: 1.0.0
   Created: July 2018
   File Description: Main JS file of the template
*/
(function ($) {

    'use strict';

    // Navbar
    function initNavbar() {
  		$('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 92)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        // $('.nav-menu>.menu-item>a').bind('click', function(event) {
        //     $(this).addClass('active')
        // })
        // $('.nav-menu>.menu-item>a').on('blur', function(event) {
        //     $(this).removeClass('active')
        // })
    }

    // Sticky Header
    function initSticky() {
        $(".sticky").sticky({
            topSpacing: 0
        });
    }
    
    //Scrollspy
	// function initScrollspy() {
	// 	$("#navbarCollapse").scrollspy({
	// 	    offset:20
	// 	});
	// }

	// Magnific Popup
    // function initMagnificPopup() {
    //     $('.video-play-icon').magnificPopup({
    //       disableOn: 700,
    //       type: 'iframe',
    //       mainClass: 'mfp-fade',
    //       removalDelay: 160,
    //       preloader: false,

    //       fixedContentPos: false
    //     });
    // }

    function initContactForm() {
    	$('#contact-form').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;
        });
    }

    function init() {
        initNavbar();
        // initScrollspy();
        // initMagnificPopup();
        initContactForm();
        Waves.init();
    }

    function handleMenuItem() {
        const navbarMenu = document.getElementById('navbarCollapse');
        // Toggle Menu and Overlay Function
        const toggleMenu = () => {
            navbarMenu.classList.toggle('active');
        };

        // Collapsible SubMenu Function
        const collapseSubMenu = () => {
            // navbarMenu.querySelector('.menu-dropdown.active .sub-menu').removeAttribute('style');
            navbarMenu.querySelector('.menu-dropdown.active').classList.remove('active');
        };
        navbarMenu.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
                e.preventDefault();
                const menuDropdown = e.target.parentElement;

                // If menu-dropdown is Expanded, then Collapse It
                if (menuDropdown.classList.contains('active')) {
                    collapseSubMenu();
                } else {
                    // Collapse the Existing Expanded menu-dropdown
                    if (navbarMenu.querySelector('.menu-dropdown.active')) {
                        collapseSubMenu();
                    }
                    // Expanded the New menu-dropdown
                    menuDropdown.classList.add('active');
                    // const subMenu = menuDropdown.querySelector('.sub-menu');
                    // subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
                }
            }
        })
        // Fixed Resize Screen Function
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                // If navbarMenu is Open, then Close It
                if (navbarMenu.classList.contains('active')) {
                    toggleMenu();
                }
    
                // If menu-dropdown is Expanded, then Collapse It
                if (navbarMenu.querySelector('.menu-dropdown.active')) {
                    collapseSubMenu();
                }
            }
        });
    }

    $(document).ready(function(){
        init(); 
        handleMenuItem();
        initSticky();
    });

    window.initMethod = init

    // init();

})(jQuery)