from crypt import *

class Generator:
    def __call__(self):
        pass

class IntervalByDigits:
    def __init__(self, digits):
        self.digits = digits

    def __iter__(self):
        i = self.min()
        while i <= self.max():
            yield i
            i += 1

    def min(self):
        return 10 ** (self.digits - 1)

    def max(self):
        return (10 ** self.digits) - 1

class PrimeGenerator(Generator):
    def __init__(self, checker, interval):
        self.generated = []
        self.is_prime = checker
        self.interval = interval

    def __call__(self):
        for n in self.interval:
            if self.is_prime(n) and n not in self.generated:
                self.generated.append(n)
                return n
        return None

class KeysGenerator(Generator):
    def __init__(self, prime_generator):
        self.prime_generator = prime_generator

    def __call__(self):
        p = self.prime_generator()
        q = self.prime_generator()
        n = p * q
        phi = (p - 1) * (q - 1)
        e = self._find_e(phi)
        d = pow(e, -1, phi)

        return [
            (e, n), # public
            (d, n)  # private
        ]

    def _find_e(self, phi):
        i = 2
        while True:
            if mcd(i, phi) == 1:
                return i
            else:
                i += 1

def encrypt(cleartext, public_key):
    (e, n) = public_key
    cyphertext = []
    for c in cleartext:
        M = ord(c)
        C = pow(M, e, n)
        cyphertext.append(C)
    return cyphertext

def decrypt(cyphertext, private_key):
    (d, n) = private_key
    cleartext = ""
    for C in cyphertext:
        M = pow(C, d, n)
        cleartext += chr(M)
    return cleartext

digits_count = 0
while digits_count < 7:
    digits_count = int(input("Insert the number of digits (min 7): "))

keys_generator = KeysGenerator(
    prime_generator=PrimeGenerator(
        checker=isPrimeTrivial,
        interval=IntervalByDigits(digits_count)
    )
)
[public_key, private_key] = keys_generator()

print(f"{public_key=}")
print(f"{private_key=}")

message = input("Insert the text to be encrypted: ")
cyphertext = encrypt(message, public_key)
cleartext = decrypt(cyphertext, private_key)
print(f"{cyphertext=}")
print(f"{cleartext=}")