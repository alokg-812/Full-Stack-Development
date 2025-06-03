# ✅ **FSD Bootcamp – Day 1 Summary**

## 🎯 **Learning Outcomes**

By the end of the session, you should be able to:
* Understand how **client and server programs** interact.
* Visualize how **websites fetch data** using network communication.


## 📂 **Accessing Files on a System**

### 1. **File Explorer**

* A GUI tool in operating systems (e.g., Windows Explorer) used to **navigate and manage files**.
* It **interacts with the OS kernel** to list, open, or move files on the system.

### 2. **Terminal**

* A command-line interface (CLI) used to navigate and access files.
* Example:

  ```bash
  cd Desktop/myProject  
  code index.html
  ```

### 3. **Web Browser**

* A tool that helps:
  * **Access local HTML files**
  * interpret different files and can open up for us
  * **Connect to remote servers** over the internet

* Web browsers work as **parsers and loaders**:
  * They parse HTML, CSS, JS
  * Load content (text, images, APIs) in a human-friendly way

## 🔁 **Transferring Files Across Devices**

### 1. **Using External Devices**
* Files can be transferred via **pen drives, hard disks, etc.**
* The OS handles **permissions** to read/write to these devices.

### 2. **Using Networks (Multiple Devices)**
* A **router or switch** is used to connect multiple systems.
* Devices exchange files via **network protocols** like:

  * **TCP/IP (Transmission Control Protocol / Internet Protocol)**

* **A better solution?:**
  - Our computer has ethernet port, and we can connect devices togetehr using ethernet cable. Once we connect the devices we can transfer file from one machine to another. This transfer can take place using shared folder or SCP().
- In place of connecting the devices directly one to one using ethernet cable, we can connect many such devices using a `router/wifi`. Now we can connect to any machine connected to the router.
- This is called as the `LAN(Local Area Network)`.
- Multiple LAN combination leads to the `WAN(Wide Area Network)`.
- The largest existing WAN is `Internet`. 

[Detailed Explianation](https://github.com/alokg-812/Full-Stack-Development/blob/main/FSDBootcamp/Day1/client-server-network.md)


### Defer vs async
**Defer:**
- The script is downloaded and parsed in the background without blocking the browser's parsing of the rest of the page.
- The script's execution is delayed until the page's parsing is finished.
- Scripts with defer are executed in the order they appear in the HTML document. 

---


# Day 2:

### Learning Outcomes:
- Javascript

### Javscript:
-











