# 5hell by Plu70
## General information
**Join the discord! https://discord.gg/AFqsGaCDfS**
Fully open source(MIT License) and available at: https://github.com/jhook777/5hell-for-Grey-Hack-the-Game


## Normal build instructions:
1. In Grey Hack, escalate your Terminal priveledges to root by using the following command and entering your password:
```bash
    sudo -s 
```

2. in the root terminal, type: `mkdir /root/src`

3. From the [github](https://github.com/jhook777/5hell-for-Grey-Hack-the-Game) open and copy the following files into CodeEditor, and compile them to root/src, **!!ENSURE THAT THE IMPORTABLE CHECKBOX IS MARKED!!**:
- [ ] contrib.5pk.src --> contrib.5pk
- [ ] net.5pk.src --> net.5pk
- [ ] kore.5pk.src --> kore.5pk
- [ ] dtools.5pk.src --> dtools.5pk
- [ ] 5phinx.5pk.src --> 5phinx.5pk
- [ ] help.5pk.src --> help.5pk
- [ ] (Compile as last file)5hell.5pk.src --> 5hell.pk

4. Copy (and edit) 5hell.src into CodeEditor or a code editor of choice on your PC, if wanted, configure the password section of 5hell.src

5. Compile 5hell.src to 5hell(Or any name of choice, **ensure that this is NOT importable**

6. Copy 5hell to /bin. 


## Advanced Build instructions
TODO

# Prompt conventions
CONVENTIONS
While a great deal of 5hell is discordant, there are some conventions:

You may toggle the full prompt and minimal promt by typing: 
prompt at the command line
- - - - - - - - - - 
Input: arguments and quote blocks and piping oh my!
-- 5hell uses a 4 argument system. This means all commands take at most 4 arguments
-- this might sound limiting but it isn't at all in practice. Each of the 4 arguments may be overloaded.
Some input methods are:
----* simply typing input: |> ping 1.1.1.1
------ up to four typed arguments
------ remember that |> is the prompt, you don't type that part
----* using single quotes to wrap text: |> echo " this is a text block " 
------ would return: this is a text block
------ note that: |> echo "this is a text block" 
------ would return: ""this is a text 
------ this allows you to overload each argument with more than one "word"
------ easy clip and piping and objects(mostly) are preserved inside of text blocks
------ you may escape a floating quote with \"
--------eg: macro set foo " echo \" bar none \" "
----* use do</b> to run a batch of commands from a file or from memory using an editor
------ |> do -- without arguments do will prompt for number of iterations then open the editor
------ |> do 1 -- would bring up an editor commands typed here will be executed in order
------ |> do 1 ping 1.1.1.1 -- would result in pinging 1.1.1.1 once
------ |> do 5 " rnip 1 | dig " -- would run dig on a random ip 5 times
------ |> do 1 -f /foo.bar -- execute the batch of commands in the file foo.bar
-------- you may launch 5hell from the game's command line with do parameters
-------- the format is the same as if typing commands on the command line
-------- newlines in the script are considered to be new command line entries
-------- you may use piping, easy clip, and even calls for do to execute further scripts
-------- you may use text blocks for complex commands in place of files or the editor
--eg:  |> do 3 " rnip 1 | dig |  | cob get metx | meta -i | db -m | zap " | poke test.txt " this is a bunch of text going into a file "
** it is possible to almost completely automate every aspect of 5hell via do and dig
------ for ease of use do 1 -f</b> has been aliased to bat in 5hell.src:
-------- |> bat /foo.bar is equivalent to |> do 1 -f foo.bar
------ please see do -h</b> and dig -h</u> for more information on automation
----* piping input: |> grep -f ^syst | file -p | cp /etc/passwd
------ would result in copying /etc/passwd over top of system.log (if permissions allowed it)
------ piping allows you to transfer the output of one command to the innput another command
------ in the above example the output of grep [args...] is the input of file -p [input]
------ and the output of file -p [args] is the input of cp /etc/passwd [input]
------ please see pipe -h for more
------ if malp is the backbone of 5hell, pipes are the circulatory system of 5hell

Prompts: </color>|> , :> , ||: 
|>  --  this is the standard Command Line Interface prompt
-- by default there will be information printed before this
-- toggle to a minimalist prompt with: prompt
-- fires CLI commands
|> </color>  --  by default, the GLASSPOOL prompt turns the |></color> blue
-- this means commands execute on the remote object controlled by glasspool
-- see glasspool -h for more
:>  </color> --  this is a liminal prompt, it expects a string or empty return
-- this is used to gather user input within a command
||: </color> --  this is an 'any key' prompt
-- it takes a single keypress
-- this is used in 'button' driven menus

Decision Prompts: </color>[ N/Y/X ] [n/y/x]
-- Multiple choice prompts have a default
-- the default is always Capitalized and sometimes highlighted
-- the default is chosen if <enter> is pressed without input
-- unless otherwise noted, default is chosen if input doesn't match a choice
E.G: |> psudo
Open shell? [c/y/N]
||:
-- in this example, the choices are [c], [y], and [N]
---- [c] -- enter credentials
---- [y] -- open shell
---- [n] or anything else -- no; return/abort
------ this is because N is the default

Prompt: advanced:
-- by default the prompt will display the public and local ip of the active shell
---- or computer if using glasspool on a computer object
-- by default the prompt will display computer name and working directory
-- by default the prompt indicates user privileges (root,user,guest) with:
---- under the ip information there will be a:
------ a red line for root, green line for user , </color>and white line for guest
---- please note that user permissions are determined by access level
---- in some cases, this might not be the actual user
-- you may customize the prompt to your liking in 5hell.src

# Short list of the main tools
Main tools:
probe -- whois and portmap a target
db -- scan target and database results
meta -- metaLib and metaxploitLib fine control
zap -- select and fire exploits one at a time (does not database)
roil -- fire all exploits at once (does not database)
malp -- Memory Alpha: BUFFER management
-- exploit results and other objects go here
-- this is arguably the backbone of 5hell
scpm -- menu and/or cli driven scp
kraken -- proxy management
scribus -- simple text editor
cerebrum -- add 325k+ passwords to custom_object.dictionary
brutus -- use custom_object.dictionary to get root on any (unmodified) npc machine
See: [command] [-h|help] for more help on these and other commands

# Automating tasks
automation || macro || do script || batch file
How to fully automate 5hell:
 As mentioned in help alias, you may define custom macro's, or sets of commands
that 5hell will execute automatically. The two commands involved are:
--: macro and do
The two commands function similarly in that they execute the defined commands as 
if they were typed by you. The list of commands, or 'script,' is formed the same 
way for both commands. Therefore both commands may execute the same scripts. That is, 
do may execute a macro, and macro may execute a do script. This way, don't have to 
remember two different formats for these similar commands.
The specific behavior of each is as follows:
DO: 
 Do is essentially a 'do while' loop that executes at least once. You specify the number 
of loops with the first argument: do [some integer] 
The primary way to use do is like a macro that you want repeated on a loop.
If there are no more arguments after the number, an editor will open (scribus) where you may
type out the commands you want executed line by line. Lines may be complex lines, that is, 
the lines may include piping. The output of a line will not be passed to the following 
line. This way, you may type out commands without using the |  | trick. Once 
you type @ on a new line, the script will begin executing. Use @@ on a new line
to abort execution. Additionally, you may use scribus @do to edit the buffer without executing.
You may then fire it later with do [#] and then @.
An example do script, either written in the editor or read from a file* (*explained in the third usage): 
ifconfig -p | probe
brutus | clipb
grep -p 5hell | clipc
run @c " do 1 rshell @home " @b
rclean @b
This would result in a network probe, an escalation, a root rshell placement, and 
finally a log scrub. This is useful to run each time you attack a new target and 
is also included as the default dig.bat

The Second way to use do is to define the commands on a single line, wrapped by floating quotes. 
This would look like: do 5 " rnip 1 | ping 1.1.1.1 "
This results in pinging 1.1.1.1 five times. More complex commands may be further chained by piping. 
Be sure to wrap the commands you wish to do in quotes* that do not touch anything 
(ie, floating) as shown above.
* If the command string is only two words, quotes are not needed. eg: do 1 ping 1.1.1.1

The Third way to use do is to read defined commands from a file.
The commands in the (text) file are written exactly as they are when using the editor to list commands.
These commands are executed with: do [#] -f [pathToFile]
For your convenience, the alias bat [path] will be relaced by do 1 -f [path]
This is most useful when launching 5hell with a set of instructions. If you launch 5hell from the command 
line with: 5hell do 1 -f [path] 5hell will automatically execute the commands in the file and then exit.
If you do not wish 5hell to exit after completion, use a file named do.rc in your home_dir/Config or
in rkit (executes only if ~/Config/do.rc does not exist). Note that do does not return a value other than
it's completion time. Macros, however, do return the final value. Additionally, the dig command makes
use of the do engine when executing dig.bat (which itself, may reference other do scripts). 
This allows 5hell to be fully automated throughout an arbitrary number of attacks. Cool stuff, right!?

Macro:
A macro is similar to a do script, except it is intended to be written 'on the fly.' In other words, you type 
the macro definition on the command line, without the editor, in most cases. If you do wish to use the editor, 
simply use: scribus @clipa/b/c | macro set [macro_name]
Marco's are stored in the custom object and are executed when called by name: macro [name]
A macro will return it's final value and will not print execution time. There is no built in option 
to read a macro from a file, however cat [file] | macro set [name] may be used to achieve this.
An example macro definition:
macro set prop " cp 5hell /bin | cp /bin/5hell rkit | kraken /bin/5hell | kraken rkit/5hell "
Again, it looks exactly the same as an inline do script, because it is! However, this script is stored 
in the custom object, meaning it's string may be retrieved with get macro.[name] and piped somewhere,
such as to a file. You may absolutely fire a macro with do. Simply type: do [#] @o [macroName]
and do will happily execute the macro. Likewise, as mentioned earlier, piping the </b>contents of a 
do script to macro will define the macro as that do script.

This all may seem complicated, but it is actually rather simple: 
--define a list of commands as if you were typing them, fire the batch of commands.
For more information, please see: do -h, macro -h, dig -h, help alias, and help conventions.
Also, visit the 5hell discord for example scripts!

# Daemon control
5hell has a handful daemon commands: htop, hashim, outmon, and rsi.
Three of these commands; htop, hashim, and outmon, are controlled by a 'daemon controller.' 
This controller functions by creating a file named 5hell.d in your root directory and writes a
line to that file that matches a daemon process that is running. When this line is removed from the file, or
or the file itself is deleted, the daemon process will end. This allows you to start and stop daemons in 5hell
without having to kill the whole script with ctrl+c. Note that rsi is not controlled by the daemon manager as it
exits daemon mode when a reverse shell connects to it.
See also: htop -h, hashim -h, outmon -h, rsi -h

# Default aliases in `5hell.src`
aliases || do script || shortcuts || macros || User Defined Behavior
5hell can be very simple to use, or very, very complicated, depending on your goals.
It isn't necessary to learn 100% of 5hell. Nor is it necessary to suffer through some of it's
more complex chains of commands. You can define your own behavior in a number of ways:

Aliases: 
 You may define aliases in the aliases section of 5hell.src
the default ones supplied are all prompt replacements. There are also 'easy clip' defenitions
that replace arguments in the user input with, for instance, the contents of a clipboard or
your @home server ip. These hard coded aliases may be more complicated than a simple
word or string replacement. You may, for instance, have a simple two word alias fire
a whole series of commands. This might be considered a macro at that point, but also
might not quite qualify.

Here is a list of the currently defined default aliases in 5hell.src:
Alias           | Definition
bat [path]      | do 1 -f [path]
set [key] [val] | cob set [key] [val]
get [key]       | cob get [key]
lock            | perms lock all
exit            | quit
sc [opt]        | silentclean [opt]
gp [#]          | glasspool [#]
prompt          | -this will toggle the full_prompt on/off-

Easy Clip       | Replacement
@a              | clipa -- globals.CLIP["a"]
@b              | clipb -- globals.CLIP["b"]
@c              | clipc -- globals.CLIP["C"]
@tbuf           | transmission buffer -- globals.T_BUF
-- this is                |</b> where hashes go when the tree command finds them
@t              | targetIP
@p              | targetPort
@home           | get_custom_object.HOME server ip address defined in 5hell.src
-- this is                |</b> usually an attack proxy running ssh and rshell servers
-- please don't           |</b> use your actual home pc for this
@B [index|-m]   | directly reference a value in the BUFFER </color>by [index] or menu: [-m]
@o [key]        | directly reference a value in the custom object by key
@r [index]      | directly reference a shell in the rsi buffer by [index] or menu: [-m]
All @ aliases (known as ez_clips) may be escaped with the \ character:
<size=75%>--eg: \@a, \@home</size>
<size=75%>--eg: clipa bob || echo @a -- will echo 'bob', while </size>
<size=75%>--eg: clipa bob || echo \@a -- will echo '@a' </size>

Please note: several commands have their own references for editing the clipboards
-- these commands will use @clipa, @clipb, @clipc instead of @a, @b, @c
Further, the clipa, clipb, and clipc will use @B to reference the BUFFER:
-- e.g: |> clipa @B 1 -- copy the object at index 1 in the BUFFER to clipa
---- that object may then be used by other commands that accept piped objects as input
-- as of 3.9.6 any command may use @B [index] as any parameter(s)
-- there are other ways to pipe objects around besides the clipboards, explore to learn more.

Marcos and Automation: 
<size=75%></b>You may define custom macro's with the macro command. A macro is a </size>
<size=75%></b>runtime-defined set of instructions executed by a single command. Think of it as an alias that performs</size>
<size=75%></b>commands for you. Additionally, you may execute batch commands either from a file or from memory. There are</size>
<size=75%></b>a few differences between a macro and a do script.</size>
<size=75%></b>Please see:  do -h, macro -h, and help automation for more information on this topic.</size>

# `buffer`, `clipboard`, and `custom_object`
The BUFFER
The BUFFER stores objects. Anything may be stored in the BUFFER.
You access the BUFFER with the malp command >> option [5]
When an exploit is run, the result is stored in the BUFFER. You
may interact with these objects in a number of ways by selecting them
from the list and using their context menu (if the object has one).
One way to fetch an object from the BUFFER for use elswhere is to use the clipboard:
|> clipb @B [index|-m]</color>-- where index == BUFFER[index]
-- then pipe the value to another function
Easy Clip! As of version 3.9.6 any command may take @B [index|-m] as one or more parameters!
-- if -m is passed instead of an index, a menu is displayed
|> roil | scpm /root/rkit @B -m
You may pipe anything into the buffer with |> [command_returning_input] | malp

Easy Clip! You may reference the clipboards with the @ symbol:
***  clipa, clipb, and clipc are all clipboard spaces  ***
You may use @a, @b, and @c to reference their values
e.g. echo hello world | clipa |  | poke hello.txt @a
*** tbuf, home, do ***
e.g. gopher @tbuf, e.g. rshell @home, e.g scribus @do

The CUSTOM_OBJECT is a way for scripts to share information between
nested launches. This means you can launch 5hell with 5hell and pass objects back and forth.
You interact with the custom_object via the various cob commands
Namely: cob get and cob set.
For ease of use: cob get and cob set have been aliased to:
-- get and set in 5hell.src
-- |> cob set bob burger is equivalent to |> set bob burger
-- |> cob get bob is quivalent to |> get bob
An example would be cerebrum</color> which loads the dictionary to the custom object.
-- When generated, the dictionary is loaded to the custom object under the key: dictionary.

# `system.log`
The dreaded System.log
Actions that generate an entry in system.log: 
-- establishing a net_session on a server (not a router)
-- connecting via Browser.exe to a server
---- connection established on port ##
-- obtaining a shell (server/router)
---- shell obtained on port ##
-- deleting a file
---- file deleted [ip]
-- routing a connection with:
-- connect_service or file_explorer
---- connection routed [ip]
-- shell disconnect
-- i.e. exiting from start_terminal
---- connection closed [ip]

Active Traces</color> will start when shell.start_terminal is used
on an npc machine with an active admin of sufficient knowledge and give-a-damn.
Generally, if there is a root: dsession active, using start_terminal will trigger
an active trace. Active traces are stopped by disconnecting (exiting) that terminal instance.

When using 5hell you should NOT ever open a terminal (on a target) unless you are doing an Academic or
Police record mission. OR if you absolutely need to open the browser to edit firewall or port rules
on a target. Otherwise, use glasspool and run to leverage shell object manipulation instead.

However! You should start_terminal on your end point attack proxy. In fact, do it twice:
-- use prox to tunnel to your end point proxy then launch 5hell and type psudo and then select [y]
-- this will start_terminal on top of your start_terminal, effectively looping your connection on that machine
-- this will ensure your end point proxy's ip is left in logs, not your origin ip
-- without this, you risk exposing ip's behind the proxy
-- note: this means you'll have to 'exit' twice from that proxy to return home
Passive Traces</color> can/will start when certain actions have been left unaddressed:
- Deleting a file and not removing the log entry
- Leaving a connection closed log without a corresponding connection established log
- Leaving a shell connected log at all
- I think connection routed logs trigger traces, too. Not sure though.

We all leave logs, sometimes. To clean them up, here are a few methods:
Silentclean </color>-- local log corruption using a text file
-- creates a file used to corrupt logs
-- has nuke option (see: silentclean -h)
Rclean </color>-- remote (or local) log corruption using objects
-- uses a file already on system to corrupt logs
-- accepts and works on piped objects (see: rclean -h)
MV 
-- yep, just the mv command
-- poke haha | mv haha /var/system.log
Wiping the log with one of these methods using a reverse shell is best
but not necessary. You may run silentclean, exit 5hell, exit the terminal, and you will not leave a disconnect log.
-- be aware that taking any log-creating action after running sc, except exiting, may regenerate the log.

# The @home system
Convention: @home -- indicates a server you, the end user, have set up for 5hell
services. Servers should be of type SSH and/or RSHELL and it is recommended to run:
 pwgen | pwgen hash
on ssh servers running the hashim daemon. The @home server is used by:
 cerebrum, brutus, linkdb, transmit, and rshell/rsi
For example: rshell @home notAvirus would create an rshell with ip set as your @home server.
That server would be running the rshell_server used by the rsi command. An @home server may also run:
 hashim, outmon, or other custom services. Please contact Plu70 if you have questions about setting
up these resources.
Please edit the appropriate line in 5hell.src to setup @home by providing an ip address, port, password,
and directory for the pass file. It is important that you secure 5hell with login authentication,
either stock or your own, to prevent exposure of this information!
