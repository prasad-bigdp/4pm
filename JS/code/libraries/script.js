var typed = new Typed("#result", {
	strings: ["Full Stack Web Developer", "Full stack Trainer", "Prasad"],
	typeSpeed: 1,
	loop: true,
	loopCount: Infinity,
})
function fun ()
{
    $('#heading').slideToggle();
}
// register the effect with GSAP:
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
  defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

// now we can use it like this:
window.addEventListener('scrollend', function ()
{
	gsap.effects.fade(".box")
	// or directly on timelines:
	let tl = gsap.timeline()
	tl.fade(".box", { duration: 3 })
		.fade(".box2", { duration: 1 }, "+=2")
		.to(".box3", { x: 100 })
})
