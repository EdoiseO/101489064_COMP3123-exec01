# COMP3123 Lab 3

Phillip Onofua · 101489064

Node.js HTTP routing, module exports and reading JSON from a file.

## Run

From this folder:

```sh
npm ci
npm start
```

Alternatively, `node main.js` runs the server without nodemon. Open `http://localhost:8088`. Stop with Ctrl+C.

| Route | Output |
| --- | --- |
| `/` | Root page and route suggestions |
| `/name` | Student name |
| `/users` | User ID exported from `data.js` |
| `/userlist` | Contents of `employees.json` |

`main.js` is the entry point, `data.js` exports sample user data, and `employees.json` supplies the user list.
