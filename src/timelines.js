import { TimelineMax as Timeline, Power1, Power2 } from 'gsap/dist/gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  // const content = node.querySelector('.sport-page');
  // const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    // .from(content, { autoAlpha: 0, y: 25, ease: Power2.easeInOut, delay: 1 });
    // .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay });

  return timeline;
}

const getSportTimeline = (node, delay) => {
	const timeline = new Timeline({ paused: true });
   const video = node.querySelector('.sport-video');
	const page = node.querySelector('.sport-page');
	console.log(video);
   timeline
     .from(node, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
	  .from(page, 1, {autoAlpha: 0, y: 50, ease: Power2.easeOut})
     // .from(video, 1, { autoAlpha: 0, y: -15, scaleX: .98, scaleY: .98, ease: Power2.easeOut, delay: 0.4 });
     // .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

   return timeline;
}

export const play = (pathname, node, appears) => {
	const delay = appears ? 0 : 0.4;
	let timeline

	if (pathname === '/')
		timeline = getHomeTimeline(node, delay);

	else if (pathname === '/fantasy-football' || pathname === '/bracket-mania' || pathname === '/fantasy-pl')
		timeline = getSportTimeline(node, delay);

	else
		timeline = getDefaultTimeline(node, delay);

	window
	 .loadPromise
	 .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (pathname, node) => {
  const timeline = new Timeline({ paused: true });
  if (pathname === '/')
	 timeline.to(node, { autoAlpha: 0, ease: Power1.easeOut });
  else
	 timeline.to(node, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
