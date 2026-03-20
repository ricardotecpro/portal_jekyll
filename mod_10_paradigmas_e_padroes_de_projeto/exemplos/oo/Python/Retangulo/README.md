# Rectangle Area Comparison

This project is a Python application that compares the areas of two rectangles. The user inputs the dimensions of the rectangles, and the program calculates and displays their areas, indicating which rectangle has the larger area.

## Project Structure

- `main.py`: Entry point of the application.
- `application/program.py`: Contains the `Program` class with the main logic.
- `entities/retangulo.py`: Contains the `Retangulo` class which represents a rectangle and includes methods to calculate its area.
- `cilindro.puml`: UML diagram representing the relationships between classes.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ricardotecpro/rectangle-area-comparison.git
    cd rectangle-area-comparison
    ```

2. Ensure you have Python installed (version 3.6 or higher).

## Usage

1. Run the application:
    ```sh
    python main.py
    ```

2. Follow the prompts to enter the dimensions of the rectangles.

## Classes

### Retangulo

Represents a rectangle with a width and height.

- `__init__(largura: float, altura: float)`: Initializes a rectangle with the given width and height.
- `calcular_area() -> float`: Calculates and returns the area of the rectangle.

### Program

Handles the main logic of the application.

- `run()`: Prompts the user for rectangle dimensions, calculates their areas, and compares them.

## UML Diagram

The UML diagram (`cilindro.puml`) illustrates the relationships between the classes in the project.

## License

This project is licensed under the MIT License.