#!/usr/bin/env python3
""" Complex types - mixed list """
from typing import Callable, Iterator, Union, Optional, List


def sum_mixed_list(mxd_lst: List[Union[float, int]]) -> float:
    """
    Takes a list mxd_lst of floats and integers
    returns their sum as a float.
    """

    return float(sum(mxd_lst))
