package es10;

import java.io.Serializable;
import java.util.List;

import static java.util.Objects.requireNonNull;

public record Library(List<Book> books) implements Serializable {
    private static final long serialVersionUID = 3480051331668929319L;
    public Library {
        requireNonNull(books);
    }
}