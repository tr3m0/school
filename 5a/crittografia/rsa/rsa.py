import json
from base64 import b64encode, b64decode
from crypt import *

class Generator:
    def __call__(self):
        pass

class PrimeGenerator(Generator):
    def __init__(self, **kwargs):
        self.primes = []
        self.prime_checker = kwargs["checker"]
        self.interval = kwargs["interval"]

    def __call__(self):
        for n in self.interval():
            if self.prime_checker(n) and n not in self.primes:
                self.primes.append(n)
                return n
        return None

class IntervalByDigitsGenerator(Generator):
    def __init__(self, digits):
        self.digits = digits

    def __call__(self):
        return range(self.min(), self.max())
    def min(self):
        return 10 ** (self.digits - 1)

    def max(self):
        return (10 ** self.digits) - 1

class KeysGenerator(Generator):
    def __init__(self, **kwargs):
        self.prime_generator = kwargs["prime_generator"]
    def __call__(self):
        p = self.prime_generator()
        q = self.prime_generator()
        n = p * q
        phi = (p - 1) * (q - 1)
        e = self._find_e(phi)
        d = pow(e, -1, phi)
        return {
            "public": (e, n),
            "private": (d, n),
            "p": p,
            "q": q
        }

    def _find_e(self, phi):
        for n in range(2, phi):
            if mcd(n, phi) == 1:
                return n
        return None

def cipher(cleartext, key):
    cyphertext = []
    for c in cleartext:
        M = ord(c)
        C = pow(M, key[0], key[1])
        cyphertext.append(C)
    return b64encode(json.dumps(cyphertext).encode("utf-8"))

def decipher(cyphertext, key):
    cyphertext = json.loads(b64decode(cyphertext).decode("utf-8"))
    cleartext = ""
    for C in cyphertext:
        M = pow(C, key[0], key[1])
        cleartext += chr(M)
    return cleartext

digits = 0
while digits < 7:
    digits = int(input("Insert the number of digits (min 7): "))

keys_generator = KeysGenerator(
    prime_generator=PrimeGenerator(
        checker=isPrimeTrivial,
        interval=IntervalByDigitsGenerator(digits)
    )
)
keys = keys_generator()

print(f"Public key = {keys["public"]}")
print(f"Private key = {keys["private"]}")
print(f"p = {keys["p"]}")
print(f"q = {keys["q"]}")
cleartext = input("Insert the text to be encrypted: ")
cyphertext = cipher(cleartext, keys["public"])
print(f"Cyphertext = {cyphertext}")
print(f"Cleartext = {decipher(cyphertext, keys["private"])}")