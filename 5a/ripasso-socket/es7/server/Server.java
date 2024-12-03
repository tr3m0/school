package es7.server;

import es7.StringAnalyzer;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.BindException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;



public final class Server {
    public static final int PORT = 8080;

    private static void handleClient(Socket client) {
        try (client;
             var fromClient = new Scanner(client.getInputStream());
             var toClient = new ObjectOutputStream(client.getOutputStream())) {
            while (true) {
                var line = fromClient.nextLine();
                if (line.equals("quit")) {
                    break;
                }
                toClient.writeObject(new StringAnalyzer(line));
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }

    public static void main(String[] args) {
        try (var server = new ServerSocket(PORT)) {
            while (!server.isClosed()) {
                handleClient(server.accept());
            }
        } catch (BindException _) {
            System.err.println("Port not available");
        } catch (IllegalArgumentException _) {
            System.err.println("Port out of range");
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
