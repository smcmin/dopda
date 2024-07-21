//  스크롤 애니메이션
$(function () {
  //외부파일로 작성시 fuction
  $(".animate").scrolla({
    mobile: true, //모바일시 활성화
    once: false, //스크롤할때마다 활성화
  });
});

// 픽스헤더 fix header
// 헤더이벤트
var scrollVAlue = 0;

scrollValue = $(document).scrollTop();
fixHeader(); //함수호출

$(window).on("scroll resize", function () {
  // html이 켜지면 scroll resize를 할때 함수를 호출해라
  scrollValue = $(document).scrollTop();
  fixHeader();
});

// fix header 함수 조건문
function fixHeader() {
  if (scrollValue > 150) {
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }
}

// slick slide
$(function () {
  $(".visual .slide ").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true, //페이드인 효과
    autoplaySpeed: 5000, //재생시간
    pauseOnHover: false, //호버나 포커스했을때 애니메이션이 재생된다.
    pauseOnFocus: false,
  });
});
