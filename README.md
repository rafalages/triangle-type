# Triangle Type

This code checks the type of a triangle.

## Use

Just include triangle-type script in your page.
```<script src="triangle-type.js">```

then call method type passing three number parameters
```
var t = new Triangle()
t.type(4,4,4); // > equilateral
t.type(4,5,4); // > isoceles
t.type(3,4,5); // > scalene
t.type(3,4,10); // > null
```
It will return the type of triangle or null if its not a triangle


## Setup 
```npm install```

## Test
```npm test```