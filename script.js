// Exercises XP GOLD

// Exercise 1: The World Translator

// 1. Ask the user which language they speak.
let language = prompt("What language do you speak?")
// 2. Convert the user’s answer to lowercase
language = language.toLowerCase()
// 3. Create a few conditions :
switch (language) {
    // 4. If the user speaks French : display “Bonjour”
    case 'french':
        console.log('Bonjour')
        break
    // 5. If the user speaks English : display "Hello"
    case 'english':
        console.log('Hello')
        break
    // 6. If the user speaks Hebrew : display “Shalom”
    case 'hebrew':
        console.log('Shalom')
        break
    // 7. If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default:
        console.log('01110011 01101111 01110010 01110010 01111001')
        break
}


// Exercise 2 : The Grade Assigner

// 1. Ask the user for their grade.
let grade = Number(prompt("What's your grade?"))
// 2. If the grade is bigger than 90, console.log “A”
if (grade > 90) console.log('A')
// 3. If the grade is between 80 and 90 (included), console.log “B”
else if (grade > 80 && grade <= 90) console.log('B')
// 4. If the grade is between 70(included) and 80 (included), console.log “C”
else if (grade >= 70 && grade <= 80) console.log('C')
// 5. If the grade is lower than 70, console.log “D”
else console.log('D')


// Exercise 3 : Verbing

// 1. Prompt the user for a string. It must be a verb.
let verb = prompt("Please enter a string. It must be a verb: ")
// 2. If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// 3. If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end. 
verb = verb.trim()
if (verb.length >= 3)
    verb += (!verb.endsWith('ing')) ? 'ing' : 'ly'
// 4. If the length of the string is less than 3, leave it unchanged.
console.log(verb)