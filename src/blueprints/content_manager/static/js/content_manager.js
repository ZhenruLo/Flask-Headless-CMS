$(function() {
    $(".left_panel_tab").on("click", function(event){
        event.preventDefault();
        $(".left_panel_tab").removeClass("selected_tab")
        $(this).toggleClass("selected_tab");
    });

    $("#content_manager_anchor").toggleClass("current_anchor");
    $(".panel_header_text").text($(".side_anchor.current_anchor .side_anchor_text").text());

    // $(".test_button").on("click", function(){
    //     $.ajax({
    //         url: "/content_manager/databases",
    //         method: "GET",
    //         success: function(data) {
    //             console.log(data["databases"])
    //         },
    //         error: function(data) {
    //             alert(data.responseText);
    //         },
    //     });
    // });

    // $(".test_button1").on("click", function(){
    //     $.ajax({
    //         url: "/content_manager/databases",
    //         method: "PUT",
    //         success: function(data) {
    //             console.log(data["database"])
    //         },
    //         error: function(data) {
    //             alert(data.responseText);
    //         },
    //     });
    // });

    // $("#test_form").submit(function(event){
    //     event.preventDefault();
    //     $.ajax({
    //         url: "/content_manager/databases",
    //         method: "POST",
    //         data: $(this).serialize(),
    //         success: function(data) {
    //             alert(data.msg);
    //         },
    //         error: function(data) {
    //             alert(data.responseText);
    //         },
    //     });
    // });
});