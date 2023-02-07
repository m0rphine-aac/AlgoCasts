// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const queue = [root, 's'];

  while (queue.length) {
    if (queue[0] === 's' && queue.length === 1) {
      return counters;
    }

    if (queue[0] === 's' && queue.length > 1) {
      queue.push(queue.shift());
      counters.push(0);
    }

    const node = queue.shift();
    queue.push(...node.children);
    counters[counters.length - 1] += 1;
  }
}

module.exports = levelWidth;
