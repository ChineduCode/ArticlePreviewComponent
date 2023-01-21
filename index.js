const share = document.querySelector('.share-img')
const socialMediaShare = document.querySelector('.share-container')
const PersonShare = document.querySelector('.person-container')

share.addEventListener('click', ()=> {
     socialMediaShare.style.display= 'grid';
     PersonShare.style.display= 'none';

}) 