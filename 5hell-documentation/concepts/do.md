# DO || SCRIPTING || AUTOMATION || NOT BASH || BATCH COMMANDS || DORC || BASHRC
[Home](../../home.md) | [Getting Started](../../getting-started.md) | [Commands](../../command_index.md) | [Concepts](../concepts.md) | [Data Sets](../../data-sets.md) | [Tools](../../tools.md)

The scheduling or automation service for 5hell. You write a set of
commands for 5hell to do. Commands may be entered in-line on the
command line, entered into a text editor buffer, or read from a text file.
see also: do help extra -- for some example do scripts
see also: help prompt, dig -h, scribus -h



## Usage
Do may be launched in a number of ways, depending on your goals:

---

Usage: `do [int] [command] [arg1] [arg2]` -- perform [command] [int] times
passes arg1 and arg2 to the command
use text blocks to pass complex arguments and/or complex commands
eg: `|> do 3 " rnip 1 | probe | db -r | zap "` 
eg: `|> do 1 poke test.txt " this is a bunch of text "` 
note: in practice the above line can be done without the do 1
it's just an example of how you would supply complex parameters to do

---

Usage: `do` -- without arguments will prompt for iterations then open the editor
Usage: `do [#]` -- supplying iteration without a command opens the editor immediately
    enter commands into the editor and enter @ on a newline to begin execution
    the commands in the editor remain until changed and therefore may be rerun/reused
    you may use scribus @do to edit the do buffer without firing the script

---

Usage: `do [int] -f [/path]` -- perform commands in [/path] [int] times
    the preferred method of firing a 'batch' of commands
    many examples may use a .bat extension but the .bat extension is not enforced at all
    it is just a convention, you may name them whatever you wish except:
        dig.bat must be named dig.bat in order for dig to use it (see dig -h)
    nested calls to the do command within these files are valid and encouraged
        dig.bat: cerebrum | brutus | run /home/guest/rkit/5hell " do 1 -f file2.bat " 
        file2.bat: rshell @home | sc -d | exit rshell_placed
    by placing these two files in your rkit folder and running dig [ip] you are able to:
        automate: infiltrating and placing a root rshell on the target
            removing your rkit
            and cleaning the log

---

Alias: `do 1 -f [path]` has been aliased to `bat [path]` in 5hell.src

---

You may launch 5hell from the game's command line with a 'do' instruction:
instead of launching 5hell simply by typing '5hell' you may launch with:
\# `5hell do [#] [opt:-f] [command|path]`
and 5hell will launch and immediately begin running the given commands
5hell will then drop to the exit prompt;
press 'y' if you wish to exit, press enter or any other key to continue running
This allows 5hell to launch 5hell with instructions to launch 5hell with instructions to...
keep in mind there is a game limit of 15 nested uses of shell.launch
but no limit to the number of uses of shell.launch; meaning do 1000 dig -s is completely valid
please note that the game does not allow the use of " in launch parameters
5hell do 1 echo three | echo two | echo one
will result in 5hell running the three echoes at launch 
if this line were typed at runtime, it would have to be:

`do 1 " echo three | echo two | echo one "`

Note: launching 5hell with do results in 5hell exiting on completion
However:
you may launch 5hell with params, without do:
5hell echo three | echo two | echo one
will result in the same behavior, but 5hell will not exit on completion

---

## Resource Configuration
You may place a file named do.rc in your rkit and/or Config folder 
The contents of the file should look like a standard do script and will be executed on 5hell's launch
unlike launching with `5hell do 1 -f do.rc`, this method will not exit on completion 
do.rc in Config will take priority over do.rc in rkit. 
This allows a 'home' and 'away' do.rc
###
Default do.rc(/root/rkit):
```
# do.rc: resource configuration using the 'do' protocol
# * put any number of commands to be executed (piping supported) in order at startup
# * type commands exactly as if typing on 5hell's command line or writing a macro
# * each newline is 'pressing enter'
# * use the # character for comments
# * all comments (including these) are optional (you can delete all this)
# * empty, uncommented lines will result in a blank line printed IF:
# -- you have 5hell.src set to print a line before the prompt
# * using do.rc is optional but it's a great place to define macros on startup
# NOTE: you may place do.rc in your Config folder
# -- this is in addition to OR instead of placing it in rkit
# -- the do.rc located in the <b>Config<b> folder will take priority
# -- meaning it will be executed instead of ~/rkit/do.rc
# -- this allows you to have a 'home' and 'away' version of do.rc
# To Suppress output during startup;
# uncomment the below line AND the corresponding line at the bottom of the file:
kore --silent
# 
# THEME section
# below are examples of a colorDefinition override used to adjust colors to fit your theme
# kore --override colorDefault <noparse><#FFFFFFFF></noparse>
# kore --override color5phinxText <noparse><#00FFFFFF></noparse>
# END THEME
# remove the '#'s below and add your commands
# 
# 
# 
# end of user commands
# uncomment the below line to have kore secure your system on launch
#kore -s
# uncomment the line below if you uncommented the corresponding one at the top
#kore --silent
```

## Related Reading

- [DO example scripts](do/example%20scripts.md)
- [Piping command output](piping.md)
- [Dig command concepts](dig.md)
