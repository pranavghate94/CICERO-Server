var str = 'vrPerception pml-nvbg <?xml version="1.0" encoding="utf-8"?>';
arr = str.split(" ");
result = arr.slice(0,2);
result.push(arr.slice(2).join(' '));
console.log(result);