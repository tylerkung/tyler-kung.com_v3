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

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.4;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
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
