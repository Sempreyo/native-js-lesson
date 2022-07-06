// event
// обработчик, handler, подписчик, subscriber, слушатель, listener
const handler = (e) => {
	e.stopPropagation()
	console.log(e.currentTarget.id)
} // handler({....})

// currentTarget (лучше использовать) - тот элемент, который вызвал функцию обработчик

const sm = document.getElementById('small');
const md = document.getElementById('medium');
const big = document.getElementById('big');

sm.onclick = handler; // onclick - свойство
md.onclick = handler;
big.onclick = handler;
//sm.onclick = null;

const a = document.getElementById('a');
a.onclick = (e) => {
	e.preventDefault();
}

//sm.addEventListener('click', handler) // addEventListener - метод
//sm.removeEventListener('click', handler)