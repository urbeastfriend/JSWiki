
// Для создания ajax запросов фактически используются повторяющиеся вызовы, отличающиеся лишь деталями
// И вполне неплохо было бы создать какую-то общую абстракцию и использовать при последующих обращениях к серверу.

function get(url) {

    return new Promise((succeed, fail) => {
        let getXhr = new XMLHttpRequest();
        getXhr.open("GET", url);
        getXhr.addEventListener("load", () => {
            if (getXhr.status >= 200 && xhrPost.status < 400) {
                succeed(getXhr.response);
            }
            else {
                fail(new Error(`Request failed: ${getXhr.statusText}`))
            }
        });
        getXhr.addEventListener("error", () => fail(new Error("Network error")));
        getXhr.send();

    });
}

get("http://metanitjstest/hello.txt")
    .then(response => console.log(response))
    .catch(error => console.log(error))

