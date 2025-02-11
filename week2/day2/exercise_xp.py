"""🌟 Exercise 1 : Pets
Instructions
Using this code:

1. Create another cat breed named Siamese which inherits from the Cat class.
2. Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
3. Those three cats are Sara's pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
4. Take all the cats for a walk, use the walk method."""

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())
            
# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# my_cat = Bengal("Koko", 1)
# neighbor_cat = Chartreux("Marcus", 5)
# friend_cat = Siamese("Tobi", 3)

# cat_list = [my_cat, neighbor_cat, friend_cat]

# saras_pets = Pets(cat_list)

# saras_pets.walk()

"""🌟 Exercise 2 : Dogs
Instructions
1. Create a class called Dog with the following attributes name, age, weight.
2. Implement the following methods in the Dog class:
bark: returns a string which states: “<dog_name> is barking”.
run_speed: returns the dogs running speed (weight/age*10).
fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

3. Create 3 dogs and run them through your class."""

# class Dog:
#     def __init__(self, name:str, age:int, weight:int):
#         self.name = name
#         self.age = age
#         self.weight = weight
    
#     def bark(self):
#         return f"{self.name} is barking"
    
#     def run_speed(self):
#         return (self.weight / (self.age * 10))
    
#     def fight(self, other_dog:"Dog"):
#         attack_power = (self.run_speed() * self.weight)
#         other_atack_power = (other_dog.run_speed() * other_dog.weight)
        
#         if attack_power > other_atack_power:
#             return f"{self.name} Won the fight! 😼"
#         elif attack_power == other_atack_power:
#             return f"ITS a draw!!! 🙀"
#         else:
#             return f"{other_dog.name} Won the fight...😿"

# that_dog = Dog("Snorlax", 4, 1000)
# his_dog = Dog("Cookie", 12, 1)
# her_dog = Dog("steeve", 7 , 7)

# print(that_dog.bark())
# print(f"{that_dog.name} run speed : {that_dog.run_speed()}")
# print(that_dog.fight(his_dog))

# print(his_dog.bark())
# print(f"{his_dog.name} run speed : {his_dog.run_speed()}")
# print(his_dog.fight(her_dog))

# print(her_dog.bark())
# print(f"{her_dog.name} run speed : {her_dog.run_speed()}")
# print(her_dog.fight(that_dog))

"""🌟 Exercise 3 : Dogs Domesticated
Instructions
1. Create a new python file and import your Dog class from the previous exercise.

2. In the new python file, create a class named PetDog that inherits from Dog.
3. Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.

>>>>   exercise_xp_2.py  ex 3 in different file  <<<<< 🚨

4. Add the following methods:
a.train: prints the output of bark and switches the trained boolean to True

b.play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

c.do_a_trick: If the dog is trained the method should print one of the following sentences at random:
“dog_name does a barrel roll”.
“dog_name stands on his back legs”.
“dog_name shakes your hand”.
“dog_name plays dead”.

"""

"""Exercise 4 : Family
Instructions
1. Create a class called Family and implement the following attributes:

members: list of dictionaries
last_name : (string)

2. Implement the following methods:

born: adds a child to the members list (use **kwargs), don't forget to print a message congratulating the family.
is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
family_presentation: a method that prints the family's last name and all the members' details.

3. Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
"""

class Family:
    def __init__(self, last_name:str):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulation For The Birth! 🐥")
        
    def is_18(self, name:str):
        for member in self.members:
            if member["name"]== name:
                if member["age"] < 18:
    ##had to add for Incredibles exercise. 
                    member["is_child"] = True
                    return False
                else:
                    member["is_child"] = False
                    return True
                
    def family_presentation(self):
        print(f"{self.last_name} Family: ")
        for member in self.members:
            for k,v in member.items():
                print(f"{k} : {v}")

family_1 = Family("Dawson")
family_1.born(name = "steve", age = 0) 
print(family_1.members)
print(family_1.is_18("steve"))
family_1.family_presentation()

"""Exercise 5 : TheIncredibles Family
Instructions
1.Create a class called TheIncredibles. This class should inherit from the Family class:
This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)


2. Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.


3. Add a method called incredible_presentation which :

Print a sentence like “*Here is our powerful family **”
Prints the family's last name and all the members' details (ie. use the super() function, to call the family_presentation method)

4. Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

    [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]


Call the incredible_presentation method.


Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.


Call the incredible_presentation method again."""

class Theincredible(Family):
    def __init__(self, last_name:str):
        super().__init__(last_name)

    def use_power(self, name: str):
        for member in self.members:
            if member["name"] == name:
                try:
                    if member["is_child"] == True:

                ###did Not Finnish ######will complete durring weeken