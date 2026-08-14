# Dig Examples

[Home](../../../home.md) | [Getting Started](../../../getting-started.md) | [Commands](../../../command_index.md) | [Concepts](../../concepts.md) | [Data Sets](../../../data-sets.md) | [Tools](../../../tools.md)

## Example dig.bat Scripts

### Network Nuker by Plu70

Requirements:

- A library that returns a root computer object, for example libhttp.so version 1.0.4
- A guest running on the target router

Result:

Nukes the entire network, useful for corrupt data missions.

```text
# new and imporived dig.bat pwner
rshell @home
brutus | gp -d " sc || mv /home/guest/rkit/libhttp.so /lib || return "
meta load libhttp.so
ifconfig -l | clipc
clipa 0
lanpro | enum
enum -l | clipb
macro set pewpew " clipa | enum | zap 0x7DD8F3DE alse | sc -n || clipa ++ "
macro set toB " if \" clipa ++ \" \" macro pewpew \" clipc \" clipa | enum \" "
do @b toB
sc -n @B 1
exit y
```

## Related Reading

- [Dig command concepts](../dig.md)
- [DO scripting and automation](../do.md)
- [Piping command output](../piping.md)
