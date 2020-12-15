$(document).ready(function(){
    function dark_purple_text(obj) {
        $(obj).click(function(){
            $(obj).toggleClass('dark_purple_text')
        })
    }

    function dark_purple_text_top(obj) {
        $(obj).mousedown(function(){
            $(obj).addClass('dark_purple_text')
        })

        $(obj).mouseup(function(){
            $(obj).removeClass('dark_purple_text')
        })
    }

    function dark_purple(obj) {
        $(obj).click(function(){
            $(obj).toggleClass('dropdown2')
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

    dark_purple_text_top('#nav_item_about_us')

    dark_purple_text_top('#nav_item_gallery')

    dark_purple_text_top('#nav_item_catalog')

    dark_purple_text_top('#nav_item_events')

    dark_purple_text_top('#nav_item_editions')

    dark_purple_text_top('#nav_item_projects')

    dark_purple_text_top('#nav_item_contacts')

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

    $('#nav_item_realism').click(function(){
        $('#dropdown_menu_realism').toggleClass('dropdown_menu_active')
    })

    $('.dropdown_menu').mouseleave(function(){
        $('#dropdown_menu_realism').removeClass('dropdown_menu_active')
        $('#nav_item_realism').removeClass('dropdown2').addClass('dropdown')
        $('#nav_item_realism').removeClass('dark_purple_text')
    })

    $('#nav_item_impressionism').click(function(){
        $('#dropdown_menu_impressionism').toggleClass('dropdown_menu_active')
    })

    $('.dropdown_menu').mouseleave(function(){
        $('#dropdown_menu_impressionism').removeClass('dropdown_menu_active')
        $('#nav_item_impressionism').removeClass('dropdown2').addClass('dropdown')
        $('#nav_item_impressionism').removeClass('dark_purple_text')
    })

    $('#nav_item_post-impressionism').click(function(){
        $('#dropdown_menu_post-impressionism').toggleClass('dropdown_menu_active')
    })

    $('.dropdown_menu').mouseleave(function(){
        $('#dropdown_menu_post-impressionism').removeClass('dropdown_menu_active')
        $('#nav_item_post-impressionism').removeClass('dropdown2').addClass('dropdown')
        $('#nav_item_post-impressionism').removeClass('dark_purple_text')
    })

    $('#nav_item_vanguard').click(function(){
        $('#dropdown_menu_vanguard').toggleClass('dropdown_menu_active')
    })

    $('.dropdown_menu').mouseleave(function(){
        $('#dropdown_menu_vanguard').removeClass('dropdown_menu_active')
        $('#nav_item_vanguard').removeClass('dropdown2').addClass('dropdown')
        $('#nav_item_vanguard').removeClass('dark_purple_text')
    })

    $('#nav_item_futurism').click(function(){
        $('#dropdown_menu_futurism').toggleClass('dropdown_menu_active')
    })

    $('.dropdown_menu').mouseleave(function(){
        $('#dropdown_menu_futurism').removeClass('dropdown_menu_active')
        $('#nav_item_futurism').removeClass('dropdown2').addClass('dropdown')
        $('#nav_item_futurism').removeClass('dark_purple_text')
    })

    function dropdown(obj){
        $(obj).mousedown(function(){
            $(obj + '_ref').addClass('background_light_purple_2');
            $(obj).addClass('dropdown_item_2')
        })
    
        $(obj).mouseup(function(){
            $(obj + '_ref').removeClass('background_light_purple_2');
            $(obj).removeClass('dropdown_item_2')
        })
    }

    dropdown ('#dropdown_item_tintoretto')
    dropdown ('#dropdown_item_fridrih')
    dropdown ('#dropdown_item_leonardo')
    dropdown ('#dropdown_item_verrokyo')
    dropdown ('#dropdown_item_tintoretto_2')
    dropdown ('#dropdown_item_fridrih_2')
    dropdown ('#dropdown_item_leonardo_2')
    dropdown ('#dropdown_item_verrokyo_2')
    dropdown ('#dropdown_item_mone')
    dropdown ('#dropdown_item_sisley')
    dropdown ('#dropdown_item_mane')
    dropdown ('#dropdown_item_renuar')
    dropdown ('#dropdown_item_mone_2')
    dropdown ('#dropdown_item_sisley_2')
    dropdown ('#dropdown_item_mane_2')
    dropdown ('#dropdown_item_renuar_2')
    dropdown ('#dropdown_item_vangog')
    dropdown ('#dropdown_item_sezann')
    dropdown ('#dropdown_item_gogen')
    dropdown ('#dropdown_item_sera')
    dropdown ('#dropdown_item_vangog_2')
    dropdown ('#dropdown_item_sezann_2')
    dropdown ('#dropdown_item_gogen_2')
    dropdown ('#dropdown_item_sera_2')
    dropdown ('#dropdown_item_kandisky')
    dropdown ('#dropdown_item_marinetty')
    dropdown ('#dropdown_item_malevich')
    dropdown ('#dropdown_item_picasso')
    dropdown ('#dropdown_item_kandisky_2')
    dropdown ('#dropdown_item_marinetty_2')
    dropdown ('#dropdown_item_malevich_2')
    dropdown ('#dropdown_item_picasso_2')
    dropdown ('#dropdown_item_karra')
    dropdown ('#dropdown_item_pratella')
    dropdown ('#dropdown_item_severini')
    dropdown ('#dropdown_item_balla')
    dropdown ('#dropdown_item_karra_2')
    dropdown ('#dropdown_item_pratella_2')
    dropdown ('#dropdown_item_severini_2')
    dropdown ('#dropdown_item_balla_2')
})