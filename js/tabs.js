(function( $, _ ) {
    "use strict";
    $.fn.tabs = function( options ) {
        var self = this,
            tabsContentContainer,
            tabDivs = [],
            data = [],
            exampleData = [
                {
                    name: "Tab content 1",
                    country: "HU 1"
                },
                {
                    name: "Tab content 2",
                    country: "UA 2"
                },
                {
                    name: "Tab content 3",
                    country: "DE 3"
                }
            ];

        var settings = $.extend( {
            tabsContainerClass: 'defaultClass',
            template : null,
            fadeIn: false
        }, options);

        tabsContentContainer = this.find("div." + settings.tabsContainerClass);

        var _checkTemplates = function(callback) {
            if (settings.template !== null) {
                tabDivs = _.template(settings.template);
                $.each(exampleData, function() {
                    data.push(tabDivs(this));
                });

                data = data.join(" ");
                tabsContentContainer.html(data);
            };

            callback.call(this);
        }

        _checkTemplates.call(this, function() {
            tabDivs = tabsContentContainer.find("div");
            tabsContentContainer.find("div").eq(0).addClass("active");

            self.on("click", "a", function() {
                self.find("ul.tabs-links a").removeClass("active");
                $(this).addClass("active");
                tabDivs.hide();

                var el = tabDivs.eq($(this).parent("li").index());
                if(settings.fadeIn) {
                    el.fadeIn();
                } else {
                    el.show();
                }
            });
        });
    };
})( jQuery, _ );