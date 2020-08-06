    (function (global) {
        // add array index of for old browsers (IE<9)
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(obj, start) {
                var i, j;
                i = start || 0;
                j = this.length;
                while (i < j) {
                    if (this[i] === obj) {
                        return i;
                    }
                    i++;
                }
                return -1;
            };
        }

        // make a global object to store stuff in
        if(!global.OpenDataCommunities) { global.OpenDataCommunities = {}; };
        var OpenDataCommunities = global.OpenDataCommunities;

        // To keep track of which embeds we have already processed
        if(!OpenDataCommunities.processedScripts) { OpenDataCommunities.processedScripts = []; };
        var processedScripts = OpenDataCommunities.processedScripts;

        if(!OpenDataCommunities.styleTags) { OpenDataCommunities.styleTags = []; };
        var styleTags = OpenDataCommunities.styleTags;

        var scriptTags = document.getElementsByTagName('script');
        var thisRequestUrl = 'https://gcr.org/reviews/UTfDBzhnIj3i4wFcah6_4jXrsrgZaybk3MHjOQe9o07ET6jQFFrfk3SumizuJPETfhRiN3awIFezCCj5RkOOFw/js_widget.js';

        for(var i = 0; i < scriptTags.length; i++) {
            var scriptTag = scriptTags[i];

            // src matches the url of this request, and not processed it yet.
            if (scriptTag.src == thisRequestUrl && processedScripts.indexOf(scriptTag) < 0) {

                processedScripts.push(scriptTag);

                // add the style tag into the head (once only)
                if(styleTags.length == 0) {
                    // add a style tag to the head
                    var styleTag = document.createElement("link");
                    styleTag.rel = "stylesheet";
                    styleTag.type = "text/css";
                    styleTag.href =  "https://d3mkgazbhadiqb.cloudfront.net/assets/score_js_widget-79b43811cd3426809477cdaee4c6b454b1b4dded3710db162d4a81140127d221.css";
                    styleTag.media = "all";
                    document.getElementsByTagName('head')[0].appendChild(styleTag);
                    styleTags.push(styleTag);
                }

                // Create a div
                var div = document.createElement('div');
                div.id = 'score-widget';

                scriptTag.parentNode.insertBefore(div, scriptTag);

                div.innerHTML = '<div id=\"gcr-widget\">\n      <div id=\"gw-header\">\n        <a target=\"_blank\" href=\"https://gcr.org/c/fms-dental-hospitals-hyderabad\">\n            <div class=\"gw-verified-text\">\n                  <div>Accredited clinic<\/div>\n              <\/div>\n<\/a>        <a target=\"_blank\" href=\"https://gcr.org/\">\n            <div class=\"gw-verified-logo\"><img src=\"https://d3mkgazbhadiqb.cloudfront.net/assets/widgets/gcr_star-7658bea51e4881ad4242375d7614d66e831b2ec14d2fe402caba5e0a656d7f49.png\" alt=\"Gcr star\" /><\/div>\n<\/a>      <\/div>\n  <div id=\"gw-content\">\n        <a target=\"_blank\" href=\"https://gcr.org/c/fms-dental-hospitals-hyderabad\">\n            <div class=\"gw-score\">\n              <b>GCR Score:<\/b>\n              <span class=\"gw-score-stars\">\n            <span style=\"width: 65.0px\"><\/span>\n              <\/span>\n              5.0\n            <\/div>\n<\/a>        <a target=\"_blank\" href=\"https://gcr.org/top/dental/in\">\n            <div class=\"gw-rank\">\n              <b>\n                <span class=\"show-for-medium\">Global<\/span> rank:\n              <\/b>\n              <span class=\"gw-rank-position\">Top 1%<\/span>\n              of 130K <a href=\"https://affordablescan.com/blog/mri-scan-cost-near-me/\">clinics<\/a>\n            <\/div>\n<\/a>  <\/div>\n<\/div>\n\n\n';

            }
        }
    })(this);
