#!/usr/bin/python3
"""This module defines a sum_list function"""


def sum_list(input_list: list[float]) -> float:
    """
    Sum a list of floats and return the result.

    Args:
        input_list (list[float]): A list containing a list of floats to sum.

    Return:
        float: The result of the sul of floats.
    """

    return sum(num for num in input_list)
