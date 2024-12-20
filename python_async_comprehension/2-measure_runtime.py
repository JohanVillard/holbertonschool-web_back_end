#!/usr/bin/env python3
"""This module defines coroutine `measure_runtime`."""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Compute the runtime of the function.

    Execute 4 times a async_comprehension,
    measure and return the total runtime.

    Returns:
        float: The time of execution of the coroutine.
    """
    start_time = time.time()

    # Execute the coroutines concurrently
    await asyncio.gather(async_comprehension())

    runtime = time.time() - start_time

    return runtime
