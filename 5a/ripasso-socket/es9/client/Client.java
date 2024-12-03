package es9.client;

import es9.ShoppingList;
import es9.server.Server;

import java.io.*;
import java.net.Socket;

import static java.lang.Double.parseDouble;

public final class Client {
    public static void main(String[] args) {
        try (var server = new Socket("localhost", Server.PORT);
             var fromServer = new BufferedReader(new InputStreamReader(server.getInputStream()));
             var toServer = new ObjectOutputStream(server.getOutputStream())) {
            var console = System.console();
            var list = new ShoppingList();
            String line, name;
            double price;

            console.printf("insert shopping list (name price):\n");
            while ((line = console.readLine("> ")) != null && !"end".equals(line)) {
                var item = ShoppingList.Item.parse(line);
                if (item.isEmpty()) {
                    console.printf("invalid item, it will be ignored");
                } else {
                    list.items().add(item.orElseThrow());
                }
            }
            toServer.writeObject(list);
            line = fromServer.readLine();
            console.printf("%s\n", line);
            toServer.writeObject("quit");
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
