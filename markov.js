/** Textual markov chain generator */
let text = "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety`two million miles is an utterly insignificant little blue green planet whose ape`descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea. This planet has, or rather had, a problem, which was this: most of the people on it were unhappy for pretty much of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movements of small green pieces of paper, which is odd because on the whole it wasn't the small green pieces of paper that were unhappy. And so the problem remained; lots of the people were mean, and most of them were miserable, even the ones with digital watches. Many were increasingly of the opinion that they'd all made a big mistake in coming down from the trees in the first place. And some said that even the trees had been a bad move, and that no one should ever have left the oceans. And then, one Thursday, nearly two thousand years after one man had been nailed to a tree for saying how great it would be to be nice to people for a change, one girl sitting on her own in a small cafe in Rickmansworth suddenly realized what it was that had been going wrong all this time, and she finally knew how the world could be made a good and happy place. This time it was right, it would work, and no one would have to get nailed to anything. Sadly, however, before she could get to a phone to tell anyone about it, a terribly stupid catastrophe occurred, and the idea was lost forever. This is not her story"

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/); //strips spaces, linebreaks, makes array
    this.words = words.filter(c => c  == "");
    // console.log(words)
    this.makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    // TODO
    let chains = {};
    //for each word in the array
    for (let i = 0; i < words.length; i++){
      let currentWord = words[i];
      let nextWord = words[i+1];
      //is currentWord already in the chains?
      //no
        //chains += {currentWord:[nextWord] pair in chains
      if (!(currentWord in chains)) {
        chains[currentWord]=[nextWord];
      } else {
        //yes
          //add nextWord to nextWord array for currentWord object pair
        chains[currentWord].push(nextWord);
      }
    }
    console.log(chains);
    return chains
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    //make list of keys from chain
    let count = 0;
    let generatedText = "";

    //pick randomWord from keys
    //make uppercase

    while (count < numWords){
      //add randomWord to generatedText
      //pick linkedWord from randomWord values
      //is it null?
      //yes -> add period and pick a new randomWrd from keys
      //no -> add space
      randomWord = linkedWord;
      count++;
    }
    return generatedText;
  }
}

const hitchikers = new MarkovMachine(text);
