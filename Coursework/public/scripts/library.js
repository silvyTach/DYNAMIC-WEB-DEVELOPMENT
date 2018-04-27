Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @silvyTach
Sign out
2
0 0 silvyTach/DYNAMIC-WEB-DEVELOPMENT
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
DYNAMIC-WEB-DEVELOPMENT/Coursework/public/scripts/library.js
3569b1c  24 minutes ago
@ashPi ashPi commenting and beautifying code + deleting useless files
@ashPi @silvyTach
We found a potential security vulnerability in one of your dependencies.
A dependency defined in Coursework/package-lock.json has known security vulnerabilities and should be updated.

Only the owner of this repository can see this message.
Learn more about vulnerability alerts


81 lines (79 sloc)  3.8 KB
$(function() {
    var searchString = document.location.search;
    pair = searchString.substring(1);
    var split = pair.split("=");
    var user = split[1];
    //extracting the username from the url so it can be passed to the next page that will be loaded
    //getting an array of all the genre ids
    var p = $(".tab p").toArray();
    for (var i = 0; i < p.length; i++) {
        // saving the id and deleting the <p> as it's not needed anymore
        var id = $(p[i]).html();
        p[i].remove();
        //extracting the genre name
        var name = $("#b" + id).html().substring(1);
        // passing the id and the name to the function
        genre(id, name, user);
        popular(user);
    }
});

// function that builds the tab with movies for each genre
// every request to the API returns a single page of results with movies
// decided that one page doesn't contain enough movies, so we request seven pages
// therefore the for loop loops 7 times
// the loop starts from 1 rather than 0, because the page numbers start at 1
function genre(id, name, user) {
        for (var i = 1; i < 7; i++) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&page=" + i + "&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
                "method": "GET",
                "headers": {},
                "data": "{}"
            }
            $.ajax(settings).done(function(response) {
                var html = "";
                for (var i = 0; i < response.results.length; i++) {
                    html += '<div class="grid-20 mobile-grid-45 tablet-grid-45 grid-parent librarybox">'
                    html += '<div class="grid-100 libraryimage">'
                    html += '<img class="poster" src="https://image.tmdb.org/t/p/original/' + response.results[i].poster_path + '" '
                    html += 'alt="Poster"></div>'
                    html += '<div class="grid-100 librarytitle">'
                    html += '<h4 class="title">' + response.results[i].title + '</h4></div>'
                    html += '<div class="grid-100 librarybuttons">'
                    html += '<a href="/movieshowinfo?user=' + user + '&id=' + response.results[i].id + '" class="button">More Details</a>'
                    html += "</div></div>"
                }
                $("#" + id).append(html);
            });
        }
    }
    // function that builds the tab with the most popular movies
function popular(user) {
    for (var i = 1; i < 7; i++) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/movie/popular?page=" + i + "&sort_by=popularity.desc&api_key=305a3b42d88760bd22c9f8c8c54f788d",
            "method": "GET",
            "headers": {},
            "data": "{}"
        }
        $.ajax(settings).done(function(response) {
            var html = "";
            for (var i = 0; i < response.results.length; i++) {
                html += '<div class="grid-20 mobile-grid-45 tablet-grid-45 grid-parent librarybox">'
                html += '<div class="grid-100 libraryimage">'
                html += '<img class="poster" src="https://image.tmdb.org/t/p/original/' + response.results[i].poster_path + '" '
                html += 'alt="Poster"></div>'
                html += '<div class="grid-100 librarytitle">'
                html += '<h4 class="title">' + response.results[i].title + '</h4></div>'
                html += '<div class="grid-100 librarybuttons">'
                html += '<a href="/movieshowinfo?user=' + user + '&id=' + response.results[i].id + '" class="button">More Details</a>'
                html += "</div></div>"
            }
            $("#Popular").append(html);
        });
    }
}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.
