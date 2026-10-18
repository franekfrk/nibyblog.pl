/**
 * @preserve Copyright (c) Shareaholic Inc (www.shareaholic.com).  All rights reserved.
 */

(function ($, w) {
    var shareaholic = w.shareaholic = w.shareaholic || {};
    var top_posts = shareaholic.top_posts = shareaholic.top_posts || {};
    var container, domain, data;
    var settings = shareaholic.settings = shareaholic.settings || {};
    
    var initialize_all = function () {
        if (container.html()) {
            return;
        }
        
        container.css( $.extend({
            textAlign: 'center',
            border: '2px solid #ccc',
            width: '600px',
            margin: '0 auto'
        },settings.css));

        create_header(container);
        $.each(data, function(key, data) {
            if (renderers[key]) {
                renderers[key](create_inner_container(container), data);
            }
        });
        create_footer(container);
    };

    var hash_to_array = function (hash) {
        var data = [];
        $.each(hash, function (k, v) {
            data.push([k, parseFloat(v)]);
        });
        return data;
    };

    var create_inner_container = function(parent) {
        var inner_container = $('<div></div>');
        inner_container.appendTo(parent);
        return inner_container;
    };

    var create_graph_helper = function(container, header, options, type, headers, data) {
        var data_table = new google.visualization.DataTable();

        $.each(headers, function (k, v) {
            data_table.addColumn(v, k);
        });

        data_table.addRows(hash_to_array(data));

        var defaults = {
            width:450, height:300,
            tooltip:{
                text:'percentage'
            }
        };
        $.extend(defaults, options || {});

        var chart = new google.visualization[type](container[0]);
        chart.draw(data_table, defaults);
    };

    var create_wrapper_helper = function (container, header, content) {
        if (header) {
            container.append($('<h3>' + header + '</h3>'));
        }
        content(create_inner_container(container));
    };

    var create_link = function () {
        var logo = $('<img>').attr('src', 'http://cdn.shareaholic.com/media/images/shareaholic_wt_150.png').css('vertical-align', 'bottom');
        return $('<a></a>').attr('href', 'http://www.shareaholic.com').attr('target', '_blank').html(logo);
    };

    var create_header = function (container) {
        container.append($('<h2></h2>').text("" + domain + "'s Top Posts Of 2011").css('text-transform', 'uppercase'));
    };

    var create_footer = function (container) {
        container.append($('<p></p>').text('Get your FREE Top Posts Infographic from: ').append(create_link().css('padding-left', '10px')));
        var link = $('<a></a>').attr('href', 'http://shareaholic.com/TopPosts').text('Shareaholic.com/TopPosts').css('font-size', '16px');
        container.append(link);
    };

    var renderers = {
        top_posts: function (container, data) {
            create_wrapper_helper(container, 'Top Posts of 2011', function (container) {
                var ul_container = $('<ol></ol>');
                ul_container.css('text-align', 'left');
                ul_container.css('margin', '0 20px');
                ul_container.appendTo(container);
                $.each(data, function (idx, entry) {
                    var title = entry[0];
                    var url = entry[1];

                    var link = $('<a></a>');
                    link.attr('href', url);
                    link.attr('target', '_blank');
                    link.text(title);
                    $('<li></li>').html(link).appendTo(ul_container);
                });
            });

        },
        top_traffic_sources: function (container, data) {
            var header = 'Top Traffic Sources';
            container.css('float', 'center');
            container.width('100%');
            create_wrapper_helper(container, header, function (container) {
                create_graph_helper(container, header, {width: 480, height: 200}, 'PieChart', {'Site': 'string', 'Visits': 'number'}, data);
            });
        },
        most_popular_browsers: function (container, data) {
            var header = 'Most Popular Browsers';
            container.css('float', 'left');
            container.width('100%');
            create_wrapper_helper(container, header, function (container) {
                create_graph_helper(container, header, {width: 480, height: 200},'PieChart', {'Browser': 'string', 'Visits': 'number'}, data);
            });
        },
        popular_keywords: function (container, data) {
            var header = 'Most Popular Keywords';
            container.css('clear', 'both');
            create_wrapper_helper(container, header, function (container) {
                container.css('padding', '2px 5px');
                container.css('overflow', 'hidden');
                $.each(data, function (keyword, weigth) {
                    $('<span></span>').text(keyword).css('font-size', '' + weigth + 'em').css('padding', '3px').appendTo(container);
                });
            });
        },
        top_demographics: function (container, data) {
            var header = 'Top Demographics';
            create_wrapper_helper(container, header, function (container) {
                create_graph_helper(container, header, null, 'GeoChart', {'Country': 'string', 'Visits': 'number'}, data);
            });
        }
    };

    var load_google_charts = function (completion_callback) {
        settings =  shareaholic.settings;
        google.setOnLoadCallback(initialize_all);
    };

    top_posts.generate = function (container_id, domain_, data_) {
        google.load("visualization", "1", {packages:["corechart", 'geochart']});
        $(function () {
            container = $('#' + container_id);
            domain = domain_;
            data = data_;
            load_google_charts(initialize_all);
        });
    };
})(jQuery, window);

(function(w,d) {
    w['SHR_Load_Dough'] = w['SHR_Load_Dough'] || (function(){
        var dgh = d.createElement('script');
        dgh.type = 'text/javascript'; dgh.async = true;
        dgh.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dtym7iokkjlif.cloudfront.net/dough/1.0/shareaholic-analytics.js';
        var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(dgh, s);
        return true;
    })();
})(window,document);
