# Appliance Repair Backend

This is the backend for the appliance repair service, built with Node.js, Express, and SQLite. It provides API endpoints to manage locations, appliances, technicians, and users. The backend connects to a SQLite database to store and retrieve data.

## Features

- **API Endpoints**:
  - `/api/locations`: Get a list of locations.
  - `/api/appliances`: Search for appliances by name.
  - `/api/technicians`: Search for technicians by specialization.

- **SQLite Database**:
  - Stores information on locations, appliances, technicians, and users.
  - Pre-filled technician data for testing purposes.

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/msk-chaithanya-raj/NVIRI_backend
cd backend
