# Example do files:

### do.rc examples
#### Example do.rc for home server:
```
# Runs kore -s on 5hell launch, pulls logs from proxies, and clears them, then goes through proxies to endpoint
kore -s
kraken -l
prox
```

### Provided example do scripts in 5hell:

#### Script 1:
Setup (copy after the |> and paste into 5hell):
|> clipa 0 | rnip 11 | enum | enum -s | do
```
clipa | enum | probe
clipa ++
```
Result:
set clipa to 0, produce 11 random ips, enumerate those ips, do 11 loops of: probe enum\[clipa\], clipa++
this runs probe on 11 random ips stored in the enum(eration) buffer using calc and the clipboard to iterate through the list.

#### Script 2:
Setup (copy after the |> and paste into 5hell)
|> clipa 1 | ls -a /lib | enum | enum -s | do
Paste this Script : 
```
clipa | enum | db -l
clipa ++ 
```

Result:
set clipa to 1, enumerate files in /lib, do [num_files+1] loops, start at 1 and run db (databaser) on each file, the error at the end is because ls returns with an extra blank line which gets enumerated at position [0] resulting in the loop being 1 over.

(all commands are valid but note interactive commands will still require interaction)
