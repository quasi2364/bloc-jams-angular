(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        
        //@desc Gets/sets the array of album data from Fixtures services
        var currentAlbum = Fixtures.getAlbum();
        
        //@desc Buzz object audio file 
        //@type {Object}
        var currentBuzzObject = null;
        
        //@function setSong
        //@desc Stops currently playing song and loads new audio file as currentBuzzObject
        //@param {Object} song
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }    
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            SongPlayer.currentSong = song;
        };
        
        //@function setSong
        //@desc Plays current buzz object and sets song.playing to true 
        //@param {Object} song 
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
        //@functoin getSongIndex
        //@desc Returns index of the song from the Album array
        //@param {Object} song
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);    
        };

        SongPlayer.currentSong = null;
        
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
            
            SongPlayer.currentSong = song;

            currentBuzzObject.play();
            song.playing = true;
        };
        
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        //@function Songplayer.previous
        //@desc Decrements the currentSong Index by 1, for use in going to the previous song, then sets and plays that song.
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();