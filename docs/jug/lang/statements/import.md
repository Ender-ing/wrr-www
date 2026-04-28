# `import` statement

The `import` statement is used to **reference** *components* from *external code*.

## Syntax

```jug
import {...} from <source>;           // 1
import <source> as <handle_name>;     // 2
```

- `{...}`:
  You may list the *imported components* you wish to use.

  Valid import components:
  - *empty*

- `<source>`:
  The source of the code.

  Valid code sources:
  - File Path (`str`): `"path/to/file.jug"`
  - Library Chain (`Identifier` (. `Identifier`)*): `handle.of.lib`

- `<handle_name>`:
  The name of the handle to be used.

  Valid handle names:
  - `Identifier`: `handle`
