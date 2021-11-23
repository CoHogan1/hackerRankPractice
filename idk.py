test = [1,2,3,4,5,6,7]
number = 7

def findZigZagSequence(a, n):
    a.sort()
    mid = int((n + 1) / 2) -1                        # 1
    a[mid], a[n-1] = a[n-1], a[mid]
    st = mid + 1
    ed = n - 2                                       # 2

    while(st <= ed):
        print(a, "loop")
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1                                  # 3

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    print(a," final")
    return
findZigZagSequence(test, number)
