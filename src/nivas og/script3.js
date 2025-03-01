var BILL=[100,50,300,400]
for(let i=0; i<BILL.length; i++)
{
    if(BILL[i]<80 && BILL[i]>0)
    {
        console.log(`BILL AMOUNT Is ${BILL[i] } Tip Amount is ${BILL[i]*0}`);
    }
else if(BILL[i]>80 && BILL[i]<300)
    {
   
    console.log(`BILL AMOUNT Is ${BILL[i] } Tip Amount is ${BILL[i]*0.15}`);
}
else 
{
   
    console.log(`BILL AMOUNT Is ${BILL[i] } Tip Amount is ${BILL[i]*0.25}`);
  
}
}