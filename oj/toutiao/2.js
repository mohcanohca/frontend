import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Trie {
    private class TrieNode {
    TrieNode[] next;
    int num;
    char value;

    public TrieNode(char ch) {
    value = ch;
    num = 0;
    next = new TrieNode[26];
}
}

TrieNode root;

public Trie() {
    root = new TrieNode('\0');
    root.num = -1;
}

/**
 * Inserts a word into the trie.
 */
public void insert(String word) {
    TrieNode tn = root;
    for (char ch : word.toCharArray()) {
        if (tn.next[ch - 'a'] == null) {
            tn.next[ch - 'a'] = new TrieNode(ch);

        }
        tn = tn.next[ch - 'a'];
        tn.num+= 1;
    }

}
public List<String> prefix(){
    List<String> pre = new ArrayList<>();
    helper(pre,"",root);
    return pre;
}
private void helper(List<String> pre,String str,TrieNode root){
    if(root == null)
        return;
    if(root.num == 1){
        str += root.value;
        pre.add(str);
        return;
    }
    for(int i=0;i<26;i++){
        if(root.next[i] != null){
            helper(pre,str+root.value,root.next[i]);
        }
    }
}
}
public class Main {
    public static void main(String[] args){
    Scanner in = new Scanner(System.in);
    Trie root = new Trie();
    int n = in.nextInt();
    in.nextLine();
    for(int i=0;i<n;i++){
    String str = in.nextLine();
    root.insert(str);
}
List<String> ans = root.prefix();
for(String s:ans){
    System.out.println(s.substring(1));
}
}
}