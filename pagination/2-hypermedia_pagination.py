#!/usr/bin/env python3

"""This module defines a function `index_range` and a class `Server`."""

import csv
import math
from typing import List, Dict, Union, Optional


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get the specified page."""
        assert isinstance(page, int)
        assert page > 0
        assert isinstance(page_size, int) 
        assert page_size > 0

        indexes = index_range(page, page_size)

        self.__dataset = self.dataset()

        return self.__dataset[indexes[0]: indexes[-1]]

    def get_hyper(self, page:int = 1, page_size: int = 10) -> Dict[str, int | List[List] | Optional[int]]:
        """Return a dict."""
        dataset = self.dataset()
        total_items = len(dataset)

        # total_pages
        total_pages = (total_items + page_size - 1) // page_size


        # page
        current_data_page = self.get_page(page, page_size)   

        # next_page
        next_page = page + 1
        if next_page > total_pages:
            next_page = None

        # prev_page
        prev_page = page - 1
        if prev_page < 1:
            prev_page = None

        if page > total_pages:
            page_size = 0

        
        return {
            "page_size": page_size,
            "page": page,
            "data": current_data_page,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
        
def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Compute the range of pagination parameters."""
    start_index = (page - 1) * page_size
    end_index = page * page_size

    return (start_index, end_index)
