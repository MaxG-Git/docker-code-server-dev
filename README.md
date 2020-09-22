# docker-code-server-dev (Internal)
This Is my **educational** docker development environment. This development environment is designed for students in T127 (& T177) At George Brown College. It is specially designed to include everything needed in semetser 3. This is designed to run internally not externally. **An external version can be found under the "external" Branch** (coming soon!)

## Dependencies
- docker & docker-compose
- 2GB of RAM on host machine is recommended

## Please Note
**This is a work-in-progress!** Expect errors to arise! When they do please fill out a new issue or if you would like to try and fix the given issue set up a pull request!

## What is included?
- [cdr/code-server](https://github.com/cdr/code-server) (A web-based VScode)
    - Java JDK/JRE - (Debbuging working) 
    - PHP - (Debbuging working)
    - .Net Framework - 2 versions included - one for PLSQL (Debugging WIP)
- [misterunknown/IFM](https://github.com/misterunknown/ifm) (A beautiful front-end file manager)
- [nginx](https://hub.docker.com/_/nginx) Front end Web server for files
    - PHP installed inside container for frontend
    - [prismjs](https://prismjs.com/) for frontend end code syntax
    - Some extra assets for styling code rendering/url pathing
- [Oracle Xe (PLSQL)](https://hub.docker.com/r/oracleinanutshell/oracle-xe-11g)

## How Does This Work
For understanding how these services work you will need some background with [docker](https://www.docker.com/why-docker). Assuming that you do...
#### Backend:
 This includes pre-built containers (listed above) all on different ports. Using Dockerfiles I have customized some of the containers to enable support for JAVA, PHP, and C#. The docker stack also includes a PLSQL server running. 
#### Frontend:
This includes more pre-built containers with customizations to run PHP and HTML files normally while catching all other filetypes and displaying them as code blocks.  

## Installation
#### Step 1
Make sure to check Dependencies! (and the Please Note section)
#### Step 2
Clone repository:
```bash
git clone https://github.com/MaxG-Git/docker-code-server-dev
```
#### Step 3
Set environment variables

For Linux users:
```bash
cd docker-code-server-dev
nano .env
```
#### or

Use your Favorite editor and open `.env` file in the cloned repository. 

Current Available Environment Variables
- `MASTER_PASSWORD` - Password Used for code-server (If left blank no password will be used)
- `HOST_IP` - Should be set to you PC internal IP4 Address (Ex. 192.168.0.15)
- `COMPOSE_CONVERT_WINDOWS_PATHS` - Only needed if running on windows, this configures the paths correctly (should be set to 1 on windows)

#### Set 3
Run docker-compose in the downloaded "docker-code-server-dev" folder
```bash
sudo docker-compose up -d
```
After this docker will start to slowly install all services. This may take a while. If all goes well everything should be installed and running 🥳


## Stop Containers
Open your terminal in the downloaded "docker-code-server-dev" folder
```bash
sudo docker-compose down
```

## Accessing Services
*Ok so I have installed, Now what?*

If everything goes correctly you should have the following servers running on your machine:
- Port 8443 - code-server --> http://localhost:8443
- Port 8444 - Front-end HTML --> http://localhost:8444
- Port 8445 - Front End IFM --> http://localhost:8445
- Port 8446 - Front-end PLSQL --> http://localhost:8446/apex/apex_admin
    - First Login: `Username: admin` `Password: Oracle_11g`
> To access from different PC on same network change `localhost` to the IP address of machine (should be same IP address from `.env` file mentioned above)

### Credits
This repository is a collection of images in a docker-compose stack. Each container image was built by there own awesome respective authors. Here is a list to all there repositories:
- [cdr/code-server](https://github.com/cdr/code-server)
- [misterunknown/IFM](https://github.com/misterunknown/ifm)
- [nginx](https://hub.docker.com/_/nginx)
- [prismjs](https://prismjs.com/)
- [oracleinanutshell/oracle-xe-11g](https://hub.docker.com/r/oracleinanutshell/oracle-xe-11g)
 - [lemeb/a-better-ligaturizer](https://github.com/lemeb/a-better-ligaturizer) - Output font used

Thank you to all above for the amazing images/services!
