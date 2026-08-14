# DO Example Scripts

[Home](../../../home.md) | [Getting Started](../../../getting-started.md) | [Commands](../../../command_index.md) | [Concepts](../../concepts.md) | [Data Sets](../../../data-sets.md) | [Tools](../../../tools.md)

Practical scripts for DO-based automation.

## do.rc Example

Example do.rc for a home server:

```text
# Runs kore -s on 5hell launch, pulls logs from proxies, and clears them, then goes through proxies to endpoint
kore -s
kraken -l
prox
```

## Script 1

Setup:

```text
|> clipa 0 | rnip 11 | enum | enum -s | do
```

Script body:

```text
clipa | enum | probe
clipa ++
```

Result:

Creates 11 random IPs, enumerates them, then probes each target using clipboard-driven iteration.

## Script 2

Setup:

```text
|> clipa 1 | ls -a /lib | enum | enum -s | do
```

Script body:

```text
clipa | enum | db -l
clipa ++
```

Result:

Enumerates /lib files and runs db -l across each entry. The final error is expected due to an extra blank line from ls.

## Note

All commands are valid, but interactive commands still require interaction.
