const TXT = "The Happy App is an application that will inform how happy your computer can make you feel The Happy App é-um aplicativo que informará o-quanto seu computador te deixa feliz".replace(/ /g, '<br>').replace(/-/g, ' ');

const mTXTs = [];

const SCROLL_AMOUNT = 5;
const SCROLL_DELAY = 50;

const mScrollContainer = document.getElementById('my-scroll-container');

function doScroll() {
  const cTop = parseInt(mScrollContainer.style.top.replace('px', ''));
  const cMiddleTop = mScrollContainer.offsetTop + mTXTs[1].offsetTop;
  const mScrollAmount = Math.min(SCROLL_AMOUNT, cMiddleTop);

  mScrollContainer.style.top = (cTop - mScrollAmount) + 'px';
  const nMiddleTop = mScrollContainer.offsetTop + mTXTs[1].offsetTop;

  if(nMiddleTop <= 0) createTextElements();

  setTimeout(doScroll, SCROLL_DELAY);
}

function createTextElements() {
  mScrollContainer.innerHTML = '';
  mScrollContainer.style.top = '0px';
  mTXTs.length = 0;
  for(let i = 0; i < 3; i++) {
    const mE = document.createElement('div');
    mE.classList.add('scroll-text');
    mE.innerHTML = TXT;
    mTXTs.push(mE);
    mScrollContainer.appendChild(mE);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createTextElements();
  doScroll();
});
