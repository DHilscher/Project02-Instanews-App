$('button').on('click', function() {
    $.getJSON( "" )
  .done(function(data) {
    $.each(data, function( key, value ){
      $('.results').append(data.);
      /* Append your list items here */
    });
  });
});
