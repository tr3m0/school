package es8.client;

import es8.server.Server;

import java.io.*;
import java.net.Socket;

public final class Client {
    private static final String REGEX = "\\s?-?\\d+\\s?[+*/-]\\s?-?\\d+";

    public static void main(String[] args) {
        try (var server = new Socket("localhost", Server.PORT);
             var fromServer = new BufferedReader(new InputStreamReader(server.getInputStream()));
             var toServer = new PrintWriter(server.getOutputStream(), true)) {
            var console = System.console();
            String req, res;

            req = console.readLine("inserire l'operazione (num op num):\n> ");
            while (!req.matches(REGEX)) {
                req = console.readLine("input errato, reinserire l'operazione:\n> ");
            }

            toServer.println(req);
            res = fromServer.readLine();
            console.printf("= %s", res);
            toServer.println("quit");
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
