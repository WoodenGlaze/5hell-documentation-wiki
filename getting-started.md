# Getting Started

[Home](home.md) | [Getting Started](getting-started.md) | [Commands](command_index.md) | [Concepts](5hell-documentation/concepts.md) | [Data Sets](data-sets.md) | [Tools](tools.md)

A quick path from a fresh session to a usable workflow.

## Wi-Fi Setup Walkthrough

1. List nearby networks with iwlist:

```text
iwlist wlan0
```

Record the strongest network BSSID and ESSID.

2. Enable monitor mode:

```text
airmon start wlan0
```

3. Start packet capture attack:

```text
aireplay -b <bssid> -e <essid>
```

If the target is patched, switch targets.

4. Stop capture with Ctrl+C when enough ACKs are collected.

5. Crack the capture:

```text
aircrack <network>.cap
```

6. Connect and proceed with account setup.

## Practical Next Steps

- Build a command lookup habit: [Command Index](command_index.md)
- Learn automation: [DO concept](5hell-documentation/concepts/do.md)
- Learn piping chains: [Piping](5hell-documentation/concepts/piping.md)
- Review exploit data context: [Data Sets](data-sets.md)

## Notes

- ACK requirement varies by signal quality.
- Rule of thumb formula:

```text
300000 / (Power + 15)
```
