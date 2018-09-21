function f(n) {
    if (n == 1 || n == 2) {
        return n;
    }
    return f(n - 1) + f(n - 2);
}

while (line = readline()) {
    var n = parseInt(line);
    print(f(n));
}