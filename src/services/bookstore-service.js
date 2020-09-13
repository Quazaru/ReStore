// Отвечает за парсинг даты. Что-то на подобии взятия даты с Апи

export default class BookStoreService {
  data = [
      {
        id: 1,
        img: 'https://previews.123rf.com/images/sumkinn/sumkinn1502/sumkinn150200122/36556060-icon-book-with-bookmark-minimal-outline-for-web-and-mobile-applications.jpg',
        price: '200',
        title: 'Магия утра',
        author: 'Хэл Элрод',
      },
      {
        id: 2,
        img: 'https://previews.123rf.com/images/sumkinn/sumkinn1502/sumkinn150200122/36556060-icon-book-with-bookmark-minimal-outline-for-web-and-mobile-applications.jpg',
        price: '200',
        title: '16 законов успеха',
        author: 'Наполеон Хилл',
      }
  ];
  
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1500)
    })
  }
}