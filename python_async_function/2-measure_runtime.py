#!/usr/bin/env python3
"""This module defines measure_time function."""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Return the average delay between two tasks.

    Args:
        n (int): The number of call of wait_random.
        max_delay (int): The max_delay before the task is processed.

    Returns:
        float: The average amount of time between two tasks.
    """
    start_time = time.time()

    asyncio.run(wait_n(n, max_delay))

    total_time = time.time() - start_time

    return float(total_time / n)
