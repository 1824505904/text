// 二级导航
var timer = null;
var timers = null;
var cl = 0;
var count = 0;
var stop = true;
$('#main_top_list>li').mouseenter(function () {
    for (var i = 0; i < $('#main_top_list li').length; i++) {
        if (this == $('#main_top_list li')[i]) {
            if (i == 8 || i == 9) {
                $('#main_top_list_two').slideUp();
            } else {
                $('.posi').hide();
                $('#main_top_list_two').stop(true).slideDown(500);
                $('.posi:nth-of-type(' + (i + 1) + ')').show();
            }
            count = i;
            break;
        }
    }
});
$('#main_top_list').mouseenter(function () {
    clearTimeout(timers);
    if (stop == true) {
        if (count < 8) {
            $('#main_top_list_two').slideDown(500);
            stop = false;
        }
    }
});
$('#main_top_list_two').mouseenter(function () {
    clearTimeout(timer);
});
$('#main_top_list').mouseleave(function () {
    timer = setTimeout(function () {
        $('#main_top_list_two').slideUp();
    }, 100);
});
$('#main_top_list_two').mouseleave(function () {
    timers = setTimeout(function () {
        $('#main_top_list_two').slideUp();
    }, 100);
});
setInterval(stopFR, 600);
function stopFR() {
    stop == true;
}
// 购物车
$('#header_list_right_buy').mouseenter(function () {
    $('.fd').stop(true).slideDown();
});
$('#header_list_right_buy').mouseleave(function () {
    $('.fd').stop(true).slideUp();
});
// 搜索
$('.input').focus(function () {
    $('#main_top_right>span').fadeToggle(100);
    $('#main_top_right_input_list').fadeIn(200);
    $(this).css("border-color", "#ff6700");
    $('.sousuo').css("border-color", "#ff6700");
});
$('.input').blur(function () {
    $('#main_top_right>span').fadeToggle(100);
    $('#main_top_right_input_list').fadeOut(200);
    $(this).css("border-color", "#e0e0e0");
    $('.sousuo').css("border-color", "#e0e0e0");
});
// 轮播
var items = 1;
$('#main_nav_left_list li').hide();
$('#main_nav_left_list li:nth-of-type(' + items + ')').show();
function start() {
    items++;
    if (items > $('#main_nav_left_list li').length) {
        items = 1;
        $('#main_nav_and_banner_dolid li:nth-of-type(1)').addClass('black');
        $('#main_nav_and_banner_dolid li:nth-of-type(' + $('#main_nav_and_banner_dolid li').length + ')').removeClass('black');
    }
    $('#main_nav_left_list li').fadeOut();
    $('#main_nav_left_list li:nth-of-type(' + items + ')').fadeIn(500);
    if (items != 1) {
        $('#main_nav_and_banner_dolid li:nth-of-type(' + items + ')').addClass('black');
        $('#main_nav_and_banner_dolid li:nth-of-type(' + (items - 1) + ')').removeClass('black');
    }
    else {
        $('#main_nav_and_banner_dolid li:nth-of-type(1)').addClass('black');
        $('#main_nav_and_banner_dolid li:nth-of-type(' + $('#main_nav_and_banner_dolid li').length + ')').removeClass('black');
    }
}
animationBanner = setInterval(start, 4000);
$('#main_nav_and_banner_dolid li').on('click', function (e) {
    for (var i = 0; i < $('#main_nav_and_banner_dolid li').length; i++) {
        if (e.target == $('#main_nav_and_banner_dolid li')[i]) {
            break;
        }
    }
    $('#main_nav_and_banner_dolid li').removeClass('black');
    items = i == 0 ? 0 : i;
    start();
    clearInterval(animationBanner)
    animationBanner = setInterval(start, 4000)
})
$('#main_nav_and_banner_left').on('click', function () {
    $('#main_nav_and_banner_dolid li').removeClass('black');
    items = items - 2;
    items = items == 5 ? 0 : items;
    items = items == -1 ? 4 : items;
    start();
    clearInterval(animationBanner)
    animationBanner = setInterval(start, 4000)
})
$('#main_nav_and_banner_right').on('click', function () {
    $('#main_nav_and_banner_dolid li').removeClass('black');
    items = items == 5 ? 0 : items;
    start();
    clearInterval(animationBanner)
    animationBanner = setInterval(start, 4000)
})
// 轮播图左侧导航
var navBanner = null;
var navBanners = null;
var m = 0;// 保持li常亮
$('#main_nav_left_nav_list li').mouseenter(function () {
    $('.main_nav_left_nav_list').css("width", "0");
    $('#main_nav_left_nav_list li').removeClass('main_nav_left_nav_list_li_hover');
    if ($(this).index() == 0 || $(this).index() == 9) {
        leaveNav($(this).index());
    } else {
        $(this).addClass('main_nav_left_nav_list_li_hover');
    }
    $($('.main_nav_left_nav_list')[$(this).index()]).css("width", $('.main_nav_list_' + ($(this).index() + 1) + '>.main_list').length * 265 + "px");
    $('#meijie').css("width", $($('.main_nav_left_nav_list')[$(this).index()]).css("width"));
    $('#meijie').show();
    m = $(this).index();
})
function leaveNav(item) {
    $($('#main_nav_left_nav_list li')[item]).addClass('main_nav_left_nav_list_li_hover');
    $('#main_nav_left_nav_list').mouseleave(function () {
        $('#main_nav_left_nav_list li').removeClass('main_nav_left_nav_list_li_hover');
        $('#main_nav_left_nav_list li').mouseleave(function () {
            $(this).removeClass('main_nav_left_nav_list_li_hover');
        })
    })
}
$('#main_nav_left_nav_list').mouseleave(function () {
    navBanner = setTimeout(function () {
        $('#meijie').hide();
    }, 100)
})
$('#main_nav_left_nav_list').mouseenter(function () {
    clearTimeout(navBanners);
})
$('#meijie').mouseenter(function () {
    clearTimeout(navBanner);
    $($('#main_nav_left_nav_list li')[m]).addClass('main_nav_left_nav_list_li_hover');
});
$('#meijie').mouseleave(function () {
    navBanners = setTimeout(function () {
        $('#meijie').hide();
        $('.main_nav_left_nav_list').css("width", "0");
        $('#main_nav_left_nav_list li').removeClass('main_nav_left_nav_list_li_hover');
    }, 100)
})
// 闪购左右轮播
$('.henglan_fir div').eq(1).css({
    'cursor': 'pointer',
    'color': '#b0b0b5'
});
$('.henglan_fir div').on('click', function () {
    if ($(this).attr('attr') * 1 == 1) {
        if ($('.tab_qirhuan').offset().left - $('.tab_qirhuan>ul').offset().left == 0) {
            $('.tab_qirhuan>ul').animate({
                left: "-1003px"
            }, 500)
            $('.henglan_fir div').eq(1).css({
                'cursor': 'default',
                'color': '#e2e0e0'
            });
            $('.henglan_fir div').eq(0).css({
                'cursor': 'pointer',
                'color': '#b0b0b5'
            });
        }
    }
    if ($(this).attr('attr') * 1 == 0) {
        if ($('.tab_qirhuan').offset().left - $('.tab_qirhuan>ul').offset().left > 1003) {
            $('.tab_qirhuan>ul').animate({
                left: "0"
            }, 500)
            $('.henglan_fir div').eq(0).css({
                'cursor': 'default',
                'color': '#e2e0e0'
            });
            $('.henglan_fir div').eq(1).css({
                'cursor': 'pointer',
                'color': '#b0b0b5'
            });
        }
    }
    $('.henglan_fir div').removeClass('divhover');
})
$('.henglan_fir div').mouseenter(function () {
    if ($('.tab_qirhuan').offset().left - $('.tab_qirhuan>ul').offset().left == 0) {
        $('.henglan_fir div').eq(0).removeClass('divhover');
        $('.henglan_fir div').eq(1).addClass('divhover');
    } else {
        $('.henglan_fir div').eq(1).removeClass('divhover');
        $('.henglan_fir div').eq(0).addClass('divhover');
    }
})
$('.henglan_fir div').mouseleave(function () {
    $('.henglan_fir div').eq(1).removeClass('divhover');
    $('.henglan_fir div').eq(0).removeClass('divhover');
})
// 购买分矿
var facount = 0;
$('.show>ul:first-child').css('height', '614px');
$('.henglana_nav>ul li').mouseenter(function () {
    $('.henglana_nav_' + facount + '>ul>li').removeClass('henglana_nav_hover');
    $(this).addClass('henglana_nav_hover');
    breakToPage($(this).index());
})
$('#main_bottom_count>div').mouseenter(function () {
    facount = $(this).index();
})
function breakToPage(index) {
    $('.show_' + facount + '>ul').css('height', '0');
    $($('.show_' + facount + '>ul')[index]).css('height', '614px');
}
// tuijian
var itTuijian = 0;
$('.henglan_copy div').eq(1).css({
    'cursor': 'pointer',
    'color': '#b0b0b5'
});
$('.henglan_copy div').eq(0).css({
    'cursor': 'default',
    'color': '#e2e0e0'
});
$('.henglan_copy>span div').on('click', function () {
    if ($(this).attr('attr') * 1 == 1) {
        itTuijian = itTuijian >= $('#tuijian ul').length - 1 ? $('#tuijian ul').length - 1 : itTuijian + 1;
        $('#tuijian>section').animate({
            left: - itTuijian * 1226 + "px"
        }, 500)
        $('.henglan_copy div').css({
            'cursor': 'pointer',
            'color': '#b0b0b5'
        });
        if (itTuijian == $('#tuijian ul').length - 1) {
            console.log(itTuijian)
            $('.henglan_cop div').eq(1).css({
                'cursor': 'default',
                'color': '#e2e0e0'
            });
            $('.henglan_copy div').eq(0).css({
                'cursor': 'pointer',
                'color': '#b0b0b5'
            });
        }
    }
    if ($(this).attr('attr') * 1 == 0) {
        itTuijian = itTuijian == 0 ? 0 : itTuijian - 1;
        $('#tuijian>section').animate({
            left: - itTuijian * 1226 + "px"
        }, 500)
        $('.henglan_copy div').css({
            'cursor': 'pointer',
            'color': '#b0b0b5'
        });
        if (itTuijian == 0) {
            $('.henglan_copy>span div').eq(0).css({
                'cursor': 'default',
                'color': '#e2e0e0'
            });
            $('.henglan_copy>span div').eq(1).css({
                'cursor': 'pointer',
                'color': '#b0b0b5'
            });
        }
    }
})
$('.henglan_copy>span div').mouseenter(function () {
    if (itTuijian == 0) {
        $('.henglan_copy>span div').eq(0).removeClass('divhover');
        $('.henglan_copy>span div').eq(1).addClass('divhover');
    } else {
        $('.henglan_copy>span div').eq(1).removeClass('divhover');
        $('.henglan_copy>span div').eq(0).addClass('divhover');
    }
})
$('.henglan_copy>span div').mouseleave(function () {
    $('.henglan_copy>span div').removeClass('divhover');
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 1344) {
        $('#returnTop').fadeIn();
    } else {
        $('#returnTop').fadeOut();
    }
})
$('#returnTop').on('click', function () {
    document.documentElement.scrollTop = 0;
})
// 山沟事件
function shijian() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var scends = date.getSeconds();
    hours = hours > 10 ? hours : "0" + hours;
    minutes = minutes > 10 ? minutes : "0" + minutes;
    scends = scends > 10 ? scends : "0" + scends;
    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#scends').text(scends);
}
shijian();
setInterval(shijian, 1000);
// 视频播放按钮
var butcount;
$('.video').mouseenter(function(){
    butcount = $(this).index();
    xianshi(butcount);
})
function xianshi( index ) {
    $('.butt').removeClass('video_div_hover');
    $('.butt').eq(index).addClass('video_div_hover');
}
// $('.video img').mouseenter(xianshi)
$('.video img').mouseleave(function () {
    $('.butt').removeClass('video_div_hover');
})
// 下方小轮播
var fongcount = 0;
var licount = 0;
$('.color>li').mouseenter(function () {
    licount = $(this).index();
    $(this).children('.change').css({
        "color":"#ffffff80",
        "background-color":"rgba(66, 66, 66, 0.3)"
    })
})
$('.color>li').mouseleave(function () {
    $('.change').css({
        "color":"transparent",
        "background-color":"transparent"
    })
})
$('.dian li').addClass('dian_li');
$('.dian li:first-child').removeClass('dian_li');
$('.lunbo_right').on('click', function () {
    for (var i = 0; i < $('.list_' + licount + ' li').length; i++) {
        if ($('.dian_' + licount).children('li').eq(i).hasClass('dian_change_li_hover')) {
            fongcount = i;
        }
    }
    fongcount = fongcount >= $('.list_' + licount + ' li').length - 1 ? fongcount : fongcount + 1;
    $('.list_' + licount).animate({
        left: '-' + fongcount * 296 + "px"
    }, 400)
    if (fongcount <= $('.list_' + licount + ' li').length - 1) {
        $('.dian_' + licount).children('li').removeClass('dian_change_li_hover');
        $('.dian_' + licount).children('li').addClass('dian_li');
        $('.dian_' + licount).children('li').eq(fongcount).removeClass('dian_li');
        $('.dian_' + licount).children('li').eq(fongcount).addClass('dian_change_li_hover');
    }
})
$('.lunbo_left').on('click', function () {
    for (var i = 0; i < $('.list_' + licount + ' li').length; i++) {
        if ($('.dian_' + licount).children('li').eq(i).hasClass('dian_change_li_hover')) {
            fongcount = i;
        }
    }
    fongcount = fongcount == 0 ? 0 : fongcount - 1;
    $('.list_' + licount).animate({
        left: '-' + fongcount * 296 + "px"
    }, 400)
    if (fongcount >= 0) {
        $('.dian_' + licount).children('li').removeClass('dian_change_li_hover');
        $('.dian_' + licount).children('li').addClass('dian_li');
        $('.dian_' + licount).children('li').eq(fongcount).removeClass('dian_li');
        $('.dian_' + licount).children('li').eq(fongcount).addClass('dian_change_li_hover');
    }
})