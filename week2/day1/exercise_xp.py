"""🌟 Exercise 1: Cats
Instructions
Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
Instantiate three Cat objects using the code provided above.
Outside of the class, create a function that finds the oldest cat and returns the cat.
Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
"""
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat_1 = Cat("Steve",4)
# cat_2 = Cat("Bob", 2)
# cat_3 = Cat("Felix", 6)

# def oldest(c1, c2, c3):
#     oldest_cat = max([c1, c2, c3], key=lambda cat: cat.age)#max function can search with many parameters, here i ask to seach with the lambda func that take cat and return cat.age
#     return oldest_cat
# # print(oldest(cat_1, cat_2, cat_3).age)
# oldest_cat = oldest(cat_1, cat_2, cat_3)
# print(f"the oldest cat is: {oldest_cat.name}, and his age is: {oldest_cat.age}")

"""
🌟 Exercise 2 : Dogs
Instructions
1. Create a class called Dog.
2. In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
3. Create a method called bark that prints the following string “<dog_name> goes woof!”.
4. Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
5. Outside of the class, create an object called davids_dog. His dog's name is “Rex” and his height is 50cm.
6. Print the details of his dog (ie. name and height) and call the methods bark and jump.
7. Create an object called sarahs_dog. Her dog's name is “Teacup” and his height is 20cm.
8.Print the details of her dog (ie. name and height) and call the methods bark and jump.
9. Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
"""
#1 
# class Dog: #2
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#         #3
#     def bark(self):
#         print(f"{self.name} goes woof!")
#         #4
#     def jump(self):
#         print(f"{self.name} jumps {self.height*2} cm high!")
# #5 #6 #7
# davids_dog = Dog("Rex", 50)
# print(f"{davids_dog.name}'s height: {davids_dog.height}")
# davids_dog.bark()
# davids_dog.jump()
# #8
# sarahs_dog = Dog("Teacup", 20)
# print(f"{sarahs_dog.name}'s height: {sarahs_dog.height}")
# sarahs_dog.bark()
# sarahs_dog.jump()
# #9
# if sarahs_dog.height > davids_dog.height:
#     print(sarahs_dog.name)
# else: print(davids_dog.name)

"""🌟 Exercise 3 : Who's the song producer?
Instructions
1. Define a class called Song, it will show the lyrics of a song.
Its __init__() method should have two arguments: self and lyrics (a list).
2. Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
3. Create an object, for example:

stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])


4.Then, call the sing_me_a_song method. The output should be:

There's a lady who's sure
all that glitters is gold
and she's buying a stairway to heaven"""

# class Song:
#     def __init__(self, lyrics:list):
#         self.lyrics = lyrics
    
#     def sing_me_a_song(self):
#         for verse in self.lyrics:
#             print(verse)
            
# paradise_city= Song(["Take me down to the Paradise City","Where the grass is green and the girls are pretty", "Take me home (I want you, please, take me home)"])

# paradise_city.sing_me_a_song()



"""🌟 Exercise 4 : Afternoon at the Zoo
Instructions
1. Create a class called Zoo.
2. In this class create a method __init__ that takes one parameter: zoo_name.
It instantiates two attributes: animals (an empty list) and name (name of the zoo).
3. Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn't already in the list.
4. Create a method called get_animals that prints all the animals of the zoo.
5. Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
6. Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
Example

{ 
    A: "Ape",
    B: ["Baboon", "Bear"],
    C: ['Cat', 'Cougar'],
    E: ['Eel', 'Emu']
}


7. Create a method called get_groups that prints the animal/animals inside each group.

8. Create an object called ramat_gan_safari and call all the methods.
Tip: The zookeeper is the one who will use this class.
Example
Which animal should we add to the zoo --> Giraffe
x.add_animal(Giraffe)"""


#1
# class Zoo: #2
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []
# #3
#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
            
#     #4
#     def get_animals(self):
#         print(", ".join(self.animals))
        
#     #5
#     def sell_animal(self, animal_sold): #😿
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
            
#     #6
#     def sort_animals(self):
#         self.animals.sort()
#         sorted_animals = {}
#         for animal in self.animals:
#             first_letter = animal[0]
#             if first_letter not in sorted_animals:
#                     sorted_animals[first_letter] = [animal]
#             else:
#                 sorted_animals[first_letter].append(animal)
#         return sorted_animals
    
# my_safari = Zoo("ramat_gan_safari")
# my_safari.add_animal("zebra")
# my_safari.add_animal("baboon")
# my_safari.add_animal("tiger")
# my_safari.add_animal("giraffe")
# my_safari.add_animal("tarantula")
# my_safari.add_animal("chokobo")
# my_safari.add_animal("cactuar")
# my_safari.sort_animals()
# my_safari.sell_animal("giraffe")
# my_safari.get_animals()
# print(my_safari.sort_animals())
            
        
        
    
    
    
        
