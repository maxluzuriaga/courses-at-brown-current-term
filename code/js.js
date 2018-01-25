// Use jQuery to add a class to the html

function getOptionValue() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();

    var code;
    if (month <= 5) {
	// Spring semester
	year -= 1;
	code = "20";
    } else if (month <= 8) {
	// Summer
	code = "00";
    } else {
	// Fall
	code = "10"
    }

    return "" + year + code;
}

$( document ).ready(function() {
    $('option[value="' + getOptionValue() + '"]').prop('selected', true);
});
