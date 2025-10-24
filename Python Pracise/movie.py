age = int(input("Enter the age"))
day = input("Enter the day")

if(day == "Wednesday"):
    print("today everyone get Discount")
else:
    if(age >= 18):
        print("You will get 12$ Discount")
    else:
        print("Children get 8$ discount")