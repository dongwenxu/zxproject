


//首页tab切换技术支持、特殊功能和软件优化与更新
$(".home-con2-nav li").click(function (){
   $(this).addClass('home-con2-nav-active').siblings().removeClass('home-con2-nav-active');
   $(".home-con2-nav-con .home-con2-nav-con-use").eq($(this).index()).addClass('home-con2-nav-con-block').siblings().removeClass('home-con2-nav-con-block');
})

//产品介绍tab切换技术支持、特殊功能和软件优化与更新
$(".product-con1-tab li").click(function (){
   $(this).addClass('product-con1-tab-use').siblings().removeClass('product-con1-tab-use');
   $(".product-con1-all-con .product-con1-all-con1").eq($(this).index()).addClass('product-con1-all-block').siblings().removeClass('product-con1-all-block');
   $(".product-con2 .product-con2-use").eq($(this).index()).addClass('product-con2-use-block').siblings().removeClass('product-con2-use-block');

  if($(this).index() == 0){
      $(this).addClass("product-con1-tab-bg11");
      $(".product-con1-tab-bg2").removeClass('product-con1-tab-bg22');
      $(".product-con1-tab-bg3").removeClass('product-con1-tab-bg33');
  };
   if($(this).index() == 1){
      $(this).addClass("product-con1-tab-bg22");
      $(".product-con1-tab-bg1").removeClass('product-con1-tab-bg11');
      $(".product-con1-tab-bg3").removeClass('product-con1-tab-bg33');
  };
   if($(this).index() == 2){
      $(this).addClass("product-con1-tab-bg33");
      $(".product-con1-tab-bg2").removeClass('product-con1-tab-bg22');
      $(".product-con1-tab-bg1").removeClass('product-con1-tab-bg11');
  };
})