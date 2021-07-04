function  count_vowels(word)
{
    return word.match(/[aeiouAEIOU]/g).length;
}
console.log( count_vowels("God is good,, All the time"));