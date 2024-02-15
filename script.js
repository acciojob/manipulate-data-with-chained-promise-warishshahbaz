//your JS code here. If required.

	let promise1 =(arr)=>{
		return new Promise((res,rej)=>{
		setTimeout(()=>{
			let res = arr.filter(item => item%2 == 0);
			res(res);
		},1000)
	})
	} 


	let promise2 =(data)=>{
		new Promise((res,rej)=>{
		setTimeout(()=>{
			let res = arr.map(item => item*2);
			res(res);
		},1000)
	})
	} 
promise1().than((data)=>{
	console.log(data)
	return promise2(data);
}).than((data)=>{
	console.log(data)
})

