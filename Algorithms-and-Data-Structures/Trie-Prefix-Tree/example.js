//Our TrieNode class is our blueprint for each individual node in the tree.
class TrieNode {
    constructor(){
        this.end = false;
        this.children = {};
    }
}

//Our Trie class acts as the actual tree structure itself, implemented via TrieNodes as necessary.
class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    /*add a word to our trie
    * Break our word down into individual characters,
    * and add new nodes per each character we don't already have.
    * @arguments
    *   word - string - word to add to our trie
    * @returns:
    *   bool
    */
    add(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.end = true;
    }

    /*Search for a word in our Trie.
    * Make our way through the structure looking for matching characters.
    * To be considered a "match", we must find the whole word and end up on a terminating node.
    * @arguments
    *   word - string - word to add to our trie
    * @returns:
    *   bool
    */
    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.end;
    }
}

//Instantiate our Trie
const trie = new Trie();

//Add some words
trie.add('test');
trie.add('tend');
trie.add('hello');
trie.add('heck');
trie.add('cool');

//returns true
console.log("search result test: ", trie.search('test'));
//returns true
console.log("search result tea: ", trie.search('tea'));
//returns false
console.log("search result tick: ", trie.search('tick'));

