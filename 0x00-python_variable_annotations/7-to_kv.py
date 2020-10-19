#!/usr/bin/env python3
""" Complex types - string and int/float to tuple"""
from typing import Callable, Iterator, Union, Optional, List, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a list mxd_lst of floats and integers
    returns their sum as a float.
    """

    return (k, v**2)
