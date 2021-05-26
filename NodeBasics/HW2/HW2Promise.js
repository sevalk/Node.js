const posts = [
    {title: 'Başlık 1', detail: 'Detay 1'},
    {title: 'Başlık 2', detail: 'Detay 2'},
    {title: 'Başlık 3', detail: 'Detay 3'}
]

const listPosts = () => {
    posts.map(post => {
        console.log(post.title);
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('HATA')
    })

    return promise1;
}

addPost({title : 'Post new', detail : 'Detail new'})
    .then(() => {
        console.log('YENİ POST : ')
        listPosts();
    }).catch((error) => {
        console.log(error);
    })
