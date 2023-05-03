test('Deve criar um email válido',()=>{
    const email = new Email('john.doe@gmail.com')
    expect(email.getValue()).toBe('john.doe@gmail.com')
})