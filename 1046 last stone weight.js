/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = function(stones) {
  let heap = new MaxHeap(stones);
  let stone1 = heap.remove();
  let stone2 = heap.remove();

  while (stone1 && stone2) {
    //stone2 will always be smaller than stone1 because it's a heap
    //only have to check for equality
    if (stone1 !== stone2) {
      heap.insert(stone1 - stone2);
    }

    stone1 = heap.remove();
    stone2 = heap.remove();
  }

  return stone1;
};
