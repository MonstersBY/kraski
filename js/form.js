document.querySelectorAll('.drop-zone__input').forEach((inputElement) => {
	const dropZoneElement = inputElement.closest('.drop-zone');

	dropZoneElement.addEventListener('click', (e) => {
		inputElement.click();
	});

	inputElement.addEventListener('change', (e) => {
		if (inputElement.files.length) {
			updateProgress(dropZoneElement, inputElement.files);
		}
	});

	dropZoneElement.addEventListener('dragover', (e) => {
		e.preventDefault();
		dropZoneElement.classList.add('drop-zone--over');
	});

	['dragleave', 'dragend'].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove('drop-zone--over');
		});
	});

	dropZoneElement.addEventListener('drop', (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateProgress(dropZoneElement, e.dataTransfer.files);
		}

		dropZoneElement.classList.remove('drop-zone--over');
	});
});

$('.form__download--input').each(function(inputElement) {
    const dropZoneElement = this.closest('.form__download-block');

    dropZoneElement.addEventListener('click', (e) => {
        console.log(e.target);
		this.click();
	});

    this.addEventListener('change', (e) => {
		if (this.files.length) {
			updateProgress(dropZoneElement, this.files);
		}
	});

	dropZoneElement.addEventListener('drop', (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			this.files = e.dataTransfer.files;
			updateProgress(dropZoneElement, e.dataTransfer.files);
		}
	});
});

function updateProgress(dropZoneElement, files) {
	let progressElements = dropZoneElement.nextElementSibling;

    console.log(progressElements);

	// First time - remove the prompt
	if (progressElements) {
		progressElements.remove();
	}

	progressElements = document.createElement('div');
	progressElements.classList.add('form__download-elements');
	dropZoneElement.after(progressElements);

	Array.from(files).forEach((elem) => {
		let progressElement = document.createElement('div');
		progressElement.classList.add('form__download-element');

		let fileNameElement = document.createElement('div');
		fileNameElement.classList.add('form__download-element--name');
		fileNameElement.innerHTML = elem.name;

		let fileWeightElement = document.createElement('div');
		fileWeightElement.classList.add('form__download-element--size');
		fileWeightElement.innerHTML = Math.trunc(elem.size / 1024) + ' kb';

		let fileIconElement = document.createElement('div');
		fileIconElement.classList.add('form__download-element--icon');

		progressElement.append(fileNameElement, fileWeightElement, fileIconElement);
		progressElements.appendChild(progressElement);
	});

}