#!/usr/bin/env python
"""This module defines task_wait_random function."""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create a asyncio task.

    Args:
        max_delay (int): The maximum amount of time to process the task.

    Returns:
        Task: An asyncio task object.
    """
    return asyncio.create_task(wait_random(max_delay))
