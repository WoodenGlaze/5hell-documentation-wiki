# Meta Linking

[Home](../../home) | [Getting Started](../../getting-started) | [Commands](../../command_index) | [Concepts](../concepts) | [Data Sets](../../data-sets) | [Tools](../../tools)

Meta linking is the workflow of loading and scanning meta objects from your home machine and reusing that context across sessions.

## Core Idea

5hell can load a meta object for your home computer into a custom object, often named myx0. Additional shells usually appear as incremented variants (for example, myx0 + 1).

## Why It Matters

- Lets you centralize reconnaissance context
- Makes follow-up actions faster across multiple shells
- Improves repeatability when paired with scripting

## Typical Workflow

1. Load or identify the home meta object.
2. Store it in a known custom object.
3. Reuse that object in downstream commands and scripts.

## Related Reading

- [DO scripting and automation](do)
- [Piping command output](piping)
- [Macros](macros)
