import math

class Triangle:
    def __init__(self):
        self.a = 0.0
        self.b = 0.0
        self.c = 0.0

    def area(self):
        s = (self.a + self.b + self.c) / 2.0
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))