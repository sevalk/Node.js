const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {

    const url = ctx.url;

    if(url === '/'){
        
        ctx.body = '<h1>INDEX SAYFASINA HOŞGELDINIZ</h1>';
    }
    else if(url === '/about'){
        
        ctx.body = '<h1>ABOUT SAYFASINA HOŞGELDINIZ</h1>';
    }
    else if(url === '/contact'){
        
        ctx.body = '<h1>CONTACT SAYFASINA HOŞGELDINIZ</h1>';
    }
    else{
        
        ctx.body = '<h1>404 sayfa bulunamadı</h1>';
    }

  
});


const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı`);
});