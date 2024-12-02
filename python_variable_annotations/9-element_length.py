#!/usr/bin/env python3
"""This module defines a element_length function."""

from typing import Sequence, Iterable, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return the length of each element in an iterable of sequences.

    Args:
        lst (Iterable[Sequence]): An iterable containing sequences
                                  (like strings, lists, or tuples).

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples, where each tuple
                                    contains a sequence and
                                    its corresponding length.
    """
    return [(i, len(i)) for i in lst]
