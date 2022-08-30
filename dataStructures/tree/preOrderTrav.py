# the javascript option wasnt available.

def get_list(root, a):
    if root.info:
        a.append(root.info)
        if root.left:
            a = get_list(root.left, a)
        if root.right:
            a = get_list(root.right, a)
    return a

def preOrder(root):
    a = get_list(root, a=list())
    print(*a)
