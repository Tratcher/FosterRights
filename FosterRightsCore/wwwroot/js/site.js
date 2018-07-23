// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Wait for jQuery to be loaded/ready.
(function($) {
    // CSS Constants
    const active = "active";

    // JS Constants
    const route = window.location.pathname;

    // Handler to set active class to navigation links (styling)
    $(`a[href="${route}"]`).addClass(active);
})(jQuery);
