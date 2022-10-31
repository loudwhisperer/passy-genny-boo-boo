# passy-genny-boo-boo

## Description
The Passy Genny Boo Boo was motivated by a want to give folks a means of generating longer or shorter passwords as to keep their information secure from potential bad actors or just play a highly ridiculous guessing game.

It solves the need for a simple application for password generation without any crazy bells or whistles just what the user came for and nothing else.

Mainly my takeaway from this project was that building functions is a nuanced proccess that begets trial and error and really to narrow down what you would like something to do all thbe way to an edge case so that when running it for the first time your app is already working in theory and your just testing for potential bugs.

The live link is as follows if you would like to give it a look : https://loudwhisperer.github.io/passy-genny-boo-boo
## Installation
- To install Passy Genny Boo Boo simply pull the SSH Link from the bright green code button in GitHub.
- Open up your terminal on your local machine and naviage to a directory you would like to store the code for this in type git clone then paste the SSH Link and hit enter
- Once done you will have the full repo then it just a matter of changing directories to Passy Genny Boo Boo and using your preffered method for opening it in a code editor
## Usage
Whens users open the page they will be asked how many characters they would like the password to be (it can be anywhere from 8-128 characters) as pictured below.If it is under eight characters or above 128 characters an error will be thrown.

![screenshot](/assets/images/define-characters.png)

Users can choose to use lower case and upper case letters as well as numbers and special characters depending on their passwords needs they must however add at least one of these characteristics or an error will be thrown.

Lower Case Option:

![screenshot](/assets/images/lower-case.png)

Upper Case Option:

![screenshot](/assets/images/upper-case.png)

Numbers Option:

![screenshot](/assets/images/numbers.png)

Special Characters Option:

![screenshot](/assets/images/special.png)

Once the password is generated it will look something like this with eight characters:

![screenshot](/assets/images/password.png)

This is the error shown if no attributes are selected for the password:

![screenshot](/assets/images/no-password.png)

## License
MIT License
## Features
- Allows you to pick a range in character count for your password from 8-128 characters
- You can add numbers, upper and lower case letters and special characters at your leisure depending on your passwords requirements