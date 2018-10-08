  function Factory(){
    this.createResult = function(znak, x,y){
      var result;
      if(znak === '+'){
        result = new Addition(x,y)
      }
      else if(znak === '-'){
        result = new Subtraction(x,y)
      }
      else if(znak === '*'){
        result = new Multiplication(x,y)
      }
      else if(znak === '/'){
        result = new Division(x,y)
      }
      result.znak = znak;

      result.say = function (){
        return this.res 
      }
      return result;
    }
  }

  var Addition = function(x,y){
    this.res =  x + y 
  }
  var Subtraction = function(x,y){
    this.res = x - y
  }
  var Multiplication = function(x,y){
    this.res = x * y
  }
  var Division = function(x,y){
    this.res = x / y
  }
  var factory = new Factory(),
  result = factory.createResult('*',5 ,5);
  console.log(result.say());