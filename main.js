document.querySelectorAll('.x-list-row-checker').forEach((item) => {
	item.onclick = () => {
		setTimeout(() => {
			let sum = 0;
			document.querySelectorAll('dl.x-list-selected .renderValor div').forEach((item) => {
				sum += Number.parseFloat(item.textContent.replace(" ","").replace(".","").replace(",","."));
			});
			document.querySelector('#js-sum').textContent = sum.toFixed(2);
		}, 1000);
	};
});
let target = document.querySelector('.x-toolbaracao-top .x-toolbar-right .x-toolbar-right-row');
let td = document.createElement('TD');
td.id = "js-sum";
target.insertBefore(td, target.firstChild);
