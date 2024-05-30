// const images = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

// // оголошення глобальних змінних

// const ulElem = document.querySelector('.gallery');
// const backdropEl = document.querySelector('.backdrop');
// const modalEl = document.querySelector('.modal');


// // відрендерення та створення розмітки для галереї зображень 

// function imageTamplate(image) {
//     return `<li class="gallery-item">
//             <a class="gallery-link" href=${image.original}>
//                 <img class="gallery-image" src=${image.preview} data-source=${image.original}
//                     alt=${image.description} />
//             </a>
//         </li>`}
  

// function imagesTamplate(arr) {
//   return arr.map(imageTamplate).join('');
// }
// const markup = imagesTamplate(images);
// ulElem.innerHTML = markup;

// // заборона на завантаження зображення на ПК по кліку
// const imgLinkEl =  document.querySelectorAll('.gallery-link');
// imgLinkEl.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//     });  
// });


// делігація - виклик картинки по кліку на превью

// ulElem.addEventListener("click", selectImg);
// function selectImg(event) {
//     console.log(event.target);
//     const selectedImg = event.target.dataset.source;
//     console.log(selectedImg);
// };

// відкриття модалки по кліку на картинку

// function showModal() {
//     backdropEl.classList.add('show-modal');
//     window.addEventListener('keydown', onModalClose);
// }

// // закриття модалки кліком за межами картинки

//     function closeModal() {
//         backdropEl.classList.remove('show-modal')
//         window.removeEventListener('keydown', onModalClose);
// }
// //   перевірка, щоб модалка не відкривалася при натисканні між превьюшками  

// ulElem.addEventListener('click', e => {
//     if (e.target === e.currentTarget) return;
//     showModal();
// });

// //   перевірка, щоб модалка не закривалася при натисканні в межах модального вікна  
// backdropEl.addEventListener('click', e => {
//     if (e.target === e.currentTarget) {
//         closeModal();
//     };       
// })

// // закриття модалки через ESC

// function onModalClose(e) {
//     console.log(e.code);
//     if (e.code === 'Escape'){
//         closeModal();
//     }
// };

// ***********************************************БІБЛІОТЕКА*****************************************************

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// оголошення глобальних змінних

const ulElem = document.querySelector('.gallery');
const backdropEl = document.querySelector('.backdrop');



// відрендерили та створили розмітки для галереї зображень 

function imageTamplate(image) {
    return `<li class="gallery-item">
            <a class="gallery-link" href=${image.original}>
                <img class="gallery-image" src=${image.preview} data-source=${image.original}
                    alt=${image.description} />
            </a>
        </li>`}
  

function imagesTamplate(arr) {
  return arr.map(imageTamplate).join('');
}
const markup = imagesTamplate(images);
ulElem.innerHTML = markup;

// заборона на завантаження зображення на ПК по кліку
const imgLinkEl =  document.querySelectorAll('.gallery-link');
imgLinkEl.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
    });  
});



// закриття модалки через ESC

function onModalClose(e) {
    console.log(e.code);
    if (e.code === 'Escape'){
        closeModal();
    }
};

// модалка через бібліотеку

const instance = basicLightbox.create(`
    <div class="modal">
    
     </div>
`)

// const instance = basicLightbox.create(`
//                 <img src="${event.target.dataset.source}" width="800" height="600">
// `);


ulElem.addEventListener('click', e => {
    if (e.target === e.currentTarget) return;
        instance.show();
});

backdropEl.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        instance.close();
    };
});
