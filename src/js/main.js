console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

gsap.set('.republic, .jedi', { transformOrigin: '50% 50%' });

gsap.to('.republic, .jedi', { duration: 20, rotation: 360 });

var myObject = { rotation: 0 };
gsap.to(myObject, {
	duration: 20,
	rotation: 360,
	onUpdate: function () {
		console.log(myObject.rotation);
	},
});

gsap.from('.sith-circle', { duration: 1, opacity: 0, x: -150, stagger: 0.25 });
gsap.from('.jedi-circle', { duration: 1, opacity: 0, x: 150, stagger: 0.25 });

document.querySelector('#play').onclick = () => tween.play();
document.querySelector('#pause').onclick = () => tween.pause();
document.querySelector('#seek').onclick = () => {
	tween.seek(2);
	sequenceUpdateDragger();
};
document.querySelector('#seek').onclick = () => {
	tween.progress(0.2);
	sequenceUpdateDragger();
};
document.querySelector('#resume').onclick = () => tween.resume();
document.querySelector('#reverse').onclick = () => tween.reverse();
document.querySelector('#restart').onclick = () => tween.restart();
document.querySelector('#time4').onclick = () => tween.timeScale(4);
document.querySelector('#time2').onclick = () => tween.timeScale(0.2);
