#!/usr/bin/env python3
"""This module defines task_wait_n function."""

from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Fill a list with delays and return it.

    Args:
        n (int): The number of call of wait_random function.
        max_delay (int): The maximum amount of time for the delay.

    Returns:
        List[float]: A sorted list of delays before the tasks are processed.
    """
    delays_list = []

    # Add delay in the list
    for i in range(n):
        delay = await task_wait_random(max_delay)
        delays_list.append(delay)

    # Sort the list (asc)
    for i in range(0, len(delays_list)):
        for j in range(i + 1, len(delays_list)):
            if delays_list[i] >= delays_list[j]:
                delays_list[i], delays_list[j] = delays_list[j], delays_list[i]

    return delays_list
