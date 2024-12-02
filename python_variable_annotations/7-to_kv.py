#!/usr/bin/env python3
"""This module defines a to_kv function."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with a string and the square of a number.

    Args:
        k (str): The first element of the tuple.
        v (int | float): A number whose square will be the second element.

    Return:
        tuple[str, float]: a tuple containing a string and a float.
    """
    return (k, float(v * v))
