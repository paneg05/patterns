
const User = require("../../src/domain/entity/User")

test('Deve criar um usuário',()=>{
    const user = new User('jonh doe', 'john.doe@gmail.com', '12345678',30)

    expect(user.name).toBe('jonh doe')
    expect(user.email).toBe('john.doe@gmail.com')
    expect(user.password).toBe('12345678')
    expect(user.age).toBe(30)
})

test('Não Deve criar um usuário com nome inválido',()=>{
    
    expect(() => new User('jonh', 'john.doe@gmail.com', '12345678',30)).toThrow(new Error('Invalid name'))
   
})

test('Não Deve criar um usuário com email inválido',()=>{
    
    expect(() => new User('jonh doe', 'john.doe@gmail', '12345678',30)).toThrow(new Error('Invalid email'))
   
})

test('Não Deve criar um usuário com nome inválido',()=>{
    
    expect(() => new User('jonh doe', 'john.doe@gmail.com', '12348',30)).toThrow(new Error('Invalid password'))
   
})

test('Não Deve criar um usuário com idade inválida',()=>{
    
    expect(() => new User('jonh doe', 'john.doe@gmail.com', '12345678',15)).toThrow(new Error('Invalid age'))
   
})