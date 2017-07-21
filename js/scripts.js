$(function() {
    $('.drop-down').on('change', function() {  
        var stories = $(this).val();
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + stories + '.json';
        console.log(url);
        
        url += '?' + $.param({
        'api-key': "1dea2f5cd03e4217bc34ba95f65d5c90"
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(data) {
            $.each(data.results,function(key,value){
            $(".stories").append()
        }).fail(function(err) {
            throw err;
        });
    });
});




