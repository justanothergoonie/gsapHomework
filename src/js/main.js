console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

gsap.set('.logo, .jedi', { transformOrigin: '50% 50%' });

gsap.to('.logo, .jedi', { duration: 20, rotation: 360 });

var myObject = { rotation: 0 };
gsap.to(myObject, {
	duration: 20,
	rotation: 360,
	onUpdate: function () {
		console.log(myObject.rotation);
	},
});
