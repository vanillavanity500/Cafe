"use strict";

$(document).ready(function() {
let total = 0;
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

$("ul img").each(function() {

let source = this.src; 

$(this).hover(function () {
this.src = this.id; 
}, function() {
this.src = source; 
}); 
$(this).click(function(evt) {


if (this.alt == 'coffee') {
$('#order').append($('<option>', {
text: "$1.75 - Drip Coffee"
}));
total += 1.75;
} else if (this.alt == 'espresso') {
$('#order').append($('<option>', {
text: "$1.95 - Espresso"
}));
total += 1.95;
} else if (this.alt == 'latte') {
$('#order').append($('<option>', {
text: "$2.95 - Latte"
}));
total += 2.95;
} else if (this.alt == 'cappuccino') {
$('#order').append($('<option>', {
text: "$3.45 - Cappuccino"
}));
total += 3.45;
} else if (this.alt == 'biscotti') {
$('#order').append($('<option>', {
text: "$1.95 - Biscotti"
}));
total += 1.95;
} else if (this.alt == 'scone') {
$('#order').append($('<option>', {
text: "$2.95 - Scone"
}));
total += 2.95;

} else if (this.alt == 'croissant') {
$('#order').append($('<option>', {
 text: "$2.50 - Croissant"
}));
total += 2.50;
} else if (this.alt === 'cookie') {
$('#order').append($('<option>', {
text: "$1.50 - Cookie"
}));
total += 1.50;
} else if (this.alt == 'sandwhich') {
$('#order').append($('<option>', {
text: "$4.25 - Sandwhich"
}));
total += 4.25;
}

$("#total")[0].innerHTML = "Total: $" + Number(total).toFixed(2);



evt.preventDefault();

}); 
}); 


$("#place_order").click(function() {


window.location.href='checkout.html';
}); 


$("#clear_order").click(function() {


$('#order').empty();
$("#total")[0].innerHTML = "&nbsp;";
total = 0;
}); 

}); 