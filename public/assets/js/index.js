$.ajax({
    type:'get',
    url:'/posts/count',
    success(res){
        $('#post').html(`<strong>${res.postCount}</strong>篇文章（<strong>${res.draftCount}</strong>篇草稿）`)
    }
})