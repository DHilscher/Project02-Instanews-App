$(document).ready(() => {
    $('.drop-down').on('change', () => {
        $('.loaderimg').show();
        $('.stories').hide();
        $('.container').addClass('newContainer');
        
        const stories = $(event.currentTarget).val();
        const url = `https://api.nytimes.com/svc/topstories/v2/
${stories}.json?api-key=1dea2f5cd03e4217bc34ba95f65d5c90`;

        $.ajax({
            url,
            method: 'GET',
        })

        .done((data) => {
            $('.newsStories').remove();

            let storyItems = '';

            let storiesWithMultimedia = data.results.filter((storyData) => {
                return storyData.multimedia.length > 0
            }).slice(0, 12);

            $.each(storiesWithMultimedia, (key, value) => {    
                storyItems += `<div class="newsStories">
                <a href="${value.url}" target="_blank">
                <img src="${value.multimedia[4].url}"></a>
                <p>${value.abstract}</p></div>`;
            
            });
            $('.stories').append(storyItems);
                
        })
        .fail(() => {
        });
        $('.loaderimg').hide(1500);
        $('.stories').show();
    });
})