/**
 * Responsible for managing the z-index of the containers just like the windows
 * @author Sandeep G
 * @since 20160801
 */
var dragToFront = {
    /* initial counter for the z-index */
    initialCounter : parseInt(11),

    /**
     * bring the clicked z-index to the front
     */
    bringFront : function(elem, className)
    {
        className = className || 'window-container';

        /* get the maximum z-index */
        var max = this.getMaxZIndex(className);

        /* assigning the max z-index to the clicked elem. */
        $(elem).css('z-index', ++max);

        /* traverse through each elem and making there z-index reduced by 1 */
        $(className).each(function(){
            var zIndex = $(this).css('z-index');
            if(zIndex != max)//decrement the z-index only if it is not the element at the front
            {
                $(this).css('z-index', --zIndex);
            }
        });
    },

    /**
     * assign a z-index to the div; while creating the draggable container gotta call 'em
     */
    assignZIndex : function(elem, className)
    {
        className = className || 'window-container';

        /* check if the div is existing */
        var isExisting = $('.'+className).length;
        if(!isExisting)//I am Fresher
        {
            $(elem).css('z-index', this.initialCounter);
            this.counter = this.initialCounter;
        }
        else
        {
            var max = this.getMaxZIndex(className);
            /* assign the max+1 to the new container */
            $(elem).css('z-index', ++max);
        }

        this.bindClickEvent();
    },

    /**
     * responsible for getting the max z-index
     */
    getMaxZIndex : function(className)
    {
        var max = 0, zIndex;

        /* traverse through all the classes and get the highest z-index */
        $('.'+className).each(function(){
            zIndex = $(this).css('z-index');
            if(parseInt(zIndex) > max)
            {
                max = zIndex;
            }
        });

        return max;
    },


    /**
     * responsible for handling the z-indexes on click event
     */
    bindClickEvent : function()
    {
        $('#appendable-div .window-container').on('mousedown', function(){
            console.log("binding...");
            /* get the list of classes */
            var classList = $(this).attr('class').split(' ');
            var uniqueClass = classList[3];
            console.log('uniqueClass', uniqueClass);
            dragToFront.bringFront('.'+uniqueClass);
        });
    }
};