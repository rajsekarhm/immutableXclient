# ImmutableXClient

## Overview
Welcome to **ImmutableX**. This project leverages to virtualize valueable object using blockchain and it is transprancy.

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces, particularly well-suited for single-page applications.
- **Solidity**: A statically-typed programming language tailored for writing smart contracts on the Ethereum blockchain.
- **Redis**: An in-memory key-value store known for its high performance and versatility as a database, cache, and message broker.

## Getting Started

### Prerequisites

Ensure that the following software is installed on your system:

Client 

- Node.js and npm

Server

- Redis

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

1. **Set up Redis:**
    - Ensure Redis is running, or configure Upstash for serverless Redis.

### Configuration

Create a `.env` file in the root directory and configure the necessary environment variables:

```plaintext
REACT_APP_API_URL=http://localhost:5000
REDIS_URL=redis://localhost:6379