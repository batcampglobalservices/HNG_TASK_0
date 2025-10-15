# Backend Wizards — Stage 0 Task

## Description
A simple REST API built with Express that returns user profile info, timestamp, and a random cat fact from the Cat Facts API.

## Endpoint
**GET /me**

### Response Format
```json
{
  "status": "success",
  "user": {
    "email": "batombaribakpo@example.com",
    "name": "Batombari Bakpo",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep for around 13 to 14 hours a day."
}
