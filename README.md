# JVE

**JVE (Jergan Verse Elsewhere)** is a small scripting language designed to make web development smoother by combining simple commands with HTML, JavaScript, and data from web links.

## Goals

- Make common JavaScript tasks shorter.
- Inject HTML and JavaScript directly from JVE.
- Retrieve JSON or text from URLs.
- Keep raw JavaScript available when needed.
- Provide a simple compiler that turns `.jve` files into JavaScript.

## Example

```jve
echo "Hello from JVE"

html {
  <h1>JVE works!</h1>
}

js {
  console.log("Hello from JavaScript")
}
```

## Data from links

```jve
get "https://example.com/data.json" as data
```

The first implementation is intentionally small. More language features such as variables, conditions, loops, functions, events, DOM selectors, and safer web-data handling can be added to the compiler and runtime over time.
