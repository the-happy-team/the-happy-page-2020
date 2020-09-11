const txts = [
  'thank you',
  'obrigada'
];

function changeThankYou() {
  const thankyouElement = document.getElementById('my-thankyou-text');
  const nextTxt = txts[(Math.floor(Date.now() / 1000)) % txts.length];
  thankyouElement.innerHTML = nextTxt;
  setTimeout(changeThankYou, 1000);
}

document.addEventListener('DOMContentLoaded', changeThankYou);
