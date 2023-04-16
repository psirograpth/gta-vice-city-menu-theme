var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        videoId: '7V1vjzxpUkE',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

$("#menu a")
    .each(function (i) {
        if (i != 0) {
            $("#buton")
                .clone()
                .attr("id", "buton" + i)
                .appendTo($(this).parent());
        }
        $(this).data("beeper", i);
    })
    .mouseenter(function () {
        $("#buton" + $(this).data("beeper"))[0].play();
    });
$("#buton").attr("id", "buton0");

function menuCikar() {

    document.getElementById("menu").style.display = "block";
    player.pauseVideo();

}

function menuKaybet() {
    document.getElementById("menu").style.display = "none";
    player.playVideo();
}

function onPlayerReady(event) {

    event.target.playVideo();

    var state = {
        "menu": false,
    };

    synchronizeState();
    $(document).on("keydown", function (event) {
        if (event.which === 27) {
            state.menu = !state.menu;
            synchronizeState();
        }
    });

    function synchronizeState() {

        if (state.menu) {
            menuCikar();

        } else {
            menuKaybet();
        }

    }
}
