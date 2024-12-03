package es9;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import static java.lang.Double.parseDouble;

public record ShoppingList(List<Item> items) implements Serializable {
    public record Item(String name, double price) implements Serializable {
        @Serial
        private static final long serialVersionUID = 5234752180873544418L;
        private static final Pattern PATTERN = Pattern.compile("(\\w+) €?(\\d*.?\\d+)€?");

        public static Optional<Item> parse(String s) {
            var matcher = PATTERN.matcher(s);
            String name;
            double price;

            if (matcher.find()) {
                name = matcher.group(1);
                price = parseDouble(matcher.group(2));
                return Optional.of(new Item(name, price));
            }
            return Optional.empty();
        }
    }

    @Serial
    private static final long serialVersionUID = -6800212703934492036L;

    public ShoppingList() {
        this(new ArrayList<>());
    }

    public double totalPrice() {
        return items.stream()
                .map(item -> item.price)
                .reduce(0.0, Double::sum);
    }
    public Item mostExpensive() {
        return items.stream()
                .max(Comparator.comparingDouble(item -> item.price))
                .orElse(new Item("not found", Double.NaN));
    }
    public Item leastExpensive() {
        return items.stream()
                .min(Comparator.comparingDouble(item -> item.price))
                .orElse(new Item("not found", Double.NaN));
    }
}
