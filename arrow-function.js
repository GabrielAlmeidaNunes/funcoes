

const arrowFunction= nome => `Meu nome e ${nome}`;

console.log(arrowFunction('Ana'));

const soma = (n1,n2)=>{
    if(n1>n2){
        return n1+n2;
    }else{
        return n1-n2
    }
}

console.log(soma(3,2));
console.log(soma(2,3));