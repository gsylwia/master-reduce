const arr: number[]  = [1,2,3,4,5,6,7,8,9];

const multiply = (num: number) => {
    return num * 2;
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