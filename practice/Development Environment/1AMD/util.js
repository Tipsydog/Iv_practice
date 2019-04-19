define(function(){
    var util = {
        getFormatDate: function(date, type){
            if (type === 1){
                return '2017'
            }
            if(type === 2){
                return '2019'
            }
        }
    }
    return util
})
console.log('util')