/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 */

var balancedStringSplit = function (s) {
    let string = s.toUpperCase()
    let count = 0
    let total = 0
    for (let str of string) {
        if (str == 'R') {
            ++count
        }
        if (str == 'L') {
            --count
        }
        if (count === 0) {
            ++total
        }
    }
    return total
};

balancedStringSplit("rllrllrrllllrr")


// practice 

const balancedStr = (string) => {
    const str = string.toUpperCase()
    let count = 0
    let totalBalanceStrings = 0
    for (let s of str) {
        
        if (s == 'R') { ++count }
        if (s == 'L') { --count }
        if (count === 0) { ++totalBalanceStrings }
    }
    return totalBalanceStrings

}
console.log(balancedStr("RLRRRLLRLL"))