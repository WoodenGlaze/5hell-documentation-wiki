# Macros

[Home](../../home) | [Getting Started](../../getting-started) | [Commands](../../command_index) | [Concepts](../concepts) | [Data Sets](../../data-sets) | [Tools](../../tools)

Macros let you save repeatable command chains and execute them quickly.

## Why Use Macros

- Reduce repeated typing in long command chains
- Standardize common workflows
- Combine with piping and DO scripts for automation

## Basic Pattern

1. Define a macro with a meaningful name.
2. Include commands exactly as you would type them in-line.
3. Execute the macro where needed.

## Practical Guidance

- Keep macros small and single-purpose.
- Prefer readable command segments over very dense one-liners.
- Test each command chain manually before storing it as a macro.
- If a macro depends on pipeline data, test it in the same context where it will run.

## Related Reading

- [DO scripting and automation](do)
- [Piping command output](piping)
- [Dig command concepts](dig)
