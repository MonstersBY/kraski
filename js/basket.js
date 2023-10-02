function removeBacketCard() {
	const removeCard = document.querySelectorAll('[data-backetCardRemove]');
	const removeBlockDesktop = document.querySelector('.remove-item');
	const removeBlockMobile = document.querySelector('.remove-item--mobile');
	const removeCardClose = document.querySelector('.remove-item__close');

	if (window.outerWidth <= 768) {
		addRemoveClasses(removeCard, removeBlockMobile)

	} else {
		addRemoveClasses(removeCard, removeBlockDesktop)
	}

	removeCardClose.addEventListener('click', () => {
		removeBlockMobile.classList.remove('show');
	})
}

function addRemoveClasses(element, block) {
	element.forEach((el) => {
		el.addEventListener('click', () => {
			block.classList.add('show');

			setTimeout(function () {
				if (block.classList.contains('show')) {
					block.classList.remove('show')
				}
			}, 3000)
		});
	})

}

function showRecommendation() {
	const showBtn = document.querySelectorAll("[data-showBlock]");
	showBtn.forEach((el) => {
		let blockClass = el.getAttribute('data-showBlock');
		const element = document.querySelector(blockClass);

		el.addEventListener('click', function () {
			if (!element.classList.contains('show')) {
				el.classList.add('open');
				expandElement(element, 'show');
			} else if (element.classList.contains('show')) {
				el.classList.remove('open');
				expandElement(element, 'show');
			}
		});

		window.addEventListener('resize', () => {
			element.style = "";
		});
	});
}

function expandElement(elem, collapseClass) {
	// debugger;
	elem.style.height = '';
	elem.style.transition = 'none';

	const startHeight = window.getComputedStyle(elem).height;

	// Remove the collapse class, and force a layout calculation to get the final height
	elem.classList.toggle(collapseClass);
	const height = window.getComputedStyle(elem).height;

	// Set the start height to begin the transition
	elem.style.height = startHeight;

	// wait until the next frame so that everything has time to update before starting the transition
	requestAnimationFrame(() => {
		elem.style.transition = '';

		requestAnimationFrame(() => {
			elem.style.height = height
		})
	})
}

function backetCheckAll() {
	const allCheckBacket = document.getElementById('checkAll');
	const backetCheckBoxes = document.querySelectorAll('[data-backetCheckbox]');
	let stack = [];

	allCheckBacket.addEventListener('change', (event) => {
		if (event.currentTarget.checked) {
			backetCheckBoxes.forEach(function (checkbox) {
				checkbox.checked = true;
				stack.push(checkbox);
			});
		} else {
			backetCheckBoxes.forEach(function (checkbox) {
				checkbox.checked = false;
				stack.pop(checkbox);
			});
		}
	});

	backetCheckBoxes.forEach(function (checkbox) {
		checkbox.addEventListener('change', (event) => {
			event.currentTarget.checked ? stack.push(checkbox) : stack.pop(checkbox);
			if (stack.length === backetCheckBoxes.length) {
				allCheckBacket.checked = true;
			} else {
				allCheckBacket.checked = false;
			}
		});
	});
}

function promoCode() {
	const promocodeInput = $('#promocode-input');

	$('#promocode-text').on('click', () => {
		promocodeInput.addClass('show');
	});

	$(document).mouseup(function (e) {
		if (promocodeInput.has(e.target).length === 0 && !promocodeInput.val()) {
			promocodeInput.removeClass('show')
		}
	});
}

function showMiniBacket() {
	const backetMiniOffsetTop = $('.basket-footer-fixed').offset().top;
	const mainBacketOffsetTop = $('#mainBacketPurchase').offset().top;
	const backetMini = $('.basket-footer-fixed');

	if (backetMiniOffsetTop >= mainBacketOffsetTop) {
		backetMini.removeClass('show');
	} else {
		backetMini.addClass('show');
	}

}


promoCode();
removeBacketCard()
showRecommendation()
backetCheckAll();
showMiniBacket();

window.addEventListener('resize', () => {
	removeBacketCard();
});

window.addEventListener('scroll', () => {
	showMiniBacket();
});