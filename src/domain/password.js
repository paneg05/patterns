const {pbkdf2} = require('crypto')
const { randomBytes } = require('crypto')

module.exports= class Password{
    constructor(value, salt){
        this.value=value
        this.salt=salt
    }

    static create(password, salt){
        const generatedSalt = salt || randomBytes(20).toString('hex')
        return new Promise((resolve,rejects)=>{
            pbkdf2(password, generatedSalt, 100, 64, 'sha512',(error,value) =>{
                if(error){
                    rejects(error)
                }else{
                    resolve(value.toString('hex'))
                }
                
            })
        })
    }
}