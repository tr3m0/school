package es7;

import java.io.Serializable;
import java.util.List;

public record StringAnalyzer(long length, long consonantsCount, long vowelsCount) implements Serializable {
    private static final long serialVersionUID = 2267924288859390631L;

    private static final List<Character> vowels = List.of('a', 'e', 'i', 'o', 'u');

    public StringAnalyzer(String target) {
        this(target.length(), countConsonants(target), countVowels(target));
    }

    private static boolean isVowel(int c) {
        return vowels.contains((char) c);
    }
    private static long countVowels(String s) {
        return s.chars()
                .filter(StringAnalyzer::isVowel)
                .count();
    }
    private static long countConsonants(String s) {
        return s.chars()
                .filter(c -> Character.isLetter(c) && !isVowel(c))
                .count();
    }

    @Override
    public String toString() {
        return "StringAnalyzer{" +
                "length=" + length +
                ", consonantsCount=" + consonantsCount +
                ", vowelsCount=" + vowelsCount +
                '}';
    }
}
