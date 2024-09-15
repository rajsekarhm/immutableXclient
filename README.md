# Project Name

## Overview
Welcome to **ImmutableX**. This project leverages to virtualize valuable object using blockchain and it is transparency.

## Technologies Used

- **Truffle**: A comprehensive development environment, testing framework, and asset pipeline for Ethereum, aimed at simplifying the development of Ethereum-based applications.
- **React**: A powerful JavaScript library for building user interfaces, particularly well-suited for single-page applications.
- **Kafka**: A high-throughput distributed messaging system used for building real-time data pipelines and streaming applications.
- **Solidity**: A statically-typed programming language tailored for writing smart contracts on the Ethereum blockchain.
- **IPFS (InterPlanetary File System)**: A distributed file storage protocol designed for storing and sharing hypermedia in a decentralized way.
- **Redis**: An in-memory key-value store known for its high performance and versatility as a database, cache, and message broker.
- **Upstash**: A serverless Redis database optimized for low-latency and high-throughput workloads.

## Getting Started

### Prerequisites

Ensure that the following software is installed on your system:

Client 

- Node.js and npm
- Truffle

Server

- SQL
- Redis
- IPFS
- Kafka

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/rajsekarhm/immutableXclient.git
    cd immutableXclient
    ```

2. **Install project dependencies:**
    ```bash
    npm install
    ```

Ensure that You have cloned Server Handles

3. **Set up SQL:**
    - Ensure that SQL is running on your local machine or remote server.

4. **Set up Redis:**
    - Ensure Redis is running, or configure Upstash for serverless Redis.

5. **Set up IPFS:**
    - Ensure the IPFS daemon is running on your machine.

6. **Set up Kafka:**
    - Ensure Kafka is running on your local machine or remote server.

### Configuration

Create a `.env` file in the root directory and configure the necessary environment variables:
```plaintext


REACT_APP_API_URL=http://localhost:5000
REDIS_URL=redis://localhost:6379
IPFS_API_URL=http://localhost:5001
KAFKA_BROKER=localhost:9092
