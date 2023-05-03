module.exports= class Specification {
    isSatisfiedBy(object){
        throw new Error('Não implementado !')
    }
}

module.exports= class AbstractSpecification extends Specification{
    constructor(){
        super()
    }
}