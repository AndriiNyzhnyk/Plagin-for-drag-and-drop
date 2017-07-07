var optionBlockA = {

    height: 200,
    width: 200,
    color: 'red',
    id: "a"

};
var optionTumbler = {
    height: 30,
    width: 900,
    color: 'blue',
    id: "tumbler",
    class: "asd"

};

var optionTab = {
    height: 30,
    width: 20,
    color: "green",
    id: "tab"
};



(function ($) {
    var literal = "div";
    var num = 1;
    $.fn.myPlug = function (...options) // option1, option2, option3
    {
        var self = this;
        $(options).each(function () {
            var option = this;

            var block = $("<div/>");

            var style = {
                height: option.height + 'px',
                width: option.width + 'px',
                backgroundColor: option.color,
               
            };

            block.css(style);
            $(block).attr("id", literal + num);
            $(self).append(block);
            num++;
        });
    }
}(jQuery));


$("#x").myPlug(optionBlockA, optionTumbler, optionTab);

// ----------------------------------------------------------------------------------------------------------
function absCord(elem) {
    var cord = elem.getBoundingClientRect();

    var obj = {
        left: cord.left,
        top: cord.top
    };
    return obj;
} // abdCord()

// var a = document.getElementById("a");
var div1 = document.getElementById("div1");


div1.onmousedown = function (emd) {
    div1.style.position = "absolute";
    var shiftX = emd.pageX - absCord(this).left;
    var shiftY = emd.pageY - absCord(this).top;
    window.onmousemove = function (emm) {
        div1.style.top = emm.pageY - shiftY + "px";
        div1.style.left = emm.pageX - shiftX + "px";

    };


    div1.onmouseup = function (emu) {
        window.onmousemove = null;
    };
};


// tumbler = div2
// tab = div3

var div3 = document.getElementById("div3");
var div2 = document.getElementById("div2");
var parentShift = absCord(div3).left;
var tabWidth = div3.offsetWidth;
var tumblerWidth = div2.offsetWidth;
var startTabPosition = absCord(div3).left;
var aWidth = div1.offsetWidth;

div3.onmousedown = function (emd) {
    var shiftX = emd.pageX - absCord(this).left;
    window.onmousemove = function (emm) {
       
        div3.style.marginLeft = emm.pageX - shiftX - parentShift + "px";
        div1.style.width = aWidth + absCord(div3).left - parentShift + "px";

        if ( (absCord(div3).left + tabWidth - parentShift) > tumblerWidth) {
            div3.style.marginLeft = tumblerWidth - tabWidth + "px";
            window.onmousemove = null;
        }

        if( (absCord(div3).left) < parentShift) {
            div3.style.marginLeft = 0;
            window.onmousemove = null;
        }


    }
}


window.onmouseup = function () {
    window.onmousemove = null;
}


// }
// onload
