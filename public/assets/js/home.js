$.ajax({
    type:'get',
    url:'/slides',
    success(res){
        var html = template('slidesTpl',{data:res})
        $('.swiper-wrapper').html(html)
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination'
            },
          });   
    }
})