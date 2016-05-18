(function() {
    function LandingCtrl() {
        this.heroTitle = "Turn the Music Down!";    
    }
    
    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();