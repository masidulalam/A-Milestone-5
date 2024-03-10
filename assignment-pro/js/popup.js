// document.addEventListener('DOMContentLoaded', function () {
//     const showPopupBtn = document.getElementById('showPopupBtn');
//     const popup = document.getElementById('popup');
//     const closeBtn = document.getElementById('closeBtn');

//     showPopupBtn.addEventListener('click', function () {
//         popup.style.display = 'block';
//     });

//     closeBtn.addEventListener('click', function () {
//         popup.style.display = 'none';
//     });

//     // Close the pop-up if the user clicks outside of it
//     window.addEventListener('click', function (event) {
//         if (event.target === popup) {
//             popup.style.display = 'none';
//         }
//     });
// });

const showPopupBtn = document.getElementById('showPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

showPopupBtn.addEventListener('click', function () {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
});
