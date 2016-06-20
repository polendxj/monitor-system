var APIEndpoints = require('../constants/APIEndpoints.js');
var assign = require('object-assign');
var jQuery = require('jquery');
var cookie = require('js-cookie');
var store = require('store2');

var headers = { Authorization: "ad79412a072e393e15f65abab166bda8" };
var ajaxBaseOpt = {
    dataType: 'json',
    contentType: 'application/json',
    xhrFields: {
        withCredentials: true
    },
    headers: headers,
    crossDomain: true
};

var failed = function(XHR, status) {
    return (XHR);
};

var ResourceUtils = {
    ajaxOpt: function() {
        return ajaxBaseOpt;
    }
};

for(var endpoint in APIEndpoints) {
    (function(endpoint) {
        ResourceUtils[endpoint] = {
            ajaxOpt: assign({}, ajaxBaseOpt, { url: APIEndpoints[endpoint] }),
            GET: function(params, callback) {
                var url = urlBuilder(APIEndpoints[endpoint], params);
                var ajaxOpt = assign({}, this.ajaxOpt, {
                    url: url,
                    type: "GET"
                });
                return jQuery.ajax(ajaxOpt).then(callback).then(null, failed);
            },
            POST: function(payload, params, callback, error) {
                var url = urlBuilder(APIEndpoints[endpoint], params);
                var ajaxOpt = assign({}, this.ajaxOpt, {
                    url: url,
                    type: "POST",
                    data: JSON.stringify(payload)
                });
                return jQuery.ajax(ajaxOpt).then(callback).then(null, failed).then(null, error);
            },
            PUT: function(payload, params, callback) {
                var url = urlBuilder(APIEndpoints[endpoint], params);
                var ajaxOpt = assign({}, this.ajaxOpt, {
                    url: url,
                    type: "PUT",
                    data: JSON.stringify(payload)
                });
                return jQuery.ajax(ajaxOpt).then(callback).then(null, failed);
            },
            DELETE: function(id, callback, params) {
                var url = urlBuilder(APIEndpoints[endpoint], params);
                if (id) url += id + "/";
                var ajaxOpt = assign({}, this.ajaxOpt, {
                    url: url,
                    type: "DELETE"
                });
                return jQuery.ajax(ajaxOpt).then(callback).then(null, failed);
            }
        };
    })(endpoint);
}

var urlBuilder = function (url, params) {
    if(params) {
        if (typeof params === "string") {
            url += "?";
            url += params;
        } else if (typeof params === "object" && Object.keys(params).length > 0) {
            // TODO: identify array
            url += "?";
            for(var param in params) {
                url += param + "=" + params[param] + "&";
            }
            url = url.replace(/&$/, '');
        }
        return url;
    } else {
        return url;
    }
};

module.exports = ResourceUtils;
