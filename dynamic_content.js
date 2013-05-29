$(document).ready(function(){
    
    /*dynamic content*/
    
    /*data to add*/
    
    shoes = [
        {'name':'Demon 2.0', 'image':'demon2USD123.jpg', 'price':'123', 'id':'shoe_1'},
        {'name':'Shark 2.0', 'image':'shark2USD119.jpg', 'price':'119', 'id':'shoe_2'},
        {'name':'Concept 2.0', 'image':'concept2USD109.jpg', 'price':'109', 'id':'shoe_3'},
        {'name':'Conflict 2.0', 'image':'conflict2USD109.jpg', 'price':'109', 'id':'shoe_4'},
        {'name':'Contact 2.0', 'image':'contact2USD105.jpg', 'price':'105', 'id':'shoe_5'},
        {'name':'Mugen Tech Lace 2.0', 'image':'mugentechlace2USD99.jpg', 'price':'99', 'id':'shoe_6'},
        {'name':'Mugen Tech 2.0', 'image':'mugentech2USD99.jpg', 'price':'99', 'id':'shoe_7'},
        {'name':'Flash 2.0', 'image':'flash2USD83.jpg', 'price':'83', 'id':'shoe_8'},
        {'name':'Onsight', 'image':'onsightUSD79.jpg', 'price':'79', 'id':'shoe_9'},
        {'name':'Banshee', 'image':'bansheeUSD79.jpg', 'price':'79', 'id':'shoe_10'},
        {'name':'Phoenix', 'image':'phoenixUSD75.jpg', 'price':'75', 'id':'shoe_11'},
        {'name':'Drifter', 'image':'drifterUSD69.jpg', 'price':'69', 'id':'shoe_12'},
        {'name':'Mad Monkey 2.0', 'image':'madmonkeyUSD39.jpg', 'price':'39', 'id':'shoe_13'},
    ];
    
    //load content into div with an id (#shoe_list in this case)
    for (var i = 0; i < shoes.length; i++) {
        $('#shoe_list').append('\
            <div class="fullw_auto space_top">\
                <img id="'+shoes[i]['id']+'" class="wh_img margin-center shoe_img" src="imgs/shoes/'+shoes[i]['image']+'">\
            </div>\
            <div class="fullw_auto txt-center space_bottom">\
                <div class="title_m">'+shoes[i]['name']+'</div>\
            </div>\
        ');
    };
    
    //Handling Popups
    
    $('body').on('tap click', '.shoe_img', load_popup);
    
    function load_popup(){
        alert('popup')
    };
    
});