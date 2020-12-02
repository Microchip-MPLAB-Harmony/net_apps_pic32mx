var myVariable = `
{"0": {
    "doc": "TCP/IP TCP Client",
    "title": "TCP/IP TCP Client Applications",
    "content": "The TCP Client configuration demonstrates creating a network client with the MPLAB Harmony TCP API to make a TCP/IP connection to a web server. ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/readme.html#tcpip-tcp-client-applications",
    "relUrl": "/apps/tcpip_tcp_client/readme.html#tcpip-tcp-client-applications"
  },"1": {
    "doc": "TCP/IP TCP Client",
    "title": "Development kits",
    "content": "The following table provides links to the documentation to the TCP/IP TCP Client Application on PIC32MX family development kits. | Development Kit | . | PIC32MX Starter Kit MHC Configuration | . | PIC32MX Starter Kit Hardware Configuration | . | PIC32MX Starter Kit Run Application | . ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/readme.html#development-kits",
    "relUrl": "/apps/tcpip_tcp_client/readme.html#development-kits"
  },"2": {
    "doc": "TCP/IP TCP Client",
    "title": "TCP/IP TCP Client",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/readme.html",
    "relUrl": "/apps/tcpip_tcp_client/readme.html"
  },"3": {
    "doc": "TCP/IP Network Setup",
    "title": "TCP/IP Network Setup",
    "content": "For the TCP/IP demonstrations, both the target board and the host computer should be in the same network. The host computer can be connected to a router via an ethernet cable or Wi-Fi. The target board should be connected to the router via an ethernet cable. Please refer to the following connection diagram. | All the TCP/IP Application Demonstration projects that are part of this distribution use the Microchip hardware development boards. They are pre-configured with specific PHY Drivers. The default PHY driver can be changed as some of the hardware boards support different PHY daughter boards. To use a different PHY for a specific board, use MPLAB® Harmony Configurator (MHC) to select and configure the PHY. Make sure that correct PHY address and configuration flags are used for the particular PHY daughter board. The MII/RMII and I/O configuration flags should match the hardware for the PHY board. The TCP/IP application demonstrations assume that IPv4 is enabled. If IPv4 is not enabled in MHC, the code in app.c will not build and needs to be updated to remove the IPv4 dependencies. | All the demos have DHCP enabled, and expect a DHCP server to be available. If there is no DHCP server, then the default static IP address will be used: 192.168.100.11. If this static address does not match your network settings, use MPLAB® Harmony Configurator (MHC) to modify the static IP address of the network interface. | The NetBIOS name of the TCP/IP application is specified during the initialization of TCP/IP stack. It is the hostName member of TCPIP_HOSTS_CONFIGURATION structure. The NetBIOS service must be enabled in demonstration configuration, for the TCP/IP demonstration to respond to NetBIOS queries. Alternatively, use the IPv4 or IPv6 address (if IPv6 is enabled) of the board directly. | The IPv4 and IPv6 addresses can be obtained by running the TCP/IP Discovery utility on the computer. It requires the TCP/IP Announce module enabled in demonstration configuration, through MHC. | . ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/readme.html",
    "relUrl": "/apps/readme.html"
  },"4": {
    "doc": "Hardware Configuration",
    "title": "TCP/IP TCP Client Hardware Configuration",
    "content": "This is the following section describes the hardware configurations and one of the configuration can be used for this application demonstration. | This section describes the PIC32MX device default hardware configuration use USB device as on board debugger and programmer for this application demonstration. | Refer to the PIC32MX Ethernet Starter Kit User Guide . | No hardware related configuration or jumper setting changes are necessary. | Connect the mini USB cable from the computer to the USB DEBUG connector on the PIC32MX Ethernet Starter Kit . | Establish a connection between the router/switch with the PIC32MX Ethernet Starter Kit through the RJ45 connector on PHY daughter board . | Note: The PIC32MX Ethernet Starter Kit II does not have an on-board UART connector. | If a serial console is needed, a quick workaround may be attaching the Starter Kit to an Explorer 16 Development Board by using a Starter Kit I/O Expansion Board. | Alternatively, a telnet session could be used for console message and TCP/IP command execution. | . | . | This section describes PIC32MX device hardware configuration for external Ethernet controller ENC28J60 with PIC32MX5XX/6XX/7XX development board. | Refer to the ENC28j60 External Ethernet PICtail Plus Daughter Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/AC164123] . | Refer to Starter Kit I/O Expansion Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/DM320002] . The 10Mbps Ethernet PICtail Plus Daughter Board is inserted to J2(or J4) on the Starter Kit I/O Expansion Board. The J2, PICtail Plus (SPI) connector on Ethernet PICtail Plus Daughter Board is attached to I/O Expansion Board. The PICtail daughter board is inserted to use SPI1. The PIC32 Ethernet Starter Kit II is connected to J1 on the Starter Kit I/O Expansion board. The pins 26 and 47 on J11 (on I/O Expansion board) need to be connected to control the Chip-Select line by the PIC32. Note: The PIC32MX Ethernet Starter Kit II does not have an on-board UART connector. If a serial console is needed, Pin 46 (U2RX) and Pin 48 (U2TX) from connector J11 on I/O expansion board can be used for serial console. | . | This section describes PIC32MX device hardware configuration for external Ethernet controller ENC624J600 with PIC32MX5XX/6XX/7XX development board. | Refer to the ENCX24j600 External Ethernet PICtail Plus Daughter Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/AC164132] . | Refer to Starter Kit I/O Expansion Board [User Guide][https://www.microchip.com/developmenttools/ProductDetails/DM320002] . The Fast 100Mbps Ethernet PICtail Plus Daughter Board is inserted to J2(or J4) on the Starter Kit I/O Expansion Board. The J2, PICtail Plus (SPI) connector on Fast 100Mbps Ethernet PICtail Plus Daughter Board is attached to I/O Expansion Board with white arrows on the two boards lined up. The PICtail daughter board is inserted to use SPI1. The PIC32 Ethernet Starter Kit II is connected to J1 on the Starter Kit I/O Expansion board. The pins 26 and 47 on J11 (on I/O Expansion board) need to be connected to control the Chip-Select line by the PIC32. Note: The PIC32MX Ethernet Starter Kit II does not have an on-board UART connector. If a serial console is needed, Pin 46 (U2RX) and Pin 48 (U2TX) from connector J11 on I/O expansion board can be used for serial console. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-client-hardware-configuration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html#tcpip-tcp-client-hardware-configuration"
  },"5": {
    "doc": "Hardware Configuration",
    "title": "Hardware Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_hardware_configuration.html"
  },"6": {
    "doc": "MHC Configuration",
    "title": "TCP/IP TCP Client MHC Configuration",
    "content": "The following Project Graph diagram shows the Harmony components included in the TCP Client demonstration application. | MHC is launched by selecting Tools &gt; Embedded &gt; MPLAB® Harmony 3 Configurator from the MPLAB X IDE and after successful database migration , TCP/IP demo project is ready to be configured and regenerated. | TCP/IP Root Layer Project Graph . | TCP/IP stack module with internal ethmac . The root layer project shows that UART2 peripheral is selected to do read and write operation for TCP/IP commands. This is the basic configuration with SYS_CONSOLE, SYS_DEBUG and SYS_COMMAND modules. These modules are required for TCP/IP command execution. TCP sockets calculate the ISN using the wolfSSL crypto library. | TCP/IP stack module with external mac daughter board . Both ENC28j60 and ENCX24j600 daughter board use SPI1 driver and peripheral to communicate with the PIC32MZ EF controller. - . TCP sockets calculate the ISN using the wolfSSL crypto library. | . | TCP/IP Application Layer . TCP/IP demo use these application module components for this demo. Telnet connection can be used for various system and TCP/IP related commands, just as the regular system console is used. The NetBIOS Name Service(NBNS) protocol associates host names with IP addresses. SNTP module updates its internal time periodically using a public global time server. The system timer module provides much better accuracy (since it is driven by a hardware clock) and resolution, and should be used for measuring timeouts and other internal requirements. The commands currently implemented and processed by the command processor can be dynamically updated, new commands can be added, etc. See the tcpip_commands.c file for the list of TCP/IP-related commands. Announce module to discover the Microchip devices within a local network. DHCP Client module to discover the IPv4 address from the nearest DHCP Server. DNS Client provides DNS resolution capabilities to the stack. | TCPIP Driver Layer . | Internal ethernet driver(ethmac) . Internal ethernet driver(ethmac) is enabled with the external LAN8740 PHY driver library. The MIIM Driver supports asynchronous read/write and scan operations for accessing the external PHY registers and notification when MIIM operations have completed. | External ENC28j60 ethernet driver . TCP/IP ENC28j60 driver module selected for the external ethernet mac ENC28j60 device. For high MAC TX and RX performance DRV_ENC28j60_MAC_TX_DESCRIPTORS and DRV_ENC28j60_MAC_RX_DESCRIPTORS can be configured respectively more than the default descriptor value size “2”. | External ENCX24j600 ethernet driver . TCP/IP ENCx24j600 driver module selected for the external ethernet mac ENC28j60 device. For high MAC TX and RX performance DRV_ENCX24j600_MAC_TX_DESCRIPTORS and DRV_ENCX24j600_MAC_RX_DESCRIPTORS can be configured respectively more than the default descriptor value size “2”. | . | . ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-client-mhc-configuration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html#tcpip-tcp-client-mhc-configuration"
  },"7": {
    "doc": "MHC Configuration",
    "title": "MHC Configuration",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_mhc_configuration.html"
  },"8": {
    "doc": "Running Application",
    "title": "TCP/IP TCP Client Running Application",
    "content": " ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_run_application.html#tcpip-tcp-client-running-application",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#tcpip-tcp-client-running-application"
  },"9": {
    "doc": "Running Application",
    "title": "MPLAB X IDE Project",
    "content": "This table list the name and location of the MPLAB X IDE project folder for the demonstration. | Project Name | Target Device | Target Development Board | Description | . | pic32mx_eth_sk2.X | PIC32MX795F512L | PIC32MX Ethernet Starter Kit II | Demonstrates the TCP/IP TCP Client on development board with PIC32MX795F512L device and LAN8740 PHY daughter board. This is a bare-metal (non-RTOS) implementation. | . | pic32mx_eth_sk2_enc28j60.X | PIC32MX795F512L | PIC32MX Starter Kit II + External Ethernet Pictail Controller ENC28j60 + I/O Expansion Board | Demonstrates the TCP/IP TCP Client on development board with PIC32MX795F512L device and external Ethernet controller ENC28J60. This is a bare-metal (non-RTOS) implementation | . | pic32mx_eth_sk2_encx24j600.X | PIC32MX795F512L | PIC32MX Starter Kit II + External Ethernet Pictail Controller ENCx24j600 + I/O Expansion Board | Demonstrates the TCP/IP TCP Client on development board with PIC32MX795F512L device and external Ethernet controller ENCx24j600. This is a bare-metal (non-RTOS) implementation | . ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_run_application.html#mplab-x-ide-project",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#mplab-x-ide-project"
  },"10": {
    "doc": "Running Application",
    "title": "Running The Demonstration",
    "content": ". | Configure the Development Board as given Configure Hardware. | Make the demonstration setup as shown Network Setup. | Build and download the demonstration project on the target board. | If the board has a UART connection: . | A virtual COM port will be detected on the computer, when the USB cable is connected to USB-UART connector. | Open a standard terminal application on the computer (like Hyper-terminal or Tera Term) and configure the virtual COM port. | Set the serial baud rate to 115200 baud in the terminal application. | See that the initialization prints on the serial port terminal. | When the DHCP client is enabled in the demonstration, wait for the DHCP server to assign an IP address for the development board. This will be printed on the serial port terminal. | Alternatively: Use the Announce service or ping to get the IP address of the board. | Run tcpip_discoverer.jar to discover the IPv4 and IPv6 address for the board. | . | . | Execution : . | Open the telnet session to get the console output. After the successful broad bring up, the console output for telnet session provides the output. The below diagram shows the UART console output. | For TCP Client test, input the following command from the serial port: Open the telnet session with the board IP address . | . openurl &lt; url &gt; - The &lt; url &gt; argument must be a fully formed URL; for instance, http://www.microchip.com/. For this above URL , the DNS module will make a DNS query. Then it will open a connection to the requested URL and perform a simple HTTP GET command. The response received from the server will be printed on the terminal application through the serial port. The expected output - ![tcpip_tcp_client_project](/net_apps_pic32mx/apps/tcpip_tcp_client/docs/images/http_put_6.png) . | . ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_run_application.html#running-the-demonstration",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html#running-the-demonstration"
  },"11": {
    "doc": "Running Application",
    "title": "Running Application",
    "content": ". ",
    "url": "http://localhost:4000/net_apps_pic32mx/apps/tcpip_tcp_client/docs/readme_run_application.html",
    "relUrl": "/apps/tcpip_tcp_client/docs/readme_run_application.html"
  },"12": {
    "doc": "Harmony 3 TCP/IP Application for PIC32MX Family",
    "title": "Harmony 3 TCP/IP Application for PIC32MX Family",
    "content": "[![MCHP](https://www.microchip.com/ResourcePackages/Microchip/assets/dist/images/logo.png)](https://www.microchip.com) # Harmony 3 TCP/IP Application for PIC32MX Family MPLAB® Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC microcontroller and microprocessor devices. Refer to the following links for more information. - [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit) - [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus) - [Microchip MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide) - [Microchip MPLAB Harmony](https://www.microchip.com/mplab/mplab-harmony) - [Microchip MPLAB Harmony Pages](https://microchip-mplab-harmony.github.io/) This repository contains the MPLAB® Harmony 3 Network Package (Net). The Net repo provides a free fast to market TCP/IP stack for Microchip 32-bit SAM and PIC microprocessor devices. The repo contains multiple applications that demonstrate communication over TCP/IP using well known protocols like TCP, UDP, HTTP, SMTP, etc. Refer to the following links for release notes, training materials, and interface reference information. This repository contains the MPLAB® Harmony 3 TCP/IP application examples for PIC32MX family - [Release Notes](release_notes.md) - [MPLAB® Harmony License](/net_apps_pic32mx/mplab_harmony_license.html) To clone or download these applications from Github, go to the [main page of this repository](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx) and then click **Clone** button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these [instructions](https://github.com/Microchip-MPLAB-Harmony/contentmanager/wiki). ## Contents Summary | Folder | Description | --- | --- | apps | Demonstration of TCP/IP Applications | docs | Documents TCP/IP Application in html format for offline viewing. Use [github pages](https://microchip-mplab-harmony.github.io/net_apps_pic32mx/) of this repository for viewing it online. | ## Code Examples The following applications are provided to demonstrate the typical or interesting usage models of one or more peripheral libraries. | Name | Description | ---- | ----------- |tcpip_tcp_client | [TCP/IP TCP Client Application](/net_apps_pic32mx/apps/tcpip_tcp_client/readme.html)| [![License](https://img.shields.io/badge/license-Harmony%20license-orange.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/blob/master/mplab_harmony_license.md) [![Latest release](https://img.shields.io/github/release/Microchip-MPLAB-Harmony/net_apps_pic32mx.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/releases/latest) [![Latest release date](https://img.shields.io/github/release-date/Microchip-MPLAB-Harmony/net_apps_pic32mx.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/releases/latest) [![Commit activity](https://img.shields.io/github/commit-activity/y/Microchip-MPLAB-Harmony/net_apps_pic32mx.svg)](https://github.com/Microchip-MPLAB-Harmony/net_apps_pic32mx/graphs/commit-activity) [![Contributors](https://img.shields.io/github/contributors-anon/Microchip-MPLAB-Harmony/net_apps_pic32mx.svg)]() ____ [![Follow us on Youtube](https://img.shields.io/badge/Youtube-Follow%20us%20on%20Youtube-red.svg)](https://www.youtube.com/user/MicrochipTechnology) [![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20us%20on%20LinkedIn-blue.svg)](https://www.linkedin.com/company/microchip-technology) [![Follow us on Facebook](https://img.shields.io/badge/Facebook-Follow%20us%20on%20Facebook-blue.svg)](https://www.facebook.com/microchiptechnology/) [![Follow us on Twitter](https://img.shields.io/twitter/follow/MicrochipTech.svg?style=social)](https://twitter.com/MicrochipTech) [![](https://img.shields.io/github/stars/Microchip-MPLAB-Harmony/net_apps_pic32mx.svg?style=social)]() [![](https://img.shields.io/github/watchers/Microchip-MPLAB-Harmony/net_apps_pic32mx.svg?style=social)]() ",
    "url": "http://localhost:4000/net_apps_pic32mx/",
    "relUrl": "/"
  }
}
`;
var data_for_search

var repo_name = "net_apps_pic32mx";
var doc_folder_name = "docs";
var localhost_path = "http://localhost:4000/";
var home_index_string = "Harmony 3 TCP/IP Application for PIC32MX Family";

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });

  const siteNav = document.getElementById('site-nav');
  const mainHeader = document.getElementById('main-header');
  const menuButton = document.getElementById('menu-button');

  jtd.addEvent(menuButton, 'click', function(e){
    e.preventDefault();

    if (menuButton.classList.toggle('nav-open')) {
      siteNav.classList.add('nav-open');
      mainHeader.classList.add('nav-open');
    } else {
      siteNav.classList.remove('nav-open');
      mainHeader.classList.remove('nav-open');
    }
  });
}
// Site search

function initSearch() {

    data_for_search = JSON.parse(myVariable);
    lunr.tokenizer.separator = /[\s/]+/

    var index = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 200 });
        this.field('content', { boost: 2 });
        this.field('url');
        this.metadataWhitelist = ['position']

        var location = document.location.pathname;
        var path = location.substring(0, location.lastIndexOf("/"));
        var directoryName = path.substring(path.lastIndexOf("/")+1);

        var cur_path_from_repo = path.substring(path.lastIndexOf(repo_name));

        // Decrement depth by 2 as HTML files are placed in repo_name/doc_folder_name
        var cur_depth_from_doc_folder = (cur_path_from_repo.split("/").length - 2);

        var rel_path_to_doc_folder = "";

        if (cur_depth_from_doc_folder == 0) {
            rel_path_to_doc_folder = "./"
        }
        else {
            for (var i = 0; i < cur_depth_from_doc_folder; i++)
            {
                rel_path_to_doc_folder = rel_path_to_doc_folder + "../"
            }
        }

        for (var i in data_for_search) {

            data_for_search[i].url = data_for_search[i].url.replace(localhost_path + repo_name, rel_path_to_doc_folder);

            if (data_for_search[i].title == home_index_string)
            {
                data_for_search[i].url = data_for_search[i].url + "index.html"
            }

            this.add({
                id: i,
                title: data_for_search[i].title,
                content: data_for_search[i].content,
                url: data_for_search[i].url
            });
        }
    });

    searchLoaded(index, data_for_search);
}function searchLoaded(index, docs) {
  var index = index;
  var docs = docs;
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var mainHeader = document.getElementById('main-header');
  var currentInput;
  var currentSearchIndex = 0;

  function showSearch() {
    document.documentElement.classList.add('search-active');
  }

  function hideSearch() {
    document.documentElement.classList.remove('search-active');
  }

  function update() {
    currentSearchIndex++;

    var input = searchInput.value;
    if (input === '') {
      hideSearch();
    } else {
      showSearch();
      // scroll search input into view, workaround for iOS Safari
      window.scroll(0, -1);
      setTimeout(function(){ window.scroll(0, 0); }, 0);
    }
    if (input === currentInput) {
      return;
    }
    currentInput = input;
    searchResults.innerHTML = '';
    if (input === '') {
      return;
    }

    var results = index.query(function (query) {
      var tokens = lunr.tokenizer(input)
      query.term(tokens, {
        boost: 10
      });
      query.term(tokens, {
        wildcard: lunr.Query.wildcard.TRAILING
      });
    });

    if ((results.length == 0) && (input.length > 2)) {
      var tokens = lunr.tokenizer(input).filter(function(token, i) {
        return token.str.length < 20;
      })
      if (tokens.length > 0) {
        results = index.query(function (query) {
          query.term(tokens, {
            editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
          });
        });
      }
    }

    if (results.length == 0) {
      var noResultsDiv = document.createElement('div');
      noResultsDiv.classList.add('search-no-result');
      noResultsDiv.innerText = 'No results found';
      searchResults.appendChild(noResultsDiv);

    } else {
      var resultsList = document.createElement('ul');
      resultsList.classList.add('search-results-list');
      searchResults.appendChild(resultsList);

      addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
    }

    function addResults(resultsList, results, start, batchSize, batchMillis, searchIndex) {
      if (searchIndex != currentSearchIndex) {
        return;
      }
      for (var i = start; i < (start + batchSize); i++) {
        if (i == results.length) {
          return;
        }
        addResult(resultsList, results[i]);
      }
      setTimeout(function() {
        addResults(resultsList, results, start + batchSize, batchSize, batchMillis, searchIndex);
      }, batchMillis);
    }

    function addResult(resultsList, result) {
      var doc = docs[result.ref];

      var resultsListItem = document.createElement('li');
      resultsListItem.classList.add('search-results-list-item');
      resultsList.appendChild(resultsListItem);

      var resultLink = document.createElement('a');
      resultLink.classList.add('search-result');
      resultLink.setAttribute('href', doc.url);
      resultsListItem.appendChild(resultLink);

      var resultTitle = document.createElement('div');
      resultTitle.classList.add('search-result-title');
      resultLink.appendChild(resultTitle);

      var resultDoc = document.createElement('div');
      resultDoc.classList.add('search-result-doc');
      resultDoc.innerHTML = '<svg viewBox="0 0 24 24" class="search-result-icon"><use xlink:href="#svg-doc"></use></svg>';
      resultTitle.appendChild(resultDoc);

      var resultDocTitle = document.createElement('div');
      resultDocTitle.classList.add('search-result-doc-title');
      resultDocTitle.innerHTML = doc.doc;
      resultDoc.appendChild(resultDocTitle);
      var resultDocOrSection = resultDocTitle;

      if (doc.doc != doc.title) {
        resultDoc.classList.add('search-result-doc-parent');
        var resultSection = document.createElement('div');
        resultSection.classList.add('search-result-section');
        resultSection.innerHTML = doc.title;
        resultTitle.appendChild(resultSection);
        resultDocOrSection = resultSection;
      }

      var metadata = result.matchData.metadata;
      var titlePositions = [];
      var contentPositions = [];
      for (var j in metadata) {
        var meta = metadata[j];
        if (meta.title) {
          var positions = meta.title.position;
          for (var k in positions) {
            titlePositions.push(positions[k]);
          }
        }
        if (meta.content) {
          var positions = meta.content.position;
          for (var k in positions) {
            var position = positions[k];
            var previewStart = position[0];
            var previewEnd = position[0] + position[1];
            var ellipsesBefore = true;
            var ellipsesAfter = true;
            for (var k = 0; k < 5; k++) {
              var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
              var nextDot = doc.content.lastIndexOf('. ', previewStart - 2);
              if ((nextDot >= 0) && (nextDot > nextSpace)) {
                previewStart = nextDot + 1;
                ellipsesBefore = false;
                break;
              }
              if (nextSpace < 0) {
                previewStart = 0;
                ellipsesBefore = false;
                break;
              }
              previewStart = nextSpace + 1;
            }
            for (var k = 0; k < 10; k++) {
              var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
              var nextDot = doc.content.indexOf('. ', previewEnd + 1);
              if ((nextDot >= 0) && (nextDot < nextSpace)) {
                previewEnd = nextDot;
                ellipsesAfter = false;
                break;
              }
              if (nextSpace < 0) {
                previewEnd = doc.content.length;
                ellipsesAfter = false;
                break;
              }
              previewEnd = nextSpace;
            }
            contentPositions.push({
              highlight: position,
              previewStart: previewStart, previewEnd: previewEnd,
              ellipsesBefore: ellipsesBefore, ellipsesAfter: ellipsesAfter
            });
          }
        }
      }

      if (titlePositions.length > 0) {
        titlePositions.sort(function(p1, p2){ return p1[0] - p2[0] });
        resultDocOrSection.innerHTML = '';
        addHighlightedText(resultDocOrSection, doc.title, 0, doc.title.length, titlePositions);
      }

      if (contentPositions.length > 0) {
        contentPositions.sort(function(p1, p2){ return p1.highlight[0] - p2.highlight[0] });
        var contentPosition = contentPositions[0];
        var previewPosition = {
          highlight: [contentPosition.highlight],
          previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
          ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
        };
        var previewPositions = [previewPosition];
        for (var j = 1; j < contentPositions.length; j++) {
          contentPosition = contentPositions[j];
          if (previewPosition.previewEnd < contentPosition.previewStart) {
            previewPosition = {
              highlight: [contentPosition.highlight],
              previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
              ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
            }
            previewPositions.push(previewPosition);
          } else {
            previewPosition.highlight.push(contentPosition.highlight);
            previewPosition.previewEnd = contentPosition.previewEnd;
            previewPosition.ellipsesAfter = contentPosition.ellipsesAfter;
          }
        }

        var resultPreviews = document.createElement('div');
        resultPreviews.classList.add('search-result-previews');
        resultLink.appendChild(resultPreviews);

        var content = doc.content;
        for (var j = 0; j < Math.min(previewPositions.length, 3); j++) {
          var position = previewPositions[j];

          var resultPreview = document.createElement('div');
          resultPreview.classList.add('search-result-preview');
          resultPreviews.appendChild(resultPreview);

          if (position.ellipsesBefore) {
            resultPreview.appendChild(document.createTextNode('... '));
          }
          addHighlightedText(resultPreview, content, position.previewStart, position.previewEnd, position.highlight);
          if (position.ellipsesAfter) {
            resultPreview.appendChild(document.createTextNode(' ...'));
          }
        }
      }
      var resultRelUrl = document.createElement('span');
      resultRelUrl.classList.add('search-result-rel-url');
      resultRelUrl.innerText = doc.relUrl;
      resultTitle.appendChild(resultRelUrl);
    }

    function addHighlightedText(parent, text, start, end, positions) {
      var index = start;
      for (var i in positions) {
        var position = positions[i];
        var span = document.createElement('span');
        span.innerHTML = text.substring(index, position[0]);
        parent.appendChild(span);
        index = position[0] + position[1];
        var highlight = document.createElement('span');
        highlight.classList.add('search-result-highlight');
        highlight.innerHTML = text.substring(position[0], index);
        parent.appendChild(highlight);
      }
      var span = document.createElement('span');
      span.innerHTML = text.substring(index, end);
      parent.appendChild(span);
    }
  }

  jtd.addEvent(searchInput, 'focus', function(){
    setTimeout(update, 0);
  });

  jtd.addEvent(searchInput, 'keyup', function(e){
    switch (e.keyCode) {
      case 27: // When esc key is pressed, hide the results and clear the field
        searchInput.value = '';
        break;
      case 38: // arrow up
      case 40: // arrow down
      case 13: // enter
        e.preventDefault();
        return;
    }
    update();
  });

  jtd.addEvent(searchInput, 'keydown', function(e){
    switch (e.keyCode) {
      case 38: // arrow up
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.classList.remove('active');
          if (active.parentElement.previousSibling) {
            var previous = active.parentElement.previousSibling.querySelector('.search-result');
            previous.classList.add('active');
          }
        }
        return;
      case 40: // arrow down
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          if (active.parentElement.nextSibling) {
            var next = active.parentElement.nextSibling.querySelector('.search-result');
            active.classList.remove('active');
            next.classList.add('active');
          }
        } else {
          var next = document.querySelector('.search-result');
          if (next) {
            next.classList.add('active');
          }
        }
        return;
      case 13: // enter
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.click();
        } else {
          var first = document.querySelector('.search-result');
          if (first) {
            first.click();
          }
        }
        return;
    }
  });

  jtd.addEvent(document, 'click', function(e){
    if (e.target != searchInput) {
      hideSearch();
    }
  });
}

// Switch theme

jtd.getTheme = function() {
  var cssFileHref = document.querySelector('[rel="stylesheet"]').getAttribute('href');
  return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(theme) {
  var cssFile = document.querySelector('[rel="stylesheet"]');
  cssFile.setAttribute('href', 'http://localhost:4000/net_apps_pic32mx/assets/css/just-the-docs-' + theme + '.css');
}

// Document ready

jtd.onReady(function(){
  initNav();
  initSearch();
});

})(window.jtd = window.jtd || {});


