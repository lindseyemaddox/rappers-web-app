

$(document).ready(function() {

  // Find all links within the artists container
  $( ".artist" ).each(function(_index, link) {

    // Loop through the list of links adding a click handler for each one
    $(link).on('click', function() {

      // Hide all bios to avoid showing more than one at a time
      $( ".modal" ).hide();

      // Show the bio with the artist data attribute that matches the link clicked
      $('.modal*[data-name=' + $(this).data( "name" ) + ']').show();

      // Hide all name pins to avoid showing more than one at a time
      $( ".artist" ).removeClass( "selected" );

      // Add class to the clicked link
      $(this).toggleClass( "selected" );

    });

  });


});
