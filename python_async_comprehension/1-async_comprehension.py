#!/usr/bin/env python3

"""This module defines a coroutine `async_comprehension`."""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Return a list if float."""
    return [num async for num in async_generator()]
