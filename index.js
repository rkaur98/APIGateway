exports.handler = (event, context, callback) => {
    // TODO implement
    
    var a, b, sum, diff, prod, div, result;
    
    a = Number(event.a);
    b = Number(event.b);
    
    sum = a+b;
    diff = a-b;
    prod = a*b;
    div = a/b;
    
    result = "Sum = "+sum+" Difference = "+diff+" Product = "+prod+" Division = "+div;
    
    
    callback(null, result);
    
};
