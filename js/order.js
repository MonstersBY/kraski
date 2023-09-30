$(document).ready(function () {
	const orderButton = $('#order-submit');
	const orderButtonMobile = $('#order-submit-mobile');
	const orderButtonSubmitMap = $('.order-map-modal__btn');
	const firstOrderForm = $('.order-form--first');
	const secondOrderForm = $('.order-form--second');
	const thirdOrderForm = $('.order-form--third');

	const pickupListItem = $('[data-listItem]');
	const transportListItem = $('[data-listTransportItem]');
	const transportFormItem = $('.transport-form__item');
	const payItem = $('.pay-item');
	const deliveryOptionsRadio = $('.delivery-options__item-radio');
	const changeAddressItems = $('.change-address-item ');

	const orderMini = $('.order-footer-fixed');

	orderPurchaseFixed();
	clickChangeBtn(orderButton, orderButtonMobile, orderButtonSubmitMap);
	clickChangeBtn(orderButtonMobile, orderButton, orderButtonSubmitMap);
	clickChangeBtn(orderButtonSubmitMap, orderButton, orderButtonMobile);
	checkRadio(pickupListItem);
	checkRadio(payItem);
	checkRadio(transportListItem);
	checkRadio(transportFormItem);

	$(window).on('scroll', () => {
		orderPurchaseFixed();
	});

	function clickChangeBtn(firstBtn, secondBtn, thirdBtn) {

		$('.order__progress-step')[0].addEventListener('click', (e) => {
			e.preventDefault();

			firstBtn.attr('data-form', 'first');
			secondBtn.attr('data-form', 'first');
			thirdBtn.attr('data-form', 'first');

			firstOrderForm.css('display', 'block')
			firstOrderForm.css('opacity', '1')

			secondOrderForm.css('display', 'none')
			thirdOrderForm.css('display', 'none')

			$('.order__progress-step')[0].classList.remove("active");
			$('.order__progress-step')[1].classList.remove("active");
			$('.order__progress-step')[2].classList.remove("active");
			$('.order__progress-line-pink').removeClass('second');
			$('.order__progress-line-pink').removeClass('third');
		})

		$('.order__progress-step')[1].addEventListener('click', (e) => {
			e.preventDefault();

			firstBtn.attr('data-form', 'second');
			secondBtn.attr('data-form', 'second');
			thirdBtn.attr('data-form', 'second');

			firstOrderForm.css('display', 'none')
			firstOrderForm.css('opacity', '0')

			secondOrderForm.css('display', 'block')
			secondOrderForm.css('opacity', '1')

			thirdOrderForm.css('display', 'none')

			$('.order__progress-step')[0].classList.add("active");
			$('.order__progress-step')[1].classList.remove("active");
			$('.order__progress-step')[2].classList.remove("active");
			$('.order__progress-line-pink').addClass('second');
			$('.order__progress-line-pink').removeClass('third');
		})

		$('.order__progress-step')[2].addEventListener('click', (e) => {
			e.preventDefault();

			firstBtn.attr('data-form', 'third');
			secondBtn.attr('data-form', 'third');
			thirdBtn.attr('data-form', 'third');

			firstOrderForm.css('display', 'none')
			firstOrderForm.css('opacity', '0')

			secondOrderForm.css('display', 'none')
			secondOrderForm.css('opacity', '0')

			thirdOrderForm.css('display', 'block')
			thirdOrderForm.css('opacity', '1')

			$('.order__progress-step')[0].classList.add("active");
			$('.order__progress-step')[1].classList.add("active");
			$('.order__progress-step')[2].classList.remove("active");
			$('.order__progress-line-pink').addClass('second');
			$('.order__progress-line-pink').addClass('third');
		})

		firstBtn.on('click', function (e) {
			e.preventDefault();
			if (firstBtn.attr('data-form') == 'first') {
				firstBtn.attr('data-form', 'second');
				secondBtn.attr('data-form', 'second');
				thirdBtn.attr('data-form', 'second');

				changePages(firstOrderForm, secondOrderForm)

				$('.order__progress-step')[0].classList.add("active");
				$('.order__progress-line-pink').addClass('second');

			} else if (firstBtn.attr('data-form') == 'second') {
				firstBtn.attr('data-form', 'third');
				secondBtn.attr('data-form', 'third');
				thirdBtn.attr('data-form', 'third');

				changePages(secondOrderForm, thirdOrderForm)

				$('.order__progress-step')[1].classList.add("active");
				$('.order__progress-line-pink').addClass('third');
				checkEntity()

			} else {
				thirdOrderForm.submit();
				$('.order__progress-step')[2].classList.add("active");
			}
		});
	}

	function changePages(prev, next) {
		prev.submit();
		prev.css('display', 'none');

		next.css('display', 'block');
		next.css('opacity', '1');
	}

	function checkRadio(arr) {
		for (let element of arr) {
			$(element).on('click', (evt) => {
				for (let el of arr) {
					$(el).removeClass('active');
				}
				$(evt.currentTarget).addClass('active')
				$(evt.currentTarget).find('input').prop('checked', true);

				if ($(evt.currentTarget).hasClass('choice-item')) {
					$('.transport-form__footer').css('display', 'block')
				} else {
					$('.transport-form__footer').css('display', 'none')
				}
			});
		}
	}

	function orderPurchaseFixed() {
		const orderMiniOffsetTop = $('.order-footer-fixed').offset().top;
		const mainOrderOffsetTop = $('#orderPurchase').offset().top;

		if (orderMiniOffsetTop >= mainOrderOffsetTop) {
			orderMini.removeClass('show');
		} else {
			orderMini.addClass('show');
		}
	}

	function checkEntity() {
		if ($('.faceOptionIndividual').is(':checked')) {
			$('.order-form .switcher__control .switcher__btn').each(function (index) {
				if ($(this).hasClass('active')) {
					switch (index) {
						case 0: $(`[data-pay="pickup"]`).addClass('active');
							$(`[data-pay="transport"]`).removeClass('active');
							$(`[data-pay="delivery"]`).removeClass('active');
							break;
						case 1: $(`[data-pay="delivery"]`).addClass('active');
							$(`[data-pay="transport"]`).removeClass('active');
							$(`[data-pay="pickup"]`).removeClass('active');
							break;
						case 2: $(`[data-pay="transport"]`).addClass('active');
							$(`[data-pay="pickup"]`).removeClass('active');
							$(`[data-pay="delivery"]`).removeClass('active');
							break;
						case 3: $(`[data-pay="transport"]`).addClass('active');
							$(`[data-pay="pickup"]`).removeClass('active');
							$(`[data-pay="delivery"]`).removeClass('active');
							break;
					}
				}
			});
		} else if ($('.faceOptionEntity').is(':checked')) {
			$(`[data-pay="entity"]`).addClass('active');
			$(`[data-pay="transport"]`).removeClass('active');
			$(`[data-pay="pickup"]`).removeClass('active');
			$(`[data-pay="delivery"]`).removeClass('active');
		}
	}

	for (let element of deliveryOptionsRadio) {
		$(element).on('click', () => {
			if ($('.delivery-Option-Floor').is(':checked')) {
				$('.delivery-options__floor').css('display', 'block');
			} else {
				$('.delivery-options__floor').css('display', 'none');
			}
		});
	}

	for (let element of changeAddressItems) {
		$(element).find('.changeAddress').change(() => {
			for (let el of changeAddressItems) {
				$(el).removeClass('active');
			}
			$(element).addClass('active');
		})
	}

	$('.delivery-Method-Outer').change(() => {
		$('.order-form-item--city').css('display', 'block')
	});

	$('.delivery-Method-Inner').change(() => {
		$('.order-form-item--city').css('display', 'none')
	});

	for (let element of $('.delivery-Outer')) {
		$(element).change(() => {
			if ($(element).is(':checked')) {
				$('.order-form-item--outer').css('display', 'block')
			} else {
				$('.order-form-item--outer').css('display', 'none')
			}
		});
	}

	$('.delivery-register-address').on("click", function (e) {
		e.preventDefault();
		$('body').addClass('modalac')
		$('.change-address-modal').addClass('active')
	});

	$('.btn--address--submit').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('modalac')
		$('.change-address-modal').removeClass('active')
	});

	firstOrderForm.submit((evt) => {
		evt.preventDefault();
	});

	secondOrderForm.submit((evt) => {
		evt.preventDefault();
		checkEntity();
	});

	$('.faceOptionIndividual').change(() => {
		$('[data-option="individual"]').addClass('active');
		$('[data-option="entity"]').removeClass('active');
	})

	$('.faceOptionEntity').change(() => {
		$('[data-option="individual"]').removeClass('active');
		$('[data-option="entity"]').addClass('active');
	})

	$('.order-map-modal-screen').on('click', () => {
		$('.order-map-modal').removeClass('active');
	})

	$('.order-map-modal--exit').on('click', () => {
		$('.order-map-modal').removeClass('active');
	})

	$('.order-map-modal__btn').on('click', () => {
		$('.order-map-modal').removeClass('active');
	})

	thirdOrderForm.submit((evt) => {
		evt.preventDefault();
		$('.submit-order-modal').addClass('active');
	});

});



