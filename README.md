# Sprout *nix Service Template

[![Greenkeeper badge](https://badges.greenkeeper.io/hhsnopek/sprout-nix-service.svg)](https://greenkeeper.io/)

Need to create a service based on a binary? I got you, cheers! :coffee:

Template Credit: https://gist.github.com/bcap/5397674

### Installation

- `npm install sprout-cli -g`
- `sprout add nix-service git@github.com:carrot/sprout-nix-service.git`
- `sprout new nix-service service`

### Options

``` 
Name         -  Your service's name                                  [Default: '']
Description  -  A brief description of your service                  [Default: '']
User         -  User that will spawn the process                     [Default: '$NAME']
Group        -  Group that will spawn the process                    [Default: '$NAME']
Path         -  Path to binary                                       [Default: '/usr/bin/$NAME']
Args         -  Arguments passed to the service startup              [Default: '']
Work Dir     -  Working directory where the service will be started  [Default: '/var/lib/${NAME}']
Pid File     -  Pid file location                                    [Default: '/var/run/${NAME}.pid']
Script Name  -  Location of this init script                         [Default: '/etc/init.d/$NAME']
Log Path     -  Standard output & error path                         [Default: '/var/log/$NAME']
```
