# COMP3123

Student ID: 101489064

Coursework for COMP3123, organized to match the local `comp 3123` folder.

## Folder structure

```text
labs/
├── lab1/
│   ├── Lab1_Review.html
│   ├── Lab1_Review.js
│   └── Lab1_node.js
└── lab2/
    ├── Lab2_array_methods.js
    ├── Lab2_fetch.js
    ├── Lab2_promise.html
    └── Lab2_promise.js
```

## Lab 1

JavaScript object, constructor, and class review, plus a Node.js HTTP server.

- `labs/lab1/Lab1_Review.html` loads the JavaScript review.
- `labs/lab1/Lab1_Review.js` prints the object, Student constructor, and Prof class examples to the browser console.
- `labs/lab1/Lab1_node.js` starts an HTTP server on port 8088.

### Run Lab 1

Open `labs/lab1/Lab1_Review.html` in a browser, open the developer console, and refresh the page to see the output.

To run the server from the repository root:

```sh
cd labs/lab1
node Lab1_node.js
```

Open <http://localhost:8088> to see the response. Press Ctrl+C in the terminal to stop the server.

## Lab 2

JavaScript practice using array methods, promises, and `fetch`.

- `labs/lab2/Lab2_array_methods.js` uses `forEach` and `filter` on a course list.
- `labs/lab2/Lab2_promise.html` loads the promise and fetch examples in a browser.
- `labs/lab2/Lab2_promise.js` resolves a Promise and prints its JSON data to the browser console.
- `labs/lab2/Lab2_fetch.js` fetches and prints Netflix status data to the browser console.

### Run Lab 2

Run the array methods example from the repository root:

```sh
node labs/lab2/Lab2_array_methods.js
```

Open `labs/lab2/Lab2_promise.html` with a local development server, then open the browser developer console and refresh the page to view the promise and fetch output.
