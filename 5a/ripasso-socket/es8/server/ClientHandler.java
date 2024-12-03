package es8.server;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import static java.lang.Integer.parseInt;

public class ClientHandler implements Runnable {
    private final Socket client;

    public ClientHandler(Socket socket) {
        this.client = socket;
    }

    @Override
    public void run() {
        try (client;
             var fromClient = new BufferedReader(new InputStreamReader(client.getInputStream()));
             var toClient = new PrintWriter(client.getOutputStream(), true)) {
            String line;
            int num1, num2;
            char op;
            while ((line = fromClient.readLine()) != null && !"quit".equals(line)) {
                {
                    var temp = line.split(" ");
                    num1 = parseInt(temp[0]);
                    op = temp[1].charAt(0);
                    num2 = parseInt(temp[2]);
                }

                toClient.println(switch (op) {
                    case '+' -> num1 + num2;
                    case '-' -> num1 - num2;
                    case '*' -> num1 * num2;
                    case '/' -> {
                        if (num2 == 0) yield num1 < 0 // check the sign
                                ? Double.NEGATIVE_INFINITY
                                : Double.POSITIVE_INFINITY;
                        else yield num1 / num2;
                    }
                    default -> "invalid operator";
                });
            }
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
