package es7.client;

import es7.server.Server;
import es7.StringAnalyzer;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public final class Client {
    public static void main(String[] args) {
        try (var socket = new Socket("localhost", Server.PORT);
             var toServer = new PrintWriter(socket.getOutputStream(), true);
             var fromServer = new ObjectInputStream(socket.getInputStream());
             var fromConsole = new Scanner(System.in)) {
            System.out.print("> ");
            var str = fromConsole.nextLine();
            toServer.println(str);
            var stringAnalayzer = (StringAnalyzer)fromServer.readObject();
            System.out.println(stringAnalayzer);
            toServer.println("quit");
        } catch (IOException | ClassNotFoundException e) {
            System.err.println(e);
        }
    }
}
