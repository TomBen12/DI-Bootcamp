print('Exercise 1 : Use the terminal\n')
print("Ok... so first we need to understand what is the PATH variable.\n the path variable is basically a variable containing the paths (location) like (somethin/something/something) of a progams. it can be configured and once a directory is added, you can execute the file just by typing the command you associated to the file. On installation, python is usally added to the $PATH variable so that you can call it even when you are not inside it's dirrectoy.")
print('------------------------')

print('Exercise 2 : Alias')
print("writting python3 this and python3 that can be a real pain in the aliases (pun intended) that is why you can create aliases that will call the programs who have their path stored in the PATH variable a different name in this case you can call py instead of python3. to do this (on bash (mac shell) home dirrectory do this comand nano ~/.bashrc, add this to the file: alias py='python3' save and type: source ~/.bashrc to apply the change without having to restart your mac. also the PATH variable can be different in each shell, depending on how the shell is configured and which files are used to set environment variables so change it per shell)")

print('-------------------------')
print('Exercise 3 : Outputs')

print(
3 <= 3 < 9, #True 3 is equal to 3, 3 is smaller than 9
3 == 3 == 3, #True 
bool(0), #False boolean 0 is false (1 is true)
bool(5 == "5"), #False int is not equal str in python
bool(4 == 4) == bool("4" == "4"), #True true = true so true
bool(bool(None)) #False  none = false just like null is a falsey in js
)
x = (1 == True) # x = (true statement) 1 is true
y = (1 == False) # y = (false statement) 0 is false not 1
a = True + 4 # a = 1 + 4 (true is one)
b = False + 10 # b = 0 + 10 (false is 0)

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

print('-------------------------')
print("Exercise 4 : How many characters in a sentence ?")

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

print(len(my_text))

print('-------------------------')
print('Exercise 5: Longest word without a specific character')

longest_a_less = ''  # Store the longest valid sentence

while True:
    a_less = input("Enter the longest sentence you can write without the letter 'A':\n").strip().lower()

    if 'a' in a_less :
        print("No! there is an 'A' in there!!\n")
        continue
    if len(a_less) > len(longest_a_less):  
        print("EMEZING!!"* 20 + '\n\n')  
        longest_a_less = a_less  
    else: 
        print("not long enough")