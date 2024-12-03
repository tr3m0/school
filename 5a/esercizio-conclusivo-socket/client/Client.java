package es10.client;

import es10.Book;
import es10.Library;
import es10.Result;

import java.io.Console;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.ArrayList;

public final class Client {
    private static final Console console = System.console();
    private static Library readLibrary() {
        var books = new ArrayList<Book>();
        String line;
        console.printf("Enter the books in the format: \"name\" price pages\n");
        while ((line = console.readLine("> ")) != null && !line.equals("exit")) {
            try {
                books.add(Book.parse(line));
            } catch (IllegalArgumentException e) {
                System.err.println("Invalid book, won't be added to the library");
            }
        }
        return new Library(books);
    }
    public static void main(String[] args) {
        try (var client = new Socket("localhost", 8080);
             var toServer = new ObjectOutputStream(client.getOutputStream());
             var fromServer = new ObjectInputStream(client.getInputStream())) {
            var library = readLibrary();
            toServer.writeObject(library);
            var result = (Result) fromServer.readObject();
            System.out.println(result);
        } catch (IOException | ClassNotFoundException e) {
            System.err.println(e);
        }
    }
}
