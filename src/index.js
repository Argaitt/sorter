class Sorter {
  constructor() {
    this.Arr =[];
  }

  add(element) {
    this.Arr.push(element);
  }

  at(index) {
    return this.Arr[index];
  }

  get length() {
    return this.Arr.length;
  }

  toArray() {
    return this.Arr;
  }

  sort(indices) {
    function sortNumber(a,b) {
      return a - b;
    }
    var sortArr =[];
    indices.sort(sortNumber);
    for (let i = 0; i < indices.length; i++){
      sortArr[i] = this.Arr[indices[i]];
    }
    if ( this.compF == undefined){
      this.compF = sortNumber
    }
    sortArr.sort(this.compF);
    for (let i = 0; i < sortArr.length; i++){
      this.Arr[indices[i]] = sortArr[i];
    }
  }

  setComparator(compareFunction) {
    this.compF = compareFunction;
  }
  
}


module.exports = Sorter;