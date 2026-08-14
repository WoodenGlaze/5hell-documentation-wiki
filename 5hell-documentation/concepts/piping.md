# Piping

[Home](../../home.md) | [Getting Started](../../getting-started.md) | [Commands](../../command_index.md) | [Concepts](../concepts.md) | [Data Sets](../../data-sets.md) | [Tools](../../tools.md)

## What Is Piping

5hell supports piping, similar to other command-line environments. Piping sends the output of one command into the input of the next command on the same line.

## Why It Matters

- Makes automation shorter and clearer
- Reduces temporary copy/paste steps
- Enables composable workflows

## Example

With a file named targets in /root:

```text
enum targets | enum -d dig
```

Result:

Dig executes on every IP on each new line in targets.

## Walkthrough

1. enum targets reads each target entry.
2. The | operator forwards that output.
3. enum -d dig appends each entry to dig and executes.

## Takeaway

Piping allows command chains where each stage transforms or consumes the previous stage output.

## Related Reading

- [DO scripting and automation](do.md)
- [Macros](macros.md)
- [Dig command concepts](dig.md)
