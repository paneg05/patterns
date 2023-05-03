const Password = require("../password")
 class User{
    constructor(){

    }

    static async create (name, email, password, age){
        console.log(name)
        if(!String(email).toLowerCase().match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            
            return 'Invalid email'
        } 
        
        if(name.split(' ').length <2 ){
            
            return 'Invalid name'
        }
         
        if(age<18) {
            return 'Invalid age'
        }
        if(password.length < 8){
            return 'Invalid password'
        }

        return new User(name, email, await Password.create(password,'salt'),age)
    }

    validatePassword(password){
        return this.password.validate(password)
    }
}

module.exports=User