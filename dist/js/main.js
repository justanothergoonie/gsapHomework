"use strict";console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."),gsap.set(".republic, .jedi",{transformOrigin:"50% 50%"}),gsap.to(".republic, .jedi",{duration:20,rotation:360});var myObject={rotation:0};gsap.to(myObject,{duration:20,rotation:360,onUpdate:function(){console.log(myObject.rotation)}}),gsap.from(".sith-circle",{duration:1,opacity:0,x:-150,stagger:.25}),gsap.from(".jedi-circle",{duration:1,opacity:0,x:150,stagger:.25}),document.querySelector("#play").onclick=function(){return tween.play()},document.querySelector("#pause").onclick=function(){return tween.pause()},document.querySelector("#seek").onclick=function(){tween.seek(2),sequenceUpdateDragger()},document.querySelector("#seek").onclick=function(){tween.progress(.2),sequenceUpdateDragger()},document.querySelector("#resume").onclick=function(){return tween.resume()},document.querySelector("#reverse").onclick=function(){return tween.reverse()},document.querySelector("#restart").onclick=function(){return tween.restart()},document.querySelector("#time4").onclick=function(){return tween.timeScale(4)},document.querySelector("#time2").onclick=function(){return tween.timeScale(.2)};
//# sourceMappingURL=main.js.map