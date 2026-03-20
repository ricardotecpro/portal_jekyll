import math


class Triangle:
    def __init__(self):
        self.a = 0.0
        self.b = 0.0
        self.c = 0.0

    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))


def main():
    x = Triangle()
    y = Triangle()

    print("Enter the measures of triangle X:")
    x.a = float(input())
    x.b = float(input())
    x.c = float(input())

    print("Enter the measures of triangle Y:")
    y.a = float(input())
    y.b = float(input())
    y.c = float(input())

    area_x = x.area()
    area_y = y.area()

    print(f"Triangle X area: {area_x:.4f}")
    print(f"Triangle Y area: {area_y:.4f}")

    if area_x > area_y:
        print("Larger area: X")
    else:
        print("Larger area: Y")


if __name__ == "__main__":
    main()
