define(['./a-util.js', function(aUtil){
    var a = {
        printDate: function(date){
            console.log('a1')
            console.log(aUtil.aGetFormatDate(date))
            console.log('a2')
        }
    }
    return a
}])
console.log('a.js')