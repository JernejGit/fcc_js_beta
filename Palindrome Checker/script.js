const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function palindromeCheck(inputText){
        let isPalindrome ='';
        let nonAlphaNumericChars = /[^A-Za-z0-9]+/g;
        let cleanString = inputText
                            .toUpperCase()
                            .replace(nonAlphaNumericChars, '');           
        let reversedCleanString = cleanString.split('')
                                             .reverse()
                                             .join('');

        if(cleanString === reversedCleanString) {
            isPalindrome = 'is a palindrome.'; 
        } else {
            isPalindrome = 'is not a palindrome.';
        }
        return isPalindrome;
}

checkButton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (input.value === ''){
        alert('Please input a value')
    } else { 
        result.innerText = `${input.value} ${palindromeCheck(input.value)}`;
        input.value = "";
    }
});