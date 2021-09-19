# idk what n is suspose to equal.
aa = [2,3,4,1,5]
n = 5

def findZigZagSequence(a, n):
    a.sort()
    mid = int((n + 1)/2)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 1
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed + 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return



findZigZagSequence(aa, n)




# Python program to sort an array in Zig-Zag form

# Program for zig-zag conversion of array
def zigZag(arr, n):
    # Flag true indicates relation "<" is expected,
    # else ">" is expected. The first expected relation
    # is "<"
    flag = True
    for i in range(n-1):
        # "<" relation expected
        if flag is True:
            # If we have a situation like A > B > C,
            # we get A > B < C
            # by swapping B and C
            if arr[i] > arr[i+1]:
                arr[i],arr[i+1] = arr[i+1],arr[i]
            # ">" relation expected
        else:
            # If we have a situation like A < B < C,
            # we get A < C > B
            # by swapping B and C
            if arr[i] < arr[i+1]:
                arr[i],arr[i+1] = arr[i+1],arr[i]
        flag = bool(1 - flag)
    print(arr)

# Driver program
arr = [4, 3, 7, 8, 6, 2, 1]
n = len(arr)
zigZag(arr, n)
