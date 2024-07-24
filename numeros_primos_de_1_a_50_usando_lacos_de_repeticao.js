numero=1
 
while(numero<=50){
    if(numero==2 || numero==3||numero==5||numero==7||numero%1==0 && numero%numero==0 && numero%2!=0 && numero%3!=0 && numero%5!=0 && numero%7!=0){
        console.log(numero)
    }
    numero=numero+1
}