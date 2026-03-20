from entities.triangle import Triangle

class Program:
    def run(self):
        print("Enter the measures of triangle X:")
        x = Triangle()
        x.a = float(input())
        x.b = float(input())
        x.c = float(input())

        print("Enter the measures of triangle Y:")
        y = Triangle()
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