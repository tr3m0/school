package es9.server;

import es9.ShoppingList;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static final int PORT = 8080;
    private static void handleClient(Socket client) {
        try (client;
             var fromClient = new ObjectInputStream(client.getInputStream());
             var toClient = new PrintWriter(client.getOutputStream(), true)) {
            while (true) {
                switch (fromClient.readObject()) {
                    case ShoppingList sl ->
                        toClient.printf("total: euro %.2f most expensive: %s least expensive: %s\n",
                                sl.totalPrice(), sl.mostExpensive(), sl.leastExpensive());
                    case String s when s.equals("quit") -> {
                        return;
                    }
                    default -> toClient.println("invalid input");
                }
            }
        } catch (IOException | ClassNotFoundException e) {
            System.err.println(e);
        }
    }
    public static void main(String[] args) {
        try (var server = new ServerSocket(PORT)) {
            while (!server.isClosed()){
                handleClient(server.accept());
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
