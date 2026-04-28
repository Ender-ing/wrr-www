---
sidebar_position: 1
---
# Modular file structure

:::warning
Incomplete documentation
:::

Every `.jug` file is considered its own unique context.
Meaning, the source code from *file A* is never mixed in with the source code
from *file B*.

Every time you import code using the [`import` statement](./../statements/import.md), the code itself is processed
to check if the *referenced data* is defined, and to check for *typing consistency*.
