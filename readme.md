# Markov Machine
This creates a Markov Machine that reads a file and uses the words to create a (nonsensical) new document using those words to sound like it's the same style.  A fun exercise to practice Node.js simple file handling skills and testing in Jest.

To run it:
``node makeText.js file eggs.txt
... generated text from file 'eggs.txt' ...

$ node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
... generated text from that URL ...``

## Lessons worth remembering:

- fs.readFile() is ASYNCHRONOUS - so use async and pack all the functionality inside the else after the error-handling
- review axios!  Note try-catch there (as opposed to if/else in fs.readFile)