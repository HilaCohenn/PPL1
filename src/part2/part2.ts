import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (str: string)=> number = (str) =>
    stringToArray(str.toLowerCase()).reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);


/* Question 2 */
export const isPalindrome: (str: string) => boolean = (str) => {
    const arr = stringToArray(str.toLowerCase())
    .filter((char) => (char >= 'a' && char <= 'z')||(char>='0' && char<='9'));
    return arr.reduce((acc, char, i) => acc && char === arr[arr.length - 1 - i], true)};
  
/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (tree: WordTree) => string = (tree) => { return R.pipe(
    
    function collectWords(tree: WordTree): string[] {
      return [tree.root, ...R.chain(collectWords, tree.children)];
    },
    R.join(' ')
  )(tree)
}


