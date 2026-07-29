# Piping

## What is piping?

5hell supports piping, just like most fully equipped terminals,
With piping you can send the output of a command to the next command in the same line.

This can be very useful when attempting to automate things.
An example of a command chain would be:

(With a file named targets in /root)
`enum targets | enum -d dig`

Result:
Dig gets executed on every ip on each new line in the file named targets

Walkthrough:
1. `enum targets` goes over every entry in the file named targets
2. the `|` symbol transfers the output of that command into the next command
3. `enum -d dig` uses the previously outputted IPs, and appends them to dig

### The lesson:
Piping allows the output of commands on the left to be passed to the right, technically there is no limit to what commands you can pipe into.
