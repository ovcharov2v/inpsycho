document.addEventListener('DOMContentLoaded', function () {
	const controls = document.querySelectorAll('.tabs__control');
	const panes = document.querySelectorAll('.tabs__pane');

	controls.forEach(control => {
		control.addEventListener('click', function () {
			const tabId = this.getAttribute('data-tab');

			controls.forEach(control => control.classList.remove('tabs__control--active'));

			this.classList.add('tabs__control--active');

			panes.forEach(pane => {
				pane.classList.remove('tabs__pane--active');
				pane.style.opacity = 0;
			});

			const activePane = document.querySelector(`.tabs__pane[data-tab="${tabId}"]`);
			activePane.classList.add('tabs__pane--active');
			setTimeout(() => {
				activePane.style.opacity = 1;
			}, 10);
		});
	});

	if (controls.length > 0) {
		controls[0].click();
	}
});
