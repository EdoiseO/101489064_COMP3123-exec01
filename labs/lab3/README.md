# COMP3123 Lab Exercise 3

A Node.js HTTP server using the supplied employee data module.

## Run

```bash
node index.js
```

The server uses port `8081` by default. Set `PORT` to use another port.

## Routes

- `/` — HTML welcome message
- `/employee` — all employee records as JSON
- `/employee/names` — ascending array of employee full names as JSON
- `/employee/totalsalary` — total salary as JSON
