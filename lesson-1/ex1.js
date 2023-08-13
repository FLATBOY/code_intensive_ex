/**
 * Fix bug
 */

function run() {
    let b = "Bar";

    console.log(a, b)
    b = "Bar1"
    {
        var c = "Fooz"
        var d = "Bazz"
        var a = "Foo";

        console.log(c, d)
    }

    console.log(c)
    console.log(d)
}

run()
