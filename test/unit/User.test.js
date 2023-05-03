
const User = require("../../src/domain/entity/User")

test('Deve criar um usuário',()=>{
    const user =  User.create('jonh doe', 'john.doe@gmail.com', '12345678',30)
    console.log(user.age)
    expect(user.name).toBe('jonh doe')
    expect(user.email).toBe('john.doe@gmail.com')
    expect(user.password).toBe('12345678')
    expect(user.age).toBe(30)
})

test('Não Deve criar um usuário com nome inválido',()=>{
    
    expect(() => User.create('jonh', 'john.doe@gmail.com', '12345678',30)).toBe('Invalid name')
   
})

test('Não Deve criar um usuário com email inválido',()=>{
    
    expect(() =>  User.create('jonh doe', 'john.doe@gmail', '12345678',30)).toBe('Invalid email')
   
})

test('Não Deve criar um usuário com nome inválido',()=>{
    
    expect(() => User.create('jonh doe', 'john.doe@gmail.com', '12348',30)).toBe('Invalid password')
   
})

test('Não Deve criar um usuário com idade inválida',()=>{
    
    expect(() => User.create('jonh doe', 'john.doe@gmail.com', '12345678',15)).toBe('Invalid age')
   
})