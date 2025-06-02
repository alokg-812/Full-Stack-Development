# FSD bootcamp day1

## Learning Outcome
* Understand the client and server program
* Visualize the website data fetching


### Accessing the files:
* **File Explorer:** File explorer is a window/interface that communicates with the OS to serve us with the files available in the system.
* **Terminal:** cd location -> open file
* **Web Browsers:**
    * Browser helps us access file, directly, connect remotly to some servers.
    * Browser is a `parser | load` for HTML files.


### Transferring the files:
* **Use external device:** Here, the operating system allows the permission
* **For multiple devices:** There has to be some external device that helps other devices to connect with it through wires.


* `packets` are form of data that is been transferred.
* L1 and l2 have some `protocols`(terms on which both systems agree to share some particular file)
(`TCP | IP` are primary types of protocols)

🔁 Difference between 127.0.0.1 and localhost?
They are almost the same:
- 127.0.0.1 is the IP address
- localhost is the hostname that maps to 127.0.0.1

You can use either:
- http://127.0.0.1:3000
- http://localhost:3000



Default IP adress - Three systems, three IP address(10.0.0.1, 10.0.0.2, 10.0.0.3), i asked for a random IP which is not there, then there is a default IP address that lies in the same range of the device associated with it 

The process:
The diagram illustrates a network communication scenario involving a **Router**, a **Client**, a **Server**, and a **Program**. Here's a detailed explanation of each component and its role in the flow:

---

### 🔵 **Router**

* Acts as the central communication hub.
* It **switches/forwards packets** to connected devices (Client, Server, and another device L3).

---

### 💻 **Client (L1)**

* Identified by **IP1 (Default IP)**.
* Has a **Program bound to it** (likely a local service or listener running on L1).
* Communicates with the router.
* **Receives a program from the Server (L2)** via the router, which is displayed in the **Client's Chrome browser**.

---

### 🖥️ **Server (L2)**

* Also connected to the router.
* Sends a **Program of IPxp** (another IP address or resource) to the client.
* The implication is that the server is hosting or transmitting a program/resource which is accessed by the client through the network.

---

### 🖥️ **Device L3**

* Another device connected to the router, but not directly involved in the current interaction.
* May be another client or resource in the network.

---

### 🧩 **Program**

* It is **bound** to the client (L1), meaning it's running or assigned to work with L1.
* Possibly a server or application that L1 uses or interacts with.

---

### 🔄 **Overall Flow**

1. The **Router** connects all devices (L1, L2, L3).
2. The **Client (L1)** runs or binds to a **Program**.
3. **Server (L2)** sends a **program/resource of IPxp** to the **Client**, which is viewed in **Chrome**.
4. L1 receives and possibly runs or displays this resource.
5. L3 is present but unused in this specific transaction.

---

### 📝 Key Points

* **"IP1"** is the client’s default IP.
* **"IPxp"** may refer to another IP (maybe the server’s or program source's IP).
* The **Program from IPxp is loaded/displayed** in Client’s Chrome browser, possibly through a web service or HTTP request.

Let me know if you'd like help drawing a packet flow or understanding how this would work technically (e.g., with ports, HTTP, etc.).










