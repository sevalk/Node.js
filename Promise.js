/*const promise1 = new Promise((resolve, reject) =>{
    
    resolve('VERİLER ALIINDI');
    reject('BAĞLANTI HATASI');

})

//console.log(promise1);

promise1
    .then(value =>{
        console.log(value);
    }).catch(error => {
        console.log(error);
    })*/

const books = [
    {name: 'Kitap 1', author: 'Yazar 1'},
    {name: 'Kitap 2', author: 'Yazar 2'},
    {name: 'Kitap 3', author: 'Yazar 3'}
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        //reject('HATA')
    })

    return promise1;
}

addBook({name : 'Kitap new', author : 'Yazar new'})
    .then(() => {
        console.log('YENİ LİSTE : ')
        listBooks();
    }).catch((error) => {
        console.log(error);
    })

