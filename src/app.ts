const arr: number[]  = [1,2,3,4,5,6,7,8,9];

const multiply = (num: number) => {
    return num * 2;
}

const even = (num: number) => {
  return num % 2 === 0;
}

const mapFn = <ArrayType, ReturnType> (
array: ArrayType[], 
callback: (data: ArrayType | ReturnType) => ReturnType
) => {
    return array.reduce((prev: (ArrayType | ReturnType)[], curr: ArrayType ) => {
      prev.push(callback(curr));
      return prev;
    }, []);
  };

console.log(mapFn(arr, multiply));

const filterFn = <ArrayType> (
  array: ArrayType[], 
  callback: (data: ArrayType) => boolean
  ) => {
      return array.reduce((prev: ArrayType[], curr: ArrayType ) => {
        if (callback(curr)) {
            prev.push(curr);
        }
        return prev;
      }, []);
    };
  
console.log(filterFn(arr, even));