function count_a(word)
{
    return word.match(/[aA]/g).length;
}
console.log(count_a("AlbertinaAa"));
