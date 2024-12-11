#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination.
"""

import csv
import math
from typing import List, Dict, Union, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(
            self,
            index: int = None,
            page_size: int = 10
    ) -> Dict:
        """
        Get a dataset and retrieves the page by index.

        Args:
            index (int, optional): Starting index,
                                   default to None.

            page_size (int): Number of rows of the page,
                             default to 10.

        Returns:
            Dict: "index": The starting index,
                  "data": The filtered data,
                  "page_size": The actual size page,
                  "next_index": The index after the last of the page.
        """
        # Convert dataset into CSV
        csv = self.indexed_dataset()

        # Check index range
        assert isinstance(index, int) and 0 <= index <= len(csv) - 1

        next_index = index
        data = []

        for item in range(page_size):
            # If the next index don't exist
            if next_index not in csv:
                # Go to the next index
                next_index += 1
                # Go to the next range
                continue

            data.append(csv[next_index])
            next_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }
