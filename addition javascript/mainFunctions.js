const main = {
    functions: {
        randint: function* randint(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        range: function* range(x, y = null){
            if (y!==null || x < 0){
                let values = []
                for (i=x;i<y;i++){
                    yield i
                }
                
            } else{
                let values = []
                for(i=0;i<x;i++){
                    yield i
                }
                
            }
        }
    },
    init(args = { choice: null, choice2: null }){
        if (args.choice) {
            Array.prototype.choice = function () {
                return this[Math.floor(Math.random() * this.length)]
            }
        }
        if (args.choice2){
            Array.prototype.choice2 = function(){
                let valueIndex = Math.floor(Math.random() * this.length)
                let value = this.splice(valueIndex, 1)
                return value
            }
        }
    },
    initDefault: { choice: true, choice2: true }
}

const {functions:{range}} = main

for (i of range(-5)){
    console.log(i)
}
