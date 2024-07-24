contador=0

while (contador < 100){
    contador = contador +1
    if (contador % 2 == 0)
        console.log (contador,'Par azul')
    else if (contador % 2 != 0)
        console.log (contador,'Impar vermelho')
}