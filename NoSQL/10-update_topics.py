#!/usr/bin/env python3
"""This module defines a function `update_topics`."""

import pymongo


def update_topics(mongo_collection, name, topics):
    """
    Update topics of filtered collection by name.def update_topics.

    Args:
        mongo_collection (pymongo collection object): The collection to update.
        name (str): The name to filter.
        topics (list[str]): The topics to update.

    Returns:
        None
    """
    if mongo_collection is None:
        return None

    mongo_collection.update_many(
        {
            'name': name
        }, {
            "$set":
            {'topics': topics}
        }
    )
