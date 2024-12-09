#!/usr/bin/env python3

"""This module defines a coroutine `async_generator`."""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[int, float, float]:
    """
    Create a coroutine.

    Loop 10 times, each time wait 1 second
    and yield a random number between 0 and 10.
    """
    delay = 1

    for i in range(10):
        await asyncio.sleep(delay)
        yield random.uniform(0, 10)
