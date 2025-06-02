## 📊 Network Architecture

### 🔄 The Setup:

![image](https://github.com/user-attachments/assets/b837f309-8799-4a08-9e75-f2472367a072)


A simple **local network** of 3 systems and one program:

#### 🧠 Components:

| Component       | Role                                                      |
| --------------- | --------------------------------------------------------- |
| **Router**      | Network switch, connects all devices and forwards packets |
| **L1 (Client)** | Has a default IP (`IP1`), binds to a program              |
| **L2 (Server)** | Sends a program (from `IPxp`) to L1                       |
| **L3**          | Another device connected to the network                   |
| **Program**     | Bound to L1 (maybe a web server, backend app, etc.)       |

---


### 🧱 *Important Terms:*

* **Packet**: Small chunk of data sent over a network
* **Protocol**: A set of rules for communication (e.g., TCP/IP)
* **Ports**: Logical endpoints for network communication (e.g., port 3000)


#### 🌐 **127.0.0.1 vs. localhost**

| Term          | Meaning                                           |
| ------------- | ------------------------------------------------- |
| **127.0.0.1** | Loopback IP address – refers to the local machine |
| **localhost** | Hostname that maps to 127.0.0.1                   |

🔸 You can use either of these in URLs like:
`http://127.0.0.1:3000` or `http://localhost:3000` to access local services

### 📶 **Understanding IP and Default IP Address**

* Every device connected to a network gets an IP like `10.0.0.1`, `10.0.0.2`, etc.
* If a system requests a **non-existent IP**, a **default IP (fallback)** within the same subnet range may be used for redirection or diagnostics.


## 🔍 **Detailed Component Description**

### 🔵 **Router**

* The central node that **switches/forwards packets** between devices.
* Connects:

  * Client (L1)
  * Server (L2)
  * Optional device (L3)


### 💻 **Client (L1)**

* Assigned a **default IP (IP1)**.
* Hosts or runs a **program** (web server or service).
* This program is **bound** to L1 (i.e., actively running and listening on a port).
* Receives a program (possibly HTML/JS) **from L2**, which it displays in **Chrome browser**.


### 🖥️ **Server (L2)**

* Also connected to the same router.
* Sends the **program/resource from IPxp** to the client.
* "IPxp" could be a web app, service, or some other content hosted on L2.


### 🖥️ **Device (L3)**

* Another system on the network.
* **Not directly involved** in this exchange, but could act as a client/server in other interactions.

### 🧩 **Program**

* A running application bound to the **client L1**.
* It could be a backend service (like Express.js, Flask, etc.) or any local service that serves files or data.
* The **Chrome browser** is used to **access this program** via `localhost` or `IP1`.


## 🔄 **Overall Communication Flow**

1. **All systems** (L1, L2, L3) are connected via the **Router**.
2. **Client L1** has a **program bound** to it (running locally).
3. **Server L2** sends a program/resource (IPxp) to L1.
4. **Client L1** displays this program **in the browser (Chrome)**.
5. **L3** is idle in this context but part of the same network.


## 📌 **Key Takeaways**

* **Client-Server** communication uses protocols (like TCP/IP) and ports.
* Browsers can act as **clients** accessing local or remote **servers**.
* IP addresses and hostnames help identify machines and services in a network.
* **Program binding** means running a service on a specific machine and IP/port.
* **Packets** are the core data units transmitted over the network.
















