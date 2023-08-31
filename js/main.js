$(document).ready(function() {

$('.switcher__btn').on('click', function(evt){
    evt.preventDefault();
    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest('.switcher');
    let $switcher_container = $switcher.find('.switcher__container');
    let $switcher_contents = $switcher_container.find('.switcher__content');
    $this.siblings('.switcher__btn').removeClass('active');
    $this.addClass('active');
    $switcher_contents.removeClass('active')
    $($switcher_contents[index]).addClass('active');
})

if($('.selection-bp').length) {
    $('.selection-bp-form--first').on( "submit", function(e) {
        e.preventDefault();
        $(this).css('display', 'none')
        $('.selection-bp-form--second').css('display', 'flex')
        $('.selection-bp-form--second').css('opacity', '1')
        $('.selection-bp__progress-step')[0].classList.add("active")
        $('.selection-bp__progress-line-pink').addClass('second')
    });
    $('.selection-bp-form--second').on( "submit", function(e) {
        e.preventDefault();
        $(this).css('display', 'none')
        $('.selection-bp-form--third').css('display', 'flex')
        $('.selection-bp-form--third').css('opacity', '1')
        $('.selection-bp__progress-step')[1].classList.add("active")
        $('.selection-bp__progress-line-pink').addClass('third')
    });

    if (screen.width < 769) {
        // var fixedBlock = $('#cart_fixed-block')

        $('.selection-bp-form-container').each(function(){
            const orininalPosition = $(this)
            const disabled = $(this).find('.selection-bp-form-container-box')
            const cartPosition = $(this).find('.btn-color')
            console.log(cartPosition);
            $(window).scroll(function () {
                var scrollPosition = $(window).scrollTop()
                var cartOffset = cartPosition.offset().top + cartPosition.height() - $(window).height()
                var orininalOffset = orininalPosition.offset().top + orininalPosition.height() - $(window).height()
                if(cartOffset>0) {


                    console.log(scrollPosition);
                    console.log(cartOffset);
                    console.log(orininalOffset);
                    
                    if (scrollPosition >= orininalOffset) {
                        disabled.addClass('disable')
                    } else {
                        disabled.removeClass('disable')
                    }
                }
    
                // if (scrollPosition >= cartOffset) {
                //     fixedBlock.hide()
                // } else {
                //     fixedBlock.show()
                // }
            })
        })


    }
}

})
