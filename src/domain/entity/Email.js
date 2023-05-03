module.exports= class Email{
    #value=''

    constructor(email){
        if(!String(email).toLowerCase().match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            throw new Error('Invalid email')
        }
        this.value=email
    }

    get getValue(){
        return this.value
    }
}