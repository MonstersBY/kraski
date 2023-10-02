$(document).ready(function () {
	function remToPx(remValue) {
		// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
		var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

		// Переводим значение из rem в px
		var pxValue = remValue * htmlFontSize;

		// Округляем значение до целых пикселей (по желанию)
		return Math.round(pxValue) + 'px';
	}
	let catalogSmallSwiper = new Swiper('.catalog-small-swiper', {
		slidesPerView: 'auto',
		spaceBetween: `${remToPx(2)}rem`,
		navigation: {
			prevEl: '.catalog-small-prev-btn',
			nextEl: '.catalog-small-next-btn',
		},
	});
	let catalogBrandSwiper = new Swiper('.catalog__brand-swiper', {
		slidesPerView: 'auto',
		spaceBetween: `${remToPx(1)}rem`,
		navigation: {
			prevEl: '.catalog__brand-prev-btn',
			nextEl: '.catalog__brand-next-btn',
		},
	});

	let recomendationSlider = new Swiper('.recomendation__slider', {
		slidesPerView: 4,
		spaceBetween: `${remToPx(2)}rem`,
		navigation: {
			prevEl: '.recomendation__slider-prev',
			nextEl: '.recomendation__slider-next',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: `${remToPx(2)}rem`,
				grid: {
					rows: 2,
					fill: 'rows',
				},
				pagination: {
					el: '.popular-pagination--mob',
					clickable: true,
				},
			},
			// Медиа-запрос для ширины больше 768px
			769: {
				slidesPerView: 4,
				grid: {
					rows: 1,
					fill: 'columns',
				},
			},
		},
	});

	let instrumentsSlider = new Swiper('.instruments__slider', {
		slidesPerView: 4,
		spaceBetween: `${remToPx(2)}rem`,
		navigation: {
			prevEl: '.instruments__slider-prev',
			nextEl: '.instruments__slider-next',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: `${remToPx(2)}rem`,
				grid: {
					rows: 2,
					fill: 'rows',
				},
				pagination: {
					el: '.popular-pagination--mob',
					clickable: true,
				},
			},
			// Медиа-запрос для ширины больше 768px
			769: {
				slidesPerView: 4,
				grid: {
					rows: 1,
					fill: 'columns',
				},
			},
		},
	});

	let preparatoryWorkSlider = new Swiper('.preparatory-work__slider', {
		slidesPerView: 4,
		spaceBetween: `${remToPx(2)}rem`,
		navigation: {
			prevEl: '.preparatory-work__slider-prev',
			nextEl: '.preparatory-work__slider-next',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: `${remToPx(2)}rem`,
				grid: {
					rows: 2,
					fill: 'rows',
				},
				pagination: {
					el: '.popular-pagination--mob',
					clickable: true,
				},
			},
			// Медиа-запрос для ширины больше 768px
			769: {
				slidesPerView: 4,
				grid: {
					rows: 1,
					fill: 'columns',
				},
			},
		},
	});

	let bucketRecomendationCard = new Swiper('.item-card-recommendation__slider', {
		slidesPerView: 'auto',
		orientation: 'horizontal',
		freeMode: true,
		spaceBetween: `${remToPx(2)}rem`,

		navigation: {
			nextEl: '.item-card-recommendation__next',
			prevEl: '.item-card-recommendation__prev',
		},

		mousewheel: {
			sensitivity: 1,
			eventsTarger: ".item-card-recommendation__slider"
		},

		breakpoints: {
			769: {
				spaceBetween: `${remToPx(1)}rem`,
			}
		},


	});

	const fast_photo_bottom1 = new Swiper('.fast_photo_bottom1', {
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
		spaceBetween: `${remToPx(2)}rem`,
	});

	const fast_photo1 = new Swiper('.fast_photo1', {
		spaceBetween: `${remToPx(2)}rem`,
		thumbs: {
			swiper: fast_photo_bottom1,
		},
	});

	const productPBottom = new Swiper('.product_pictures-bottom-swiper', {
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
		spaceBetween: `${remToPx(2)}rem`,
	});

	const productP = new Swiper('.product_pictures-swiper', {
		spaceBetween: `${remToPx(2)}rem`,
		thumbs: {
			swiper: productPBottom,
		},
		pagination: {
			el: ".product_pictures-pagination",
			clickable: true
		},
	});

	const tintingImages = new Swiper('.product-tinting-images', {
		loop: 'true',
		navigation: {
			prevEl: '.product-tinting-images-prev-btn',
			nextEl: '.product-tinting-images-next-btn',
		},
	});

	var tintingСolors = new Swiper(".product-tinting-all_colors", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		grid: {
			rows: 3,
		},
		spaceBetween: `${remToPx(1.8)}rem`,
		pagination: {
			el: ".product-tinting-all_colors-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			}
		},
		navigation: {
			prevEl: '.product-tinting-all_colors--prev',
			nextEl: '.product-tinting-all_colors--next',
		},
		breakpoints: {
			769: {
				slidesPerView: 7,
				slidesPerGroup: 7,
				spaceBetween: `${remToPx(2)}rem`,
				grid: {
					rows: 5,
				},
			},
		},
	});
	const limitBullets = {
		desk: 3,
		mob: 2,
	}

	$('.open-tinting').on("click", function (e) {
		$('body').addClass('modalac')
		$('.product-tinting-modal').addClass('active')
		setTimeout(() => { ChangeBulletColors() }, 500)
	});


	function ChangeBulletColors() {
		if ($('.product-tinting-all_colors').length) {

			if (screen.width < 769) {
				const allLength = $('.product-tinting-all_colors-pagination .swiper-pagination-bullet').length
				$('.product-tinting-all_colors-pagination .swiper-pagination-bullet').each(function (index) {
					if (limitBullets.mob < index + 1 && allLength - limitBullets.mob > index) {
						$(this).addClass('notshow')
					} else {
						if (index + 1 == limitBullets.mob) {
							$(this).addClass('left-dots')
							$(this).addClass('notdot')
						}
						if (allLength - limitBullets.mob == index) {
							$(this).addClass('right-dots')
						}
					}
				})
				$('.product-tinting-all_colors-pagination .swiper-pagination-bullet-active').removeClass('notshow')
				$('.product-tinting-all_colors-pagination .swiper-pagination-bullet-active').next().removeClass('notshow')
				$('.product-tinting-all_colors-pagination .swiper-pagination-bullet-active').prev().removeClass('notshow')
				let indexActive = parseInt($('.product-tinting-all_colors-pagination .swiper-pagination-bullet-active').html())
				if (limitBullets.mob + 2 < indexActive) {
					$('.product-tinting-all_colors-pagination .left-dots').removeClass('notdot')
				} else {
					$('.product-tinting-all_colors-pagination .left-dots').addClass('notdot')
				}
				if (allLength - limitBullets.mob > indexActive) {
					$('.product-tinting-all_colors-pagination .right-dots').removeClass('notdot')
				} else {
					$('.product-tinting-all_colors-pagination .right-dots').addClass('notdot')
				}
			}
		}
	}
	tintingСolors.on('slideChange', function () {
		ChangeBulletColors()
	});

	var colorSwiper = new Swiper(".product-colors-swiper", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		grid: {
			rows: 3,
		},
		spaceBetween: `${remToPx(1.8)}rem`,
		pagination: {
			el: ".product-colors-swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			}
		},
		navigation: {
			prevEl: '.product-colors-swiper--prev',
			nextEl: '.product-colors-swiper--next',
		},
		breakpoints: {
			769: {
				slidesPerView: 5,
				slidesPerGroup: 5,
				spaceBetween: `${remToPx(2)}rem`,
				grid: {
					rows: 3,
				},
			},
		},
	});

	$('.open-colors-modal').on("click", function (e) {
		$('body').addClass('modalac')
		$('.product-colors-modal').addClass('active')
		setTimeout(() => { ChangeBulletColorsCol() }, 500)
	});

	colorSwiper.on('slideChange', function () {
		ChangeBulletColorsCol()
	});

	function ChangeBulletColorsCol() {
		if ($('.product-colors-modal').length) {

			if (screen.width < 769) {
				const allLength = $('.product-colors-swiper-pagination .swiper-pagination-bullet').length
				$('.product-colors-swiper-pagination .swiper-pagination-bullet').each(function (index) {
					if (limitBullets.mob * 2 > allLength) {
						if (limitBullets.mob < index + 1 && allLength - limitBullets.mob > index) {
							$(this).addClass('notshow')
						} else {
							if (index + 1 == limitBullets.mob) {
								$(this).addClass('left-dots')
								$(this).addClass('notdot')
							}
							if (allLength - limitBullets.mob == index) {
								$(this).addClass('right-dots')
							}
						}
					}
				})
				$('.product-colors-swiper-pagination .swiper-pagination-bullet-active').removeClass('notshow')
				$('.product-colors-swiper-pagination .swiper-pagination-bullet-active').next().removeClass('notshow')
				$('.product-colors-swiper-pagination .swiper-pagination-bullet-active').prev().removeClass('notshow')
				let indexActive = parseInt($('.product-colors-swiper-pagination .swiper-pagination-bullet-active').html())
				if (limitBullets.mob + 2 < indexActive) {
					$('.product-colors-swiper-pagination .left-dots').removeClass('notdot')
				} else {
					$('.product-colors-swiper-pagination .left-dots').addClass('notdot')
				}
				if (allLength - limitBullets.mob > indexActive) {
					$('.product-colors-swiper-pagination .right-dots').removeClass('notdot')
				} else {
					$('.product-colors-swiper-pagination .right-dots').addClass('notdot')
				}
			}
		}
	}
})