$(document).ready(function () {

	$('.write-director').on("click", function (e) {
		e.preventDefault();
		$('body').addClass('modalac')
		$('.write-director-modal').addClass('active')
	});
	$('.write-director-form').on("submit", function (e) {
		e.preventDefault();
		$('.write-director-modal-container--first').css('display', 'none')
		$('.write-director-modal-container--second').css('display', 'block')
	});
	$('.modal-screen, .modal-container--exit, .modal-container-btn--exit').on("click", function (e) {
		$('body').removeClass('modalac')
		$('.write-director-modal').removeClass('active')
		$('.write-director-modal-container--first').css('display', 'block')
		$('.write-director-modal-container--second').css('display', 'none')
	});

	$('.all-filter').on("click", function (e) {
		e.preventDefault();
		$('body').addClass('modalac')
		$('.filter-modal').addClass('active')
	});
	$('.modal-container--exit, .modal-screen').on("click", function (e) {
		$('body').removeClass('modalac')
		$(this).parents('.modal').removeClass('active')
	})

	$('.catalog__list-item-visual--open').on("click", function (e) {
		e.preventDefault();
		$('body').addClass('modalac')
		$('.fast-modal').addClass('active')
	});

	if ($('.consultation__form').length) {
		$('.consultation__form').on("submit", function (e) {
			e.preventDefault();
			$('body').addClass('modalac')
			$('.consultation-modal').addClass('active')
		});
		$('.consultation-modal-screen, .consultation-modal-container--exit').on("click", function (e) {
			$('body').removeClass('modalac')
			$('.consultation-modal').removeClass('active')
		});
	}

	$('.switcher__btn').on('click', function (evt) {
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

	if ($('.selection-bp').length) {
		$('.selection-bp-form--first').on("submit", function (e) {
			e.preventDefault();
			$(this).css('display', 'none')
			$('.selection-bp-form--second').css('display', 'flex')
			$('.selection-bp-form--second').css('opacity', '1')
			$('.selection-bp__progress-step')[0].classList.add("active")
			$('.selection-bp__progress-line-pink').addClass('second')
		});
		$('.selection-bp-form--second').on("submit", function (e) {
			e.preventDefault();
			$(this).css('display', 'none')
			$('.selection-bp-form--third').css('display', 'flex')
			$('.selection-bp-form--third').css('opacity', '1')
			$('.selection-bp__progress-step')[1].classList.add("active")
			$('.selection-bp__progress-line-pink').addClass('third')
		});

		if (screen.width < 769) {
			$('.selection-bp-form-container').each(function () {
				const orininalPosition = $(this)
				const disabled = $(this).find('.selection-bp-form-container-box')
				const cartPosition = $(this).find('.btn-color')
				$(window).scroll(function () {
					var scrollPosition = $(window).scrollTop()
					var cartOffset = cartPosition.offset().top + cartPosition.height() - $(window).height()
					var orininalOffset = orininalPosition.offset().top + orininalPosition.height() - $(window).height()
					if (cartOffset > 0) {
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

	if ($('.catalog__sidebar').length) {
		//Показать еще
		$('.catalog__sidebar-form-item--show').on('click', function () {
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

//filter
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

if($('.catalog__sort').length) {
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

	// Карточка товара
	if ($('.product').length) {
		$('.product_info-item-btn').on("click", function (e) {
			e.preventDefault();
			$(this).parents('.product_info-item-btns').find('.product_info-item-btn').removeClass('active')
			$(this).addClass('active')
		});
		let priceDisOrigin = parseInt($('.product_purchase-box').find('.product_purchase--price span').html().split(' ')[0])
		let priceOrigin = parseInt($('.product_purchase-box').find('.product_purchase--price span').html().split(' ')[0])

		$('.calc .plus').on("click", function (e) {
			e.preventDefault();
			let count = parseInt($(this).parents('.calc').find('.number').html())
			$(this).parents('.calc').find('.number').html(count + 1)
			$(this).parents('.calc').find('.minus').removeClass('not-active')

			if($(this).parents('product_purchase-calc')) {
				let pricedis = parseInt($(this).parents('.product_purchase-box').find('.product_purchase--price span').html())
				$(this).parents('.product_purchase-box').find('.product_purchase--price span').html(pricedis + priceDisOrigin +' ₽')
		
				let price = parseInt($(this).parents('.product_purchase-box').find('.product_purchase--price strong').html())
				$(this).parents('.product_purchase-box').find('.product_purchase--price strong').html(price + priceOrigin +' ₽')
			}
		});

    $('.calc .minus').on( "click", function(e) {
        if(!$(this).hasClass('not-active')) {
            e.preventDefault();
            let count = parseInt($(this).parents('.calc').find('.number').html())
            $(this).parents('.calc').find('.number').html(count - 1)
            if (count == 2) {
                $(this).parents('.calc').find('.minus').addClass('not-active')
            }

            if($(this).parents('product_purchase-calc')) {
                let pricedis = parseInt($(this).parents('.product_purchase-box').find('.product_purchase--price span').html())
                $(this).parents('.product_purchase-box').find('.product_purchase--price span').html(pricedis - priceDisOrigin +' ₽')
        
                let price = parseInt($(this).parents('.product_purchase-box').find('.product_purchase--price strong').html())
                $(this).parents('.product_purchase-box').find('.product_purchase--price strong').html(price - priceOrigin +' ₽')
            }
        }
    });
    $('.product-info_left-all').on( "click", function(e) {
        $(this).css('display', 'none')
        $(this).siblings('.not-show').removeClass('not-show')
    });
    $('.product-info_left-review--open').on( "click", function(e) {
        $(this).siblings('.product-info_left-review--text').toggleClass('open')
        $(this).html() == 'Скрыть' ? $(this).html('Читать полностью') : $(this).html('Скрыть')
    });

    $('.product-variation-item-btn').on( "click", function(e) {
        e.preventDefault();
        $(this).parents('.product-variation-item').find('.product-variation-item-btn').removeClass('active')
        $(this).addClass('active')
    });

    $('.product-calc-item-choice--box').on( "click", function(e) {
        e.preventDefault();
        $(this).parents('.product-calc-item-choice-container').find('.product-calc-item-choice--box').removeClass('active')
        $(this).addClass('active')
    });
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    $("#calc1").roundSlider({
        radius: 10.5 * htmlFontSize,
        startAngle: 90,
        width: 2.2 * htmlFontSize,
        value: 0,
        handleSize: "+10",
        sliderType: "min-range",
        editableTooltip: false,
        rangeColor: '#e50e78a6',
        max: 20,
        tooltipFormat: tooltipVal2,
    });
    $("#calc2").roundSlider({
        radius: 10.5 * htmlFontSize,
        startAngle: 90,
        width: 2.2 * htmlFontSize,
        value: 0,
        handleSize: "+10",
        sliderType: "min-range",
        editableTooltip: false,
        rangeColor: '#e50e78a6',
        max: 20,
        tooltipFormat: tooltipVal2,
    });
    $("#calc1-modal").roundSlider({
        radius: 10.5 * htmlFontSize,
        startAngle: 90,
        width: 2.2 * htmlFontSize,
        value: 0,
        handleSize: "+10",
        sliderType: "min-range",
        editableTooltip: false,
        rangeColor: '#e50e78a6',
        max: 20,
        tooltipFormat: tooltipVal2,
    });
    $("#calc2-modal").roundSlider({
        radius: 10.5 * htmlFontSize,
        startAngle: 90,
        width: 2.2 * htmlFontSize,
        value: 0,
        handleSize: "+10",
        sliderType: "min-range",
        editableTooltip: false,
        rangeColor: '#e50e78a6',
        max: 20,
        tooltipFormat: tooltipVal2,
    });
    
    function tooltipVal2(args) {
        return `<span class='rs-tooltip-text--number'>${args.value}</span>` + `<span class='rs-tooltip-text--subtitle'>площадь (м2)</span>`;
    }
    changeSizeRound()
    function changeSizeRound() {
        htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (screen.width < 769) {
            $("#calc1").roundSlider({
                radius: 13 * htmlFontSize,
                width: 2.2 * htmlFontSize,
            });
            $("#calc2").roundSlider({
                radius: 13 * htmlFontSize,
                width: 2.2 * htmlFontSize,
            });
            $("#calc1-modal").roundSlider({
                radius: 13 * htmlFontSize,
                width: 2.2 * htmlFontSize,
            });
            $("#calc2-modal").roundSlider({
                radius: 13 * htmlFontSize,
                width: 2.2 * htmlFontSize,
            });
        } else {
            $("#calc1").roundSlider({
                radius: 10.5 * htmlFontSize,
                width: 2.2 * htmlFontSize,
            });
            $("#calc2").roundSlider({
                radius: 10.5 * htmlFontSize,
                width: 2.2 * htmlFontSize,
            });
        }
    }

    $(window).resize(function(){
        changeSizeRound()
    });
    

		$('.product-variation-item-btn').on("click", function (e) {
			e.preventDefault();
			$(this).parents('.product-variation-item').find('.product-variation-item-btn').removeClass('active')
			$(this).addClass('active')
		});

		$('.product-calc-item-choice--box').on("click", function (e) {
			e.preventDefault();
			$(this).parents('.product-calc-item-choice-container').find('.product-calc-item-choice--box').removeClass('active')
			$(this).addClass('active')
		});

		$('.start-write-review').on("click", function (e) {
			e.preventDefault();
			$('body').addClass('modalac')
			$('.product-info_left-write').addClass('active')
		});

		$('.product-info_left-write--exit').on("click", function (e) {
			e.preventDefault();
			$('body').removeClass('modalac')
			$('.product-info_left-write').removeClass('active')
		});
    $('.open-product-calc').on( "click", function(e) {
        e.preventDefault();
        $('body').addClass('modalac')
        $('.product-calc-mob_modal').addClass('active')
    });
    $('.product-calc-modal--exit').on( "click", function(e) {
        e.preventDefault();
        if ($(this).parents('.product-calc-modal_results').length) {
            $(this).parents('.product-calc-modal_results').removeClass('active')
            $('.product-calc-mob_modal').find('.product-calc-modal').each(function () {
                if(!$(this).hasClass('product-calc-modal--first')) {
                    $(this).remove()
                }
            })
            $('body').removeClass('modalac')
            $('.product-calc-mob_modal').removeClass('active')

            return
        }
        if($(this).parents('.product-calc-modal--first').length) {
            $('body').removeClass('modalac')
            $('.product-calc-mob_modal').removeClass('active')
        } else {
            $(this).parents('.product-calc-modal').remove()
        }
    });
    $('.product-calc-calculate').on( "click", function(e) {
        e.preventDefault();
        $('.product-calc-modal_results').addClass('active')
    });
    $('.product-calc-add-all').on( "click", function(e) {
        e.preventDefault();
        $('.product-calc-modal_results').removeClass('active')
        $('.product-calc-mob_modal').find('.product-calc-modal').each(function () {
            if(!$(this).hasClass('product-calc-modal--first')) {
                $(this).remove()
            }
        })
        $('body').removeClass('modalac')
        $('.product-calc-mob_modal').removeClass('active')
    });
    $('.product-calc-modal--back, .repet-calc').on( "click", function(e) {
        e.preventDefault();
        $('.product-calc-modal_results').removeClass('active')
    });

    var productBaner = new Waypoint({
        element: document.getElementById('productBanerStart'),
        handler: function() {
          $('.product-baner').toggleClass('active')
        }
    })
    $('.product-baner--link a').each(function (index) {

        $(this).on( "click", function(e) {
            e.preventDefault();
            $('.product-info_left--btns').find('.product-info_left--btn')[index].click()

            $("html, body").animate({
                scrollTop: $('.product-info').position().top - $('.header-fixed').height() - 10
            }, 1);    
        });       
    })


    $('.product-tinting-all_colors-slide').on( "click", function(e) {
        $('.product-tinting-all_colors-slide').removeClass('active')
        $(this).addClass('active')
        const color = $(this).find('.product-tinting-all_colors-slide--colors').css('background')
        $('.product-tinting-images--choice').css('background', color)
        $('.product-tinting-images--back').css('background', color)
        $('.product-tinting--left').addClass('active')
        $('.product-tinting-end').find('.product-tinting-end--selected').addClass('active')
        $('.product-tinting-end').find('.btn').removeClass('disable')
    });
    $('.product-tinting-end--selected svg').on( "click", function(e) {
        $('.product-tinting-all_colors-slide').removeClass('active')
        $('.product-tinting-images--back').css('background', 'inherit')
        $('.product-tinting--left').removeClass('active')
        $('.product-tinting-end').find('.product-tinting-end--selected').removeClass('active')
        $('.product-tinting-end').find('.btn').addClass('disable')
    });

    $('.product-info_left-color').on( "click", function(e) {
        $('body').addClass('modalac')
        $('.product-color-modal').addClass('active')
    });


	$('.product-colors-slide').on( "click", function(e) {
		$('.product-colors-slide').removeClass('active')
		$(this).addClass('active')
    });

	$('.found-cheaper-open').on( "click", function(e) {
        e.preventDefault();
        $('body').addClass('modalac')
        $('.found-cheaper-modal').addClass('active')
    });


}
$('.add-like').on( "click", function(e) {
	e.preventDefault();
	$('body').addClass('modalac')
	$('.favorites-modal').addClass('active')
});
$('.favorites-modal .btn').on( "click", function(e) {
	e.preventDefault();
	$('body').removeClass('modalac')
	$('.favorites-modal').removeClass('active')
});
$('.form-consultation').on("submit", function (e) {
	e.preventDefault();
	$('body').addClass('modalac')
	$('.consultation-modal').addClass('active')
});


})
