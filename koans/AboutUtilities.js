describe("About Utilities", function() { // comment
  beforeEach(function() {
    loadFixtures('fixtures/AboutUtilitiesFixture.html'); 
  });
  
  it("should iterate an array with $.each", function() {
    var result = 0;
    var array = ["one", 2, null];
    // $.each() takes an array and a callback that takes an index and value and calls that function on each 
    // item of the array
    $.each(array, function(index, value) {
      if(index === 1) {
        result = value;
      }
    });
    
    expect(result).toEqual(2);
  });
  
  it("should iterate an object literal with $.each", function() {
    var object = { name: "Swedish Chef", age: 2.5 };
    var actualValue = 0;
    // $.each() can take an object as well, in which case, the callback will take a key and value and look
    // an action for each key
    $.each(object, function(key, value) {    
      if(key === "name") {
        actualValue = value;
      }
    });
    
    expect(actualValue).toEqual('Swedish Chef');
  });
  
  it("should merge two objects with $.extend", function() {    
    var object1 = { animal: "cardinal", color: "red" };
    var object2 = { firstName: "woody", lastName: "woodpecker" };
    // $.extend() essentially allows you to merge multiple object with the first object passed in
    // can take multiple objects, kind of like a reduce function for objects, only it merges only, doesn't
    // take a callback, just however many objects you'd like to merge into the first object
    var result = $.extend({}, object1, object2);
    
    expect(result.lastName).toEqual('woodpecker');
  });
  
  it("should filter arrays with $.grep", function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8];
    // $.grep() returns a new array that passes the testing callback function, callback must return true
    // callback takes a value and index as parameters in that order.  the first argument for grep is the array
    array = $.grep(array, function(value, index) {
      return value > 5;
    });
    
    expect(array).toEqual([6, 7, 8]);
  });
  
  it("should find elements in array with $.inArray", function() {
    var actualValue = 0;
    
    var array = ["Pie", 42, "Cake", "BoogieMonster"];
    // $.inArray() takes 2 parameters, the value you are looking for, and the array you are searching
    // in, and it will return the index.  basically the same as indexOf()
    var pieInArrayResult = $.inArray("Pie", array);
    var boogieMonsterInArrayResult = $.inArray("BoogieMonster", array);
    var notFoundInArrayResult = $.inArray(98765, array);
    var findCake = $.inArray("Cake", array); // * my own attempt at a test, finish later?
    
    expect(pieInArrayResult).toEqual(0);
    expect(boogieMonsterInArrayResult).toEqual(3);
    expect(notFoundInArrayResult).toEqual(-1);
    expect(findCake).toEqual(2);  // * my own attempt at a test
  });
  
  it("should determine types using $.type", function() {
    var num = new Number(3);
    var arr = [];
    
    var type1 = $.type(num);
    var type2 = $.type(arr);
    
    expect(type1).toEqual(__);
    expect(type2).toEqual(__);
  });

  it("should test for array type using $.isArray", function() {
    var array = [1, "two", 3];
    var object = { property: "value" };
    
    var isArrayForArray = $.isArray(array);
    var isArrayForObject = $.isArray(object);
    
    expect(isArrayForArray).toEqual(__);
    expect(isArrayForObject).toEqual(__);
  });
  
  it("should check for empty objects using $.isEmptyObject", function() {
    var isEmpty = $.isEmptyObject({});
    var isNotEmpty = $.isEmptyObject({name: "name", value: "value"});
    
    expect(isEmpty).toEqual(__);
    expect(isNotEmpty).toEqual(__);    
  });
  
  it("should detect function types using $.isFunction", function() {
    var object = {
      name: "bob",
      weight: 200,
      getWeight: function() {
        return weight;
      }
    };

    var isFunction1 = $.isFunction(object.name);
    var isFunction2 = $.isFunction(object.getWeight);
    
    expect(isFunction1).toEqual(__);
    expect(isFunction2).toEqual(__);
  });
  
  it("should perform translations on each array element returning a new array using $.map", function() {
    var array = ["a", "b", "c", "d"];
    
    var mapped = $.map(array, function(element, index) {
      return element.toUpperCase();
    });
    
    expect(mapped).toEqual(__);
    expect($.type(mapped)).toEqual(__);
  });
  
  it("should parse json using $.parseJSON", function() {
    var jsonString = '{"name":"animal", "age":2}'
    
    var parsedJsonObject = $.parseJSON(jsonString);
    
    expect(parsedJsonObject.name).toEqual(__);
    expect(parsedJsonObject.age).toEqual(__);
  });
  
  it("should trim strings using $.trim", function() {
    var string = "   Internet Explorer does not have a native implementation of trim, so this jquery method is handy     ";
    
    var trimmed = $.trim(string);
    expect(trimmed).toEqual(__);
  });
});
