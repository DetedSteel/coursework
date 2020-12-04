$(document).ready(function(){
    function dark_purple_text(obj) {
        $(obj).mousedown(function(){
            $(obj).addClass('dark_purple_text')
        })

        $(obj).mouseup(function(){
            $(obj).removeClass('dark_purple_text')
        })
    }

    function dark_purple(obj) {

    }

    $('#nav_item_about_us').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_about_us')
    })

    $('#nav_item_gallery').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_gallery')
    })

    $('#nav_item_catalog').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_catalog')
    })

    $('#nav_item_events').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_events')
    })

    $('#nav_item_editions').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_editions')
    })

    $('#nav_item_projects').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_projects')
    })

    $('#nav_item_contacts').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_contacts')
    })

    $('#nav_item_realism').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_realism')

        $('#nav_item_realism').mousedown(function(){
            $('.dropdown').removeClass('dropdown').addClass('dropdown2')
        })

        $('#nav_item_realism').mouseup(function(){
            $('.dropdown2').removeClass('dropdown2').addClass('dropdown')
        })
    })

    $('#nav_item_impressionism').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_impressionism')
    })

    $('#nav_item_post-impressionism').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_post-impressionism')
    })

    $('#nav_item_vanguard').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_vanguard')
    })

    $('#nav_item_futurism').click(function(e){
        e.preventDefault();

        dark_purple_text('#nav_item_futurism')
    })
})