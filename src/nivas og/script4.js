var  team1=[20,100,60];
var  team2=[98,20,10];


function sum (arr)
{   
    var a=0;

    for(let i=0;i<arr.length;i++)
    {
       
        a=a+arr[i];
    }
    return  a/arr.length;
    

}
tour(team1,team2);
function tour (arr1,arr2)
{
    var b=sum(arr1);
    var c=sum(arr2);
    if(b>c)
        console.log(`Team A is Greater`);
    else
        console.log(`Team B is Greatest`);
}
