# ChequeConvert Desktop
![](https://raw.githubusercontent.com/pirsquare/chequeconvert-desktop/master/icons/icon.png)

Desktop app for converting amount to words used in cheque writing. Built with electron.

![](https://raw.githubusercontent.com/pirsquare/chequeconvert-desktop/master/screenshot.png)

## Supported Platforms
- Windows

## Download Executables
- [Windows](https://github.com/pirsquare/chequeconvert-desktop/releases/download/0.0.1/chequeconvert-win.zip)


## How to build?
Command below is used to build for win32. Download and unzip source code than in root directory, run commands below to create exe file for windows.
```shell
npm install
electron-packager . chequeconvert --platform=win32 --arch=ia32 --version=0.35.0 --icon=icons/icon.ico
```
