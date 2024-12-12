#!/usr/bin/env python3
"""This module formats Nginx collection from log database."""

from pymongo import MongoClient


if __name__ == "__main__":
    # Connect and get db and get collection
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    nginx = db.nginx

    # Get the count values
    num_docs = nginx.count_documents({})
    num_docs_get = nginx.count_documents({"method": "GET"})
    num_docs_post = nginx.count_documents({"method": "POST"})
    num_docs_put = nginx.count_documents({"method": "PUT"})
    num_docs_patch = nginx.count_documents({"method": "PATCH"})
    num_docs_delete = nginx.count_documents({"method": "DELETE"})
    num_docs_status = nginx.count_documents({
        "method": " GET",
        "path": "/status"
    })

    # Format output
    print(f"{num_docs} logs")
    print("Methods:")
    print(f"\tmethod GET: {num_docs_get}")
    print(f"\tmethod POST: {num_docs_post}")
    print(f"\tmethod PUT: {num_docs_put}")
    print(f"\tmethod PATCH: {num_docs_patch}")
    print(f"\tmethod DELETE: {num_docs_delete}")
    print(f"{num_docs_status} status check")
