package es10;

import java.io.Serializable;
import java.util.regex.Pattern;

import static java.lang.Double.parseDouble;
import static java.lang.Integer.parseInt;

public record Book(String name, double price, int pages) implements Serializable {
    private static final long serialVersionUID = -1090505941222744658L;
    private static final Pattern PATTERN = Pattern.compile("(\"[\\w\\s!,?]+\") (\\d+\\.\\d{2}) (\\d+)");
    public Book {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be null or blank");
        }
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        if (pages < 0) {
            throw new IllegalArgumentException("Pages cannot be negative");
        }
    }
    public static Book parse(String line) {
        var matcher = PATTERN.matcher(line);
        if (!matcher.matches()) {
            throw new IllegalArgumentException("Invalid book format");
        }
        var name = matcher.group(1);
        var price = parseDouble(matcher.group(2));
        var pages = parseInt(matcher.group(3));
        return new Book(name, price, pages);
    }
}
