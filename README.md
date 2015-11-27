# ChequeConvert Desktop
Desktop app for converting amount to words used in cheque writing. Built with electron.


## Supported Platforms
- Windows


## How to build?
Command below is used to build for win32. Download and unzip source code than in root directory, run commands below to create exe file windows.
```shell
npm install
electron-packager . chequeconvert --platform=win32 --arch=ia32 --version=0.35.0 --icon=icons/icon.ico
```
