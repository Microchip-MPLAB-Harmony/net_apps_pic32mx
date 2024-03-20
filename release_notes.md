---
title: Release notes
nav_order: 99
---

![Microchip logo](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_logo.png)
![Harmony logo small](https://raw.githubusercontent.com/wiki/Microchip-MPLAB-Harmony/Microchip-MPLAB-Harmony.github.io/images/microchip_mplab_harmony_logo_small.png)

# Microchip MPLAB® Harmony 3 Release Notes

## Network Application Examples for PIC32MX Family, v3.9.0

### New Features
- All applications with TCP/IP Configurator Plugin.

### Improvements and Bug Fixes
- Fix for ENC transmit of TCP buffers.
- TELNET terminal is able to read the application command output messages.
- Added TELNET run-time authentication for application.
- Updated demo documentation.
- Bug fixes in package.yml

### Known Issues
- None


### Development Tools

- [MPLAB® X IDE, v6.20](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler, v4.35](https://www.microchip.com/mplab/compilers) or later
- [MPLAB® Code Configurator(MCC) Plugin, v5.5.0](https://www.microchip.com/en-us/tools-resources/configure/mplab-code-configurator) or later
- [MPLAB® Harmony v3 net repository, v3.11.1](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.11.1)
- [MPLAB® Harmony v3 net\_apps\_pic32mx demo apps repository, v3.9.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/tree/v3.9.0)

### Development Kit Support

This release supports applications for the following development kit.

| Development Kits |
| --- |
| [PIC32 ETHERNET STARTER KIT II](https://www.microchip.com/en-us/development-tool/DM320004-2) |

## Net Release Notes

- See the [Net v3.11.1 Release Notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.11.1)

---
## Harmony 3 Network application examples for PIC32MX family  v3.8.0

### New Features
New features added in this release are as follows:

- Applications migrated from MHC to MCC
- Migration of select applications to the Net Plugin (beta)

### KNOWN ISSUES

The current known issues are as follows:
* wolfSSL/wolfCrypto PIC32M projects should be built with xc32 version >= 3.01.
    - Otherwise the build will fail.


### Development Tools

- [MPLAB® X IDE v6.00](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler v4.00](https://www.microchip.com/mplab/compilers) or later
- [Harmony net repository, 3.8.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.8.0)
- [Harmony net_apps_pic32mx demo apps repositories, 3.8.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/tree/v3.8.0)
- MPLAB Code Configurator (MCC), 5.1.2
- MCC Harmony Core, 1.1.0


#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [PIC32MX Ethernet Starter Kit II](http://www.microchip.com/DevelopmentTools/ProductDetails.aspx?PartNO=DM320004-2) |


## Full release notes

- See the full [Net 3.8.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.8.0)

## Harmony 3 Network application examples for PIC32MX family  v3.7.0

### New Features
New features added in this release are as follows:

- Applications migrated from the net repository to this new application repository for PIC32MX development boards


### Development Tools

- [MPLAB® X IDE v5.45](https://www.microchip.com/mplab/mplab-x-ide) or later
- [MPLAB® XC32 C/C++ Compiler v2.50](https://www.microchip.com/mplab/compilers) or later
- [Harmony net repository, 3.7.0](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.7.0)
- [Harmony net_apps_pic32mx demo apps repositories, 3.7.0](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/tree/v3.7.0)


#### Development Kit Support

This release supports applications for the following development kits

| Development Kits |
| --- |
| [PIC32MX Ethernet Starter Kit II](http://www.microchip.com/DevelopmentTools/ProductDetails.aspx?PartNO=DM320004-2) |


## Full release notes

- See the full [Net 3.7.0 Release notes](https://github.com/Microchip-MPLAB-Harmony/net/tree/v3.7.0)


