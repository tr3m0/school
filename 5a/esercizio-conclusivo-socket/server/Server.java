package es10.server;

import java.io.IOException;
import java.net.ServerSocket;

public final class Server {
    public static void main(String[] args) {
        try (var server = new ServerSocket(8080)) {
            while (!server.isClosed()) {
                var client = server.accept();
                var thread = new Thread(new ClientHandler(client));
                thread.start();
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
