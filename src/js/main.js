console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

gsap.to('.logo', {
	duration: 2,
	x: 300,
	y: 300,
	backgroundColor: 'purple',
	borderRadius: '20%',
	border: '5px solid white',
	ease: 'bounce',
	width: '25%',
});
