describe("TriangleTypeSpec", function () {
  var t = new Triangle();
  
  
  describe("validateNumberParamSpec", function () {
    it("should validade a single number", function () {
      expect(t.validateNumberParam(8)).toBe(true);
      expect(t.validateNumberParam("5")).toBe(true);
    });
    
    it("should not validade an invalid string", function () {
      expect(t.validateNumberParam("5 plz break")).toBe(false);
    });
    
    it("should validade multiple numbers", function () {
      expect(t.validateNumberParam(8, 11.3, "18", -5)).toBe(true);
    });
    
    it("should not validate when an invalid parameter is present", function () {
      expect(t.validateNumberParam(8, 10, {ok: 8}, 1)).toBe(false);
    });
  });
  
  describe("isEquilateralSpec", function () {
    it("should return true when all sides are equal", function () {
      expect(t.isEquilateral(8, 8, 8)).toBe(true);
    });
    
    it("should return false when one or more sides are different", function () {
      expect(t.isEquilateral(8, 4, 8)).toBe(false);
      expect(t.isEquilateral(8, 8, 5)).toBe(false);
    });
  });

  describe("isIsoscelesSpec", function () {
    it("should return false when all sides are equal", function () {
      expect(t.isIsosceles(8, 8, 8)).toBe(false);
    });
    
    it("should return false when all sides are diferent", function () {
      expect(t.isIsosceles(4, 5, 6)).toBe(false);
    });
    
    it("should return true when only two sides are egual", function () {
      expect(t.isIsosceles(8, 4, 8)).toBe(true);
      expect(t.isIsosceles(8, 8, 5)).toBe(true);
    });
  });
  
  describe("isIsoscelesSpec", function () {
    it("should return false when all sides are equal", function () {
      expect(t.isIsosceles(8, 8, 8)).toBe(false);
    });
    
    it("should return false when all sides are diferent", function () {
      expect(t.isIsosceles(4, 5, 6)).toBe(false);
    });
    
    it("should return true when only two sides are egual", function () {
      expect(t.isIsosceles(8, 4, 8)).toBe(true);
      expect(t.isIsosceles(8, 8, 5)).toBe(true);
    });
  });
  
  describe("isTriangleSpec", function () {
    it("should return true if a side is smaller than sum of others", function () {
      expect(t.isTriangle(8, 8, 8)).toBe(true);
      expect(t.isTriangle(4, 8, 8)).toBe(true);
      expect(t.isTriangle(8, 4, 8)).toBe(true);
      expect(t.isTriangle(5, 4, 4)).toBe(true);
    });
    
    it("should return false when sum of two sides smaller than other", function () {
      expect(t.isTriangle(200, 5, 6)).toBe(false);
      expect(t.isTriangle(5, 5, 12)).toBe(false);
      expect(t.isTriangle(7, 20, 7)).toBe(false);
    });
  });
});