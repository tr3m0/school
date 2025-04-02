import time
from random import randint

def isPrimeTrivial(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5)):
        if n % i == 0:
            return False
    return True

def isPrime6k(n):
    if n <= 1:
        return False
    if n == 2 or n == 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    for i in range(5, int(n ** 0.5), 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False
    return True

def mcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def inverseBruteForce(a, m):
    for i in range(1, m):
        if (a * i) % m == 1:
            return i
    return False
    
def factorizationTrivial(n):
    for i in range(2, int(n ** 0.5)):
        if isPrime6k(i):
            if n % i == 0:
                return i, n // i
    return False