## Welcome to the unofficial Grey Hack documentation.

Welcome to Grey Hack!

When you first start the game, you get dropped onto your very own Ellipse OS workstation.

However, we have several issues: We have no internet, we don't have a mail account or a web address.

### First steps: humble beginnings.

As our first foray into hacking, we will get ourselves an internet connection, the cool way:

#### Wifi hacking, step by step.

1. Let's check what wifi networks are available to us, run `iwlist wlan0` in Terminal
<pre>
To make this process simpler, note down the strongest network, you will need its bssid and essid.
</pre>

2. We need to prepare our system for cracking a network, we do this by enabling Monitor mode, to do so, run `airmon start wlan0`, this will enable monitor mode on wlan0, our wifi card. 

<pre>
Monitor mode is a special mode of operation for wifi cards,
and allows a user to direct the card to capture packets, 
it also generally gives a user in real life more control over their card, 
however, when its enabled, wifi access stops working
(Which is why in real life, we use dongles with hardware that supports monitor instead of built in wifi cards)
</pre>

3. When monitor mode is enabled, we can use our second wifi hardware command: `aireplay -b bssid -e essid`
<pre>
This command can fail, which means the router is patched, if thats the case, just pick a different one.
Depending on the strength of the network, the amount of `ACK` packages required for a succesful attack will differ.
Weaker networks can require up to 20,000 ACKs where a strong typically only requires 7,000 ACKs

If you want to know the amount of ACKs required precisely, you can use the following formula: "300000 / (Power + 15)"
</pre>

4. Once you've collected enough ACKs, you can press Ctrl + C, this will create a file in the same folder as you ran the command in, ie: /root

5. Run `aircrack network_name.cap` where network_name is the name of the network you just assaulted.

6. If everything went well, you should be able to connect to the cracked wifi!

Once you're on a network, get yourself a mail account and read this wiki and the Manual on the desktop.

### Next steps:

Get your system secured:
[[Security-How-to]]


Read about 5hell here: 
[[5Hell-Documentation]]
