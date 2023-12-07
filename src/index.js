import { mobileSidebarNav } from './components/mobileSidebarNav.js';
import { slider } from './components/slider.js';

// prettier-ignore
const homeSlider = slider([
    { path: '/assets/imgs/circuit.jpg', alt: 'Circuit board with components.'},
    { path: '/assets/imgs/newtons-balls.jpg', alt: 'Newtons cradle' },
    { path: '/assets/imgs/lightning.jpg', alt: 'Lightning in the sky.' },
    { path: '/assets/imgs/astronaut.jpg', alt: 'Astronaut in space.' },
    { path: '/assets/imgs/calculus.jpg', alt: 'Calculus equation on chalkboard.' }
  ])

const mobileSidebarNavObj = mobileSidebarNav('mobile-webpage-sidebar-nav');

const sliderContainer = document.querySelector('div.slider');
sliderContainer.append(homeSlider.element);
//homeSlider.initImageRotation(5000);

const mobileWebpage = document.querySelector('.mobile-webpage');
//mobileWebpage.append(mobileSidebarNavObj.element);
