
def two_sum(nums, target):
    pos = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in pos:
            return [pos[need], i]
        pos[x] = i

print(two_sum([2, 7, 11, 15], 9))