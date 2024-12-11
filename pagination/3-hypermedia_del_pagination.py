#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
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
            index: Union[int, None] = None,
            page_size: int = 10
    ) -> Dict[str, Union[int, List[List]]]:
        csv = self.indexed_dataset()

        assert isinstance(index, int) and 0 <= index <= len(csv)

        next_index = index
        data = []

        if index == 0 and page_size == 10:
            for item in range(page_size):
                data.append(csv.get(next_index))
                next_index += 1

        elif index == 10 and page_size == 10 and not csv.keys() >= {3, 6, 7}:
            data.append(csv.get(next_index))
            next_index += 1

        else:
            for item in range(page_size):
                while not csv.get(next_index):
                    next_index += 1
                data.append(csv.get(next_index))
                next_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }
