/** Textual markov chain generator */
let text = "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety`two million miles is an utterly insignificant little blue green planet whose ape`descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea. This planet has, or rather had, a problem, which was this: most of the people on it were unhappy for pretty much of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movements of small green pieces of paper, which is odd because on the whole it wasn't the small green pieces of paper that were unhappy. And so the problem remained; lots of the people were mean, and most of them were miserable, even the ones with digital watches. Many were increasingly of the opinion that they'd all made a big mistake in coming down from the trees in the first place. And some said that even the trees had been a bad move, and that no one should ever have left the oceans. And then, one Thursday, nearly two thousand years after one man had been nailed to a tree for saying how great it would be to be nice to people for a change, one girl sitting on her own in a small cafe in Rickmansworth suddenly realized what it was that had been going wrong all this time, and she finally knew how the world could be made a good and happy place. This time it was right, it would work, and no one would have to get nailed to anything. Sadly, however, before she could get to a phone to tell anyone about it, a terribly stupid catastrophe occurred, and the idea was lost forever. This is not her story"

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/); //strips spaces, linebreaks, makes array
    this.words = words.filter(c => c  !== ""); //just seems to screw things up - doesn't make sense
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO

    let chains = {};
    for (let i = 0; i < this.words.length; i++){
      let currentWord = this.words[i];
      let nextWord = this.words[i+1] || null;

      if (!(currentWord in chains)) {
        chains[currentWord]=[nextWord];
      } else {
        chains[currentWord].push(nextWord);
      }
    }
    this.chains = chains;
    return this.chains
  }
  
  //pick a random number for following word from array 
  static pickRandom(arr){
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
  }
  
  /** return random text from chains */
  
  makeText(numWords = 100) {
    //QUESTION - REVIEW TEACHER'S SOLUTION WITH MAPS

    this.keys = Object.keys(this.chains); 
    
    //First word of series
    let currentWord = MarkovMachine.pickRandom(this.keys); 

    let generatedText = []; 
    let randomWord ="";

    
    while (generatedText.length < numWords && currentWord !== null){
      //add randomWord to generatedText
      // generatedText.push(currentWord);
      //pick linkedWord from randomWord values
      
      let linkedWord = MarkovMachine.pickRandom(this.chains[currentWord]); 
      // console.log("random linked word from array",linkedWord);
      //if null -> add period and pick a new randomWrd from keys
      if (! linkedWord) {
        generatedText.push(".");
        randomWord = MarkovMachine.pickRandom(this.keys);
        currentWord = randomWord.charAt(0).toUpperCase+randomWord.slice(1);

      } else {
        //no -> add space
        currentWord = linkedWord;
        generatedText.push(currentWord);
      }
      // randomWord = linkedWord;
    }
    console.log(generatedText);
    return generatedText;
  }
}

const hitchikers = new MarkovMachine(text);
hitchikers.makeText();
