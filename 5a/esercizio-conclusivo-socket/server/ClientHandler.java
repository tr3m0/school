package es10.server;

import es10.Book;
import es10.Library;
import es10.Result;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Comparator;

import static java.util.Comparator.*;

public class ClientHandler implements Runnable {
    private final Socket client;

    public ClientHandler(Socket client) {
        this.client = client;
    }

    @Override
    public void run() {
        try (client;
             var toClient = new ObjectOutputStream(client.getOutputStream());
             var fromClient = new ObjectInputStream(client.getInputStream())) {
            var library = (Library) fromClient.readObject();
            var books = library.books();
            var mostExpensive = books.stream()
                    .max(comparingDouble(Book::price))
                    .orElse(null);
            var longest = books.stream()
                    .max(comparingInt(Book::pages))
                    .orElse(null);
            var totalPrice = books.stream()
                    .mapToDouble(Book::price)
                    .sum();
            var result = new Result(mostExpensive, longest, totalPrice);
            toClient.writeObject(result);
        } catch (IOException | ClassNotFoundException e) {
            System.err.println(e);
        }
    }
}
