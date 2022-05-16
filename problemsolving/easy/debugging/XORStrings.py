def string_xor(s,t):
    res = ''
    for i in range(len(s)):
        if s[i] == t[i]: # = to ==
            res += "0";  # = to +=
        else:
            res += "1";  # = to +=
    return res


# before
# def string_xor(s,t):
#     res = ''
#     for i in range(len(s)):
#         if s[i] = t[i]:
#             res = "0";
#         else:
#             res = "1";
#     return res
