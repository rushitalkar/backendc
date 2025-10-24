a = int(input("Enter the first number"))
b = int(input("Enter the second number"))
factorial = 1
for i in range(a , b+1):
    factorial *= i
    b = b-1

print(factorial)


