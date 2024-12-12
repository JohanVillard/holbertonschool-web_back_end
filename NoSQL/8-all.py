#!/usr/bin/env python3
"""This module defines a function `list_all`."""

import pymongo


def list_all(mongo_collection):
    """
    Iterate in a collection and return a corresponding list.

    Args:
        mongo_collection (mongo object): The collection to convert into a list.

    Returns:
        List: The collection converted to a list.
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find())
