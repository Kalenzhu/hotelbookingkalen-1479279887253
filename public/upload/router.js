/*eslint-env browser, node*/
function route(pathname,handle,response,request) {
    var handler = handle[pathname];
    console.log(handler);
    if(typeof handler === "function"){
        handler(response,request);
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route=route;