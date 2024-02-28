/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
 */

var arrayStringsAreEqual = function (word1, word2) {
    let str1 = word1.reduce((total, value) => total + value, '')
    let str2 = word2.reduce((total, value) => total + value, '')
    if (str1 === str2) {
        return true
    } return false
};


arrayStringsAreEqual(["ab", "c"], ["a", "bc"])

//way 2

var arrayStringsAreEqual2 = function(word1, word2) {
    return word1.join('') === word2.join('')
};
