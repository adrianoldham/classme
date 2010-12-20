var ClassMe = Class.create({
    options: {
        classNames: [],
        random: true
    },

    initialize: function(selector, options) {
        this.options = Object.extend(Object.extend({ }, this.options), options || { });

        this.elements = $$(selector);
        this.setup();
    },

    setup: function() {
        var classNames = this.options.classNames;

        // Return if classNames array is empty
        if(classNames.length <= 0) return;

        this.elements.each(function(element) {
            if(this.options.random) {
                // Select random className from classNames array
                var className = classNames[Math.floor(Math.random()*classNames.length)];

                // Add className to element
                element.addClassName(className);
            } else {
                // Iterate over each className from classNames array
                classNames.each(function(className) {

                    // Add className to element
                    element.addClassName(className);
                });
            }
        }.bind(this));
    }
});
