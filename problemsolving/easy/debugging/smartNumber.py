# before
# def is_smart_number(num):
#     val = int(math.sqrt(num))
#     if num / val === 1:
#         return True
#     return False
#
# for _ in range(int(input())):
#     num = int(input())
#     ans = is_smart_number(num)
#     if ans:
#         print("Yes")
#     else:
#         print("No")


import math
# after
def is_smart_number(num):
    val = int(math.sqrt(num))
    if val*val == num:
        return True
    return False

# for _ in range(int(input())):
#     num = int(input())
#     ans = is_smart_number(num)
#     if ans:
#         print("Yes")
#     else:
#         print("No")

print(is_smart_number(169))
