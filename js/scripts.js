$(document).ready(function () {
    $('.drop-down').on('change', function () {
        var stories = $(this).val();
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + stories + '.json';

        url += '?' + $.param({
            'api-key': '1dea2f5cd03e4217bc34ba95f65d5c90'
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (data) {
            $.each(data.results, function (key, value) {
            var imageURL = value.multimedia[4].url;
            var articleLink = value.url;
            var articleText = value.abstract;
        console.log(data)


            $(".stories").append('<div>' + '<a href="' + articleLink + '" target="_blank">' + '<img src="' + imageURL + '"></a>' +'<p>' + articleText + '</p>' + '</div>')
            // $(".stories").append('<div>' + '<img src="' + imageURL + '">' + '<a href="' + articleLink + '"></a>' +'<p>' + articleText + '</p>' + '</div>')
            // $(".stories").append('<img src="' + imageURL + '">')
            // $(".stories").append('<div>' + articleText + '</div>')




            })
                
            }).fail(function () {
        console.log('Hello!')
        });
    });
})