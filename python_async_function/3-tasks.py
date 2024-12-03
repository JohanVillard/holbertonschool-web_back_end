#!/usr/bin/env python3
""" 3-tasks.py """

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """

    Args:
        max_delay (int): argument passed to wait_random

    Returns:
        asyncio.Task: An asyncio.Task object
        wrapping the execution of wait_random.
    """
    task = asyncio.Task(wait_random(max_delay))
    return task
