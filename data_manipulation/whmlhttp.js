let request = new XMLHttpRequest()
    request.open("GET","http://google.com");
    request.send();
    request.onload = () => {
        if(request.status === 200){
            console.log(JSON.parse(request.response))
        } else {
            console.log("Page not found")// if link is broken, output will be page not found
        }
}

