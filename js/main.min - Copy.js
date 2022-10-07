$(document).ready(function() {
    function e(e) { document.body.classList.toggle(e) }
    $(window).load(function() { $("#preloader").delay(3500).fadeOut("slow", function() { $(this).remove() }) }), $("#menu-toggler").click(function() { e("menu-active") }), $("#close1").click(function() { e("menu-active") }), $("#close2").click(function() { e("menu-active") }), $("#close3").click(function() { e("menu-active") }), $("#close4").click(function() { e("menu-active") }), $("#close5").click(function() { e("menu-active") }), $("#close6").click(function() { e("menu-active") }), $(window).scroll(function() { $(window).scrollTop() >= 50 ? ($(".header").addClass("fixshow"), $(".main").addClass("spacetop")) : ($(".header").removeClass("fixshow"), $(".main").removeClass("spacetop")) });
    var o = .5 * $(window).outerHeight();
    $(window).scroll(function() { $(window).scrollTop() > o ? $(".m-backtotop").addClass("active") : $(".m-backtotop").removeClass("active") }), $(".m-backtotop").click(function() { return $("html, body").animate({ scrollTop: 0 }, "slow"), !1 }), $('a[href^="#"]').bind("click.smoothscroll", function(e) {
        e.preventDefault();
        var o = this.hash,
            t = $(o);
        $("html, body").stop().animate({ scrollTop: t.offset().top }, 500, "swing", function() { window.location.hash = o })
    })
}), $(window).scroll(function() {
    var e = $(window).scrollTop();
    $(".page-section").each(function(o) { $(this).position().top <= e + 20 && ($(".nav-menu a.active1").removeClass("active1"), $(".nav-menu a").eq(o).addClass("active1")) })
}).scroll(), $.fn.moveIt = function() {
    var e = $(window),
        o = [];
    $(this).each(function() { o.push(new moveItItem($(this))) }), window.addEventListener("scroll", function() {
        var t = e.scrollTop();
        o.forEach(function(e) { e.update(t) })
    }, { passive: !0 })
};
var moveItItem = function(e) { this.el = $(e), this.speed = parseInt(this.el.attr("data-scroll-speed")) };
moveItItem.prototype.update = function(e) { this.el.css("transform", "translateY(" + e / this.speed + "px)") }, $(function() { $("[data-scroll-speed]").moveIt() }), $(window).scroll(function() {
    var e = $(window).scrollTop();
    console.log("scrollTop>>>" + e), 0 == e ? $("#scrollFx").css({ bottom: "-1000px" }) : $("#scrollFx").css({ bottom: $(window).scrollTop() + "px" })
});
var swiper = new Swiper(".swiper-containerr", { spaceBetween: 30, centeredSlides: !0, loop: !0, speed: 1e3, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", clickable: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } }),
    tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var player, firstScriptTag = document.getElementsByTagName("script")[0];

function onYouTubeIframeAPIReady() { player = new YT.Player("player", { width: "100%", videoId: "vr9PNIigiG4", playerVars: { autoplay: 1, playsinline: 1, playlist: "vr9PNIigiG4", loop: 1 }, events: { onReady: onPlayerReady } }) }

function onPlayerReady(e) { e.target.mute(), e.target.playVideo() }
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);