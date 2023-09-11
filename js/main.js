$(document).ready(function() {

$('.write-director').on( "click", function(e) {
    e.preventDefault();
    $('body').addClass('modalac')
    $('.write-director-modal').addClass('active')
});
$('.write-director-form').on( "submit", function(e) {
    e.preventDefault();
    $('.write-director-modal-container--first').css('display', 'none')
    $('.write-director-modal-container--second').css('display', 'block')
});
$('.modal-screen, .modal-container--exit, .modal-container-btn--exit').on( "click", function(e) {
    $('body').removeClass('modalac')
    $('.write-director-modal').removeClass('active')
    $('.write-director-modal-container--first').css('display', 'block')
    $('.write-director-modal-container--second').css('display', 'none')
});

$('.all-filter').on( "click", function(e) {
    e.preventDefault();
    $('body').addClass('modalac')
    $('.filter-modal').addClass('active')
});
$('.modal-container--exit, .modal-screen').on( "click", function(e) {
    $('body').removeClass('modalac')
    $(this).parents('.modal').removeClass('active')
})

$('.catalog__list-item-visual--open').on( "click", function(e) {
    e.preventDefault();
    $('body').addClass('modalac')
    $('.fast-modal').addClass('active')
});

if($('.consultation__form').length) {
    $('.consultation__form').on( "submit", function(e) {
        e.preventDefault();
        $('body').addClass('modalac')
        $('.consultation-modal').addClass('active')
    });
    $('.consultation-modal-screen, .consultation-modal-container--exit').on( "click", function(e) {
        $('body').removeClass('modalac')
        $('.consultation-modal').removeClass('active')
    });
}

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
        $('.selection-bp-form-container').each(function(){
            const orininalPosition = $(this)
            const disabled = $(this).find('.selection-bp-form-container-box')
            const cartPosition = $(this).find('.btn-color')
            $(window).scroll(function () {
                var scrollPosition = $(window).scrollTop()
                var cartOffset = cartPosition.offset().top + cartPosition.height() - $(window).height()
                var orininalOffset = orininalPosition.offset().top + orininalPosition.height() - $(window).height()
                if(cartOffset>0) {
                    if (scrollPosition >= orininalOffset) {
                        disabled.addClass('disable')
                    } else {
                        disabled.removeClass('disable')
                    }
                }
            })
        })
    }
}

if($('.catalog__sidebar').length) {
    //Показать еще
    $('.catalog__sidebar-form-item--show').on('click', function(){
        $(this).siblings('.hidden').removeClass('hidden')
        $(this).css('display', 'none')
    })

    // ЦЕНА
    var costRange = document.getElementById('cost-range');
    const arrCost = {
        min: 0,
        max: 10000,
    }
    noUiSlider.create(costRange, {
        start: [arrCost.min, arrCost.max],
        connect: true,
        step: 1,
        range: {
            'min': [arrCost.min],
            'max': [arrCost.max]
        }
    });

    var costRangeFrom = document.getElementById('cost-range-from');
    var costRangeTo = document.getElementById('cost-range-to');

    costRange.noUiSlider.on('update', function (values, handle) {

        var value = values[handle].slice(0, -3);

        if (handle) {
            if (arrCost.max == Number(value)) {
                costRangeTo.value = '';
            } else {
                value = value.split('').join('').replace(/\B(?=(\d{3})+(?!\d))/g, " ").split('').join('').trim();
                costRangeTo.value = value;
            }
        } else {
            if (arrCost.min == Number(value)) {
                costRangeFrom.value = '';
            } else {
                value = value.split('').join('').replace(/\B(?=(\d{3})+(?!\d))/g, " ").split('').join('').trim();
                costRangeFrom.value = value;
            }
        }
    });

    costRangeFrom.addEventListener('keydown', function (e) {
        if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))) {
            e.preventDefault();
            return false;
        }
    });
    costRangeFrom.addEventListener('keyup', function (e) {
        let value = this.value.replace(/\s+/g, '');
        costRange.noUiSlider.set([value, null]);
    });

    costRangeTo.addEventListener('keydown', function (e) {
        if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))) {
            e.preventDefault();
            return false;
        }
    });
    costRangeTo.addEventListener('keyup', function (e) {
        let value = this.value.replace(/\s+/g, '');
        costRange.noUiSlider.set([null, value]);
    });

    //Объем
    var volumeRange = document.getElementById('volume-range');
    const arrVolume = {
        min: 0,
        max: 10000,
    }
    noUiSlider.create(volumeRange, {
        start: [arrVolume.min, arrVolume.max],
        connect: true,
        step: 1,
        range: {
            'min': [arrVolume.min],
            'max': [arrVolume.max]
        }
    });

    var volumeRangeFrom = document.getElementById('volume-range-from');
    var volumeRangeTo = document.getElementById('volume-range-to');

    volumeRange.noUiSlider.on('update', function (values, handle) {
        var value = values[handle].slice(0, -3);

        if (handle) {
            if (arrVolume.max == Number(value)) {
                volumeRangeTo.value = '';
            } else {
                value = value.split('').join('').replace(/\B(?=(\d{3})+(?!\d))/g, " ").split('').join('').trim();
                volumeRangeTo.value = value;
            }
        } else {
            if (arrVolume.min == Number(value)) {
                volumeRangeFrom.value = '';
            } else {
                value = value.split('').join('').replace(/\B(?=(\d{3})+(?!\d))/g, " ").split('').join('').trim();
                volumeRangeFrom.value = value;
            }
        }
    });

    volumeRangeFrom.addEventListener('keydown', function (e) {
        if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))) {
            e.preventDefault();
            return false;
        }
    });
    volumeRangeFrom.addEventListener('keyup', function (e) {
        let value = this.value.replace(/\s+/g, '');
        volumeRange.noUiSlider.set([value, null]);
    });

    volumeRangeTo.addEventListener('keydown', function (e) {
        if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))) {
            e.preventDefault();
            return false;
        }
    });
    volumeRangeTo.addEventListener('keyup', function (e) {
        let value = this.value.replace(/\s+/g, '');
        volumeRange.noUiSlider.set([null, value]);
    });


    // ЦЕНА в большом фильтре
    var costRangeAll = document.getElementById('cost-range-all');
    noUiSlider.create(costRangeAll, {
        start: [arrCost.min, arrCost.max],
        connect: true,
        step: 1,
        range: {
            'min': [arrCost.min],
            'max': [arrCost.max]
        }
    });

    var costRangeAllFrom = document.getElementById('cost-range-from-all');
    var costRangeAllTo = document.getElementById('cost-range-to-all');

    costRangeAll.noUiSlider.on('update', function (values, handle) {

        var value = values[handle].slice(0, -3);

        if (handle) {
            if (arrCost.max == Number(value)) {
                costRangeAllTo.value = '';
            } else {
                value = value.split('').join('').replace(/\B(?=(\d{3})+(?!\d))/g, " ").split('').join('').trim();
                costRangeAllTo.value = value;
            }
        } else {
            if (arrCost.min == Number(value)) {
                costRangeAllFrom.value = '';
            } else {
                value = value.split('').join('').replace(/\B(?=(\d{3})+(?!\d))/g, " ").split('').join('').trim();
                costRangeAllFrom.value = value;
            }
        }
    });

    costRangeAllFrom.addEventListener('keydown', function (e) {
        if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))) {
            e.preventDefault();
            return false;
        }
    });
    costRangeAllFrom.addEventListener('keyup', function (e) {
        let value = this.value.replace(/\s+/g, '');
        costRangeAll.noUiSlider.set([value, null]);
    });

    costRangeAllTo.addEventListener('keydown', function (e) {
        if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))) {
            e.preventDefault();
            return false;
        }
    });
    costRangeAllTo.addEventListener('keyup', function (e) {
        let value = this.value.replace(/\s+/g, '');
        costRangeAll.noUiSlider.set([null, value]);
    });

    $('.fast-modal-item-btn').on( "click", function(e) {
        e.preventDefault();
        $(this).parents('.fast-modal-item-btns').find('.fast-modal-item-btn').removeClass('active')
        $(this).addClass('active')
    });
}
if($('.catalog__sort').length) {
    $('.catalog__sort-container--text').on('click', function(){
        $(this).parents('.catalog__sort-container').toggleClass('active')
    })
    $(document).mouseup(function (e) {
        var container = $('.catalog__sort-container');
        if (container.has(e.target).length === 0){
            container.removeClass('active')
        }
    });
    $('.catalog__sort-container-list-modal').on('click', function(){
        $(this).parents('.catalog__sort-container').removeClass('active')
    })
    $('.catalog__sort-container-item-radio').on('click', function(){
        $('.catalog__sort-container--text').text($(this).find('p').text())
    })

    $('.catalog__sort-filter').on('click', function(){
        $('.catalog__sidebar').addClass('active')
        $('body').addClass('modalac')
    })
    $('.catalog__sidebar-form-exit').on('click', function(){
        $('.catalog__sidebar').removeClass('active')
        $('body').removeClass('modalac')
    })
    $('.dropdown-btn').on('click', function(){
        $(this).parents('.dropdown').toggleClass('active')
    })
}

})
