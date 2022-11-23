#sample UML diagram for CSC102 by Sebastian Terranova<br>
#sebterra@uat.edu

Create a diagram with 2 classes. Those classes need 3 attributes, and 3 functions.

```mermaid
    classDiagram
    class Shape{
        -length
        -width
        -height
        +getLength()
        +setLength()
        +getWidth()
        +setWidth()
    }

    class ShapeSig{
        -length : int
        -width : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() : int
        +setWidth(n : int) : void
    }


```
Attributes come before properties or methods<br>
\+ public, \- private, \# protected
```mermaid
    classDiagram
    class Superclass{
       
    }

    class SubClass1{
       
    }

    class SubClass2{

    }
    
    Superclass <|-- SubClass1
    Superclass <|-- SubClass2
```