/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

// way 1 

var lengthOfLastWord = function(s) {
    s = s.trim();
    let words = s.split(' ');
    return words[words.length - 1].length;
};

lengthOfLastWord2(" luffy is still joyboy ")


//way 2
var lengthOfLastWord2 = function (s) {
    let str = s.split(" ").filter(item=>item!='')
    return str[str.length-1].length


};

lengthOfLastWord2(" luffy is still joyboy ")
