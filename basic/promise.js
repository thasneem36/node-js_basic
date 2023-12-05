let my = new Promise((pass , fail)=>{
    setTimeout(() => {
        pass('thasneem')
        // fail()
    }, 1000);
})

my.then((n)=>{
    console.log(n+' success');
}).catch(()=>{
    console.log('fail')
})