# Dig

[Home](../../home) | [Getting Started](../../getting-started) | [Commands](../../command_index) | [Concepts](../concepts) | [Data Sets](../../data-sets) | [Tools](../../tools)

DIG v2.1 netcrawler for automated target infiltration workflows.

## Primary Usage

```text
dig [-s|ip|port] [port|ip] [opt:--edit]
```

Behavior summary:

- Runs db on the target ip and port
- Infiltrates via shell when available
- Uploads rkit, runs 5hell on target, gains root, and wipes logs
- Executes user-defined follow-up actions from dig.bat

## Notes

- IP and port may be supplied in either order.
- If port is omitted, default is 0 (router port).
- dig.bat can include DO calls to chain larger workflows.

## Scan Mode

```text
dig -s
```

Scan mode behavior:

- Searches for suitable targets using database.csv
- Matches known kernel_router versions
- Attempts auto-infiltration when shell exploit conditions are met
- Probes random IPs until a match is found

## Edit Mode

- Third argument --edit: opens dig.bat in scribus, then continues dig.
- First argument --edit: opens dig.bat in scribus, then exits.

## Examples

```text
rnip 1 | dig
```

```text
dig 1.1.1.1 22 --edit
```

```text
do 20 dig -s
```

## Related Reading

- [Dig examples](dig/examples)
- [DO scripting and automation](do)
- [Piping command output](piping)
