const fs = require('fs');

fs.writeFile('employees.json', '{"name":"Employee 1 Name","salary":2000}', 'utf8',(err)=>{
    if(err) console.log(err);
    console.log("JSON DOSYA OLUŞTURULDU!");
})


fs.appendFile('employees.json', '\n{"name":"Employee 2 Name","salary":3000}', 'utf8',(err)=>{
    if(err) console.log(err);
    console.log("YENİ VERİ EKLENDİ!");
})


setTimeout(()=>{
    fs.readFile('employees.json', 'utf8', (err, data) =>{
        if(err) console.log(err);
        console.log(data);
        console.log('DOSYA OKUNDU!');
    })
},1000
    )


setTimeout(()=>{
    fs.unlink('employees.json', (err) => {
        if(err) console.log(err);
        console.log('DOSYA SİLİNDİ')
    })
},3000
    )

