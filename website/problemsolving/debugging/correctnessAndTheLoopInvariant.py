# this is a debugging code... I did not write this.

# origional code.
def insertion_sort(l):
    for i in range(1, len(l)):
        j = i - 1
        key = l[i]
        while(j > -1) and (l[j] > key): # error on this line. was while (j > 0)
            l[j+1] = l[j]
            j -= 1
        l[j+1] = key
    print(l)


insertion_sort([7,4,3,5,6,2])
