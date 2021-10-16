/*import of english words dictionary*/
import words from 'an-array-of-english-words';

/*count how many words*/
const countOccurences = arr =>
    arr.reduce((acc, str) => ({
        ...acc,
        [str]: acc[str] ? acc[str] + 1 : 1,
    }), {});

/*find words with same letters and same length*/
const hasSameLetterCount = (word1, word2) => {
    const word1count = countOccurences(word1, split(' '));
    const word2count = countOccurences(word2, split(' '));

    return Object.keys(word1count).lenght === Object.keys(word2count).length &&
        Object.keys(word1count).every(letter => word1count[letter] === word2count[letter]);
}
/*find (different from word) anagrams of word in dictionary*/
const findAnagrams = (word, allWords) => {
    return allWords.filter(entry => hasSameLetterCount(word, entry)).filter(anagram => anagram !== word);
}

console.log(findAnagrams('cinema', words));

/*
    Expected output: ['iceman', 'anemic']
*/
