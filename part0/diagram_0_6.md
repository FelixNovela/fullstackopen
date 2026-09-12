```mermaid
sequenceDiagram
    participant browser
    participant server
    Note right of browser: The browser adds the note to the page and sends it asynchronously to the server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 note created
    deactivate server
```