# Examples

## Example dig.bat scripts.

### Network Nuker by Plu70
#### Requirements:
Library that returns a `root computer` object, for instance: `libhttp.so version 1.0.4`

A guest running on the target router

#### Results:
Nukes the entire network, useful for corrupt data missions.

```
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
