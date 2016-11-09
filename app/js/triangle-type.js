(function (global) {
  "use strict";
  
  global.Triangle = function Triangle(){};
  
  Triangle.prototype.type = function (a, b, c) {
    var type = null;
  
    // first we need to validate if our parameters are numbers
    if (!this.validateNumberParam(a, b, c)) {
      console.error("Invalid parameters: All parameters should be a number -- given: ", arguments);
    
      // then check if its a equilateral
    } else if (this.isEquilateral(a, b, c)) {
      type = "equilateral";
    
      // or a isosceles
    } else if (this.isIsosceles(a, b, c)) {
      type = "isoceles";
    
      // if its a triangle but none above its a scalene
      // so no need to create an isScalene function
    } else if (this.isTriangle(a, b, c)) {
      type = "scalene";
    
      // otherwise its not a triangle
    } else {
      type = "not a triangle";
    }
    return type;
  };
  
  Triangle.prototype.validateNumberParam = function () {
    var param, type, isValid = true;
    // using arguments to make it work with one or more parameters
    for (var i = 0; i < arguments.length; i++) {
      param = arguments[i];
      type = typeof param;
      // number verification taken from jquery source
      if ((type !== "number" && type !== "string") || isNaN(param - parseFloat(param))) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  
  Triangle.prototype.isEquilateral = function (a, b, c) {
    // verify if all 3 sides are identical
    return (a === b && b === c);
  };
  
  Triangle.prototype.isIsosceles = function (a, b, c) {
    // its better to call isEquilateral and isTriangle again than duplicate their logic
    var isTriangle = this.isTriangle(a, b, c);
    var isEquilateral = this.isEquilateral(a, b, c);
    
    // verify if only 2 sides are identical
    return isTriangle && !isEquilateral && (a === b || b === c || c === a);
  };
  
  Triangle.prototype.isTriangle = function (a, b, c) {
    // verify if it is actually a triangle
    // it must have a side smaller than sum of others
    return (a + b > c && a + c > b && b + c > a );
  };
  
})(window);