/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a program that allows you to initialize, add, commit, and push your code to the respository."
    console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is the location where your global/public respositories stores all initialized, added, committed, and pushed code files."
    console.log(gitHubDefinition)
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = ("description", "code")

description = " Initialize a local repository right here in this folder."
code = "git init:"
    console.log(code + description)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = ("description", "code")

description = " Copy a specific repository from GitHub and store that copy on my local machine."
code = "git clone (i.e. git clone <URL of repository>:"
    console.log(code + description)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = ("description", "code")

description = " Provides details about the specific repository."
code = "git status:"
    console.log(code + description)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = ("description", "code")

description = " Git dds some file(s) and file content to be tracked (always!) in the repository."
code = "git add:"
    console.log(code + description)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = ("description", "code")

description = " Git creates a snapshot of the file(s) being tracked."
code = "git commit:"
    console.log(code + description)


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = ("description", "code")

description = " Git pushes an updated version of the specific file(s) and file content being tracked."
code = "git push:"
    console.log(code + description)