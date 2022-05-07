// Function that builds a grid in the "container"

function createCell(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='cell'></div>");
        };
    };
    $(".cell").width(960/x);
    $(".cell").height(960/x);
};

// Function that clears the grid

function clearCell(){
    $(".cell").remove();
};