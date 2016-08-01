/**
 * responsible for handling all the actions of the UI
 * @author Sandeep Gantait
 * @since 2016801
 */

/**
 * all JQUERY bindings goes here
 */
(function(){
    var ctr = 1;
    /* event binding for adding a new draggable container */
    $('.add-btn').click(function(){
        $('#draggable-container').append('<div class="ui-widget-content drag-container window-container container_id_'+ctr+'"><p>Container '+ctr+' <h1>'+ctr+'</h1></p></div>');
      
        /* make it draggable */
        $( "#draggable-container .drag-container" ).draggable();

        /* assign z-index */
        dragToFront.assignZIndex('.container_id_'+ctr);

        ctr++;
    });
}());