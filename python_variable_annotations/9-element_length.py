#!/usr/bin/python3
"""This module defines a element_length function."""

from typing import Sequence, Iterable, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return the element length of a list.

    Args:
        lst (Iterable[Sequence]): An iterable containing sequence.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples, where each tuples
                                    contains a sequence and its corresponding length.
    """
    return [(i, len(i)) for i in lst]
