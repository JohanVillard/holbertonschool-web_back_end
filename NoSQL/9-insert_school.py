#!/usr/bin/env python3
"""This module defines a function `insert_school`."""

import pymongo


def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document.

    This function inserts a new document an a collection.

    Args:
        mongo_collection (pymongo collection object):
                The collection where the document is inserted.
        kwargs (Any): Accepts an undefined number of arguments

    Returns:
        str: The new id of the document.
    """
    if mongo_collection is None:
        return []

    return mongo_collection.insert_one(kwargs).inserted_id
