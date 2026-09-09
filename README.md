# COMP3123

Student ID: 101489064

Coursework arranged to match the local `comp 3123` folder.

## Folder structure

```text
labs/
└── lab1/
    ├── Lab1_Review.html
    ├── Lab1_Review.js
    └── Lab1_node.js
```

## Lab 1

JavaScript object, constructor and class review, plus a Node.js HTTP server.

- `labs/lab1/Lab1_Review.html` loads the JavaScript review.
- `labs/lab1/Lab1_Review.js` prints the object, Student constructor and Prof class examples to the console.
- `labs/lab1/Lab1_node.js` starts the HTTP server on port 8088.

### Run the JavaScript review

Open `labs/lab1/Lab1_Review.html` in a browser, open the developer console and refresh the page to see the output. The HTML page body is empty because this exercise writes to the console.

### Run the server

With Node.js installed, run these commands from the repository root:

```sh
cd labs/lab1
node Lab1_node.js
```

Open <http://localhost:8088> to see the response. Press Ctrl+C in the terminal to stop the server.

The server uses Node.js's built-in `http` module, so it needs no npm dependencies.
