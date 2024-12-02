#!/usr/bin/python3
"""This module defines a make_multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a multiplier function.

    Args:
        multiplier (float): The number to multiply by.

    Returns:
        Callable[[float], float]: A function that takes
                                  a float and returns the product.
    """
    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function
