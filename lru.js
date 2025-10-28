class LRUCache {
    get(key) { }
    put(key, value) { }
}

// Example Usage
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3);
console.log(lru.get(2)); // -1