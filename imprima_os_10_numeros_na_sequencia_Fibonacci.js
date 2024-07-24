n=10
r=1
numero1=0
numero2=1
fibonacci=0
 
while(r!=n){
    fibonacci=numero1+numero2
    numero1=numero2
    numero2=fibonacci
    n=n-1
    console.log(fibonacci)
}