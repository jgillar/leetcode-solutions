//this is just a really simple library of data structures that aren't implemented natively in JavaScript

//no frills MinHeap class for numbers
//might make a more generic version for any datatype if there's a need to
class MaxHeap {
  constructor(arr) {
    this.heap = [];
    if (arr) {
      for (let el of arr) {
        this.insert(el);
      }
    }
  }

  insert(value) {
    //add to end of array
    this.heap.push(value);

    //update structure by bubbling the value up
    let i = this.heap.length - 1;
    while (i > 0) {
      let currentValue = this.heap[i];
      let parentIndex = Math.floor((i - 1) / 2);
      let parentValue = this.heap[parentIndex];

      if (parentValue >= currentValue) {
        break;
      }
      //swap the two values
      this.heap[i] = parentValue;
      this.heap[parentIndex] = currentValue;
      //move to parent
      i = parentIndex;
    }
  }

  remove() {
    //remove final element and replace first element with it
    let max = this.heap[0];
    if (this.heap.length === 1) {
      this.heap[0] = null;
      return max;
    }
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (i <= this.heap.length - 1) {
      let leftChildIndex = 2 * i + 1;
      let rightChildIndex = 2 * i + 2;
      let currentMaxIndex = i;

      //reminder: we check the child indicies to determine if we're a leaf node or not
      if (
        leftChildIndex <= this.heap.length &&
        this.heap[leftChildIndex] > this.heap[currentMaxIndex]
      ) {
        currentMaxIndex = leftChildIndex;
      }

      if (
        rightChildIndex <= this.heap.length &&
        this.heap[rightChildIndex] > this.heap[currentMaxIndex]
      ) {
        currentMaxIndex = rightChildIndex;
      }

      if (this.heap[i] >= this.heap[currentMaxIndex]) {
        break;
      }

      //swap the values
      if (currentMaxIndex !== i) {
        let temp = this.heap[currentMaxIndex];
        this.heap[currentMaxIndex] = this.heap[i];
        this.heap[i] = temp; //jump to whatever the larger child node was
        i = currentMaxIndex;
      }
    }

    return max;
  }

  //return max
  peek() {
    return this.heap[0];
  }
}
