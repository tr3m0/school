package es8.server;

import java.io.IOException;
import java.net.ServerSocket;

public final class Server {
    public static final int PORT = 8080;


    public static void main(String[] args) {
        try (var server = new ServerSocket(PORT)) {
            while (!server.isClosed()) {
                new Thread(new ClientHandler(server.accept()))
                        .start();
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
