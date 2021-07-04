function sum_nums(max)
{
    let sum=0;
    for(i = 1; i<=max; i++)
    {
        sum +=i;
    }
    return sum;
}
console.log(sum_nums(4));