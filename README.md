# docker-code-server-dev (Internal) 🐬
This Is my **educational** docker development environment. This development environment is designed for students in T127 (& T177) At George Brown College. It is specially designed to include everything needed in term 3. This is designed to run internally not externally. **An external version can be found under the "external" Branch** (coming soon!)



## Readme Tree 🌳
* ⚠ [Please Note](https://github.com/MaxG-Git/docker-code-server-dev#please-note-)
* ⚠ [Dependencies](https://github.com/MaxG-Git/docker-code-server-dev#dependencies-)
* ℹ [What is Included](https://github.com/MaxG-Git/docker-code-server-dev#what-is-included-%E2%84%B9)
* ℹ [How Does This Work](https://github.com/MaxG-Git/docker-code-server-dev#how-does-this-work-%E2%84%B9)
* ℹ [Installation](https://github.com/MaxG-Git/docker-code-server-dev#installation-%E2%84%B9)
    * [Avaliable values for `.env`](https://github.com/MaxG-Git/docker-code-server-dev#)
* ℹ [Stop Containers](https://github.com/MaxG-Git/docker-code-server-dev#stop-containers-%E2%84%B9)
* ℹ [Accessing Services](https://github.com/MaxG-Git/docker-code-server-dev#accessing-services-%E2%84%B9)
* ♥ [Credits](https://github.com/MaxG-Git/docker-code-server-dev#credits-)


## Please Note ⚠
**This is a work-in-progress!** Expect errors to arise! When they do please fill out a new issue or if you would like to try and fix the given issue set up a pull request!

## Dependencies ⚠
- docker & docker-compose
- 2GB of RAM on host machine is recommended


## What is included? ℹ
- [cdr/code-server](https://github.com/cdr/code-server) (A web-based VScode)
    - Java JDK/JRE - (Debugging working) 
    - PHP - (Debugging working)
    - .Net Framework - 2 versions included - one for PLSQL (Debugging WIP)
- [misterunknown/IFM](https://github.com/misterunknown/ifm) (A beautiful front-end file manager)
- [nginx](https://hub.docker.com/_/nginx) Front end Web server for files
    - PHP installed inside container for frontend
    - [prismjs](https://prismjs.com/) for frontend end code syntax
    - Some extra assets for styling code rendering/url path ing
- [Oracle xe 11g (PLSQL)](https://hub.docker.com/r/oracleinanutshell/oracle-xe-11g)

## How Does This Work ℹ
For understanding how these services work you will need some background with [docker](https://www.docker.com/why-docker). Assuming that you do...
#### Backend:
This includes a [code-server](https://github.com/cdr/code-server) container with some added configurations to install the dependencies to run and debug C#, php, and Java during the containers build (C# Debugging WIP). This also includes a container with Oracle xe 11g running in the backend (with no custom configurations as of now).
#### Frontend:
This includes an nginx containers with customizations to run PHP and HTML files normally while catching all other filetypes and displaying them as code blocks with some extra assets and [Oracle xe 11g](https://hub.docker.com/r/oracleinanutshell/oracle-xe-11g) for code-syntax. To navigate through files on the frontend an IFM container is set up that will bounce you to your nginx container.

Please visit the [Credits](https://github.com/MaxG-Git/docker-code-server-dev#credits) sections to see the images individual sources 

## Installation ℹ
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

#### Available values for `.env`

Current Available Environment Variables
- `MASTER_PASSWORD` - Password Used for code-server (If left blank no password will be used)
- `HOST_IP` - Should be set to you PC internal IP4 Address (Ex. 192.168.0.15)
- `COMPOSE_CONVERT_WINDOWS_PATHS` - Only needed if running on windows, this configures the paths correctly (should be set to 1 on windows)
- `TZ` Timezone for code-server container. Example value: `America/Toronto`

#### Set 3
Run docker-compose in the downloaded "docker-code-server-dev" folder
```bash
sudo docker-compose up -d
```
After this docker will start to slowly install all services. This may take a while. If all goes well everything should be installed and running 🥳


## Stop Containers ℹ
Open your terminal in the downloaded "docker-code-server-dev" folder
```bash
sudo docker-compose down
```

## Accessing Services ℹ
*Ok so I have installed, Now what?*

If everything goes correctly you should have the following servers running on your machine:
- Port 8443 - code-server --> http://localhost:8443
- Port 8444 - Front-end HTML --> http://localhost:8444
- Port 8445 - Front End IFM --> http://localhost:8445
- Port 8446 - Front-end PLSQL --> http://localhost:8446/apex/apex_admin
    - First Login: `Username: admin` `Password: Oracle_11g`
> To access from different PC on same network change `localhost` to the IP address of machine (should be same IP address from `.env` file mentioned above)

### Your Data 
 Your data is stored in a folder named data inside the downloaded folder. All files created in code-server can be found in the path: `docker-code-server-dev/data/workspace` 

 extensions will be saved at: `docker-code-server-dev/data/extensions`

## Credits ♥
This repository is a collection of images in a docker-compose stack. Each container image was built by there own awesome respective authors. Here is a list to all there repositories:
- [cdr/code-server](https://github.com/cdr/code-server)
- [misterunknown/IFM](https://github.com/misterunknown/ifm)
- [nginx](https://hub.docker.com/_/nginx)
- [prismjs](https://prismjs.com/)
- [oracleinanutshell/oracle-xe-11g](https://hub.docker.com/r/oracleinanutshell/oracle-xe-11g)
 - [lemeb/a-better-ligaturizer](https://github.com/lemeb/a-better-ligaturizer) - Output font used

Thank you to all above for the amazing images/services!
