#!/usr/bin/env python3
"""This module defines a sum_mixed_list function."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[int | float]) -> float:
    """
    Sum a list of integers and floats and return the result.

    Args:
        mxd_lst (list[int, float]): The list that contains numbers to sum.

    Return:
        float: the result of the sum.
    """
    return sum(num for num in mxd_lst)
