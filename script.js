

const btn=document.getElementById('btn');
btn.addEventListener('click',function(event) {
	event.preventDefault();
	const age=document.getElementById('age').value;
	const name=document.getElementById('name').value;
	let promise=new Promise(function(res,rej) {
		 setTimeout(() => {
            if (age >= 18) {
                res();
            } else {
                rej();
            }
        }, 4000);
	});
	promise.then(function() {
		alert(`Welcome, ${name}. You can vote.`)
	})
	.catch(function() {
		alert(`Oh sorry ${name}. You aren't old enough.`)
	})
});

