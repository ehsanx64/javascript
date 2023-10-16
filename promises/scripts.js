/**
 ** Utility Functions
 */
p = f => document.writeln(f);
l = f => console.log(f);

/**
 ** Data Functions
 */
getDataById = () => axios.get("/data.json").then(response => response.data.data);

/**
 ** Entry Point (After loading the window)
 */
window.onload = () => {
    // An array to hold the promises
    let promises = [];

    // Map over our dummy list
    for (var i = 0; i < 3; i++) {
        promises.push(getDataById());
    };

    // After all the promises resolved ...
    Promise.all(promises).then((res) => {
        // We're going to have another set of promises
        let p2s = [];

        // Simulate another 10 XHRs, this time using the other function
        for (var i = 0; i <= 5; i++) {
            p2s.push(getDataById());
        }

        // Dump the returned results
        Promise.all(p2s).then(data => l(data));
    })
}

