# Dig

## DIG v 2.1 Netcrawler || Autohacking || Automation
Usage: `dig [-s|ip|port] [port|ip] [opt:--edit]` -- auto-infiltrate a target
runs db on target [ip] and [port]
infiltrates via shell if found.

uploads rkit and runs 5hell on the target
gains root and wipes the log.

performs other taskes as defined by the user in dig.bat
dig.bat may contain docalls (do # -f your.file) to daisy chain digs

Note: dig may take port and ip in any order
not supplying a port defaults to port 0 aka the router

---

Usage: `dig -s` -- will scan the internet for a suitable target
uses database.csv to choose targets with known kernel_router versions
if the matched router has a shell exploit, dig will auto infiltrate as normal
susses out random ips until a match is found
sussing routers does not leave a log if no shell is found

Note: edit /root/rkit/dig.bat to customize behavior
by default you will be prompted to exit 5hell when dig completes
type 'y' to exit and return to the script that launched dig
or add quit dig_complete to exit automatically with an echo

Note: supplying --edit as argument three will open dig.bat in scribus
dig will continue as normal after editing is complete
you may add/remove commands to be executed by dig here

Note: supplying --edit as agrgument one will open dig.bat in scribus
dig will then exit after editing the batch file.

### Usage examples:
Usage example:|> `rnip 1 | dig`

Usage example:|> `dig 1.1.1.1 22 --edit`

Usage example:|> `do 20 dig -s`
