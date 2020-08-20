//HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web

//=====
//What's a protocol: A protocol is a system of rules that define how data is exchanged within or between computers

//request and Response

//Clients and servers communicate by exchanging individual messages (as opposed to a stream of data). The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.

//HISTORY

//Designed in the early 1990s, HTTP is an extensible protocol which has evolved over time. It is an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used. Due to its extensibility, it is used to not only fetch hypertext documents, but also images and videos or to post content to servers, like with HTML form results. HTTP can also be used to fetch parts of documents to update Web pages on demand.

//Components of HTTP-based systems

//===================
//1. Client: user-agent

//The user-agent is any tool that acts on the behalf of the user. This role is primarily performed by the Web browser; other possibilities are programs used by engineers and Web developers to debug their applications.

//The browser is always the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).

//HTTP is a client-server protocol: requests are sent by one entity thus the user-agent. Most of the time the user-agent is a Web browser

//A cache

//A cache (web cache or HTTP cache) is a component that stores HTTP responses temporarily so that it can be used for subsequent HTTP requests as long as it meets certain conditions.

//==========
//The Web server

//This is a server that send responds to the user
//A server appears as only a single machine virtually

//=======
//Proxies

//It's between the user-agent/browser/client and the server

//When a request is sent to the server numerouse actions take place on the request and this is done by proxy

//Proxy can alter the request before sending to the server

//It perform the ff

//caching (the cache can be public or private, like the browser cache)

// 1.filtering (like an antivirus scan or parental controls)
// 2.load balancing (to allow multiple servers to serve the different requests)
// 3.authentication (to control access to different resources)
// 4.logging (allowing the storage of historical information)








