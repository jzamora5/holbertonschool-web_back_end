#!/usr/bin/python3
""" Caching """

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ LIFO caching """

    def __init__(self):
        """ Constructor """
        super().__init__()
        self.queue = []

    def put(self, key, item):
        """ Puts item in cache """
        if key is None or item is None:
            return

        self.cache_data[key] = item

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            if self.queue:
                last = self.queue.pop()
                del self.cache_data[last]
                print("DISCARD: {}".format(last))

        self.queue.append(key)

    def get(self, key):
        """ Gets item from cache """
        return self.cache_data.get(key, None)
