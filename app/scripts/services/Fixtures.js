(function() {
    function Fixtures() {
        var Fixtures = {};
        
        var albumPicasso = {
            title: "The Colors",
            artist: "Pablo Picasso",
            label: 'Cubism',
            year: '1981',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                 { title: 'Blue', duration: 161.71, audioUrl: '/assets/music/bloc_jams_music/blue' },
                 { title: 'Green', duration: 103.96, audioUrl: '/assets/music/bloc_jams_music/green' },
                 { title: 'Red', duration: 265.75, audioUrl: '/assets/music/bloc_jams_music/red' },
                 { title: 'Pink', duration: 143, audioUrl: '/assets/music/bloc_jams_music/pink' },
                 { title: 'Magenta', duration: 167.5, audioUrl: '/assets/music/bloc_jams_music/magenta' }
            ]
        };

        var albumMarconi = {
            title: "The Telephone",
            artist: "Marconi",
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                 { title: 'Blue', duration: '4:26', audioUrl: '/assets/music/blue' },
                 { title: 'Green', duration: '3:14', audioUrl: '/assets/music/green' },
                 { title: 'Red', duration: '5:01', audioUrl: '/assets/music/red' },
                 { title: 'Pink', duration: '3:21', audioUrl: '/assets/music/pink' },
                 { title: 'Magenta', duration: '2:15', audioUrl: '/assets/music/magenta' }  
            ]
        };
        
        Fixtures.getAlbum = function() {
            return albumPicasso;    
        };
        
        return Fixtures;
    }
    
    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();