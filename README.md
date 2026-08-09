# JVE

**JVE (Jergan Verse Elsewhere)** is a scripting language designed to make web development smoother by combining simple commands with HTML, JavaScript, and data from web links.

## Goals

- Make common JavaScript tasks shorter.
- Inject HTML and JavaScript directly from JVE.
- Retrieve JSON or text from URLs.
- Open separate web windows from JVE.
- Keep raw JavaScript available when needed.
- Build toward compiler/runtime implementations using Java and C for desktop/native environments while keeping browser output compatible with JavaScript.

## Openwindow

JVE now has the `Openwindow` command, inspired by the BJVE `opendraw` idea.

The syntax is intentionally strict:

```jve
Openwindow(js code(<html><body><h1>Hello!</h1></body></html>))
```

The `code(...)` wrapper **must** be present. JVE compiles this into a call to the browser runtime, which opens a new window and writes the supplied HTML into it. JavaScript can be included inside the HTML with normal `<script>` tags.

## Basic example

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

The implementation is intentionally small while the language is being designed. Future features include variables, conditions, loops, functions, events, DOM selectors, and native Java/C runtime components.
