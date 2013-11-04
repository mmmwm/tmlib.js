/*
 * nineleap.js
 */

tm.social = tm.social || {};


(function() {
    
    /**
     * @class tm.social.NineLeap
     * 9leap ネームスペース
     */
    tm.social.Nineleap = tm.social.Nineleap || {};
    
    var BASE_URL = "http://9leap.net/games/{id}/result?score={score}&result={result}";

    /**
     * @member      tm.social.Nineleap
     * @method      createURL
     * 9leap 用の URL を生成
     */
    tm.social.Nineleap.createURL = function(id, score, result) {
        return BASE_URL.format({
            id      : id,
            score   : score,
            result  : result
        });
    };

    /**
     * @member      tm.social.Nineleap
     * @method      postRanking
     * 9leap でランキングを POST
     */
    tm.social.Nineleap.postRanking = function(score, result) {
        if (location.hostname == 'r.jsgames.jp') {
            var id = location.pathname.match(/^\/games\/(\d+)/)[1]; 
            location.replace( this.createURL(id, score, result) );
        }
        else {
            console.warn("9leap に投稿されていません!");
        }
    };
    
})();

