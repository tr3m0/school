message = "ciao"

for i in range(0, len(message), 2):
    first = ord(message[i])
    second = ord(message[i + 1])
    block = first * 256 + second
    print(block)