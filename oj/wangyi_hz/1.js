while (line = readline()) {
    var lines = line.split(" ");
    var n = parseInt(lines[0]);

    var count = 0;
    if (n < 5) {
        count = 1;
    } else {
        if (n % 5 == 0) {
            count = Math.floor(n / 5);
        } else {
            count = Math.floor(n / 5);
            count++;
        }
    }
    print(count);
}
