range = (1, 10);
console.log(range);
function range(start,end)
{
    myArray = new Array();
    for(num = start; num <= end; num++){
        myArray[num] = [num];
        console.log(myArray)
    }
    return myArray;
}