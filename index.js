exports.handler = (event, context, callback) => {
    // TODO implement
    
    var a, b, sum, diff, prod, div, result = new Array();
    
    a = Number(event.a);
    b = Number(event.b);
    
    sum = a+b;
    diff = a-b;
    prod = a*b;
    div = a/b;
    
    result[0] = "a = "+a;
    result[1] = "b = "+b;
    result[2] = "Sum = "+sum;
    result[3] = "Difference = "+diff;
    result[4] = "Product = "+prod;
    result[5] = "Division = "+div;
    
    callback(null, result);
    
};
