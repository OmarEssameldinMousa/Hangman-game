export function fetchData() {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest()
        myRequest.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText))
            } else {
                reject(Error("No Data found"))
            }
        }
        myRequest.open("GET", "words.json")
        myRequest.send()
    });
}
