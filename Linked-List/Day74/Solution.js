class LRUCache {
  constructor(cap) {
    //  code here
    this.cap = cap;
    this.cache = new Map();
  }
  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.cap) {
      const lruKeys = this.cache.keys().next().value;
      this.cache.delete(lruKeys);
    }
    this.cache.set(key, value);
  }
}
// LRU Cache

// Design a data structure that works like a LRU Cache. Here cap denotes the capacity of the cache and Q denotes the number of queries. Query can be of two types:

// 1. PUT x y: sets the value of the key x with value y
// 2. GET x: gets the value of key x if present else returns -1.
// The LRUCache class has two methods get() and put() which are defined as follows.

// 1. get(key): returns the value of the key if it already exists in the cache otherwise returns -1.
// 2. put(key, value): if the key is already present, update its value. If not present, add the key-value pair to the cache. If the cache reaches its capacity it should remove the least recently used item before inserting the new item.
// 3. In the constructor of the class the capacity of the cache should be initialized.
// Examples:

// Input: cap = 2, Q = 2, Queries = [["PUT", 1, 2], ["GET", 1]]
// Output: [2]
// Explanation: Cache Size = 2
// ["PUT", 1, 2] will insert the key-value pair (1, 2) in the cache,
// ["GET", 1] will print the value corresponding to Key 1, ie 2.
