$(function(){
  // 초기설정(gnb 이동)
  // $('#container article:not(#list_wrap1)').hide();
  $('#container article:not('+ $('#gnb ul li a.selected').attr('href')+')').hide();
  // 이벤트
  $('#gnb ul li a').click(function(){
    // 메뉴 => 1. 모든 메뉴에서 클래스 제거+ 2. 클릭된 직접적인 메뉴에만 클래스 추가
    $('#gnb ul li a').removeClass('selected');
    $(this).addClass('selected');
    // 내용 => 1. 모든 내용 숨김+ 2.클릭된 메뉴와 연결된 내용 보임
    $('#container article').hide();
    $($(this).attr('href')).show();
    return false;
  });

  // 햄버거 아이콘
  $('.all_menu').click(function(){
    $('.menu_wrap').stop().animate({'left':0},400);
  });
  $('.menu_close').click(function(){
    $('.menu_wrap').stop().animate({'left':'-100%'},400);
  });

  // menu의 서브메뉴
  $('.menu > li').click(function(){
    $(this).children('ul').slideToggle();
  });
});