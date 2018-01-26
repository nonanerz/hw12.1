// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime (numb) {
    for (let i = 2, s = Math.sqrt(numb); i <= s; i++) {
        if (numb % i === 0) {
            return false
        }
    }
    return numb > 1
}

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false

// factorial - Returns a number that is the factorial of the given number.

function factorial (numb) {
    if (numb < 0) {
        return
    } else if (numb === 0) {
        return 1
    }
    return numb * factorial(numb - 1)
}

factorial(0)                        // 1
factorial(1)                        // 1
factorial(6)                        // 720

// fib - Returns the nth Fibonacci number.
function fib (num) {
    let a = 1
    let b = 0
    let temp

    while (num > 0){
        temp = a
        a = a + b
        b = temp
        num--
    }
    return b
}

fib(0)                              // 0
fib(1)                              // 1
fib(10)                             // 55
fib(20)                             // 6765


// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted (arr) {
    let arrCopy = [...arr]
    arrCopy.sort(function (a, b) {
        return a - b
    })
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arrCopy[i]) {
            return false
        }
    }
    return true
}

isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse (str) {
    return str.split("").reverse().join("");
}

reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'


//indexOf - Implement the indexOf function for arrays.
function indexOf (arr, numb) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numb) {
            return i
        }
    }
    return -1
}
indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome (str) {
   let testString = str.replace(/ /g,'').toLowerCase()
    for (let i = 0; i < (testString.length / 2); ++i) {
        if (testString.charAt(i) !== testString.charAt(testString.length - i - 1)) {
            return false
        }
    }
    return true
}

isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing (arr) {
    let max = Math.max(...arr)
    for (let i = 1; i < max; i++) {
        if (arr.indexOf(i) === -1) {
            return i
        }
    }
}

missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced (str) {
    if (str.indexOf('}{') >= 0) {
        return false
    }
    if (str.match(/{/g).length !== str.match(/}/g).length) {
        return false
    }
    str = str.replace(/[^{}]/g, '')
    while (str.length > 1) {
        str = str.replace(/{}/g, '')
    }
    return str.length === 0
}
isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // false
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false