#!/usr/bin/env python3
"""This module defines a coroutine `async_generator`."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously generate random numbers. 

    This coroutine loops 10 times, waiting 1 second between iterations,
    and yields a random float between 0 and 10. 

    Returns:
       AsyncGenerator[float, None]: An asynchronous generator yielding
       ten random numbers. 
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
