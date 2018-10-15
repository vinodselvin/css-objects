/**
 * Primary script for binding and controlling
 * site wide events
 */
$("document").ready(function() {

    bindAnchorTags();
});

/**
 * Bind the event to change iframe locaion and show modal
 * when an anchor tag is clicked
 */
function bindAnchorTags() {
    $('a.objects').attr("target", "modalIframe");
    $('a.objects').click(function(e) {
        e.preventDefault();
        $("#modalIframe").attr("src", $(this).attr("href"));
        setModalVisible(true);
    });
}

/**
 *  Show or hide the visibility of the modal that conatins the iFrame
 * for view anchor tags
 * 
 * @param state  - the state of the modal's visibility 
 */
function setModalVisible(state) {
    if(state == true) {
        $("#modalIframeContainer").modal('show');
    } else {
        $("#modalIframeContainer").modal('hide');
    }
}
