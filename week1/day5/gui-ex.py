#exercise
#clean
#readability
#predictability
#DRY dont repeat yourself


picture = [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0]
]

def print_img(picture):
    for row in picture:
        for pixel in row:
            if (pixel == 1):
                print("*", end="")
            else:
                print(" ", end="")
        print("") #need a new line

print_img(picture)