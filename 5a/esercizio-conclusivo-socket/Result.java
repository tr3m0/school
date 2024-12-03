package es10;

import java.io.Serializable;

public record Result(Book mostExpensive, Book longest, double totalPrice) implements Serializable {
    private static final long serialVersionUID = -3868442016391872093L;
    public Result {
        if (mostExpensive == null || longest == null) {
            throw new IllegalArgumentException("Books cannot be null");
        }
        if (totalPrice < 0) {
            throw new IllegalArgumentException("Total price cannot be negative");
        }
    }
}
