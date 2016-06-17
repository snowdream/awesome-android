
var cheerio = require('cheerio');
var _ = require('underscore');

// insert anchor link into section
var insertAnchors = function(section) {

    var $ = cheerio.load(section.content);

    var array = [];
    $(':header').each(function(i, elem) {

        var header = $(elem);
        var id = header.attr('id');
        if(id){
            switch(elem.tagName){
                case "h1":
                    array.push({
                        name: header.text(),
                        url: id,
                        children: []
                    });
                    break;
                case "h2":
                    array[array.length-1].children.push({
                        name: header.text(),
                        url: id,
                        children: []
                    });
                    break;
                case "h3":
                    array[array.length-1].children[array[array.length-1].children.length-1].children.push({
                        name: header.text(),
                        url: id,
                        children: []
                    });
                    break;
                default:
                    break;
            }
        }
    });

    if(array.length == 0){
        section.content = $.html();
        return;
    }

    var html = "<div id='anchors-navbar'><i class='fa fa-anchor'></i><ul>";
    for(var i=0;i<array.length;i++){
        html += "<li><a href='#"+array[i].url+"'>"+array[i].name+"</a></li>";
        if(array[i].children.length>0){
            html += "<ul>"
            for(var j=0;j<array[i].children.length;j++){
                html += "<li><a href='#"+array[i].children[j].url+"'>"+array[i].children[j].name+"</a></li>";
                if(array[i].children[j].children.length>0){
                    html += "<ul>"
                    for(var k=0;k<array[i].children[j].children.length;k++){
                        html += "<li><a href='#"+array[i].children[j].children[k].url+"'>"+array[i].children[j].children[k].name+"</a></li>";
                    }
                    html += "</ul>"
                }
            }
            html += "</ul>"
        }
    }
    html += "</ul></div><a href='#"+array[0].url+"' id='goTop'><i class='fa fa-arrow-up'></i></a>";


    section.content = $.html() + html;



};

module.exports = {
    book: {
        assets: ".",
        css: [ "plugin.css" ]
    },
    hooks: {
        "page": function (page) { // before html generation

            _.forEach(page.sections, insertAnchors);

            return page;
        }
    }
};