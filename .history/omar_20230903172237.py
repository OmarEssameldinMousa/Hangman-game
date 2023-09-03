def hello(var):
    if (var > 3):
        return var


print(list(filter(hello, [1, 2, 3, 4, 5, 6, 7])))
