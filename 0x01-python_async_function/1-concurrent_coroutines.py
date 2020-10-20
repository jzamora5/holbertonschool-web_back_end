#!/usr/bin/env python3
""" The basics of async """

import asyncio
import random
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    waits for a random delay between 0 and max_delay (included and float value)
    seconds and eventually returns it.
    """
    queue, array = [], []

    # for _ in range(n):
    #     queue.append(asyncio.create_task(wait_random(max_delay)))

    # array.append(await asyncio.gather(*queue))

    # for q in asyncio.as_completed(queue):
    #     array.append(await q)

    for _ in range(n):
        queue.append(wait_random(max_delay))

    for q in asyncio.as_completed(queue):
        result = await q
        array.append(result)

    return array
