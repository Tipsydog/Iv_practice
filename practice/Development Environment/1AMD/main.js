require(['./a.js', function(a){
    var date = new Date()
    a.printDate(date)
    console.log('main')
}])
console.log('main')
