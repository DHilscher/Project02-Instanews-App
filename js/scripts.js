$(document).ready(function () {
    $('.drop-down').on('change', function () {
        $('.container').addClass('newContainer');
        
        var stories = $(this).val();
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + stories + '.json';

        url += '?' + $.param({
            'api-key': '1dea2f5cd03e4217bc34ba95f65d5c90'
        });

        $.ajax({
            url: url,
            method: 'GET',
        })

        .done(function (data) {

            $('.newsStories').remove();

            var storyItems = '';

            var storiesWithMultimedia = data.results.filter(function(storyData){
                return storyData.multimedia.length > 0
            }).slice(0, 12);

            $.each(storiesWithMultimedia, function (key, value) {    
                storyItems += '<div class="newsStories">';
                storyItems += '<a href="' + value.url + '" target="_blank">';
                storyItems += '<img src="' + value.multimedia[4].url + '"></a>';
                storyItems += '<p>' + value.abstract + '</p>';
                storyItems += '</div>';
            
            });
            $('.stories').append(storyItems);
                
        })
        .fail(function () {
        });
    });
})