module.exports= class User{
    constructor(name, email, password, age){
        this.name=name
        this.email=email
        this.password=password
        this.age=age

        if(name.split(' ').length <2 ){
            throw new Error('Invalid name')
        }
        if(!String(email).toLowerCase().match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            throw new Error('Invalid email')
        }
        if(password.length < 8){
            throw new Error('Invalid password')
        }
        if(age<18){
            throw new Error('Invalid age')
        }  
    }

}