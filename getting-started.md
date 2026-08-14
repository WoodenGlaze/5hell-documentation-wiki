# Getting Started

[Home](home) | [Getting Started](getting-started) | [Commands](command_index) | [Concepts](5hell-documentation/concepts) | [Data Sets](data-sets) | [Tools](tools)

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

- Build a command lookup habit: [Command Index](command_index)
- Learn automation: [DO concept](5hell-documentation/concepts/do)
- Learn piping chains: [Piping](5hell-documentation/concepts/piping)
- Review exploit data context: [Data Sets](data-sets)

## Encrypting Map.conf and do.rc

If you want to encrypt Map.conf and do.rc, you must configure the @HOME section in 5hell.src so 5hell knows which keys to use for decryption at runtime.

Important: you must encrypt Map.conf and do.rc manually first. The dorc_key and map_key settings only tell 5hell how to decrypt files that are already encrypted.

### Manual encryption examples

Encrypt Map.conf:

```text
file -e /root/Config/Map.conf
```

Encrypt do.rc:

```text
file -e /root/Config/do.rc
```

After encrypting, set matching keys in 5hell.src:

```text
"map_key":"MapKeyExample123"
"dorc_key":"DoRcKeyExample123"
```

### Step 1: Edit the @HOME block in 5hell.src

Find this section in 5hell.src:

```text
BEGIN @HOME || @HOME_SERVER CONFIGURATION
```

Then edit the globals.AT_HOME map values, especially:

```text
"ip":"ip.add.rr.ess"
"user":"root"
"pass":"password"
"dorc_key":0
"map_key":0
```

Use string encryption keys for dorc_key and map_key when encryption is enabled. Leave them at 0 only when encryption is not in use.

### Step 2: Keep @HOME enabled

Do not comment out the @HOME configuration block. If you do not need some fields, keep default values instead of disabling the block.

### Step 3: Use a real password for @HOME

Always set a real password when using @HOME server authentication or encryption keys. This is required for secure transmit/hashim workflows.

### Step 4: Understand what uses these values

- transmit uses @HOME server credentials and related fields.
- rshell @home can still use the @home alias for IP replacement, even in simpler setups.
- dorc_key decrypts do.rc when encrypted.
- map_key decrypts Map.conf when encrypted.

### Step 5: Runtime overrides (optional)

You can override HOME values at runtime from do.rc, for example:

```text
set HOME.key new_value
ifconfig -p | set HOME.ip
```

Config/do.rc takes priority over rkit/do.rc.

## Notes

- ACK requirement varies by signal quality.
- Rule of thumb formula:

```text
300000 / (Power + 15)
```
