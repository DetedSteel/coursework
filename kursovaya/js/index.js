$(document).ready(function(){
    function dark_purple_text(obj) {
        $(obj).mousedown(function(){
            $(obj).addClass('dark_purple_text')
        })

        $(obj).mouseup(function(){
            $(obj).removeClass('dark_purple_text')
        })

        $(obj).mouseleave(function(){
            $(obj).removeClass('dark_purple_text')
        })
    }

    function dark_purple(obj) {
        $(obj).mousedown(function(){
            $(obj).removeClass('dropdown').addClass('dropdown2')
        })

        $(obj).mouseup(function(){
            $(obj).removeClass('dropdown2').addClass('dropdown')
        })

        $(obj).mouseleave(function(){
            $(obj).removeClass('dropdown2').addClass('dropdown')
        })
    }

    function dark_purple_background(obj) {
        $(obj).mousedown(function(){
            $(obj).addClass('dark_purple_background')
        })

        $(obj).mouseup(function(){
            $(obj).removeClass('dark_purple_background')
        })
    }

    $('a').click(function(e){
        e.preventDefault();
    })

    dark_purple_text('#nav_item_about_us')

    dark_purple_text('#nav_item_gallery')

    dark_purple_text('#nav_item_catalog')

    dark_purple_text('#nav_item_events')

    dark_purple_text('#nav_item_editions')

    dark_purple_text('#nav_item_projects')

    dark_purple_text('#nav_item_contacts')

    dark_purple_text('#nav_item_realism')

    dark_purple('#nav_item_realism')

    dark_purple_text('#nav_item_impressionism')

    dark_purple('#nav_item_impressionism')
    
    dark_purple_text('#nav_item_post-impressionism')

    dark_purple('#nav_item_post-impressionism')
    
    dark_purple_text('#nav_item_vanguard')

    dark_purple('#nav_item_vanguard')
   
    dark_purple_text('#nav_item_futurism')

    dark_purple('#nav_item_futurism')

    $('#nav_item_realism').mouseenter(function(){
        $('#nav_item_realism').addClass('dropdown3')
    })

    $('#nav_item_realism').mouseleave(function(){
        $('#nav_item_realism').removeClass('dropdown3')
    })

    $('#nav_item_impressionism').mouseenter(function(){
        $('#nav_item_impressionism').addClass('dropdown3')
    })

    $('#nav_item_impressionism').mouseleave(function(){
        $('#nav_item_impressionism').removeClass('dropdown3')
    })

    $('#nav_item_post-impressionism').mouseenter(function(){
        $('#nav_item_post-impressionism').addClass('dropdown3')
    })

    $('#nav_item_post-impressionism').mouseleave(function(){
        $('#nav_item_post-impressionism').removeClass('dropdown3')
    })

    $('#nav_item_vanguard').mouseenter(function(){
        $('#nav_item_vanguard').addClass('dropdown3')
    })

    $('#nav_item_vanguard').mouseleave(function(){
        $('#nav_item_vanguard').removeClass('dropdown3')
    })

    $('#nav_item_futurism').mouseenter(function(){
        $('#nav_item_futurism').addClass('dropdown3')
    })

    $('#nav_item_futurism').mouseleave(function(){
        $('#nav_item_futurism').removeClass('dropdown3')
    })

    dark_purple_background('#btn_subscribe')

    $('#login').mousedown(function(){
        $('#login').addClass('purple_text')
        $('#login').addClass('login_dark_img')
    })

    $('#login').mouseup(function(){
        $('#login').removeClass('purple_text')
        $('#login').removeClass('login_dark_img')
    })

    $('#login').mouseleave(function(){
        $('#login').removeClass('purple_text')
        $('#login').removeClass('login_dark_img')
    })

    $('#search').mouseenter(function(){
        $('.search_input').addClass('search_input_purple')
        $('.search_btn').addClass('search_btn_purple')
    })

    $('.search_input').focusin(function(){
        $('.search').addClass('outline')
    })

    $('.search_input').focusout(function(){
        $('.search').removeClass('outline')
    })

    $('#search').mouseleave(function(){
        $('.search_input').removeClass('search_input_purple')
        $('.search_btn').removeClass('search_btn_purple')
    })

    $('#nav_item_realism').mousedown(function(){
        $('#dropdown_menu_realism').addClass('dropdown_menu_active')
    })

    $('.dropdown_menu').mouseleave(function(){
        $('#dropdown_menu_realism').removeClass('dropdown_menu_active')
    })
})