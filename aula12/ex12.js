var idade =  22

if (idade < 16) {
    console.log('|Não Vota|')
}else{
    if (idade < 18 || idade > 65){
        console.log('Voto opçional')
    }else{
        if (idade >= 18 && idade <= 65){
            console.log('Voto obrigatorio')
        }
    }
    
}