#!/usr/bin/env python3
"""This module defines a wait_random coroutine."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait a delay and return it.

    Args:
        max_delay (int): The max delay for the coroutine to wait.

    Returns:
        float: The amout of time the coroutine slept.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
