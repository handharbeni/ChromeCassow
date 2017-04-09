/*
   Copyright (C) 2012, 2016 Cassow, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

var ICON_MAXIMIZE = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9Im1heGltaXplIj48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUFBQUFBOyIgZD0iTTEwLDBjNS41LDAsMTAsNC41LDEwLDEwYzAsNS41LTQuNSwxMC0xMCwxMFMwLDE1LjUsMCwxMEMwLDQuNSw0LjUsMCwxMCwweiIvPjxnPjxnPjxwb2x5Z29uIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjE0LDkgMTEsOSAxMSw2IDksNiA5LDkgNiw5IDYsMTEgOSwxMSA5LDE0IDExLDE0IDExLDExIDE0LDExICIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

var ICON_MINIMIZE = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9Im1pbmltaXplIj48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUFBQUFBOyIgZD0iTTEwLDBjNS41LDAsMTAsNC41LDEwLDEwYzAsNS41LTQuNSwxMC0xMCwxMFMwLDE1LjUsMCwxMEMwLDQuNSw0LjUsMCwxMCwweiIvPjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBkPSJNMTQsOXYySDZWOUgxNHoiLz48L2c+PC9zdmc+"

var BTN_NORMAL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzYxQTVEQSIgZD0iTTE0LDE2SDJjLTEuMSwwLTItMC45LTItMlYyYzAtMS4xLDAuOS0yLDItMmgxMmMxLjEsMCwyLDAuOSwyLDJ2MTJDMTYsMTUuMSwxNS4xLDE2LDE0LDE2eiIvPjxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDcgOSw3IDksNCA3LDQgNyw3IDQsNyA0LDkgNyw5IDcsMTIgOSwxMiA5LDkgMTIsOSAiLz48L3N2Zz4=";

var BTN_HOVER = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQ0OTVENCIgZD0iTTE0LDE2SDJjLTEuMSwwLTItMC45LTItMlYyYzAtMS4xLDAuOS0yLDItMmgxMmMxLjEsMCwyLDAuOSwyLDJ2MTJDMTYsMTUuMSwxNS4xLDE2LDE0LDE2eiIvPjxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDcgOSw3IDksNCA3LDQgNyw3IDQsNyA0LDkgNyw5IDcsMTIgOSwxMiA5LDkgMTIsOSAiLz48L3N2Zz4=";

var FAKE_POST_FUNCTION =
"   function fake_post() {" +
"       var form = document.createElement('form');" +
"       form.setAttribute('method', 'post');" +
"       form.setAttribute('action', 'http://cassow.com');" +
"       var params = {{{PARAMS}}};" +
"       for(var key in params) {" +
"           var hiddenField = document.createElement('input');" +
"           hiddenField.setAttribute('type', 'hidden');" +
"           hiddenField.setAttribute('name', key);" +
"           hiddenField.setAttribute('value', params[key]);" +
"           form.appendChild(hiddenField);" +
"       }" +
"       document.body.appendChild(form);" +
"       form.submit();" +
"   }";
window.onload = function() {
    document.getElementById('search_form_homepage').onsubmit = search;
    var prefill_text = 'Search Cassow...';
    if (localStorage['last_search'] != '') {
        document.getElementById('search_form_input_homepage').value = prefill_text;
        document.getElementById('search_form_input_homepage').select();
    }
    document.getElementById('addons').onclick = function(){
        chrome.tabs.create({url: "html/options.html"});
    }
    setTimeout(function(){
        document.getElementById("search_form_input_homepage").focus();
        document.getElementById("search_form_input_homepage").onkeydown = function(){
        };
        document.getElementById("search_form_input_homepage").onkeyup = function(){
            if (this.value == '') {
                this.style.color = '#999999';
                search_input_clear();
            }
        };
    }, 300);
    function search(){
        var input = document.getElementById("search_form_input_homepage").value;
        var special = '';

        var os = "o";
        if (window.navigator.userAgent.indexOf("Windows") != -1) os = "w";
        if (window.navigator.userAgent.indexOf("Mac") != -1) os = "m";
        if (window.navigator.userAgent.indexOf("Linux") != -1) os = "l";

        special += '&os=' + os + 'cp';

        if (localStorage['use_post'] === 'true') {
            var fake_post_code = FAKE_POST_FUNCTION.replace(/(\n|\t)/gm,'');

            var params = {
                q: input,
                d:  (special == '') ? 0 : 1
            };

            fake_post_code = fake_post_code.replace('{{{PARAMS}}}', JSON.stringify(params));

            chrome.tabs.create({
                url:  "javascript:" + fake_post_code + "; fake_post();"
            });
        } else {
            chrome.tabs.create({
                url: "http://cassow.com/search/Web?q="+encodeURIComponent(input)+special
            });
        }
    }
    function search_input_clear() {
        document.getElementById('search_form_input_homepage').value = '';
        document.getElementById("search_form_input_clear").style.display= 'none';
        document.getElementById('search_form_input_homepage').focus();
        document.getElementById("search_button_homepage").className = '';
        localStorage['last_search'] = '';
    }
}

