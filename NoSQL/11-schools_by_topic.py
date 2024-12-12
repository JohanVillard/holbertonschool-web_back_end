#!/usr/bin/env python3
"""This module defines a function `schools_by_topic`."""

import pymongo


def schools_by_topic(mongo_collection, topic):
    """
    Return the filtered list of school by topic.

    Args:
        mongo_collection (pymongo collection object): The collection to filter.
        topic (list[str]): The value to filter.

    Returns:
        list: The list having a specific topic.
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find({
        "topics": topic
        })
    )
