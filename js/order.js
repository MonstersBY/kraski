$(document).ready(function () {
	const orderButton = $('#order-submit');
	const orderButtonMobile = $('#order-submit-mobile');
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
	clickChangeBtn(orderButton, orderButtonMobile);
	clickChangeBtn(orderButtonMobile, orderButton);
	checkRadio(pickupListItem);
	checkRadio(payItem);
	checkRadio(transportListItem);
	checkRadio(transportFormItem);

	$(window).on('scroll', () => {
		orderPurchaseFixed();
	});

	function clickChangeBtn(btn, secondBtn) {
		btn.on('click', function (e) {
			e.preventDefault();
			if (btn.attr('data-form') == 'first') {
				btn.attr('data-form', 'second');
				secondBtn.attr('data-form', 'second');

				changePages(firstOrderForm, secondOrderForm)

				$('.order__progress-step')[0].classList.add("active");
				$('.order__progress-line-pink').addClass('second');


			} else if (btn.attr('data-form') == 'second') {
				btn.attr('data-form', 'third');
				secondBtn.attr('data-form', 'third');

				changePages(secondOrderForm, thirdOrderForm)

				$('.order__progress-step')[1].classList.add("active");
				$('.order__progress-line-pink').addClass('third');

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

		if ($('.faceOptionIndividual').is(':checked')) {
			$('.order-form .switcher__control .switcher__btn').each(function (index) {

				if ($(this).hasClass('active')) {
					switch (index) {
						case 0: $(`[data-pay="pickup"]`).addClass('active');
							break;
						case 1: $(`[data-pay="delivery"]`).addClass('active');
							break;
						case 2: $(`[data-pay="transport"]`).addClass('active');
							break;
						case 3: $(`[data-pay="transport"]`).addClass('active');
							break;
					}
				}
			});
		} else if ($('.faceOptionEntity').is(':checked')) {
			$(`[data-pay="entity"]`).addClass('active');
		}
	});

	$('.faceOptionIndividual').change(() => {
		$('[data-option="individual"]').addClass('active');
		$('[data-option="entity"]').removeClass('active');
	})

	$('.faceOptionEntity').change(() => {
		$('[data-option="individual"]').removeClass('active');
		$('[data-option="entity"]').addClass('active');
	})

	thirdOrderForm.submit((evt) => {
		evt.preventDefault();
		$('.submit-order-modal').addClass('active');
	});

});



