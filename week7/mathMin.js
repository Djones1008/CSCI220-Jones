output = min(3,2)
console.log(output)
function min(x,y){
    if(x===y){
        return "The numbers are the same";
    }
    else if(x<y){
        return x;
    }
    else{
        return y;
    }
};