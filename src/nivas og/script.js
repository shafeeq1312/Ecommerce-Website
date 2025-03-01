
var  team1=[10,20,50,60];
var  team2=[38,98,78,90];


function sum (arr)
{   
    var a=0;

    for(let i=0;i<arr.length;i++)
    {
       
        a=a+arr[i];
    }
    return  a/arr.length;
    

}
var a=sum(team1);
console.log(`${a}`);
