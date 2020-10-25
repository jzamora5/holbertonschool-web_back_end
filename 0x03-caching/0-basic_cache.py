#!/usr/bin/python3
""" Define BasicCache class. """

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ A basic cache.

        Inherits from class BaseCaching.

        Attributes:
          put - method that adds a key/value pair to cache
          get - method that retrieves a key/value pair from cache
    """

    def put(self, key, item):
        """Puts item in cache"""
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Gets item from cache"""
        return self.cache_data.get(key, None)
