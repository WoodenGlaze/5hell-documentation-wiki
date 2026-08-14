# Command Reference Table (categories as columns)

[Home](../home) | [Getting Started](../getting-started) | [Commands](../command_index) | [Concepts](concepts) | [Data Sets](../data-sets) | [Tools](../tools)

Canonical command reference source.

| Unix | Utility | Exploration | Exploitation/Pen-testing | File/Clipboard manipulation | Automation | Target Management | uncategorized | Proxying |
|---|---|---|---|---|---|---|---|---|
| [aptm](#aptm) | [bios](#bios) | [db](#db) | [air](#air) | [append](#append) | [dm](#dm) | [malp](#malp) | [calc](#calc) | [kraken](#kraken) |
| [cat](#cat) | [cc](#cc) | [fwr](#fwr) | [brutus](#brutus) | [buffer](#buffer) | [do](#do) | [rclean](#rclean) | [games](#games) | [prox](#prox) |
| [cd](#cd) | [chop](#chop) | [ifconfig](#ifconfig) | [cad](#cad) | [clipa](#clipa) | [enum](#enum) | [reboot](#reboot) | [outmon](#outmon) | [scrub](#scrub) |
| [clear](#clear) | [cname](#cname) | [ipfit](#ipfit) | [cerebrum](#cerebrum) | [clipb](#clipb) | [kore](#kore) | [run](#run) | [rnip](#rnip) |  |
| [cp](#cp) | [cob](#cob) | [iwlist](#iwlist) | [dig](#dig) | [clipc](#clipc) | [macro](#macro) | [target](#target) | [shell](#shell) |  |
| [credits](#credits) | [code](#code) | [lanpro](#lanpro) | [fakepass](#fakepass) | [dfit](#dfit) | [tws](#tws) | [transmit](#transmit) |  |  |
| [curl](#curl) | [diff](#diff) | [liber](#liber) | [fetch](#fetch) | [file](#file) |  |  |  |  |
| [echo](#echo) | [felix](#felix) | [linkdb](#linkdb) | [flood](#flood) | [merge](#merge) |  |  |  |  |
| [grep](#grep) | [glasspool](#glasspool) | [meta](#meta) | [gopher](#gopher) | [poke](#poke) |  |  |  |  |
| [htop](#htop) | [glosure](#glosure) | [netdump](#netdump) | [hashim](#hashim) | [scribus](#scribus) |  |  |  |  |
| [if](#if) | [grp](#grp) | [nsl](#nsl) | [infil](#infil) |  |  |  |  |  |
| [kill](#kill) | [lock](#lock) | [osint](#osint) | [jtr](#jtr) |  |  |  |  |  |
| [ls](#ls) | [mail](#mail) | [ping](#ping) | [meta](#meta) |  |  |  |  |  |
| [md5](#md5) | [make](#make) | [porter](#porter) | [roil](#roil) |  |  |  |  |  |
| [mkdir](#mkdir) | [makfit](#makfit) | [probe](#probe) | [rshell](#rshell) |  |  |  |  |  |
| [mv](#mv) | [memdump](#memdump) | [smtp](#smtp) | [rsi](#rsi) |  |  |  |  |  |
| [nt](#nt) | [pause](#pause) | [sniff](#sniff) | [sphinx](#sphinx) |  |  |  |  |  |
| [passwd](#passwd) | [perms](#perms) | [tree](#tree) | [zap](#zap) |  |  |  |  |  |
| [ps](#ps) | [pipe](#pipe) | [whois](#whois) |  |  |  |  |  |  |
| [pwd](#pwd) | [psudo](#psudo) |  |  |  |  |  |  |  |
| [quit](#quit) | [purge](#purge) |  |  |  |  |  |  |  |
| [rm](#rm) | [pwgen](#pwgen) |  |  |  |  |  |  |  |
| [scpm](#scpm) | [silentclean](#silentclean) |  |  |  |  |  |  |  |
| [sl](#sl) | [string](#string) |  |  |  |  |  |  |  |
| [ssh](#ssh) | [tdump](#tdump) |  |  |  |  |  |  |  |
| [time](#time) | [zc](#zc) |  |  |  |  |  |  |  |
| [usr](#usr) |  |  |  |  |  |  |  |  |
| [whoami](#whoami) |  |  |  |  |  |  |  |  |


# List of commands
- [kore](#kore)
- [outmon](#outmon)
- [sphinx](#sphinx)
- [malp](#malp)
- [hashim](#hashim)
- [nt](#nt)
- [fakepass](#fakepass)
- [cad](#cad)
- [dig](#dig)
- [glasspool](#glasspool)
- [cob](#cob)
- [poke](#poke)
- [merge](#merge)
- [append](#append)
- [dfit](#dfit)
- [chop](#chop)
- [gopher](#gopher)
- [grep](#grep)
- [tree](#tree)
- [makfit](#makfit)
- [make](#make)
- [felix](#felix)
- [file](#file)
- [brutus](#brutus)
- [cerebrum](#cerebrum)
- [jtr](#jtr)
- [string](#string)
- [diff](#diff)
- [if](#if)
- [sl](#sl)
- [zc](#zc)
- [macro](#macro)
- [tdump](#tdump)
- [calc](#calc)
- [code](#code)
- [silentclean](#silentclean)
- [pwgen](#pwgen)
- [glosure](#glosure)
- [htop](#htop)
- [dm](#dm)
- [tws](#tws)
- [target](#target)
- [transmit](#transmit)
- [rsi](#rsi)
- [scpm](#scpm)
- [iwlist](#iwlist)
- [ifconfig](#ifconfig)
- [air](#air)
- [probe](#probe)
- [lanpro](#lanpro)
- [nsl](#nsl)
- [ping](#ping)
- [whois](#whois)
- [ssh](#ssh)
- [sniff](#sniff)
- [rshell](#rshell)
- [scrub](#scrub)
- [prox](#prox)
- [kraken](#kraken)
- [liber](#liber)
- [db](#db)
- [linkdb](#linkdb)
- [meta](#meta)
- [zap](#zap)
- [roil](#roil)
- [aptm](#aptm)
- [smtp](#smtp)
- [osint](#osint)
- [fetch](#fetch)
- [porter](#porter)
- [infil](#infil)
- [flood](#flood)
- [curl](#curl)
- [netdump](#netdump)
- [clipa](#clipa)
- [clipb](#clipb)
- [clipc](#clipc)
- [passwd](#passwd)
- [echo](#echo)
- [clear](#clear)
- [ps](#ps)
- [kill](#kill)
- [pwd](#pwd)
- [psudo](#psudo)
- [ls](#ls)
- [cd](#cd)
- [rm](#rm)
- [mv](#mv)
- [cp](#cp)
- [usr](#usr)
- [grp](#grp)
- [perms](#perms)
- [lock](#lock)
- [mkdir](#mkdir)
- [cat](#cat)
- [run](#run)
- [reboot](#reboot)
- [scribus](#scribus)
- [games](#games)
- [mail](#mail)
- [fwr](#fwr)
- [memdump](#memdump)
- [enum](#enum)
- [rclean](#rclean)
- [ipfit](#ipfit)
- [md5](#md5)
- [pipe](#pipe)
- [do](#do)
- [cc](#cc)
- [time](#time)
- [pause](#pause)
- [bios](#bios)
- [cname](#cname)
- [whoami](#whoami)
- [rnip](#rnip)
- [purge](#purge)
- [buffer](#buffer)
- [credits](#credits)
- [quit](#quit)
- [shell](#shell)


# Commands

## `kore`
<a id="kore"></a>
<pre>
KORE 3.0 || automation || helper || Goddess of the DEAD and GRAIN || rkit || security

Usage: kore [-r|--rkit] -- automatic rkit generation
-- create rkit folder if it doesn't exist
-- copy metaxploit.so, crypto.so, and 5hell to home_dir/rkit
-- NB: pulls 5hell from launch path of active 5hell script
-- create database.csv within rkit if it doesn't exist 
-- moves ~/tables to rkit
-- offers to run pwgen | pwgen hash if ~/tables is not found

Usage: kore [-s|--secure] -- automatic secure system:
-- runs: usr -r root / | grp -r root / | rm /etc/passwd
----     grep -f Bank | rm |  | grep -f Mail | rm | rclean | lock
Usage: kore [-sc] -- as above but uses silentclean instead of rclean
-- NB: kore -s will remove all copies of Bank.txt and Mail.txt
-- please rename these files if you wish to keep them

Usage: kore [-S] -- paranoid secure; works as above plus:
-- removes /bin, /usr, and /home

Usage: kore [--hdd] -- prompts for hdd size in bytes
-- writes size to /virt/hdd.io
-- bios uses this to report remaining hdd space

Usage: kore [--override] [colorDefinition] [new_colorcode]
-- override a default color code at runtime
---- use with caution
-- place in your do.rc for custom themes without recompiling
-- see 5hell.src for valid colorDefinitions
-- you may also hard code these overrides in 5hell.src
-- nb: currently only color definitions may be overridden (i'm debating others)

Usage: kore [--silent] -- toggle silent_print mode on and off
-- place at the top and bottom of your do.rc to suppress startup output

Usage: kore [--control] [opt:bool:spool]-- activate kore's daemon mode
-- creates a daemon managed by DaemonManager; see shell --daemons
-- listens on socket_in and creates a macro from the contents of the file
-- each macro is given a job number and executed
-- output is written to currentPath/socket_out
---- clears socket_out before each write
-- optionally spools all output to kore.log# if spool boolean is true
---- # is an int starting at 1 and incrimenting for each new log file created
---- a new log file is created on initiation or when the log reaches 160kb
---- the first log created will be kore.log, without a numeral suffix
-- allows controlling one or more 5hell sessions through a single shared file
-- write to socket_in like any other do script
-- write HALT (with no other text) to socket_in to terminate kore control
-- daemon manager integration soon(tm) 

--n.b: cannot spool non-returned text; aka metaxploit.overflow text
---- that text goes straight to the terminal and bypasses function returns
NOTE: writing to socket_in too quickly can cause commands to be missed!
-- adjust the TICK to suite your needs

NOTE: kore once had more functionality and will once again soon
</pre>


## `outmon`
<a id="outmon"></a>
<pre>
monitor || file monitor || output monitor
Outmon is a not very useful daemon that will monitor a given file for a change.
When a change is detected, it will print the file contents, then resume monitoring.

Usage: outmon [path] [opt:interval] [opt:bool:act] [opt:reaction]
-- [path] -- is the path to the file you wish to monitor
---- it may be of type ascii or binary
---- monitoring folders is not yet supported (soontm)
-- [interval] -- is the refresh rate; default 01 seconds, range(.01, 300)
--- prints changes to a text file every [interval] seconds
-- [act] -- is 0, 1, 2, or 3
---- 0: do nothing; continue to loop (anything other than 1 or 2 is treated as 0)
---- 1: stop outmon on the first change detected
---- 2: invoke do on the file contents, then continue the loop
---- 3: perform the indicated reaction; prompts if not supplied
-- [reaction] -- should be a command or string of commands
-----eg: outmon /var/system.log .01 3 \" mv /var/system.log /var/system.back || sc || lock \" 
-- to end the running process, use the command: purge -d [opt:name]
---- or note the daemon name printed on the screen and 
---- remove the corresponding line from /root/5hell.d
---- or delete the file entirely
-- if the file cannot be created, then the process must be exited by with ctrl+c

MNEMONIC: 1 and done, 2 is do, 3 by me, otherwise loop to infinity
</pre>

## `sphinx`
<a id="sphinx"></a>
<pre>
5phinx: network penetration test tool
Press F1 or ? within 5phinx for further help.
Usage: sphinx -- launch 5phinx
Usage: sphinx [ip] [port]
-- preset targetIp and targetPort with
-- port 0 == router port
-- port 8080 == router http port!!
Hint: to attack a router within the netwrok target the LAN IP of the router first. 
-- then target port 8080 and exploit it
-- this is done on the same network as the router
Hint: Use the arrow keys to access additional windows in 5phinx
-- Up goes to a useless bank grabber
-- Right goes to a useful quick menu, right again goes to malp
-- Down takes you to herme5
-- Left takes you to malp
-- return to the main screen by pressing the opposite arrow key
Note: as usual, all results are sent to malp
Extra: sphinx [-h|help] extra -- a quick "tutorial"
</pre>

## `malp`
<a id="malp"></a>
<pre>
malp: Memory Alpha - buffer, object and database management menu. 
Usage: malp -- Access all BUFFER objects from here.
Usage: malp [piped_object] -- adds ANY piped object to the  BUFFER .
-- May be of any type: string, list, map, shell, file, computer, etc, et al.
Usage: malp [-b] [opt: piped_object] -- open the BUFFER immediately on opening malp
-- if an object is supplied, it's entry will be opened in the BUFFER
Usage: malp [-p] [opt: piped_object] 
-- pushes an entry to the BUFFER but does not open malp
-- failing to pass an argument to -p results in no action
-- returns zero

Functions: 
[0] -- display portmap, if available
[1] -- display loaded exploits and requirements if known
[2] -- display raw scan output from met scan
-- performs scan if not already scanned
[3] -- dump memory; runs the memdump command
-- this will dump session info such as portmap, exploits-
-- and others to a file named memdump[random number].mx
-- feel free to request additional info dumped by this command
[4] -- access felix file explorer or run tree (locally or on buffered filesystem)
[5] -- the main BUFFER where objects are stored
-- contains contextual object handlers
[6] -- Air menu for cracking wifi
[7|q] -- exit
[8] -- show running processes
[9] -- kill processes
[0] exit
[/] -- open Cer Bios
[-] -- open reverse shell interface
[.] -- list of database entries; 
-- selection will be passed to linkdb
</pre>

## `hashim`
<a id="hashim"></a>
<pre>
hash || decipher || passwords || tables || md5
Usage: hashim [-d|-f] [path] 
-- listen on [path] and decipher contents using tables/t5
-- default path is /root/rkit/tables/t5
Usage: hashim [-f] [opt:path] -- run once on specified path
-- uses /root/pass if not specified

Usage: hashim [-d] [opt:path]
-- run as a daemon on /root/pass or specified path
-- to end the daemon process, use the command: purge -d [opt:name]
---- or note the daemon name printed on the screen and 
---- remove the corresponding line from /root/5hell.d
---- or delete the file entirely
-- if the file cannot be created, then the process must be exited with ctrl+c

N.B. Please run pwgen hash to setup resources for hashim.
n.b.b This command requires root access and it is recommended to use, along with pwgen,
-- on a dedicated server due to the number of files involved
-- ie try not to spam hashim servers; a single one works wonders

Extra: hashim [-h|help] [extra] -- extra help page with extra help info.
</pre>



## `nt`
<a id="nt"></a>
<pre>
5pork || new terminal || Terminal.exe || fork process || new window

Usage: nt [opt:shell|params] [opt:shell] -- open a new window and optionally pass parameters
-- identical to: run /usr/bin/Terminal.exe [params] [shell]
--note: if /usr/bin/Terminal.exe is not found, nt will use the first Terminal.exe it finds
---- if there is no Terminal.exe, the command will fail
-- passing a shell runs Terminal.exe on that shell object
-- you may pass the " character by escaping it with \" 
--eg: zap | clipa || scpm -u ~/yourScript /home/guest @a || nt /home/guest/yourScript @a
--note: it is not necessary to use this to launch .exe's in a new window

---- as the game will do this automatically

Usage: you may achieve the same effect by ending a command line string with: --nt
-- if using 5hell as a bash replacement and you wish to send a command with piping:
-- wrap the whole string (except --nt) in quotes. use \" to escape the " character

--eg: |> echo " this will execute on this shell " || " echo \" on the new terminal \" | echo \" this will print \" " --nt 
---- prints: "this will execute on this shell" in the active window
---- prints: "this will print on the new terminal" in the new window
--note: |> " echo string | echo string " --nt 
---- isn't a typo; you put the quotes outside of the whole command string
---- and 5hell will execute the string if your bash is 5hell
-- the quotes are only necessary if:
---- the line ending in --nt contains | or ||
-- and you want them passed to the new terminal instead of evaluated
--eg: |> ls -la | poke some.txt || top --nt
---- will run the first two commands on the active session and run the third in a new window
--eg: |> " ls -la | poke some.txt || top " --nt
---- will run all commands in the new window

IMPORTANT NOTE: 
-- 5porking with the nt command allows piping a shell
-- 5porking using the --nt flag runs on the active shell
---- switch to glasspool to use --nt with alternate shells
</pre>



## `fakepass`
<a id="fakepass"></a>
<pre>
Usage: fakepass [opt:ip] [opt:pass] -- create passwd.src in current_path. Check src and build to /bin/passwd. PW capture malware.
</pre>

## `cad`
<a id="cad"></a>
<pre>
cad: cloak and dagger protocol
Usage: cad [optional: ip ] [optional: port] -- create a poisoned ps.src that hides itself
-- prompts for ip if not passed
-- defaults to port 1222 if not passed
-- creates the file ps.src in the current path 
-- it does not build the file; review first, then build
-- ps.src contains code for a poisoned ps binary

** Review ps.src and build with make or makfit into /bin/ps
** Remove the .src, 
*** optionally run /bin/ps once with metaxploit.so present then remove metaxploit.so
*** or leave it in place and wait for the target to run it
*** if they do, and metaxploit.so isn't present, it will just act like normal ps
*** if metaxploit is present, a reverse shell will be dropped, named ps
*** the poisoned ps binary will hide this back door
***** beware! using plain old ...host_computer.show_procs will reveal the trick!
The result is a hidden backdoor / trojan on the target. Use with care.
n.b. you get bonus points for extending the code to be even more nefarious
</pre>

## `dig`
<a id="dig"></a>
<pre>
DIG v 2.1 Netcrawler || Autohacking || Automation
Usage: dig [-s|ip|port] [port|ip] [opt:--edit] -- auto-infiltrate a target
-- runs db on target [ip] and [port]
-- infiltrates via shell if found
-- uploads rkit and runs 5hell on the target
-- gains root and wipes the log
-- performs other taskes as defined by the user in dig.bat
-- dig.bat may contain docalls (do # -f your.file) to daisy chain digs
Note: dig may take port and ip in any order
-- not supplying a port defaults to port 0 aka the rouer
Usage: dig -s -- will scan the internet for a suitable target
-- uses database.csv to choose targets with known kernel_router versions
-- if the matched router has a shell exploit, dig will auto infiltrate as normal
-- susses out random ips until a match is found
-- sussing routers does not leave a log if no shell is found
Note: edit /root/rkit/dig.bat to customize behavior
-- by default you will be prompted to exit 5hell when dig completes
-- type 'y' to exit and return to the script that launched dig
-- or add quit dig_complete to exit automatically with an echo
Note: supplying --edit as argument three will open dig.bat in scribus
-- dig will continue as normal after editing is complete
-- you may add/remove commands to be executed by dig here
Note: supplying --edit as agrgument one will open dig.bat in scribus
-- dig will then exit after editing the batch file.
Usage example:|> rnip 1 | dig 
Usage example:|> dig 1.1.1.1 22 --edit
Usage example:|> do 20 | dig -s
</pre>

## `glasspool`
<a id="glasspool"></a>
<pre>
Glasspool sshfs shell/computer mirroring || GP || glassp
Switches scope of commands to a supplied object
Usage: glasspool [object: shell|computer] -- switch scope to piped object
Usage: glasspool [#] -- switch scope to the shell or computer at BUFFER index #
Usage: glasspool -r [#] -- switch scope to reverse shell at rsi index #
-- n.b. rshell index starts at 1 not 0 !!
Usage: glasspool [-m|menu] -- display BUFFER and RSI menu and switch scope to selection
-- unlike @B -m, glasspool -m will display both  BUFFER shells and rshells
Usage: gp [option] -- abreviation for glasspool, for qol
N.B. -- glasspool is the glassp option in rsi and malp
N.B. -- commands that are local only will not translate through glasspool
N.B. -- the term 'glass puddle' refers to glasspool in computer object mode
Usage: glasspool [-d] [command_string] [index|object]
-- execute a command or string of commands upon initialization
--eg: gp -d " echo cleaning up | rclean @B 1 | return " @B 1 
Usage: glasspool [-d] [command_string] [-r|-m] [index]
-- execute commands on initialization with -r|-m options
--eg: gp -d " do 1 -f this.bat " -r 1
--eg: macro -s bob "echo burger " |  | gp -d bob -m
</pre>

## `cob`
<a id="cob"></a>
<pre>
Cobble || custom object || cob || meta buffer
Usage: cob set [key] [val] -- set custom object key to val
-- returns string on success or error
Maps:
-- create a map within the custom object by using {} as your val
--eg: cob set newmap {}
-- you may set a key within an existing map usign dot syntax:
--eg: cob set newmap.submap {}
--eg: cob set newmap.submap.foo bar
---- the map must already exist in order to add an index to the map
-- create a new list in the custom object by using [] as your val
--eg: cob set newlist []
---- it is not possible to set a non-existant list index
------ use cob push instead
Usage: cob get [key] -- get value of custom object key
-- returns value at key on successs, string on failure
-- returns @reference (pointer) if value is a function
-- use dot reference to retrieve nested elements of lists and maps
--eg: cob get foo.bar
--eg: cob get foo.bar.1 -- where 1 is index 1 of a list
Usage: cob push [key] [value] -- push a value to a list or map
-- pushing an index to a map sets the value of that index to a numerical 1
-- you may push lists and maps by passing [] and {} respectively
--eg: cob set newlist [] || cob push newlist {} || cob set newlist.0.a b
----: get newlist.0.a | echo // b
Usage: cob return -- returns the raw custom object
-- pipe to command.code to decompile the object
-- ie: cob return | code
Usage: cob inspect [opt:key] -- returns key/value pair information of custom object
-- returns a string pairing each key with its [truncated] value
-- values are truncated to make the object easier to inspect
-- please use cob get if you want the actual element
-- passing a key will inspect the key, if possible
--eg: cob inspect HOME
-- use dot syntax to traverse maps and lists:
--eg: cob inspect mys0.__isa
Usage: cob indexes -- return custom object indexes as a LIST
-- pipe to the string command to stringify
Usage: cob search [val] --  search for index of val
-- returns string; key or failure message
Inactive: cob sign -- future ability to sign custom object
Usage: cob del [key] -- delete key and its value from custom object
-- use dot syntax to traverse maps and lists
--eg: cob del dictionary.33
-- returns string on success or failure
Usage: cob purge -- purge the custom object
Usage: cob validate -- ensure the custom_object contains indexes:
--: macros
--: stack_pool
--: HOME
--: this avoids crashes when those indexes don't exist
--: this is run by 5hell automatically in many cases
Usage: cob reset -- reset the custom object to startup conditions 
Usage: cob install [key] -- install a function residing in the custom object at [key]
-- this will add the function as a 5hell command (it will show up in help)
-- functions must still follow the standard template to avoid errors
-- the funciton will not persist after 5hell is closed
-- please compile your custom function into 5hell.src for persistent functions
Advanced: the cerebrum command loads the dictionary to the custom object
-- it is loaded to custom_object.dictionary and can be removed by passing the 'purge' param to cerebrum
-- this is allows you to use the dictionary between nested shell.launches with only a single run of cerebrum

Tokens: 
NOTE: when passing null or 0 (zero) use tokens:
-- @n == null
-- @z == 0
--eg: set a {} || set a.b @z // a.b == 0
----: set a.c 0 // a.c == "0"
----: set a.@z @n // a[0] == null
----: set a.0 zero // a["0"] == "zero"
Exception: a list index is always interpreted as an int
--eg: get mylist.1 will retrieve mylist[1]
-- use \ to escape these tokens
--eg: set fido \@z // fido == @z

N.B.: 5hell.src contains aliases for cob set, cob get, cob push, and cob inspect:
Usage: set [key] [value] -- same as cob set [key] [value]
Usage: get [key] -- same as cob get [key]
Usage: push [key] [val] -- same as cob push [key] [val]
Usage: inspect [key] -- same as cob inspect [key]

EZclip: you may use @o [key]
-- to reference a key in the custom object
-- the @o [key] will be replaced by the key's value, much like using @a, @b, @c for the clipboard
--eg: db -m @o myx0
---- this will run db using the metaxploit object at index myx0 in the custom object (if it exists)
--eg: echo @o HOME.dorc_key
--eg: clipa @o mys0 || clipb @o mys1 || code @o mys0.__isa.scp
</pre>

## `poke`
<a id="poke"></a>
<pre>
touch || poke || makefile || overwrite

Usage: poke [/newpath/to/file] [opt: string]-- create text file at path
-- optionally set contents to string
--eg: poke test.txt -- creates text.txt in the current path
--eg: poke test.txt " hello world " -- creates test.txt and sets content to hello world
--eg: ls -la /lib | poke mylibs.txt -- creates mylibs.txt and pipes the output of ls -la /lib into it

Usage: poke -n [path] -- create path and/or set content to null.
-- overwrites file content with a null character.

N.B. if file a already exists then the contents will be overwritten if a string supplied
n.b.b. if the string is more than one word use piping or floating quotes to the supply string
</pre>

## `merge`
<a id="merge"></a>
<pre>
Usage: merge file_path_1 file_path_2 --  combine files. file_1 will have file_2 appended to it.
</pre>

## `append`
<a id="append"></a>
<pre>
Usage: append [path_to_file] [text] (works best with pipe) --  add text to end of file.
Usage: append [file_object] [text] -- append text to file object
-- pipe file object to clipa/b/c and use @a/b/c to reference
-- eg: clipb @B 1 -- where BUFFER[1] is a file, then: append @b [text]
Usage: append @clipa|b|c [text] -- append to the end of a clip space.
N.B. @clipa and @clipc will append text directly with no new line. 
 -- @clipb will add a new line and then append text.
</pre>

## `dfit`
<a id="dfit"></a>
<pre>
Usage: dfit [path_to_file]
Takes text file and splits contents by newline, joins by comma and outputs to a.csv by default.
As the name suggests, this is for making dictionary files. Output is a csv (comma separated values) file.
</pre>

## `chop`
<a id="chop"></a>
<pre>
CHOP || DELIMITER || FILE TOOLS || clipboard tools || split
Usage: chop [input] [index] [delimiter] [output]
Usage: chop [path_to_file|@clipa|b|c] [index] [delimiter] [output_filename] -- chop a file
param: path_to_file -- file to chop
-- if path_to_file is @clipa, @clipb, or @clipc it will chop the clipboard instead
-- clipboard contents must be a string
param: index -- keep column of elements at index of split
-- default: 0
param: delimiter -- split each line at this pattern
-- default: char(32) aka a sapce
-- to use char(10) as a delimiter pass "/n" or a piped newline for the delimiter parameter
-- one way to pipe a newline is: code -c 10 | clipa -- this will place a newline in the clipboard
---- then: chop [path] [index] @a [outpath]
param: output_filename -- name for outfile
-- prompts for output filename if not supplied
-- outputs to current path with filename: output_filename 
-- output_filename may be @clipa, @clipb, or @clipc to output to clipboards instead

Usage Example: text to chop:

big bada boom
ding dong daddy
abracadabra

* and: index is 1, delimiter is: 'da'
* the output would be:

boom
ddy
bra
</pre>

## `gopher`
<a id="gopher"></a>
<pre>
Gopher: decipher tool
Usage: gopher [/path/to/file|file_object|hash_string|hash_list|@tbuf] -- decipher hashes using onboard dictionary or crypto.decipher.
-- outputs to /current_path/dump.txt
-- see cerebrum for dictionary options.
-- gopher [/path] -- decipher contents of path
-- gopher [object] -- decipher piped file object
-- gopher [list] -- decipher piped list of strings
-- gopher [string] -- decipher hash string (with or without preceding user: )
-- gopher @tbuf -- deciphers contents of @tbuf
-- tbuf is set when tree encounters a user:hash pair in /home or /etc/passwd
-- eg: gopher user:ee11cbb19052e40b07aac0ca060c23ee or gopher ee11cbb19052e40b07aac0ca060c23ee
N.B. function takes string, file_object, list. function writes to dump.txt. function returns string.
Advanced: gopher runs recursively on each line therefore each line of a file or list or string may:
-- be a user:hash string
-- be a hash string
-- be a path to a file
-- contain a list of the aforementioned types
</pre>

## `grep`
<a id="grep"></a>
<pre>
GREP || get regular expression || regex

Usage: grep [opt:-f|-n|-p] [pattern] [opt: search_path (default: / ) | object] 
-- supports partial matches and limited regular expressions.

Usage: grep [pattern] [search_path|object] -- grep for text in files and folders
-- searches for text matching a given pattern
-- returns all matching text, with line numbers and positions, found in search_path
-- search_path may be a file, or folder, or object
-- descends folders and files from search_path
-- descends from / on object if search_path is a shell or computer object
-- descends from path of file if search_path is a file object

Usage: grep [-f|-F] [pattern] [search_path|object] -- grep for file
-- searches search_path or piped object for a file with name matching pattern 
-- piped computer and shell objects will be searched from the / directory.
-- piped file objects will be searched from the path of the file.
-- passing f returns the first file found
-- passing F returns the last file found
---- what coutns as a first match is still a w.i.p....

Usage: grep [-n|-fn|-Fn] [pattern] [search_path|object] -- grep for file name
-- searches search_path for file with name matching pattern
-- passing f returns the first file found
-- passing F returns the last file found
-- returns the file name as a string
-- uses the same search method as -f
-- the -fn option is equivalent to the -n option

Usage: grep [-p|-fp|-Fp] [pattern] [search_path|object] -- grep for file path
-- searches search_path for file with name matching pattern
-- passing f returns the first file found
-- passing F returns the last file found
-- returns the file path as a string
-- uses same search method as -f
-- -fp option is equivalent to -p option

Usage: grep [-a|-fa|-Fa] [pattern] [path|object] 
-- returns a list of all file objects matching the pattern

current regex tokens (more planned):
c   matches any literal character 'c'
-- bob matches bob anywhere in the text.
^   match pattern from beginning of word
-- ^ber matches bertha  does not match robert
$   match end of line (goes at end of pattern)
-- .txt$ matches file.txt does not match file.txt.src
\#   matches one or more of preceding character
-- c# matches c, cc, ccc, cccc 
\*   matches any unicode char (wildcard)
-- *#:*#  matches root:password, email@domain.com:password, xyz:1234
- - - - - - - - - - - - - - - - - - - - - - - - - 
Important! Runtime depends on length of pattern and size of text to check. 
Since grep will recurse any folders in a given path, this command could result in very long run times. 
It is up to you to limit the scope of your searches accordingly.
</pre>

## `tree`
<a id="tree"></a>
<pre>
tree || list files || file grep
Usage: tree -- view filesystem tree (from / if no argument)
Usage: tree [path|object] -- view filesystem from path down
Usage: tree [opt: path(string)|object(object)] [opt: grep_target(string)] [quiet: 1|0] [opt: r|y|n]
-- [path] - path to descend
-- [object] - shell or computer: descends from / on object
-- [object] - file: descends from path of file object on said object
-- [grep_target] - search for target file by name
---- matches exact name (no regex)
---- returns the file as an object if found
-- [1|0] -  1 = quiet, supress output
-- [1|0] -  0 = verbose, print output
-- [r|n|y] - r = send to t_buf, n = ignore, y = decipher (default is r)
---- this option determines where bank.txt, mail.txt, passwd, and others are stored when encountered
---- see command.clipa|b|c for more (ie clipb -h)
-- e.g: tree / database.csv 1 N | file -b 
---- find database.csv on filesystem, display properties, pipe to BUFFER
N.B. You may use @a, @b, @c or @clipa, @clipb, @clipc to reference [object]
-- -- -- -- -- --
New: tree -f [path|object] [opt: 1|0 ]
-- tree a directory or object and enumerate all files 
-- omitting path|object, and opt defaults to the / path
-- [opt: 1] - quiet mode; suppress output.
-- [opt: 0] - print output; default
---- omitting this option will default to printing output
-- enumerates to the enum buffer
---- see enum -h for instructions on how to use it
\- - - - - - - - - - - - - - - - - - - details - - - - - - - - - - - - - - - - - - - 
Usage: tree -f [path] -- trees from path, enumerates file objects to enum, prints output
-- returns string
Usage: tree -f [object] -- trees from object's directory, enumerates, prints output
-- returns string
Usage: tree -f [path|object] [1]-- performs as above but does not print output
-- returns 0
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Usage: tree -r [path|object] -- trees from path or object's dir 
-- returns output as a list of file objects
-- does not print filesystem output
-- does not enumerate output
</pre>

## `makfit`
<a id="makfit"></a>
<pre>
File Compression || File Size || MAKFIT
Make it fit file compression tool by Plu70
File sizes are (mostly) determined by name. This tool will
-- build files with different names until at or below the desired size
-- if the -n option is used, no input file is used
---- instead a dummy file is used and saved as the discovered name

Usage: makfit [/path.src] [target_size_in_bytes] [opt: -A --include uppercase]
-- target size in bytes determines ceiling for acceptable file size
---- min 120000, max unlimited however it is unlikely to see > 10MB
-- will change the file's name back to the name of the .src when done
-- builds to size and outputs to parent path of .src file

Extra: makfit [-n] [target_size_in_bytes] [opt:-A] -- do not use a source file 
-- final filename may be used when compiling any script
-- this allows you to find a filename without supplying a source file
Note: when successful makfit will return the compressed file as an object
Usage Example:
|> poke my.src | scribus | makfit my.src 150000 | run
</pre>

## `make`
<a id="make"></a>
<pre>
Make || Build
Usage: make [/path/file.src] [/destination/folder] [bool_importable: true/false | 1/0]
-- build the .src file and ouput to destination folder.
-- final file name will be input file name with .src stripped.
-- e.g. make /root/src/5hell.src /bin 
-- build 5hell.src into a binary and output to: /bin/5hell
-- n.b. make requires the source file to have the .src extension.
-- importable code can be imported by other sources when building.
-- this allows you to build programs with more than 160 characters by importing multiple source files.
</pre>

## `felix`
<a id="felix"></a>
<pre>
Usage: felix -- file explorer v 1.2, (wip)
-- while running:
</pre>

## `file`
<a id="file"></a>
<pre>
File || File Properties || Inspect File
\================================
Usage: file [opt:-l|-c|-b|-r|-n|-p|-P|-e|-d|-ie] [/path|file_object] [opt:shell|computer|file]

File shows the properties information for the given file. 
It takes a path or file_object and returns file information as a stirng.

Usage: file [opt] [/path] -- return information about the file at /path
Usage: file [opt] [file_object] -- return information about the file object
-- see bottom for flag definitions
Usage: file [opt] [/path|target_file_object] [search_file_object] 
-- returns file info for target_file or path on search_file_object
-- computer and shell search_file_objects: relative paths use present working directory
---- prefers absolute path 
-- target_file_object will be treed from the /

-- passing a search_file_object and a target_file_object is superfluous
--ie: file -c [object] or file -c [/path] [object]
Usage: file [-e|-d|-ie] [path] [opt:password] 
-- encrypt, decrypt, or check encryption using crypto.so
-- [-e] -- encrypt file at path
-- [-d] -- decrypt file at path
---- both -e and -d prompt for a password if not supplied
---- passing a folder to -e or -d will act on the folder's subcontents, recursively
---- folders themselves cannot be encrypted, only their contents
-- [-ie] -- check if file at path is encrypted; no password is used

Usage: [flag definitions]
-- file [-l] [path|object] [opt:object] -- return number of lines in the file as a string
-- file [-c] [path|object] [opt:object] -- return number of chars in the file as a string
-- file [-s] [path|object] [opt:object] -- return size of the file as a string
-- file [-b] [path|object] [opt:object] -- send file to BUFFER (and display file info)
---- also returns the file as an object
---- eg: grep -f *#.log$ /var | file -b
-- file [-r] [path|object] [opt:object] -- return the file as an object
-- file [-n] [path|object] [opt:object] -- return the name of file 
-- file [-p|path] [path|object] [opt:object] -- return the path of file
-- file [-P|parent] [path|object] [opt:object] -- return the parent path of file
</pre>

## `brutus`
<a id="brutus"></a>
<pre>
Brutus || dictionary attack || brute force || ssh || passwords || hashes

Usage: brutus -- attempt to gain root pass and shell using onboard dict_a 
-- default onboard dict_a: [1] passwords
-- on success sends shell to BUFFER and password to clipa
-- uses get_shell and is therefore limited to local use
---- except when used in conjuction with mail or ssh

Usage: brutus -i [/path|object] -- 
-- import dictionary (may be csv or newline separated values)
-- 5hell will attempt to determine the type. Please ensure valid inputs.
-- accepts: path to file or folder, or piped file/folder object
-- See dfit for making a .csv from a newline separated dictionary file.
-- See cerebrum for altering onboard dict_a

NOTE: both of the above use get_shell(u,p) and therefore are for local use only
-- ie: does not work through glasspool

Usage: brutus [-s|-f] [ip] [opt:port] [opt:shell_object] -- 
-- -s == ssh brute force attack against ip
-- -f == ftp brute force attack against ip
-- equal to ssh root@-brutus [ip] 22 [ssh] 
-- passing a shell routes the connection through that shell
---- instead of the active shell
-- prompts for ip if not passed
-- defaults to port 22 if not passed
Alternative: ssh root@-brutus [ip] [port] [ssh|ftp]
-- to brute force ssh and ftp ports
-- use glasspool to switch scope to the desired shell before running the attack

Advanced: mail [email] [-brutus]
-- to brute force an email using mail and brutus
-- this is also available when using mail from it's menu
-- this does NOT use get_shell and therefore is not limited to local use

NOTE: db does not translate through GLASSPOOL
</pre>

## `cerebrum`
<a id="cerebrum"></a>
<pre>
Magnum Cerebrum || Big Brain || dictionary || word list || rockme rocku
Usage: cerebrum -- Expand dict_a to 300k+ passwords and store in custom_object.dictionary
-- use pwgen instead to save passwords locally to file

Usage: cerebrum -i [/path/to/file|file_object|list] -- import a custom dictionary
-- file may be csv or nsv: ',' or char(10) 
-- may be file, directory, piped object, or list
-- you may now import either tables/tp or tables/t5 with -i

Usage: cerebrum -i [ip|@home] -- import dictionary file or folder from @home server
-- searches for tables/tp on server at provided ip or @home ip
-- see help @home for more information about the @home server
-- @home will paste the @home ip any time it is used from the command line
---- not just when using cerebrum
-- if calling cerebrum -i internally with custom code:
---- be sure to pass an actual ip address or the gco.HOME.ip index for that param

Usage: cerebrum -p -- load only common player passwords (wip)

Usage: cerebrum --purge -- purge the onboard dictionary (to save memory)

Advanced: -- passing -d as any argument returns the onboard dictionary as a list
---- importing a string of passwords directly is not supported, use brutus for that.
Note: cerebrum, without arguments, will autodetect tables/tp and offer to import it if present
-- cerebrum will autoload tables/tp on launch
</pre>

## `jtr`
<a id="jtr"></a>
<pre>
John The Ripper password generator
Usage: jtr [set_size] [word_length(1-15)] [opt:aAns] [opt:1]
a - lowercase alpha
A - uppercase alpha
n - numbers
s - special characters
note: at least ONE option must be selected
1 -- optional only first letter is upper case (any value here is considered 1/true), leave blank for false.
</pre>

## `string`
<a id="string"></a>
<pre>
String | To String | List | Join | replace
String and List functions (more to be added over time).
-- I didn't want to make a string command AND a list command so both are here.
Lists: Stringifying lists:
Usage: string [opt] [list] -- converts a list to a string and returns it
-- use the clipboards and @a|@b|@c or piping to supply the list
Usage: string [lista] [listb] -- will return lista concatenated with listb
-- returns a LIST
-- pipe the resulting list back into string to stringify
-- e.g.: string @a @b | string -n | poke new.txt
-- I justify this as 'stringing two lists together' 

Option: -n -- join list with char(10)
Option: -c -- join list with commas
Option: -C -- join list with colons
Option: -s -- join list with semicolons
Option: -S -- join list with spaces
Note: the default join delimiter is char(10)
-- i.e: string [list] is the same as string [-n] [list]

Strings: Stringify strings:
Usage: string [-t] [target_text] -- returns trimmed text
-- ie: it removes whitespace
Usage: string [-p] [target_text] -- strip the noparse richtext tag from a string and return it
Usage: string [-N] [target_text] -- return string with the noparse tag prepended to each line
Usage: string [-r] [target_text] [replacement_text] [string_to_parse]
-- replace all instances of target_text with replacement_text within string_to_parse
-- use piping, easy clip, and " text blocks " to supply strings
-- use @0 alone in order to indicate a zero space character; aka remove
-- use @32 in order to indicate a space (char(32))
-- use @10 to indicate a newline (char(10))
-- use @[int] to specify any other character code
-- uses miniscript regex, you must escape . with \.
-- uses miniscript regex; you can ignore the above and use regex instead
-- all params should be strings and the function returns the modified string
Usage: string [-R] [text_to_remove] [string_to_parse] -- returns string with text removed
-- uses regex, you must escape . with \.
Numbers: Stringify numbers
Usage: string [number] -- returns str(number) as a string
-- please note that numbers are passed as numbers, not strings, when piped
Numberify strings:
Usage: string [-i] [string] -- converts a string to an integer and returns an integer
--eg: string -i 100
Usage: string [-v] [string] -- converts a string to a floating point value and returns it
--eg: string -v 3.12159
Listify strings
Usage: string [-l] [delim] [string] -- turn a string split at [delim] into a list
-- use floating quotes or piping to supply complex input strings
--eg: string -l , one,two,three
--eg: string -l , " one, two, three, four " 
Usage: string [-L] [delim] [string] -- as above but applys .to_int to each element
-- ie: returns a list of integers
--eg: string -L , 1,2,3,4
Note: maps are not yet supported
</pre>

## `diff`
<a id="diff"></a>
<pre>
Usage: diff [opt] [input_1] [input_2]
</pre>

## `if`
<a id="if"></a>
<pre>
IF || if statement || conditionals
Usage: if [positive_return] [negative_return] [condition_1] [condition_2] -- a binary if statement
-- compares condition_1 to condition_2
-- returns positive_return if equal
-- returns negative_return if not-equal
-- conditions and returns may be any data type
NOTE: functions as returns are returned by function reference
-- pipe to code for execution
-- functions as conditions are executed in place
---- it is not (currently) possible to pass parameters to these functions
NOTE: any parameter may be a command, with parameters, if:
-- the first word of the string is a command name
-- the string itself is surrounded by floating single quotes
--eg: file -r /etc | clipa |  | if " echo true " " echo false " @a " grep -f etc  " 
-- which would result in true printing to the screen (provided etc actually existed)
</pre>

## `sl`
<a id="sl"></a>
<pre>
Symlink || symbolic link || file path
Usage: sl [path] -- returns true if path is a symlink, returns false otherwise
Usage: sl [path] [/new_path/new_name] -- create a symbolic link at path
-- returns 1 on success, string on fail
</pre>

## `zc`
<a id="zc"></a>
<pre>
Zer0Chill || Zeroday || zero day || autopatcher || autosolver
Usage: zc [neurobox_username] [neurobox_password] [opt:metaLib_name|metaLib_object]
-- if a MetaLib is not supplied, zc will use the currently linked MetaLib
---- or return an error if one is not linked
-- zc will: obtain debugLibrary from a MetaLib
---- scan the debugLibrary and parse the output
---- construct a patched version of the output
---- write the original and patched versions to:
------ orig and patch.zd, respectively
---- BUFFER all of the above
NOTE: at this time lib patching is not automated
NOTE: at this time unit-testing is not automated
----: this is because both of these actions may result in a lock-out
----: please analyze the output and unit-test and patch carefully
- - - - - - - - -
DebugLibary Unit Testing:
Procedure: once zc has been run:
-- run the command: diff -l orig patch.zd | clipa | malp
-- select the debugLibrary from the BUFFER
-- select option [2] - unit_testing
-- input @a to use the list stored in clipa
-- if successful, output string will be BUFFERED
-- select the output text from the BUFFER
-- select [s] - save and enter a filename for the zeroday data
MetaLib Patching:
Procedure: once zc and unit_testing are complete:
-- select the debugLibrary from the BUFFER 
-- select patch and enter the path to patch.zd
-- you may also use the code command: 
--eg: code @B [#] -- where # is the index of the debugLibrary in the BUFFER
</pre>

## `macro`
<a id="macro"></a>
<pre>
macro || alias || auto || variable || global
* A macro allows you to define a set of actions commands to execute using a single command.
* Use floating quotes to wrap the chain of commands and type them as you would normally on the CLI.
* Macro's are essentially 'on the fly' do scripts that are stored in the custom object.
* You may retrieve a macro from the custom object (for piping, or whatever) with get [macro_name].
* You may pipe a do script into a macro. A do script may execute a macro with: do # [macro_name].
* This makes the two interchangeable, allowing you to choose the exact behavior you want performed.
Usage: macro [-s|set] [name] [string] -- set a macro to the given string
-- eg: macro -s foo " echo bar | clipa "
-- escape ez_clip aliases with \ when defining a macro
----eg: macro set foo " echo \@b " 
---- will use the value in @b when the macro is executed instead of when it is defined
Usage: macro [-s|set] [name] [-f] [/path] -- import macro from file
-- supports multiple-line macros: each newline character is replaced by:  |  | 
---- which will join the lines without piping output from one line to the next
--eg: if file.mac contains:
echo one
echo two
echo three
---- then macro -s tst -f file.mac will result in a macro set as:
--: echo one |  | echo two |  | echo three
Usage: macro [name] [opt: input_to_pipe] -- fire the named macro, the macro prepend is optional
NOTE: All macros may be fired from the command line by typing the macro name
-- this includes using macros within a string of piped commands
--eg: |> macro -s gotime " echo it's go time "
----: |> echo three | echo two | echo one | gotime | echo " what time is it? "
-- see the Piping section below for the [input_to_pipe] details
Note: a macro chain will return the final output of the chain
Usage: macro [-d|del] [name] -- delete the named macro
-- eg: macro -d foo
Usage: macro [-l|list] -- show all macros and their definitions
-- all macros are stored in the macro registry map: get_custom_object.macros
Usage: macro [-g|get] [macro] -- return the macro string of the given macro

NOTE: invoking the macro command will restore the macro registry index
--: this will avoid a crash if the index is accidentally removed
NOTE: a macro will return the output of the last command in the chain

Piping: when calling a macro, piping works differently than normal.
When creating a macro you may place one or more @pipe pointers within the string.
When calling a macro, the @pipe pointer will be replaced by piped input.
Example: input not piped vs input piped
|> macro set foo " echo foo "
--output of: |> foo bar ==> foo
|> macro set foo " echo foo @pipe "
--output of: |> foo bar ==> foo bar
-- "bar" would be the [input_to_pipe] to the first command in the macro chain
Note: each instance of @pipe will be replaced by the piped input
Note: you may escape @pipe with \@pipe
N.B. -- remember that [\@pipe | @pipe] goes in the macro set string
---- not in the macro call
See Also: do -h, help conventions, help alias, help automation
</pre>

## `tdump`
<a id="tdump"></a>
<pre>
Transmission Buffer Dump
Usage: tdump [opt: path] -- dump tbuf (transmission buffer) to file
-- writes to specified path or default path of home_directory+/pass
</pre>

## `calc`
<a id="calc"></a>
<pre>
calc [arg1] [arg2: + - * / (or: add, sub, mul, div)] [arg3] 
calc (a)sin/(a)cos/(a)tan/ [arg]
calc pwr/abs/sqrt [arg]
calc [min] rnd [max] |or| calc rnd [max]   (min=0)
calc [arg1] pwr [arg2]
calc [arg1] == [arg2] (check if equal.)
Use pi to indicate pi. eg: calc pi || calc pi / 2 || calc cos pi || etc
N.B. If an input is a function it will be evaluated
-- EXCEPT when using the equals function (ie x == y)
-- in this case function pointers will be compared.
You may use @a or @clipa, @b or @clipb, @c or @clipc to reference the clipboards.
-- ie calc @a + @b
Returns: evaluation as string.
calc [n] base [p] -- returns the padic representation of the number: n to evaluate in base: p
--eg: calc 42 base 2 -> 101010
</pre>

## `code`
<a id="code"></a>
<pre>
character code || cipher || encryption || || decryption || decompiler
CODE encode and decode utility
Supports standard Caesar cipher and 5hell's MuninCipher for encryption.
May also return ascii character codes, decompile objects, and execute functions.

Ascii codes:
Usage: code [char] -- returns ascii code(s) for char
--eg: code " foo bar " // 102, 111, 111, 32, 98, 97, 114
Usage: code -c [int] -- returns ascii char(int)
--eg: code -c 102 // f

Execute code:
Usage: code [any_function|any_object] -- sends object to decompiler to view object map.
-- will evaluate piped functions or display an object's API map
--eg: cob get myCustomFunction | code -- execute your custom function
--eg: zap [mem] [val] | code -- view the map for the resulting game object

Encode:
Advanced: code [-d|-e] [input] -- decode|encode input using standard caesar cipher
Advanced: code [-a|-b] [opt:input] -- encode|decode using MuninCipher(tm)
-- prompts for input if not supplied
-- enter text to encrypt|decrypt on a single line up to 40,000 chars
-- if input is more than one word wrap with floating quotes or pipe the input
--eg: code -a " please encode this string "
--eg: cat somefile.txt | code -a | poke somefile.txt -- encipher a file's contents
--eg: cat somefile.txt | code -b -- decipher a file's contents
Advanced: code [-f|-fa|-fb] [/file/path|file_object] -- encode|decode contents of file
-- works directly on a file without piping
-- option [-f] [path] -- prompts for enc/dec
-- option [-fa|-af] [path] -- encode contents of path with MuninCipher
-- option [-fb|-bf] [path] -- decode contents of path with MuninCipher
N.B. MuninCipher is tamper resistant! Attempting to copy/paste the cipher text can/will corrupt it!
N.B. MuninCipher is a cipher, not true encryption! Do not trust it with your life, your money, or your waifu
</pre>

## `silentclean`
<a id="silentclean"></a>
<pre>
silentclean || silentclean || log wipe || scrubber || corrupt logs
Usage: silentclean \[opt:-d|-n|--n\] \[opt: shell|computer\] -- corrupt the system.log
\-- operates on active computer/shell object or piped computer/shell object
Usage: silentclean -- corrupt system.log of active computer/shell object
\--
Usage: silentclean [-d] -- delete rkit and/or 5hell, then corrupt system.log
\--
Usage: silentclean [-n] -- nuke system, delete rkit/5hell, corrupt system.log
\-- use [--n] on systems running Xorg (aka a home pc)
\--
Alias: you may use sc in place of silentclean
\-- e.g: |> silentclean -d is the same as:
\--------|> sc -d
\-- this is defined in 5hell.src >> aliases section
N.B. run sc as root since /var is usually write protected.

Silentclean now supports piped objects!
Usage: silentclean  [shell|computer] -- run silentclean on a piped computer or shell 
Usage: silentclean [-d|-n] [shell|computer] -- run silentclean [-d|-n] on a piped object
NOTE: if silentclean detects Xorg as a running process on the machine:
\-- it will determine you are on a home pc and require an override to execute
\-- this is to help prevent accidentally nuking yourself
\-- the override flag is --n
\--ie: silentclean --n

N.B. silentclean [-n|--n] will remove the following:
\-- /lib, /boot, /sys, 5hell, rkit, and 5hell.d if present

Advanced: 
By default, silentclean will create the file /var/system.bak and move it over /var/system.log.
While this works wonders for preventing traces, when the log regenerates (as it eventually will) it will
generate with guest-readable permissions. To combat this, or to engage in other creative shenanigans, you
may create a file called 'silentclean' or rename an empty log file, or other file, as silentclean, and this
command (as well as rclean) will select that file to move over system.log. In this manner, the log is not
actually corrupted, and thus retains it's permissions when the next log write occurs.
Naturally, this allows you to leave 'custom' log files behind in addition to just covering your tracks.
</pre>

## `pwgen`
<a id="pwgen"></a>
<pre>
pwgen: generate a friggin lot of passwords with hashes.
Usage: pwgen -- generate ~/rkit/tables/tp/ and files with one password per line
Usage: pwgen hash -- generate ~/rkit/tables/t5 and files with hash=pw one per line
Use cerebrum to expand onboard dictionary.
NOTE: the tables folder does not need to be in rkit to be used
-- including it in rkit allows you to upload it with rkit to targets
---- move it to a different folder if this is not desired behavior
</pre>

## `glosure`
<a id="glosure"></a>
<pre>
Usage: glosure -- invoke Glosure REPL, type ;quit to quit.
  Usage: glosure [-e|exec] "code"  -- execute Glosure code.
  Glosure interpreter version: 01522aa. For a more detailed guide read https://github.com/rocketorbit/Glosure/blob/main/Tutorial.md
  Warning: This command is a programming language! Your error may result in crash!
  
  Short reference:
  (function arg1 arg2 argn) essentially behaves like function(arg1, arg2, argn) in miniscript
  This language has 7 datatypes, string number list map null are the same as GreyScript string number list map null, glosure means GreyScript function, lambda means a Glosure "anonymous function"
  Use 'hi' to repersent a string "hi"
  Use 42 to repersent a number 42, true is a predefined variable with a value 1, false is a predefined variable with a value 0.
  null is a predefined variable with a value null.
  Use (list 1 2 'a') to repersent a list [1, 2, "a"]
  Use (map 'a' 1 'b' 2) to repersent a map {"a": 1, "b": 2}, globals is a predefined map which references the GreyScript globals map.
  Use (def name 'value') to define a variable name with a value "value"
  Use (lambda (arguments) (body)) to define an anonymous lambda expression(aka function), you can bind it to a variable name with syntax like (def square (lambda (x) (* x x))). This is the only native datatype and you should NEVER pass this through API.
  Use (glosure (arguments) (body)) to define an anonymous glosure(aka GreyScript function), you can bind it to a variable name with syntax like (def square (glosure (x) (* x x))). This is only used for GreyScript interop and you should not use this when you can use lambda instead.
  Use (while expression statement) to loop without recursion.
  Use (if expression statement optional_else_statement) to use if or if-else statement.
  Use (function_name argument_1 argument_2 argument_N) to call a binded lambda or a binded glosure.
  Use (dot object method_name argument_1 argument_2 argument_N) to access a method under a grey hack object. This is dangerous and can cause crash if used incorrectly, read Manual.exe while using it.
  (at name index) essentially works like name[index], you can use it on any container.
  (set name index value) essentially works like name[index] = value, you can use it on any container. It can also used to assign any glosure to host env with globalsWarning: Advanced feature are not for people who dont know what they are doing! Your error will very likely result in crash!
</pre>

## `htop`
<a id="htop"></a>
<pre>
htop || actually htop
Usage: htop -- show processes running on the active host_computer
-- to end the running process, use the command: purge -d [opt:name]
---- or note the daemon name printed on the screen and 
---- remove the corresponding line from /root/5hell.d
---- or delete the file entirely
-- if the file cannot be created, then the process must be exited with ctrl+c
-- when glasspool is active:
-- the active shell/computer is the active host_computer
Usage: htop -- show processes running on active host_computer
--eg: htop
Usage: htop [#] -- show processes running on the buffer object at the specified index.
--eg: htop 1
Usage: htop [shell|computer] -- show processes running on the piped object.
--eg: clipa @B 1 | htop
--eg: rsi 1 7 | htop
</pre>

## `dm`
<a id="dm"></a>
<pre>
Daemon Manager || daemons || demons || donuts || pete || repeat
**
Definition: a daemon, in 5hell's context, is a command
that loops until manually terminated. These commands will write to, 
and monitor, a special file named 5hell.d that is generated
when any new daemon is started, if it doesn't already exist. When a
particular daemon's entry is removed from this file that daemon
will stop and that 5hell session will return to it's command prompt.
The net effect is allowing you to stop these processes without
having to use ctrl+c, which would end the script.
**
Note: deleting 5hell.d will terminate all daemons at once
and is the preferred way of doing so.
Note: silentclean [-d|-n] and rclean [-d|-n] will
attempt to clean up 5hell.d, if it exists.

Usage: dm [opt] [opt] -- manage daemon's operating in other terminals

Usage: dm -- print active daemons

Usage dm stop -- terminate a daemon via menu selection

Usage: dm stop [id] -- stop a specific daemon
-- eg: dm stop htop_01

Usage: dm stop all -- stop all daemons
-- deletes 5hell.d
</pre>

## `tws`
<a id="tws"></a>
<pre>
tws || Track While Scan || Lightning fast buffer management
Quickly display/modify the buffer
Usage: tws [query] [opt:modes]
-- e.g. tws s | list all shell buffers.
-- operation defaults to list.
Querying:
-- every letter in a query indicates a filter of some sort
-- filters get or'd together, meaning if a buffer hits any filter, it is operated on
-- user level filters are an exception (see later).
-- s: shell
-- c: computer
-- f: file
-- user level filters can be used to get all buffers of matching permissions
-- user level filters are or'd together, but not with other filters
-- g: guest
-- u: user
-- r: root
-- e.g. tws sr list | List all root shells. Not list of all shells and root buffers
-- a query can be negated with !
-- tws !g | List all non guest buffers
-- cascade filters are filters that expand into multiple filters within a query
-- e.g. U filter will add both "user" and "root" filters into the query.
-- G: guest and up
-- U: user and up
-- F: file and up
-- C: computer and up
Modes:
-- l: List buffers.
-- e.g. tws Cu l | List all user level computer and shell buffers
-- p: Removes color formatting from output. Combined with l mode
-- e.g. tws F pl | List all buffers without colors
-- useful if you parse the output later
-- d: Drop buffers.
-- e.g. tws f d | Drop all file buffers.
</pre>

## `target`
<a id="target"></a>
<pre>
Target || Target IP || Target Port
Usage: target -- return current target ip and port
Usage: target ip -- returns current target ip
Usage: target pt -- return current target port
Usage: target [ip] -- set target ip address (ip must be a valid ip)
Usage: target -p [port] -- set target port (returns target port if not supplied)
Usage: target [ip] [port] -- set targt ip and port in a single command

Note: target ip and port are used by 5phinx, transmit, meta, db, probe, and others.
</pre>

## `transmit`
<a id="transmit"></a>
<pre>
Transmit || t_buf transmission buffer transmission protocol || @tbuf || TBUF
Usage: transmit [opt: 1|0] [opt:password] 
-- transmit @t_buf to your @home server. 
-- set @home credentials in 5hell.src before building 5hell
-- options: 1 == wait for reply, 0 (or blank) == don't wait for reply
--eg: transmit 1
--eg: transmit 0
-- use with hashim running on the @home server
---- ensure @home server has the /root/pass file
-- if HOME.pass is not set or left at default:
---- you will be prompted for the password when running the command
-- pass a second argument to bypass the prompt
--eg: transmit 0 securePassword

NOTE: the default password is password
-- transmit will ignore this and prompt you for a password
-- supply the word password again to confirm your password is password
-- alternatively call the command with password as a second argument
--eg: transmit 1 password

Current Default Password: password
</pre>

## `rsi`
<a id="rsi"></a>
<pre>
Reverse Shell Interface || RSI Daemon || Install rshell server
Using rsi requires first setting an rshell server. To do so, rent a proxy, then
install librshell.so (usually from your hackshop). Once you have the lib, you can
type rsi install to install and start the server. Then, navigate to your
proxy's router's port 8080 using Browser.exe and forward your desired port to
port 1222 at your server's lan ip. Use this ip and port when placing your rshells.
Usage: rsi [opt: -d|-i|install|start|stop] [opt: -r|# ] [opt: #]

Usage: rsi -- open rshell_interface server
-- access and control connected reverse shell clients

Usage: rsi [-d|-D] [opt:-r|#] -- daemon mode
-- listen for connections until an rshell connects
-- opens the last (most recent) rshell on connect
-- [-d] -- listen until 1 or more rshells have connected
---- stops listening immediately if 1 or more rshells are already connected
-- [-D] -- listen until a new rshell has connected
---- use this if you don't want to purge rshells between uses
--note: you may pass a menu option that will be executed on the rshell when it connects:
----eg: rsi -d 4 -- opens the most recent rshell connection with glasspool
----eg: rsi -D 7 -- returns the next rshell that connects as an object
----eg: rsi -d 3 -- infiltrate the most recent rshell connection
--note: you mass pass an option flag that will be executed when an rshell connects
----eg: rsi -D -s -- run silentclean on all rshells when a new rshell connects
Usage: rsi [-r] [#] -- return the shell object at rshell index #
-- eg: rsi [-r] 3  -- returns the rshell at index # as an object
Usage: rsi [#]  -- auto-selects the rshell at index [#] and opens the context menu
Usage: rsi [#1] [#2] -- access the rshell at index #1 and auto select menu option [#2]
-- please note, rshell indexes start at 1 not 0
-- eg: rsi 1 7 | gp -- return the first rshell as an object and open in glasspool
----: identical to: gp -r 1
Usage: rsi [-l] -- return the length of the rsi buffer
-- returns the number as a string
Usage: rsi [-p] [opt:y|exclude1:exclude2:...] 
-- close ALL processes on ALL rshells, purging all rshells in the process
-- supplying 'y' by itself will skip confirmation
-- supplying ':' followed by process names or ID's will exclude those processes from the purge
----ie: you may protect individual or named rshells from the purge
---- this also skips confirmation
-- if you wish to exclude a process named 'y' you must pass: y:y
--eg: rsi -p ch4r0n:ps 
---- terminate all processes on all rshells except those named ch4r0n and ps
--eg: rsi -p 1024:4186:9009
---- terminate all processes on all rshells except 1024, 4186, and 9009
--eg: rsi -p y -- terminate all processes on all rshells; no exceptions
--eg: rsi -p y:y -- terminate all processes on all rshells except those named 'y'
-- create a macro with a whitelist to make full use of this
Usage: rsi [-s|-S] -- scrub logs of all rshells (if possible)
-- [-s] -- uses silentclean
-- [-S] -- uses rclean
Usage: rsi [-k|-K] -- scrub logs on and remove rkit from all rshells
-- [-k] -- uses silentclean -d to delete rkit and scrub log
-- [-K] -- uses rclean -d to delete rkit and scrub log
Usage: rsi [-n|-N] -- nuke all rshells
-- [-n] -- uses silentclean -n
-- [-N] -- uses rclean -n
Usage: rsi [-i|install] -- installs the reverse shell server if librshell.so is on the machine
Usage: rsi [start|stop] -- start or stop the installed rshell server
Usage: rsi --export -- return the entire rshell buffer as a list
-- usage example: |> rsi --export | enum -a | enum -b
---- export rsi as a list, enumerate, concatonate the list to the buffer
----ie: add all rshells to the buffer as individual entries

NOTE: rsi is not incorporated into the DaemonManager at this time
-- daemon mode ends when an rshell connects
</pre>

## `scpm`
<a id="scpm"></a>
<pre>
SCPM: 5hell.SCP Menu
Usage: scpm -- from menu select target shell (active shell is shown with an '*'). 
-- input source path and then destination path at prompts.
-- select upload or download. Note the printed trajectories.
-- (these can change when glasspool is involved).
-- if uploading indicate if editing permissions
-- if editing permissions press enter for defaults
-- default is o+rwx before uploading and then o-rwx after uploading.
Always mind permissions! Type lock constantly to feel secure.
Advanced: scpm [string_path|piped_file] -- open scpm menu with path or file.path tagged for scp
Advanced: scpm [piped_shell] -- skip menu and scp to/from piped shell
E.G. - clipb @B 1 | scpm -- use the shell object from buffer[1] with .scp

New: scpm [opt:-u|-d] [opt:copy_from|file_object_from] [opt:copy_to|file_object_to] [opt:shell_object]
-- -u will force upload and skip permissions prompt
-- -d will force download
-- supplying path_from will skip copy_from prompt
-- supplying path_to (must be after path_from) will skip destination prompt
-- supply a shell will skip shell prompt
-- supplying all will skip all prompts
-- parameters may be in any order except path_from must precede path_to
---- eg: clipb @B 1 | scpm /root/rkit /home/guest | run /home/guest/rkit/5hell 
---- eg: clipb @B 1 |  | scpm /root/rkit @b
---- eg: zap [mem] [vuln] | scpm -d /var/system.log /root
</pre>

## `iwlist`
<a id="iwlist"></a>
<pre>
iwlist || wifi networks 
Usage: iwlist -- returns a string containing all wifi networks in range
-- displays bssid, essid, and signal strenghth (power)
-- note: use ifconfig -w or air to connect wifi
Usage: iwlist [-a|air] -- uses the command: air false to display network info
</pre>

## `ifconfig`
<a id="ifconfig"></a>
<pre>
ifconfig || iwconfig || wifi || ethernet || internet || gateway || router
Usage: ifconfig [opt:-l|-p|-c|-w|-g|-d] --  returns network interface information

Usage: ifconfig -- returns connection status and ip information of active computer object

Usage: ifconfig [-l|local] -- returns the lan ip of the active computer object
-- respects glasspool

Usage: ifconfig [-p|public] -- returns the public ip of the active object computer object
-- respects glasspool

Usage: ifconfig [-c|connect] [desired_lan_ip] [desired_gateway] 
-- connect via ethernet to gateway and request lan_ip.
-- useful for bypassing firewalls, in some cases

Usage: ifconfig [-w|wifi] [essid|bssid] [passkey] -- manually connect to a wifi network
-- the computer must be in range of the wifi network in order to connect
-- this a slightly simpler iwconfig:
---- you pass an essid OR a bssid, not both
-- note: use air for cracking wifi networks or accessing wifi via a menu

Usage: ifconfig [-g|gateway] -- returns the lan ip of the active object's gateway (router)

Usage: ifconfig [-d|devices] -- list network devices on active computer object
</pre>

## `air`
<a id="air"></a>
<pre>
AIR || aircrack || aireplay || airmon || wifi cracker
Usage: air -- aircrack menu
-- allows cracking and/or connecting to in-range wifi networks
-- auto-calculates ACKS needed for cracking
-- renames resulting file.cap to [wifi_essid].cap
-- once cracked you may press enter to save the file to current path
---- or type a folder path to move the file to that folder
-- will read .cap files from anywhere on the system
Legend:
Networks appearing in: green have a cracked .cap file
Networks appearing in: orange do not have a cracked .cap file

Usage: air [-f|false] -- same as the iwlist command
-- returns wifi networks in range as a string

Usage: air [-c] [/path_to_file.cap] -- uses aircrack to return passkey from file.cap

Usage: air [-a] [essid|bssid] -- run aireplay on a network from the command line
-- you may supply either bssid or essid, not both

Advanced: A wifi network might have a nested wifi signal within it
-- select option [h] within air to activate detection of nested wifi signals
-- you must be on the nested signal's host wifi network in order to detect and connect to it
-- this allows bypassing firewalls in many instances
-- this does not translate through GLASSPOOL

NOTE: you may use:
----: ifconfig [-w] [essid|bssid]
-- to manually connect to a wifi network
-- see ifconfig -h for more
</pre>

## `probe`
<a id="probe"></a>
<pre>
probe || nmap || portscan

Usage: probe [optional: ip] [optional: port] -- standard whois and portmap
-- sets global target ip and port when invoked
Usage: probe -f [opt:ip] [opt:port] -- full scan; akes longer 
-- gets all reachable, non-firewalled machines on subnet.
-- in many cases it will retreive the same machine list as a standard probe
Usage: probe [-s|show] -- display currently loaded portmap and whois info
-- when local on a network, probe each router by LAN ip to probe that subnet
Quick: probe -q [opt:ip] [opt:port] -- quick scan
-- gets only surface level machines on subnet
Quicker: probe -q -- quick localnet scan
Note: in all cases probe will set target ip and target port.

Legend:
-- red: switch or firewall or closed port
-- a switch is a hardware firewall that cannot be disabled
-- internal ports are always open when accessed via lan ip
---- unless they are firewalled
-- green: open port (includes gateway and internal)
-- magenta: non-switch router/machine with port 8080
-- this port is open only when inside the network
-- cyan: known lib
-- gold: unknown lib
-- orange: no database found
-- white: machine/server/phone
-- grey: lanip: not connected to gateway
---- when probing remotely; machine is part of an inner subnet
------ or the machine does not exist or the machine is busted
---- when probing locally; the machine does not exist or is busted
-- grey: port info: no lib.so / no response
NOTE: if both port info and lan ip are grey;
-- the machine likely does not exist (but not always)
</pre>

## `lanpro`
<a id="lanpro"></a>
<pre>
Usage: lanpro [ip] -- full lan scan
-- returns newline delimited string of lan ip's
-- does not autoset ip or portmap for 5phinx, Use probe [ip]instead.
</pre>

## `nsl`
<a id="nsl"></a>
<pre>
nsl || nslookup || reverse ip lookup || domain to ip
Usage: nsl [opt:-t] [ip|domain] -- uses nslookup on ip|domain and returns domain|ip as a string
Example: nsl www.burger.org | probe  -- gets the ip of burger.org and pipes to probe.
NOTE: nsl will append www. to a domain if it is omitted.
Usage: nsl [ip] -- returns domain linked to ip (reverse lookup)
Usage: nsl [domain] -- returns ip linked to domain (normal lookup)
Ope: [-t] -- passing -t as first param will set global targetIP to ip
</pre>

## `ping`
<a id="ping"></a>
<pre>
Usage: ping [ip address]
Example: ping 192.168.0.1
Note: returns a string.
</pre>

## `whois`
<a id="whois"></a>
<pre>
WHOIS || whois information || network info
Usage: whois [opt:-t] -- returns local netowrk whois information if no params given
Usage: whois [opt:-t] [ip] --  returns whois information for given ip
--eg: whois 1.1.1.1
Usage: whois [opt:-t] [-nb|--getbox] -- run whois on a loop until a Neurobox Network is found
-- avg runtime is less than 20 seconds
-- search automatically terminates if runtime exceedes 1 minute
Opt: [-t] - passing -t as first argument sets global targetIP to ip
--eg: whois -t 1.2.34
--eg: whois -t -nb
--eg: whois -t
Note: flag order matters: -t must come first if it is used
</pre>

## `ssh`
<a id="ssh"></a>
<pre>
Secure Shell Protocol
Usage: ssh [user@pass] [ip] [optional:pt (default 22)]
ssh_usage: ssh [user@-brutus] [ip] [opt:pt] --  remote brute force attack
e.g. ssh root@1234 1.1.1.1 
e.g. ssh root@-brutus 1.2.3.4 21 ftp
Sends shells to BUFFER or you may open immediately.
</pre>

## `sniff`
<a id="sniff"></a>
<pre>
Usage: sniff -- listen to network traffic. Prints a string if connections detected.
-- runs in daemon mode. exits on first sniffed connection (or ctrl+c).
</pre>

## `rshell`
<pre>
<a id="rshell"></a>

REVERSE SHELL || rshell || reverse shell || back door || backdoor
Usage: rshell [rshell_server_ip] [opt:stealthy_process_name] [opt:port] 
Required: [rshell_server_ip] -- the ip of your rshell server
-- use @home to indicate the ip in 5hell.src >> get_custom_object.HOME.ip 
-- @home server is currently: [ip.add.rr.ess]

Opt: [stealthy_process_name] -- name of the rshell; appears in ps
-- process_name cannot be: dsession, Xorg or kernel_task
-- default name: ps

Opt: [port] -- the port on which your rshell server listens
-- default is set in 5hell.src >> gco.home.rshellport
-- default is currently: [1222]

E.G: rshell 123.4.5.06 ps 1337 -- while on the victim computer
-- and ip is your rshell server with port 1337 forwarded
E.G: rshell @home not_a_virus -- use default ip and port 
E.G: rshell @home -- use default ip, port, name

See also: rsi -h
Extra: rshell [-h|help] extra -- display extra help page for general rshell information.
</pre>

## `scrub`
<a id="scrub"></a>
<pre>
logs || log scrubbing || proxy management || scp
Usage: scrub [opt:-s] -- wipe logs of all proxies using kraken 
-- the [-s] option scrubs the logs with a file named 'silentclean' stored on the server
-- this requires a file named silentclean to be somewhere on the proxy
-- it may be an empty file
note: uses the command kraken scrub
</pre>

## `prox`
<a id="prox"></a>
<pre>
KRAKEN shortcut || proxy tunneling

	Usage: prox -- use kraken to route through proxy net and open terminal at end
-- equivalent to kraken connect
-- if Map.conf is encrypted you may pass a decryption key as an argument
---- otherwise you will be prompted for the key
</pre>

## `kraken`
<a id="kraken"></a>
<pre>
proxy management || release the kraken || upload || download || rental server
Usage: kraken [opt: upload_path] -- propagate file or folder to all proxies
-- uses ~/Config/Map.conf
-- does not scrub the log after uploading

Usage: kraken prox -- tunnel through each proxy and start_terminal on the last
-- each proxy uses ssh to connect to the next, in order
-- start_terminal will be used on the endpoint proxy
-- scrubs the logs before starting the terminal
--note: this mode has been aliased to the prox command (prox -h)
Usage: kraken prox [opt:-g] -- tunnel through each proxy w/o starting the terminal
-- opens the final shell in the chain in glasspool instead
-- all shells in the chain remain in the BUFFER

Usage: kraken scrub -- tunnel through proxy chain and corrupt the log on each
--note: this mode has been aliased to the scrub command (scrub -h)
-- kraken scrub / scrub will:
---- corrupt the log on each proxy in the chain
---- remove /etc/passwd from each proxy in the chain
---- lock file permissions on each proxy in the chain

Usage: kraken [buffer] -- shells will be sent to BUFFER with no further action

Usage: kraken add [opt:ip] [opt:pass] -- add items to Map.conf

Usage: kraken del [index] -- remove the entry at index
Usage: kraken show [opt:-p] -- display proxy list
-- passing -p will display the list with passwords

Usage: kraken [-l|logs]  -- download system.log from proxies and then scrub
-- system.logs are saved as: system-#.log
-- # is in the reverse order of the proxy chain
---- the endpoint log will have the lowerst number
-- logs are not overwritten on each run; mind your drive space

Usage: kraken -- launch the kraken proxy management menu

NOTE: kraken will only scrub logs when using:
-- scrub, prox, [-l|logs]

Encryption and Kraken
-- kraken will [offer to] decrypt Map.conf if it is encrypted
---- files decrypted this way will be re-encrypted
</pre>

## `liber`
<a id="liber"></a>
<pre>
library version info || LIBER || metaLib version || liber te
Usage: liber [/path/lib_file|MetaLib] -- returns library name and version
--e.g: liber /usr/cache/libhttp.so -- get name and version 
--e.g: bios -m | liber
Usage: liber [-l] [libname] -- returns version info for libname located in /lib/
--e.g: liber [-l] libssh.so -- get info for /lib/libssh.so
Usage: liber [-l] -- print version info for all libraries in /lib
Usage: liber [/folder] -- print version info for all libraries in folder
--e.g: liber /usr/libcache
Usage: liber [-i] [/path/lib_file] -- returns an imported lib object from path
-- equivalent to bios -i [/path]
-- [-i] is for API objects such as metaxploit, crypto, blockchain, aptclient, etc
---- user meta link [-l|-r] to link metalib or netsession objects
--e.g: liber [-i] [/lib/blockchain.so] | malp -- imports lib and pipes to malp (BUFFER)
NOTE : liber is limited to the scope of the metaxploit object currently in use.
NOTE : liber will color code results if database.csv exists
---- orange means the library is unkown
---- cyan means the library is known
Usage: liber [-r|-lr] [path|libname] -- run as above but return raw output
</pre>

## `db`
<a id="db"></a>
<pre>
DB || dbaser || Databaser
Automated remote port and local lib scanning and databasing.
Results are sent to the BUFFER.
Database is saved to ~/rkit/database.csv
Logs: logs will be left by db when:
-- a net_session is obtained on a server (not a router):
-- connection established port ##
-- a shell object is obtained on any machine:
-- shell obtained on port ##
Note: logs may be left in other ways. See: help logs for more.

Note: targetIP and targetPort are set with probe and/or target

Note: db will catagorize bounce exploits when it finds them
-- this process, however, is imperfect due to a game update
---- this will be fixed, eventually
-- a bounce exploit is an exploit that:
---- when run on a router and provided with a LAN ip as an inject
---- returns a computer object for the machine at the specified LAN ip
-- db will make an attempt at guessing a LAN ip to use if one is not provided
---- rerun the attack using zap or roil with the desired IP once identified

Usage: db [-r] [opt:ip] [opt:port] [opt:inject]
-- scans given port and databases results
-- uses targetIP and targetPort if not supplied
-- supplying [-i] for inject results in a prompt
---- enter a lan_ip or password for the inject value at the prompt
Usage: db -r [ip] * -- db all ports at given ip
Usage: db -r * -- db all ports of targetIP

Usage: db -r -i [opt:ip] -- set an inject value to use to detect bounces
-- prompt for ip if not supplied
Usage: db [-l] [opt:lib_name] [opt:inject]
-- scan a local lib and database resutls
-- brings up menu if lib_name not supplied
-- supplying [-i] for inject results in a prompt
---- enter a lan_ip or password for the inject value at the prompt
Usage: db -l * -- db all local libs

Usage: db -l -i -- choose a lib from the menu and prompt for an inject
Usage: db [-m|-M] [opt:metaLib|metaxploitLib] [opt:metaxploitLib|metaLib] [opt:inject]
-- scan currently linked metaLib or piped metaLib with currently linked metaxploitLib or piped metaxploitLib
-- unlike other modes, this mode will not link a new metaLib
---- unless a metalib is piped to it
-- instead, it scans the already linked metaLib
-- supplying [-i] for inject results in a prompt
-- when not piping metaxploitLib or metaLib (ie: scanning in place):
---- use meta load [piped_metaLib], or meta link [ip] [pt], to choose a metaLib to scan
---- use meta -i [pipe_metaxploitLib] to choose the scanning metaxploitLib
--eg: meta load init.so | meta -i @o myx0 || db -m || meta restore
-- to specify a scanning metaxploitLib object, use:
----: db -m [metaxploitLib]
--eg: meta load init.so | db -m @o myx0 || meta restore
---- see meta help for more
NOTE: passing -M explicitely uses @o myx0
--eg: meta load init.so | db -M

N.B.: using -m or -M invokes meta -i [object]
-- you will need to manually meta restore to access the previous metaxploitLib
Note: Use meta link and meta scan to scan without databasing
Note: It is not possible exploit/database libs that are not in the /lib folder
-- you may however scan these libs for vulnerable addresses with meta scan
Note: the default 'inject' is '192.168.0.2' to avoid unintentional password changes
</pre>

## `linkdb`
<a id="linkdb"></a>
<pre>
Link Database || databaser || xploits

Uasage: linkdb [string:target_lib] [optional:path_to_database|ip|@home] [opt:-y] 
-- link an entry in the database that matches target_lib
-- eg: linkdb 1.0.1
-- eg: linkdb ssh
-- eg: linkdb " libsh.so v 1.0.1 " -y
-- prompts to link any entry that matches or partially matches target_lib
---- cycles through all matches
-- passing [-y] skips the prompt and links the first match

Usage: linkdb [target_lib] [ip|@home] [opt:-y] -- uses connect_service to access remote database for linking
-- by default, will use @HOME settings
-- passing an ip other than @home results in a prompt for user, pass, port
-- eg: linkdb kernel @home 
---- connects to machine at target ip and prompts to link any entry that matches 'kernel' 

Usage: linkdb [target_lib] [/path] [opt:-y] -- link using the database at path
--eg: linkdb " libssh.so v 1.2.3 " /root/otherdata/database.csv -y

NOTE: The database may now exist as multiple database.csv[N] files in multiple locations
--ie: database.csv, database.csv1, database.csv2,...
-- both db and linkdb will now utilize all of these files found on a system
</pre>

## `meta`
<a id="meta"></a>
<pre>
Metaxploit || MetaxploitLib || exploits || XPLOITS || MetaLib || Hack
Important note: 
A metaxploitLib is the object obtained from include_lib(metaxploit.so)
A metaLib is the object obtained from metaxploit.load() or net_session.dump_lib
A net_session object will dump a metaLib object
A metaLib gets scanned, a metaxploitLib does the scanning
- - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - 
The meta command is used for fine control over metaLib and metaxploitLib processes
Usage: meta -- print the currently linked metaLib name and version if any
Usage: meta load [metaLib] -- directly load a piped metaLib object
-- meta link [metaLib] and meta [metaLib] will also be accepted
Usage: meta load [opt:lib_name] -- load a local metaLib
-- passing a lib name will link that lib if it is in /lib
-- not passing a lib name will bring up the menu
----- the menu will display libs in the localhost's /lib folder
----- if using an imported metaxploitLib the list may be wrong
----- selecting a lib from the list that is present on the target will still work, but
--- the metaxploitLib object loads from the lib folder of it's native machine
----- use the command while in glasspool to get the correct contents of /lib 
------- if you have an available shell/computer that matches the metaxploitLib
Usage: meta load [/full/path] -- load a local metaLib from path
-- only libs in /lib may be exploited
-- libs loaded from outside of /lib may not not
---- they may still have their name, version, and patch status checked
-- full paths only
---- the file checked is on the machine linked to the metaxploit object
Usage: meta link [opt:ip] [opt:port] -- link a remote net_session 
-- dumps the metaLib from the net_session and loads it
-- uses global targetIP and targetPort if ip and port are not passed
-- passing ip and port sets global targetIP and targetPort
-- if ip is passed without port; defaults to targetPort (or router if not set)
Note: both link and load will attempt to run linkdb on the metaLib
Usage: meta scan -- scans the loaded metaLib and loads vulns to memory
-- uses the currently active MetaxploitLib object
-- does NOT update the database
-- equivalent to 5phinx [1]
-- use db -r or db -l or db -m for databasing
-- use zap or roil or 5phinx [A] or [2] after scanning to fire the exploits
Usage: meta [-i|import] [path|metaxploitLib] -- import a new metaxploitLib  object
-- imports from a path or from a piped object
-- use meta restore to revert to the previously used metaxploitLib object
Usage: meta return -- return the currently linked metaLib object
Usage: meta [-x] -- return the current metaxploitLib object
- - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 

Next: once a metaLib or net_session is linked:
-- scan the imported object with meta scan or db -m
-- if not using db use roil to send all attacks at once
-- use db -m to force databasing the linked metaLib 
-- n.b: running db without -m will cause db to look for a new lib to link and overwrite the linked metaLib

Note: importing a metaxploitLib from your server to a remote target
-- allows using your hardware to scan the target's local libraries.
-- Likewise, exporting a remote metaLib back to your server 
---- allows you to use your hardware to scan the remote libs.
-- use bios> along with cob get and cob set to import/export objects

eg: meta -i @o myx1 | meta link net.so | meta -i @o myx0 | meta scan
-- a library from the machine connected to myx1 will be scanned using
---- the hardware of the machine connected to myx0
</pre>

## `zap`
<a id="zap"></a>
<pre>
ZAP || Single Attack || overflow || exploit || hack
Usage: zap [opt:-r] [opt:index|mem_address] [opt:inject|unsec_value] [opt:inject]

Usage: zap [opt:-r] -- select attack; Equivalent to 5phinx [A]
-- brings up attack selection menu
-- prompts for inject value
-- if successful prompts to view the object in the BUFFER
---- use the -r flag to skip the BUFFER prompt:
----eg: zap -r

Usage: zap [opt:-r] [index#] [opt:inject] -- run the attack at index[#], skipping the menu 
-- passing an inject value skips the inject prompt after the menu
----eg: zap 1
----eg: zap 1 192.168.0.2
-- passing an inject value is for password change exploits and bounce exploits
-- if successful prompts to view the object in the BUFFER
-- use the -r flag to skip the BUFFER prompt: 
----eg: zap -r 1 
-- use use -r and supply an inject to skip inject prompt as well
----eg: zap -r 1 password

Usage: zap [memory_address] [unsec_value] [opt:inject] -- manually input overflow parameters
-- skips all prompts
--eg: zap 0x2D7A08D5 effectsetfocusonshowso password

NOTE: all modes return the result when successful
NOTE: inject should be of type password or LAN IP or left blank, depending on the attack
NB: use the roil command to fire all attacks at once
</pre>

## `roil`
<a id="roil"></a>
<pre>
Attack All | Spam Attack | Run all Exploits | Into the Roil
Usage: roil [opt: [inject] | opt: [-p|--prompt]] -- launches hail mary overflow attack 
-- equivalent to option [2] in 5phinx
-- optional inject value may be a lan ip or a password, depending on the target
---- if attacking a router: inject should be a lan ip, to be used with a BOUNCE exploit
---- if attacking a server: inject should be a password, to be used with pw change exploits
-- if inject is -p or --prompt then roil will prompt for the following:
---- an inject value (ip or pw)
---- if a shell is found, you will get an Open Shell? prompt
---- if a computer is found, the computer handler will open
---- if a file is found, 5hell will run tree on the file object
Note: roil returns zero and sends all objects to the BUFFER.
Note: an inject value only matters for password change and bounce exploits
N.B.: roil does not database results; use db instead
-- this may change in the future
</pre>

## `aptm`
<a id="aptm"></a>
<pre>
Apt-Get Menu
Usage: aptm -- apt-get menu: 
-- manage apt functions
-- add/remove/search repositories.
Usage: aptm [piped_aptclientLib] -- change scope of aptm to supplied lib
-- eg: bios -a | cob set apt | exit
-- when used on a remote 'silent launch' of 5hell
---- pipes aptclientLib to the custom object then exits back to original 5hell
-- cob get apt | aptm
---- pipes aptclientLib to aptm and changes scope of aptm to remote
Advanced: press [7] hot_swap_libs in aptm 
-- reloads meta/crypto/apt to use latest versions after updating

APT command line options (skips the menu):
Usage: aptm [-i] [filename] [opt: path] -- install filename, if it exists
-- if not provided, the install path will be the repository's default
-- this is usually /bin or /lib or /usr/bin

Usage: aptm [-a] [repo_ip] -- add a repository's ip to /etc/apt/sources.txt

Usage: aptm [-d] [repo_ip|repo_index] -- remove a repository's ip from /etc/apt/sources.txt

Usage: aptm [-u] [/path/filename] -- check for a new version of a file

Usage: aptm [-s] [opt:filename] -- search repositories for filename
-- searches all repos in sources.txt
-- shows all available files if no filename is provided

Usage: aptm [--hotswap] -- reload metaxploit.so, crypto.so, and aptclient.so from disk
-- searches for and loads the latest version of each lib on disk
---- does not run aptm upgrade
-- this is the same include_lib routine executed at launch
</pre>

## `smtp`
<a id="smtp"></a>
<pre>
SMTP || MAIL USER LIST
Usage: smtp [ip] [port] -- return mail user list if ip/port is running smtp mail server
-- user target ip and target port if not supplied
</pre>

## `osint`
<a id="osint"></a>
<pre>
osint || open source information || OSINT || fuzzer
Usage: osint [option] [ip_octet_rules] [user_name] [bool:spool]
-- scour domains for valid emails using: user_name@domain
note: a mail account is required to use this function
Options:
  " "  [-l|list] -- return output as a list of domain strings
  " "  [-s|space] -- return output as a string of single spaced domains
  " "  [-n|newline] -- return output as a string of domains; one per line
  " "  [-c|comma] -- return output as a comma separated value 
Octet Rules:
Input method:list -- supply a list with 8 indexes containing ints or string:ints corresponding-
to the minimum and maximum values for each octet, in order. This means if our octets are:
k.j.i.h and the ip range we want is 1.1.1.1 to 115.1.1.255, the list would be:
[1,115,1,1,1,1,1,255]
-- where [0] is k_min, [1] is k_max, [2] is j_min, [3] is j_max, and so on.
-- incomplete octet rules or out-of-bounds entries will return an error. 
Input method:string -- supply a string, without spaces, formed as follows:
 oc1_min-oct1_max.oct2_min-oct2_max.oct3_min-oct3_max.oct4_min-oct4_max 
--eg: 1-200.1-1.0-234.1-255
User name:
Input: any npc user name 
Spool:
-- bool:[1|0] pass a positive value for the 'spool' parameter to write results to disk
-- writes to current_path/spool.osint
Output:
--  osint will perform a whois lookup on each ip
---- parse the string for the ip's domain
---- attempt to locate username@domain to determine if it exists
---- on positive hit, push domain to output buffer
---- return results based on options
</pre>

## `fetch`
<a id="fetch"></a>
<pre>
SPOT || FETCH || MetaxploitLib || kérberos

Usage: fetch [-b] [shell_object|path] [path|shell_object] 
-- download the system.log and all binaries in /home from target shell
--eg: fetch -b @B 1 /root
--eg: zap | fetch -b /root
--eg: rsi -r 1 | fetch -b
Usage: fetch [-l] [shell_object|path] [path|shell_object]
-- as above but only files ending in .log
Usage: fetch [shell_object] -- obtain a MetaxploitLib object from a supplied shell
-- uploads metaxploit.so to /home/guest
-- creates a source file in /home/guest
-- builds and runs the file
-- places the MetaxploitLib in the custom object under index: fetched
-- 'spots' out the files; moves them all to an empty file named '.'
-- returns the MetaxploitLib as an object
--eg: zap | fetch

NOTE: does not scrub the log; does not use rm to remove files
-- don't forget to scrub the log, if necessary
NOTE: This is not a jump file. It is a spot file. That is all.
</pre>

## `porter`
<a id="porter"></a>
<pre>
Usage: porter [port] [comma,or,newline,separated,ip,list] --  print lib version of service on port, if any, for given ip address(es)
</pre>

## `infil`
<a id="infil"></a>
<pre>
Infil || infiltrate || infiltration || upload rkit
Usage: infil [shell_object] -- automatic door kicker
-- uploads rkit to /home/guest on target shell and then launches 5hell
-- does not accept launch params;
---- include desired launch behavior in rkit/do.rc before upload
--eg: zap | infil
NOTE: the /home/guest destination is hard coded as this is always open on 
-- untouched npc machines
-- create a macro that mimics infil's behavior (perms, scpm, perms, run)
-- to use a different destination folder
</pre>

## `flood`
<a id="flood"></a>
<pre>
flood connection || ddos || denial of service

Usage: flood [opt:ip] [opt:port] -- ddos a target server running a service
-- uses global target ip and/or port if not supplied
-- sets global target ip and/or port if supplied
-- obtains both net_session and metalib on target
-- initiates flood_connection on the net_session

Usage: flood [net_session] -- runs flood_connection on the piped object
-- does not alter targetIP or targetPort

N.B.: if a DDOS attack is successful, the target will be temporarily offline.
That is: it will be rebooted.
The number if instances required to DDOS a target depends on the network speed
of the target. Each instance must be run from a unique network. Since players
are limited in the number of terminal windows they may open, the player may need
other players to attack the target in unison to be successful.
</pre>

## `curl`
<a id="curl"></a>
<pre>
Usage: curl [opt:shell|file|computer] -- display the website.html, if readable
</pre>

## `netdump`
<a id="netdump"></a>
<pre>
Usage: netdump [opt:-r]
-- returns information for the currently linked net_session
-- use bios -n to obtain the raw NetSession object
</pre>

## `clipa`
<a id="clipa"></a>
<pre>
clipboard || clipa || clipb || clipc || clippy dippy
There are, by default, three clipboard spaces: clipa, clipb, clipc. It is
possible to expand beyond this limit by adding entries to the CLIP map in 5hell.5pk.
The clipboards may store any data type or game object. 

EZ_CLIP allows use of aliases:
--: @a for clipa, @b for clipb, and @c for clipc
---- when you want to reference the clipboard in an argument.
For example: 
|> clipa foobar
|> echo @a
foobar

The clipboard spaces start out as an empty string, by default.  
You may edit text in the clipoard directly with:
|> scribus @clip[a|b|c]
--eg: scribus @clipa | poke magnum.opus | lock
--note: scribus @clipa edits the clipboard's text
--note: scribus @a will not edit clipa but rather:
---- if clipa is a list of strings: will open the editor on the array and return an array
---- if clipa is a string: will attempt to edit a file whose name matches the first word in the string 
---- if clipa is a text file: will edit the file

Viewing help for clipa
Usage: clipa -- returns the contents of clipa
-- stored functions are returned as a reference
Usage: clipa [any_value] -- set clipa to any value
-- piped objects are stored and returned as objects
-- piped functions are stored and returned as function references
-- piped strings, including piped (string: integers), are stored and returned as strings
-- piped integers are stored and returned as integers
--nb: you may cast a string to an int with:
----: clipa [+=|-=] 0
---eg: clipa 12 || clipa += 0
Usage: clipa [-z] -- set clipa to int: zero
-- passing 0 as an argument sets clipa to string: 0
-- piping in an int: 0 results in no_argument behavior: it returns clipa
Usage: clipa [-n] -- set clipa to null
-- this is useful in sme cases
-- note: the default starting state is an empty string
---- it no longer defaults to null
Usage: clipa [++|--] -- increment | decrement clipa by 1
-- old way: clipa 0 || calc @a [+|-] 1 | clipa
-- new way: clipa 0 || clipa [++|--]
Usage: clipa [+=|-=] [int] -- increment | decrement clipa by int
-- only ints or (string: ints) may by [inc|dec]remented
Advanced options:
Usage: clipa [@cc] -- set clipa to the command buffer
Usage: clipa [@tbuf] -- set clipa to the transmission buffer
--eg: tree || gopher @tbuf
Usage: clipa [@B] [-m|#] -- set clipa to BUFFER[#]
-- passing -m instead of an index will prompt for selection with the BUFFER menu
NOTE: @tbuf, and @B are now available to all commands via ez_clip
--eg: clipa @B 1 || clipb " /home/guest/rkit/5hell " || run @b @a
--eg: run /home/guest/rkit/5hell @B -m
NOTE: it is important to distinguish between 
-- @b -- clipb reference, and
-- @B -- BUFFER reference
eg: clipb foobar || echo @b vs zap || gp @B 1
-- see help alias for a full list of ez_clip aliases
Note: all (successful) uses of clipa will return the value of clipa

See Also: cob -h, help alias, help buffer
</pre>

## `clipb`
<a id="clipb"></a>
<pre>
clipboard || clipa || clipb || clipc || clippy dippy
There are, by default, three clipboard spaces: clipa, clipb, clipc. It is
possible to expand beyond this limit by adding entries to the CLIP map in 5hell.5pk.
The clipboards may store any data type or game object. 

EZ_CLIP allows use of aliases:
--: @a for clipa, @b for clipb, and @c for clipc
---- when you want to reference the clipboard in an argument.
For example: 
|> clipa foobar
|> echo @a
foobar

The clipboard spaces start out as an empty string, by default.  
You may edit text in the clipoard directly with:
|> scribus @clip[a|b|c]
--eg: scribus @clipa | poke magnum.opus | lock
--note: scribus @clipa edits the clipboard's text
--note: scribus @a will not edit clipa but rather:
---- if clipa is a list of strings: will open the editor on the array and return an array
---- if clipa is a string: will attempt to edit a file whose name matches the first word in the string 
---- if clipa is a text file: will edit the file

Viewing help for clipb
Usage: clipb -- returns the contents of clipb
-- stored functions are returned as a reference
Usage: clipb [any_value] -- set clipb to any value
-- piped objects are stored and returned as objects
-- piped functions are stored and returned as function references
-- piped strings, including piped (string: integers), are stored and returned as strings
-- piped integers are stored and returned as integers
--nb: you may cast a string to an int with:
----: clipa [+=|-=] 0
---eg: clipa 12 || clipa += 0
Usage: clipb [-z] -- set clipb to int: zero
-- passing 0 as an argument sets clipb to string: 0
-- piping in an int: 0 results in no_argument behavior: it returns clipb
Usage: clipb [-n] -- set clipb to null
-- this is useful in sme cases
-- note: the default starting state is an empty string
---- it no longer defaults to null
Usage: clipb [++|--] -- increment | decrement clipb by 1
-- old way: clipa 0 || calc @a [+|-] 1 | clipa
-- new way: clipa 0 || clipa [++|--]
Usage: clipb [+=|-=] [int] -- increment | decrement clipb by int
-- only ints or (string: ints) may by [inc|dec]remented
Advanced options:
Usage: clipb [@cc] -- set clipb to the command buffer
Usage: clipb [@tbuf] -- set clipb to the transmission buffer
--eg: tree || gopher @tbuf
Usage: clipb [@B] [-m|#] -- set clipb to BUFFER[#]
-- passing -m instead of an index will prompt for selection with the BUFFER menu
NOTE: @tbuf, and @B are now available to all commands via ez_clip
--eg: clipa @B 1 || clipb " /home/guest/rkit/5hell " || run @b @a
--eg: run /home/guest/rkit/5hell @B -m
NOTE: it is important to distinguish between 
-- @b -- clipb reference, and
-- @B -- BUFFER reference
eg: clipb foobar || echo @b vs zap || gp @B 1
-- see help alias for a full list of ez_clip aliases
Note: all (successful) uses of clipb will return the value of clipb

See Also: cob -h, help alias, help buffer
</pre>

## `clipc`
<a id="clipc"></a>
<pre>
clipboard || clipa || clipb || clipc || clippy dippy
There are, by default, three clipboard spaces: clipa, clipb, clipc. It is
possible to expand beyond this limit by adding entries to the CLIP map in 5hell.5pk.
The clipboards may store any data type or game object. 

EZ_CLIP allows use of aliases:
--: @a for clipa, @b for clipb, and @c for clipc
---- when you want to reference the clipboard in an argument.
For example: 
|> clipa foobar
|> echo @a
foobar

The clipboard spaces start out as an empty string, by default.  
You may edit text in the clipoard directly with:
|> scribus @clip[a|b|c]
--eg: scribus @clipa | poke magnum.opus | lock
--note: scribus @clipa edits the clipboard's text
--note: scribus @a will not edit clipa but rather:
---- if clipa is a list of strings: will open the editor on the array and return an array
---- if clipa is a string: will attempt to edit a file whose name matches the first word in the string 
---- if clipa is a text file: will edit the file

Viewing help for clipc
Usage: clipc -- returns the contents of clipc
-- stored functions are returned as a reference
Usage: clipc [any_value] -- set clipc to any value
-- piped objects are stored and returned as objects
-- piped functions are stored and returned as function references
-- piped strings, including piped (string: integers), are stored and returned as strings
-- piped integers are stored and returned as integers
--nb: you may cast a string to an int with:
----: clipa [+=|-=] 0
---eg: clipa 12 || clipa += 0
Usage: clipc [-z] -- set clipc to int: zero
-- passing 0 as an argument sets clipc to string: 0
-- piping in an int: 0 results in no_argument behavior: it returns clipc
Usage: clipc [-n] -- set clipc to null
-- this is useful in sme cases
-- note: the default starting state is an empty string
---- it no longer defaults to null
Usage: clipc [++|--] -- increment | decrement clipc by 1
-- old way: clipa 0 || calc @a [+|-] 1 | clipa
-- new way: clipa 0 || clipa [++|--]
Usage: clipc [+=|-=] [int] -- increment | decrement clipc by int
-- only ints or (string: ints) may by [inc|dec]remented
Advanced options:
Usage: clipc [@cc] -- set clipc to the command buffer
Usage: clipc [@tbuf] -- set clipc to the transmission buffer
--eg: tree || gopher @tbuf
Usage: clipc [@B] [-m|#] -- set clipc to BUFFER[#]
-- passing -m instead of an index will prompt for selection with the BUFFER menu
NOTE: @tbuf, and @B are now available to all commands via ez_clip
--eg: clipa @B 1 || clipb " /home/guest/rkit/5hell " || run @b @a
--eg: run /home/guest/rkit/5hell @B -m
NOTE: it is important to distinguish between 
-- @b -- clipb reference, and
-- @B -- BUFFER reference
eg: clipb foobar || echo @b vs zap || gp @B 1
-- see help alias for a full list of ez_clip aliases
Note: all (successful) uses of clipc will return the value of clipc

See Also: cob -h, help alias, help buffer
</pre>

## `passwd`
<a id="passwd"></a>
<pre>
Password || Change Password || passwd
Usage: passwd [opt: user] [opt: password] -- change password for user
- will prompt for missing options
</pre>

## `echo`
<a id="echo"></a>
<pre>
ECHO || echo || Echo || echO
Usage: echo [up] [to] [four] [params] -- returns concatonated params to the terminal

General usage is to echo text back to the terminal during batch script/macro execution.
However, it may also be used to feed input to another command or concatonate outputs
of multiple commands. You may use floating quotes (single quotes not touching another
character) to wrap complex input parameters. Examples:
|> echo bob burger  --  output: bob burger
|> echo " Eat at Joe's Diner. " Because " it's the best. " 
-- output: Eat at Joe's diner. Because it's the best.
|> echo three four | echo one two -- output: one two three four
Here's a fairly useless example, lol:
|> cat file.txt | echo | poke file2.txt | cat | echo | poke file3.txt

Simple enough. You may use richtext in the echo to spruce it up.
Resizing text and adding color allows the echo to stand out when text
is flying by during a complex dig, for example.
</pre>

## `clear`
<a id="clear"></a>
<pre>
Clear Screen || Terminal Wipe || clearscreen
Usage: clear -- clears the terminal of all text
</pre>

## `ps`
<a id="ps"></a>
<pre>
Show Processes || PS || show procs || not actually top or htop
Usage: ps [opt:-r] [opt:shell|computer] -- show processess running on the active host_computer
-- when glasspool is active:
-- the active shell/computer is the active host_computer
-- optional [-r] parameter returns raw, uncolorized output
--eg: ps -r
Usage: ps [opt:-r] [shell|computer] -- show processes running on the piped object
-- optional [-r] parameter returns raw, uncolorized output
--eg: rsi 1 7 | ps
</pre>

## `kill`
<a id="kill"></a>
<pre>
kill || end process || terminate script

Usage: kill [ALL|PID] [opt: shell|computer] -- terminate PID
-- PID should be process number or ALL
-- see the ps command for process ID's
-- kill ALL will attempt to close all programs.
n.b. if kill ALL kills the terminal that launched the program,
---- it might not complete its task.

Usage: kill [process_name] [opt: shell|computer] --
-- kill processes by process name instead of PID
-- NOTE: kills ALL processes of that name

Advanced: kill [ALL|process_name:exclude1:exclude2:...] [opt:computer|shell]

-- seperate process names or ID's to exclude from the kill process with the ':' character
-- the first process name (or the ALL keyword) will be the kill target
-- all process names or ID's following the first : will be excluded
-- UNLESS the kill target is a process ID
--eg: kill ALL:1023:5hell [shell_obj] -- kill everything on the [shell] except 5hell and 1023
--eg: kill 1023:5hell [computer_obj -- kill 1023 on the [computer]; no exceptions
---- ie: passing a PID ignores exceptions
--rg: kill 5hell:1023 -- kill all instances of 5hell on the active computer except 1023

Note: piping a shell or computer object runs kill on the object instead of locally
Note: running kill while glasspool is active runs kill on the active object
-- unless a shell or computer is piped
</pre>

## `pwd`
<a id="pwd"></a>
<pre>
Usage: pwd -- print working directory
-- returns the current path as a string
</pre>

## `psudo`
<a id="psudo"></a>
<pre>
PSUDO || sudo || get shell || get_shell || start terminal
Start_terminal options:

Usage: psudo -- display the psudo menu

Usage: psudo [shell_object] -- execute start_terminal on the shell_object
   piping an object skips the confirmation prompt
   unlike run, this command will end the script
  
Usage: psudo [-l] -- execute start_terminal on the currently active shell object
   unlike run, this command will end the script
  
  nb: start_terminal results in an active trace if an administrator (root dsession) is active
     scrub logs and disconnect as soon as your work is done to avoid a strike

Get_shell options:
  
Usage: psudo [-u] [opt:user] [opt:password] -- BUFFER a shell object using credentials
Usage: psudo [-s] [opt:password] -- BUFFER a root shell object using credentials
   passing -s will prompt to open the object's menu in malp
Usage: psudo [-f] [opt:password] -- as above but skips prompt and goes straight to malp
Usage: psudo [-n] [opt:password] -- BUFFER a shell object without prompts or malp

NOTE: -u, -s, -f, and -n will all return the shell object on success, a string on failure
</pre>

## `ls`
<a id="ls"></a>
<pre>
List Files | List Folders | File Details
Usage: ls [opt: -l|-a|-s|-r] [opt: /path] -- list files in path
Opt: [-l] -- list all file details for given path
Opt: [-a] -- list all files, alphabetically, for given path
-- by default files and folders are listed from first created
---- to last created 
Opt: [-s] -- list all files by size (not yet implemented)
Opt: [-r] -- list all files and return raw, uncolorized output
Note: option flags may be combined in any order
-- eg: ls -lars
</pre>

## `cd`
<a id="cd"></a>
<pre>
Usage: cd [path] -- change current working directory to path
Usage: cd .. -- go back to parent directory.
Usage: cd -- return to home directory.
Returns: 0 on success or string on failure.
</pre>

## `rm`
<a id="rm"></a>
<pre>
Remove File || RM || Delete 
Usage: rm [opt:-r] [path|file_object] [opt:shell|computer]
Usage: rm [path|file_object] - deletes a file
Usage: rm -r [path|file_object] - deletes a folder (and all contents)
Usage: rm [opt:-r] [/absolute/path] [shell_object|computer_object]
-- uses supplied shell or computer to delete file or folder at path

N.B. The system.log delete entry will be from the originating IP
-- NOT the ip of the remote shell or computer
-- be sure to clean the log when remote deleting
</pre>

## `mv`
<a id="mv"></a>
<pre>
MOVE || MV || rename || I like to move it move it
Usage: mv [opt:-r] [source_path|file_object] [destination_path|file_object]
-- move file or folder to new path
-- optionally rename the file
-- if destination is folder uses original filename, else renames
-- overwrites destination file if it exists and is not a folder
-- passing the [-r] flag will result in overwriting the destination folder
-- if file objects are supplied then uses the object's path
-- e.g: mv bob /burger -- moves bob to / dir and renames to burger
---- if /burger is a directory; moves bob into burger as /burger/bob
-- if bob is already a folder at the destination, and the [-r] flag is passed: 
---- /burger/bob will be overwritten, otherwise the result is /burger/bob/bob
 
Usage: mv [opt:-r] [source_path|file_object] [@]
 -- move file to current path using original file name
 ---- otherwise works as above
NOTE: this command moves files between folders on the active shell/computer object
-- please use scpm or BUFFER scp to transfer files between remote machines
</pre>

## `cp`
<a id="cp"></a>
<pre>
COPY || copy files || CP
Usage: cp [/old_path] [/new_path] -- copy file or folder to new_path 
Usage: cp [/old_path] [@] -- copy old path to current path and use original file name
Usage: cp [/old/path] [/newpath/newname] -- make a copy of a file with a new name/path
Usage Example:
-- cp /root/file.txt @ 
---- copies file.txt to the current directory with name: file.txt
Usage Example:
-- poke /root/haha |  | poke /root/heehee |  | cp /root/haha /root/heehee
---- creates files haha and heehee then copies haha over heehee, overwriting heehee
Usage Example:
-- poke haha |  | grep -p syst / | cp haha
---- create file haha, grep for (system.log) and return file_path, overwrite /var/system.log with haha
</pre>

## `usr`
<a id="usr"></a>
<pre>
USR || ADD USER || CHOWN
Usage: usr [opt: -r] [user] [path] -- asign ownership of file at path to user
-- the -r flag applies user ownership recursively
Usage: usr [-a|add] [opt:user] [opt:password] -- add a user to the system
-- omitting user and or password will result in a prompt for these values
Usage: usr [-d|del] [username] [opt:bool 1|0] -- delete a user from the system
-- 0 == do not delete the home folder
-- 1 == delete the home folder
-- any other value results in a prompt
Usage: usr -u [path] -- return owner of file at path
NOTE: It is good practice to run:
|> usr -r root / | grp -r root / | rm /etc/passwd | lock 
-- for optimal security on a rented server
NOTE: for your peace of mind please use lock and  kore -s 
-- to secure your main home pc as
-- this ensures you will not brick your system
---- however if you somehow get Xorg to be removed from .show_procs, it will fail!!!
</pre>

## `grp`
<a id="grp"></a>
<pre>
GROUP || ADD GROUP || CHGRP
Usage: grp [add|del] [group] [user] -- add or remove group to|from user
-- users may multiple groups assigned to them
Usage: grp -u [user] -- returns groups associated with user
Usage: grp -f [path] -- returns group associated with file at path
Usage: grp [opt:-r] [group] [path] -- set group of file at path
-- the -r flag applies the group recursively
-- each file may have only one group
NOTE: It is good practice to run:
|> usr -r root / | grp -r root / | rm /etc/passwd | lock 
-- for optimal security on a rented server
NOTE: for your peace of mind please use lock and  kore -s 
-- to secure your main home pc as
-- this ensures you will not brick your system
---- however if you somehow get Xorg to be removed from .show_procs, it will fail!!!
</pre>

## `perms`
<a id="perms"></a>
<pre>
chomod || permissions || perms || security
Usage: perms [opt:-r] [userstring{+|-}permission] [path]
-- opt: -r -- run recursively on all files and folders under [path]
-- userstring: o = other, g = group, u = user/owner
-- {toggle}: [+] = add permission, [-] = remove permission
-- permission: r = read, w = write, x = execute
--eg: perms -r o-rwx /  -- remove rwx permissions from 'others' for all files
--eg: perms -r g+x /bin -- add group execute permissions to all files in /bin

Aliases and presets for common permissions:
Usage: perms lock [all] -- remove all permissions from all files (alias: lock)
-- includes anti-brick technology:
---- perms will check running processes for: Xorg
---- if detected, critical binaries will be given: g+x
------ if we are home: add g+x to:
----  sudo, ssh, Terminal.exe, Chat.exe, Mail.exe, /etc/init.d, /bin/bash
-- in some cases, setting /bin/bash to g+x may not be desirable!
---- please use the following macro if you don't want bash set to g+x:
---- |> macro set block " lock || lock /bin/bash "
-- shortcut: lock -- an alias for perms lock all
-- uses anti-brick technology
-- lock is a secondary command that uses command.perms("lock","all")
-- see lock -h for more

Usage: perms lock [path] -- lock permissions on an individual file
-- returns the target file as an object
-- bypasses anti-brick technology
-- shortcut: lock [path] -- an alias for perms lock [path]
-- see lock -h for more

Usage: perms lock [down] -- force locking down
-- use to explicitly bypass anti-brick technology

Usage: perms unlock [all] -- add o+rwx to all files
Usage: perms unlock [path] -- add o+rwx, recursively, to a path

Note: it is good practice to run:
-- |> usr -r root / | grp -r root / | rm /etc/passwd | lock
-- for optimal security.
-- you may type: kore [-s|-sc] to have this action performed for you
Extra: perms [-h|help] extra -- view extra help information about this command.
</pre>

## `lock`
<a id="lock"></a>
<pre>
perms || chmod || lock || security || permissions
Usage: lock [opt: path] -- run perms lock [all|/path]
-- this command is a shortcut for perms lock all / perms lock [path]
-- this command was formerly an alias defined in 5hell.src
-- it is now a sub-command similar to prox and scrub

Usage: lock -- lock down all files; uses anti-brick technology

Usage: lock [path] -- lock down a specific path; does not use anti-brick

See perms -h for more info
</pre>

## `mkdir`
<a id="mkdir"></a>
<pre>
Usage: mkdir [/path/new_folder] -- create a new folder in path. path must exist.
</pre>

## `cat`
<a id="cat"></a>
<pre>
File Contents || cat || what's in that file
Usage: cat [path_to_text_file] -- returns contents of text file or null if read denied
Usage: cat [file_object] -- returns contents of piped file object
-- e.g: grep -f passwd | cat 
Usage: cat [-n|--noparse] [path|object] -- prints contents of text with with richtext tags escaped 
-- ie: it uses the  richtext tag
</pre>

## `run`
<a id="run"></a>
<pre>
run || launch || shell.launch || execute || script || binary
Usage: run [file|path_to_file] [opt:parameters|shell] [opt:shell]
-- launch a script binary at path (.exe's not supported outside of experimental branch)
-- there is a game imposed max 14 nested launches before stack call error
---- the stack_pool in the custom object counts the number of nested launches
-- piped file objects are launched from the object's path
-- if you wish to launch a binary on another shell object:
---- either:
------ glasspool into that shell object before using run
---- or:
-- pipe in a shell object;
--eg: brutus | run /root/rkit/5hell
--eg: brutus | run /root/rkit/5hell " rshell @home "
---- this will launch the binary using that shell object
-- pipe or wrap in floating quotes complex launch params (more than one word)
-- use echo and/or easy clip (@a,@b,@c) or " floating quotes " 
---- eg: run /bin/credi7
---- eg: zap | run /root/crowsploit
---- eg: echo " do 1 -f pwn.bat " | clipa | clipb @B 1 || run /home/guest/rkit/5hell @a @b
---- eg: echo rshell 1.1.1.1 | clipa || brutus | run /root/rkit/5hell @a
---- eg: ssh notroot@boot 192.168.0.2 | run /root/rkit/5hell " brutus | rclean " 

New: you may now launch binaries by path, without prepending the path with 'run'
-- this is to give it more bash-like functionality
-- eg: /bin/echo " this is new " @B -m
</pre>

## `reboot`
<a id="reboot"></a>
<pre>
reboot || host_computer || localmachine
Usage: reboot [opt:shell|computer] -- reboot the local or target machine
Usage: reboot -- reboot active computer object; respects glasspool
-- prompts for confirmation
Usage: reboot [opt:shell|computer] -- reboot the machine at target object
-- prompts for confirmation
Usage: reboot [opt:NOW] [opt:shell|computer] -- skip confirmation
Usage: reboot [opt:@int] [opt:shell|computer] -- schedule reboot
-- int should be time in seconds to reboot
-- script will pause until reboot is executed
--eg: zap | reboot @300
-- skips confirmation
Usage: reboot [opt:-s|SAFE] -- reboot the player's home pc into safemode
-- note: only works on the player's home pc when that pc's computer object is active
-- skips confirmation

NOTE: the reboot command will take priority over a binary named reboot
-- use: run [/path/reboot] to run the binary instead
-- see run -h for more
</pre>

## `scribus`
<a id="scribus"></a>
<pre>
Scribus Terminal Text Editor by Plu70
scribus [path_to_file] -- open terminal text editor on file at path
Advanced: scribus @clipa|@clipb|@clipc -- This edits the clipboard directly.
Advanced: scribus @cc -- edit the command buffer.
Advanced: scribus [file_object] -- text only, open contents of piped object.
Advanced: scribus @do -- edit the do buffer (to write / edit do scripts without launching them)
-- see do -h for more info
Note: you may press @h on a new line to get additional command info within the editor.
</pre>

## `games`
<a id="games"></a>
<pre>
games: battleship and blackjack and drugwars!
</pre>

## `mail`
<a id="mail"></a>
<pre>
Mail || metaMail || herme5 || hermes || mail client
herme5 mail client: its the mail (wip) -- its good enough but you may want to write your own;
-- name your function command.mail  to overwrite this one.
-- see 5hell.src, template.5pk.src for instructions.
Note: You may overwrite any command this way.

- - - - - - - - - - - - - - - - - - - - - - - - - - - -
Usage: mail -- opens the herme5 mail menu
Extra: when prompted for a password you may enter: -brutus
-- this will invoke brutus and attempt to crack the email password.
-- the password will be saved to the custom object as:
-- key == email and value == password
---- this will change once i work out a better storage system bc this is not ideal
-- you will be prompted to choose between the tables/tp folder on file, or
---- the currently loaded onboard dictionary
-- see: brutus -h and cerebrum -h for more
Extra: when viewing your inbox you may type spool to dump all mail to a file (up to 160kb)

Usage: mail [email] [password|-brutus] 
-- log into or crack the given email
</pre>

## `fwr`
<a id="fwr"></a>
<pre>
Usage: fwr [ip] -- returns firewall rules for ip. returns local rules if no ip given.
</pre>

## `memdump`
<a id="memdump"></a>
<pre>
memdump: dump MEMORY, XPLOITS, PORT_MAP, clipboards,  to current_path+/memdump.mx
n.b. ignores glasspool. main purpose is generating reports for clients.
</pre>

## `enum`
<a id="enum"></a>
<pre>
enumeration || ENUM || enum buffer
Use this to put things in a list.
Usage: enum [opt|/path|file_object|array|#]

Usage: enum [ list | map | string ] -- enumerates a list or a newline separated string
-- if the string is a single word it will be interpreted as a path
-- multiple words on a single line (piped) will be interpreted as a single entry
-- use enum [-a] [word] to append a single word to the enum buffer
-- lists and maps will be enumerated by element

Usage: enum [ path | file_object ]
-- enumerate file contents as a list of strings
-- useful for 5hell scripting (see the 'do' command).
-- e.g: enum file.txt | enum 1
---- enumerate file.txt then return index [1] from the list
--nb: use enum [-a] [file] to append a single file to the enum buffer

Usage: enum [#]
-- return the element at index [#] in the enum buffer
-- eg: lanpro | enum || enum 3 | echo

Usage: enum [-d] [command_string] [opt:arg3]
-- iterate across enum buffer with do
-- for each enumerated element:
---- appends the element to the end of the command string
---- fires the appended string through the do command
--eg: rnip 15 | enum || enum -d " probe "
---- enumerate 15 random ips and probe them all
--NOTE: supplying a third argument enumerates that argument
--ie: this executes: enum [arg3] before operating
---- the operation will then execute on the new list
--eg: grep -a .txt$ / | enum -d rm || enum -p
---- enumerate file objects for all .txt's, delete them, then purge
------ purging is necessary as the now invalid file objects can cause a crash
-- use macros that make use of @pipe for best results
--eg:
	|> set mem [some_address] || set val [some_val] || meta load [some_lib]
	|> macro set pwn " zap \@o mem \@o val @pipe | sc -n "
	|> lanpro | enum -d pwn
---- this rather complicated operation would result in nuking all machines on a lan if:
------ it were run on a router against some_lib with a root bounce exploit
------ the values for the root bounce exploit were set appropriately for mem and val

Usage: enum [-l|--length]  -- return the length of the enum buffer
Usage: enum [-s|--show]  -- show the enum buffer and return the length
Usage: enum [-D]  -- enumerate the onboard dictionary
Usage: enum [-r] [index] -- remove the element at index
Usage: enum [-i] [index] [element] -- insert element at index 
-- shifts everything below it down
Usage: enum [-a] [element] -- append element to end of enum buffer
-- unlike enum [string] you may use enum -a [string] to append a single word to the enum buffer
Usage: enum [-e] -- return the enum buffer as a list
Usage: enum [-b]  -- concatonate the global BUFFER and enum buffer
Usage: enum [-p] -- purge the enum buffer

Note: limited map support
</pre>

## `rclean`
<a id="rclean"></a>
<pre>
Remote Clean || log scrubber || system.log cleaner
Copy a file over the system.log to corrupt it
Usage: rclean [opt: int ] -- select an object from buffer to atttempt a remote log wipe.
Usage: rclean [file|shell|computer] -- remote wipe piped object
-- e.g. clipb @B 1 | rclean -- where BUFFER[1] was a file|shell|computer
-- rclean with no params will display a menu 
-- rclean is intended for remote scrubbing using BUFFER objects.
-- However you may use silentclean or rclean for local log scrubbing
-- if rclean detects a file named silentclean it will use that file to scrub the log
-- for this reason it is a good idea to include an empty file named silentclean in the rkit
-- or, rename an empty system.log file to silentclean
---- or, a not so empty system.log file...
Usage: rclean -d [#|shell|file|computer] -- run rclean as above and delete rkit and/or 5hell, if present
Usage: rclean -n [#|shell|file|computer] -- run rclean as above and delete the contents of /boot, if present
</pre>

## `ipfit`
<a id="ipfit"></a>
<pre>
Usage: ipfit -- menu to specify a way to generate ips. (wip)
Recommendation: pipe the output to a file or to the clipboard.
e.g ipfit | clipb , or ipfit | poke iplist 
</pre>

## `md5`
<a id="md5"></a>
<pre>
MD5SUM || md5 sum || password hash decipher || encode
Usage: md5 [string] -- returns the md5sum of a string
Usage: md5 -d [32_char_hash] -- checks hash against onboard dictionary then attempts decipher
-- defaults to crypto.so if cerebrum is not loaded
-- one of three main ways to decipher password hash combo's
-- see also: gopher, hashim, brutus
</pre>

## `pipe`
<a id="pipe"></a>
<pre>
pipe usage: place | between sets of commands to pipe a commands output
The output of a command can be piped to the input of the following command using a pipe.
Examples: 
lanpro | enum
ls -la /root | clipb | enum | poke file.txt | lock || clipb | append file.txt
You may chain commands without piping by using || instead
-- eg: command1 || command2 -- output from command1 is NOT passed to command2
</pre>

## `do`
<a id="do"></a>
<pre>
DO || SCRIPTING || AUTOMATION || NOT BASH || BATCH COMMANDS || DORC || BASHRC
The scheduling or automation service for 5hell. You write a set of
commands for 5hell to do. Commands may be entered in-line on the
command line, entered into a text editor buffer, or read from a text file.
see also: do help extra -- for some example do scripts
-- see also: help prompt, dig -h, scribus -h
Do may be launched in a number of ways, depending on your goals:

Usage: do [int] [command] [arg1] [arg2]-- perform [command] [int] times
-- passes arg1 and arg2 to the command
-- use text blocks to pass complex arguments and/or complex commands
-- eg: |> do 3 " rnip 1 | probe | db -r | zap " 
-- eg: |> do 1 poke test.txt " this is a bunch of text " 
---- note: in practice the above line can be done without the do 1
---- it's just an example of how you would supply complex parameters to do
- - - - - - - - - - - 
Usage: do -- without arguments will prompt for iterations then open the editor
Usage: do [#] -- supplying iteration without a command opens the editor immediately
-- enter commands into the editor and enter @ on a newline to begin execution
-- the commands in the editor remain until changed and therefore may be rerun/reused
-- you may use scribus @do to edit the do buffer without firing the script

Usage: do [int] -f [/path] -- perform commands in [/path] [int] times
-- the preferred method of firing a 'batch' of commands
-- many examples may use a .bat extension but the .bat extension is not enforced at all
-- it is just a convention, you may name them whatever you wish except:
---- dig.bat must be named dig.bat in order for dig to use it (see dig -h)
-- nested calls to the do command within these files are valid and encouraged
---- dig.bat: cerebrum | brutus | run /home/guest/rkit/5hell " do 1 -f file2.bat " 
---- file2.bat: rshell @home | sc -d | exit rshell_placed
-- by placing these two files in your rkit folder and running dig [ip] you are able to:
---- automate: infiltrating and placing a root rshell on the target
----- removing your rkit
----- and cleaning the log
Alias: do 1 -f [path] has been aliased to bat [path] in 5hell.src

You may launch 5hell from the game's command line with a 'do' instruction:
-- instead of launching 5hell simply by typing '5hell' you may launch with:
----# 5hell do [#] [opt:-f] [command|path]
-- and 5hell will launch and immediately begin running the given commands
-- 5hell will then drop to the exit prompt;
---- press 'y' if you wish to exit, press enter or any other key to continue running
This allows 5hell to launch 5hell with instructions to launch 5hell with instructions to...
-- keep in mind there is a game limit of 15 nested uses of shell.launch
-- but no limit to the number of uses of shell.launch; meaning do 1000 dig -s is completely valid
-- please note that the game does not allow the use of " in launch parameters
---- 5hell do 1 echo three | echo two | echo one
---- will result in 5hell running the three echoes at launch 
---- if this line were typed at runtime, it would have to be:
---- do 1 " echo three | echo two | echo one "
Note: launching 5hell with do results in 5hell exiting on completion
However:
-- you may launch 5hell with params, without do:
---- 5hell echo three | echo two | echo one
---- will result in the same behavior, but 5hell will not exit on completion

Advanced: Resource Configuration
You may place a file named do.rc in your rkit and/or Config folder
-- the contents of the file should look like a standard do script and will be executed on launch
-- unlike launching with 5hell do 1 -f do.rc, this method will not exit on completion
-- do.rc in Config will take priority over do.rc in rkit. This allows a 'home' and 'away' do.rc

Early Termination:
If the final return value of a line in a do script is: @STOP, then:
-- that iteration will cease, and the next iteration will begin
----: equivalent to a continue
If the final return value of a line in a do script is: @RETURN, then:
-- the do script will terminate; no further iterations will run
----: equivalent to a break

Comments:
You may add comments to do scripts. The comment character must be placed
on it's own line. Comments place within command strings or at the end will error.
Valid comment characters are: #, /, and -
While | will technically work, it might break things down the road if
5hell.src changes. If a comment character is the first character on a line, do will skip that line.
Please note that because macros are done in-line, they may not include comments. Please
keep this in mind if piping the contents of a do script into a macro definition.
</pre>

## `cc`
<a id="cc"></a>
<pre>
: carbon copy: command buffer.
Usage: cc -- select command from history.
Usage: cc [#] -- where # corresponds to the command you wish to run from the command buffer.
-- will return the output of the commands as if they were run normally.
-- you may use cc inside of pipe chains.
---- e.g: cc 22 | echo | cc 10 | poke file.txt
</pre>

## `time`
<a id="time"></a>
<pre>
Usage: time -- returns current game time.
Usage: time [-d|date] -- returns current game time and date.
Usage: time [-t] -- returns time in seconds since script launch.
</pre>

## `pause`
<a id="pause"></a>
<pre>
pause || wait || hang || sleep || halt
Usage: pause [seconds(float)] -- stops script execution until condition is met
-- Minumum time: .01 seconds
-- Maximum time: 300 seconds
-- useful for putting a delay in 'do' scripts.
-- useful for putting a delay in a chain of commands
-- this command uses the general function: wait(time)
Usage: pause [-v] [delay|opt] -- as above but prints a notification at each pause
-- you may prepend the -v flag to any option
--ie: pause -v -m
--ie: pause -v -p [processs_name]
Usage: pause [-m] -- pause until manually unpaused
-- press enter to simply resume the script
-- type input to have pause echo that input
----ie: pipe your input to the next command
-- think of this as, "pause for manual user input"
--eg: pause -m | probe
Usage: pause [-f] [path] -- pause until
---- a file springs into existence
---- a file at path ceases to exist
--eg: pause -f /var/system.log || sc
--eg: pause -v -f /root/sniffed
--eg: do 10000 " pause -f /root/Config/Mail.txt || rm /root/Config/Mail.txt "
--nb: file path respects glasspool
Usage: pause [-p] [process_name] -- pause until:
-- an instance of a named process exists in ps
--eg: do 1000000 " pause -p ps || kill ps "
--nb: process list respects glasspool

Usage: pause [-P] [process_name] -- pause until named process no longer exists
--eg: do 10000 " pause -P totallyNotaTrojan || rshell 1.2.3.4 totallyNotaTrojan "

NOTE: the -f,-p, and -P options loop until:
-- condition is met
-- ended with ctrl+c
note: more options planned
</pre>

## `bios`
<a id="bios"></a>
<pre>
OBJECT | MEMORY | BIOS | CERBIOS
Usage: bios -- system info
Advanced:copy the following to 5hell's command line:
mkdir /virt | poke /virt/hdd.io dev_sda:SIZE 
-- replace SIZE with the maximum size of your hdd in bytes. 
-- this lets bios report the remaining hdd space
Usage: bios -a -- return the currently loaded aptclientlib object
Usage: bios -m -- return the currently linked metaLib object
Usage: bios -x -- return the currently loaded metaxploitLib object
Usage: bios -c -- return the currently loaded crypto object
Usage: bios -C [cryptoLib|/path] -- replace the currently loaded crypto object
-- eg: bios -i /lib/crypto.so | bios -C
-- eg: bios -C /root/crypto.so
Usage: bios -n -- return the currently linked netsession object
Usage: bios -p -- return the currently loaded port_map object as a string
Usage: bios -P -- return the currently loaded port_map object as a map
Usage: bios -H -- return the currently linked herme5 meta.mail object
-- returns null if not logged in to a mail account
Usage: bios -s -- return the currently loaded meta_scan information as a string
Usage: bios -X -- return the currently loaded XPLOITS as a list
Usage: bios -M -- return the current MEMORY object or null
Usage: bios -B -- return the global BUFFER as a list
Usage: bios -r [opt: ip] -- return the local router object [opt:ip]

Usage: bios -i [/path] -- runs include_lib on /path and returns result
-- e.g.|> bios -i /lib/blockchain.so | code 
---- sends the blockchainLib object to the BUFFER then returns it
-- only libs with API's may use include_lib
---- net.so, init.so, kernel_module.so, for example, do not have API's
--note: use meta [link|load] to obtain metaLib objects, instead 

Usage: bios --stack -- return the global stack_pool value (as a string numeral)
-- this value is incremented by one with each use of run (shell.launch)
-- this value is decremented on return from run
-- current stack_pool: 0

Usage: bios --home -- return the get_custom_object.HOME map
-- current @home address: ip.add.rr.ess
</pre>

## `cname`
<a id="cname"></a>
<pre>
Usage: cname -- returns the name of the currently active computer_object
</pre>

## `whoami`
<a id="whoami"></a>
<pre>
WHOAMI || current user || active user || new user, who dis?
Usage: whoami -- returns the active_user
-- if GLASSPOOL is active; returns best guess at active user
</pre>

## `rnip`
<a id="rnip"></a>
<pre>
Usage: rnip [iter] [optional: delimiter] -- produce [iter] random ip addressses and
return as a string with optional [delimiter] (default newline)
e.g. rnip 100 ,  -- returns a string of 100 ips seperated by a comma
</pre>

## `purge`
<a id="purge"></a>
<pre>
PURGE || clear buffer || feels bad
Usage: purge [-b] -- purge the BUFFER (excludes shell [0])
Usage: purge [-b] [#] -- remove BUFFER entry at index #
-- for advanced BUFFER management see the tws -h
Usage: purge [-t] -- purge transmit buffer (@tbuf)
Usage: purge [-x] -- purge the metaxploitLib object
Usage: purge [-X] -- purge XPLOITS buffer 
Usage: purge [-m] -- purge macro registry
USage: purge [-M] -- purge the MetaLib object
-- also purges XPLOITS buffer
Usage: purge [-c] -- purge CC command buffer 
Usage: purge [-e] -- purge enum buffer
Usage: purge [-s] -- purge tagged4scp buffer
Usage: purge [-r] -- purge the RSI buffer (remove all rshells)
Usage: purge [-r] [exclude1:exclude2:...] 
-- purge the RSI buffer; excludes process names or ID's matching the excludes
--eg: purge -r backdoor:ps:obviousVirus
-- skips confirmation
-- for advanced rsi management see rsi -h
Usage: purge [-o] -- purge custom object  (excludes: stack_pool, macro registry)
Usage: purge [-p] -- purge the PORT_MAP
Usage: purge [-d] -- purge monitors
--ie: purge all daemons
-- use the dm command to stop indivudual daemons
--eg: dm stop htop_01
Advanced: purge [opt] [y] -- skip confirmation
</pre>

## `buffer`
<a id="buffer"></a>
<pre>
BUFFER || buffer || malp || push
Usage: buffer [input] - push something directly to the BUFFER without opening malp
-- accepts any object type or function reference

NOTE: passing no input pushes a numerical 0 (zero) to the BUFFER
</pre>

## `credits`
<a id="credits"></a>
<pre>
credits
</pre>

## `quit`
<a id="quit"></a>
<pre>
QUIT || EXIT || RETURN
Usage: quit [opt:state] -- exits the program.
-- if no optional state then prompts before exit
-- if state supplied then skips confirmation and exits with state
Usage: exit [opt:state] -- also exits the program with optional state
Usage: return -- used to return from glasspool. Will exit 5hell if glasspool is inactive.
</pre>
