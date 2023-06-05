
const DocileDropdownButton="<svg height=\"10\" width=\"15\"><polygon points=\"0,0 15,5 0,10\"></polygon></svg>"
const ActiveDropdownButton="<svg height=\"15\" width=\"10\"><polygon points=\"0,0 10,0 5,15\"></polygon></svg>"
$("document").ready(function() {
    $(".DropdownButton").click(function () {
        if ($(this).parent().next().css("display")=="none") {
            $(this).parent().next().css("display","block")
            $(this).children().eq(0).replaceWith(ActiveDropdownButton)
        } else {
            $(this).parent().next().css("display","none")
            $(this).children().eq(0).replaceWith(DocileDropdownButton)
        }
    })
})