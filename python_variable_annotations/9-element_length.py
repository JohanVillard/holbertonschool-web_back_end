#!/usr/bin/python3
"""This module defines a element_length function."""

from typing import Sequence, Iterable, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[tuple[Sequence, int]]:
    """
    Return the element length of a list.

    Args:
        lst (list): The list that contains the element.

    Returns:
        list[tuple[sequence, int]]: A list of tuples.
    """
    return [(i, len(i)) for i in lst]
