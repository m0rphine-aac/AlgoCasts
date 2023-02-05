// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  // Empty list
  if (list.head === null) {
    return;
  }

  // Phase 1, make fast n 'nodes' ahead of slow
  for (let i = 0; i < n; i++) {
    if (fast.next) {
      fast = fast.next;
    } else {
      return;
    }
  }

  // Phase 2, fast is now n 'nodes' ahead
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// function fromLast(list, n) {
//   return list.getAt(list.size() - 1 - n);
// }

module.exports = fromLast;
