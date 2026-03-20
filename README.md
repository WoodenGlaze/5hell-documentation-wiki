# 5hell documentation | Wiki style

I suck at writing these, and i refuse to use AI for it lmao, so here's some documentation you can click through

If you prefer not to run this through docker, in docker/app-data/repository, there are all the source markdown files you can put into a markdown viewer of your liking!

## Installation instructions:

### Prerequisites:

*   Docker (Any flavor should work, for CLI, be sure to install compose)
    
*   A caffeinated beverage of choice.
    

1.  Download this repository:  
    git clone command: `git clone https://urlhereman`
    
2.  Open a terminal in the folder you downloaded the repository to  
    (Make sure you are in the folder with the docker-compose.yml file)
    
3.  Run the following command: `docker compose up -d` (docker | Calls docker. Compose | Turn the .yml into workable stuff. up | exposes the ports defined in the yml. -d | Detach from spawned docker container)
    
4.  Visit either: [http://localhost:9182](http://localhost:9182) or [http://127.0.0.1:9182](http://127.0.0.1:9182)
    
5.  You should now have a local version of the wiki version of the 5hell documentation.
    
    1.  If you want to edit the wiki, login using `wiki@wiki.com | WikiPass`