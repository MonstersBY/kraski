function removeBacketCard() {
	const removeCard = document.querySelectorAll('[data-backetCardRemove]');
	const removeBlock = document.querySelector('.remove-item');
	removeCard.forEach((el) => {
		el.addEventListener('click', () => {
			removeBlock.classList.add('show');

			setTimeout(function removeTime() {
				if (removeBlock.classList.contains('show')) {
					removeBlock.classList.remove('show')
				}
			}, 3000)
		});
	});
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

removeBacketCard()
showRecommendation()
