#!/usr/bin/env python3

"""This module defines a function `index_range`."""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Compute the range of pagination parameters."""
    start_index = (page - 1) * page_size
    end_index = page * page_size

    return (start_index, end_index)
