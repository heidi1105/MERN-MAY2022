# Debugging Help
Here are some debugging tips for different situations. 
1. [The port is already in use](#kill-port)
2. [Mongo installation for macbook users](#installation-of-mongo)


## Kill port
If the port is already in use and you are not very sure where you run it, try to kill the port. Running the first line of the command, you will be able to find the port and check if it is running. In the following example, the port we are checking is 8000. It can be 3000 or any other servers. After you run the code, you should be able to see which PID that port is using. From the example below, the PID is 34488 and therefore, we can kill that PID and hence terminate the port. 

MAC/Linux: 
```
    lsof -i:8000 — getting the background process
    kill -9 34488
```

Windows:
```
    netstat -ano | findstr :8000
    taskkill /PID 34488 /F
```

## Installation of mongo
Most of the time, macbook may experience 2 different types of errors when it comes to the installation of mongo (especially for M1 chip). 
1. brew tap mongodb/brew fails
If you are not able to install mongo using brew, it's possible the brew installation got some problems. Try the following. 
- ``` brew doctor ``` : this command helps you fix errors inside your homebrew
- if brew doctor doesn't work, you could update the brew manually using the following code. 

```
    git -C $(brew --repository homebrew/core) checkout master
    brew update
    brew upgrade
    brew upgrade —cask
    brew cleanup
    brew untapped mongodb
```

- After you untap mongodb, try to ```brew tap mongodb/brew``` one more time. If nothing can be fixed.... try mongodb cloud

2. unable to start the mongodb-community server
If you can install mongodb sucessfully but unable to run the server, try to restart the server. 
```brew services restart mongodb-community@5.0``` : this will restart the server

- If the above code doesn't work, try to stop and start the server to force restart the server. 

```
    brew services stop mongodb-community@5.0
    brew services start mongodb-community@5.0
```
