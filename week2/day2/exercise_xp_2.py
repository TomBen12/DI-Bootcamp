from exercise_xp import Dog
import random
"""🌟 Exercise 3 : Dogs Domesticated
Instructions
1. Create a new python file and import your Dog class from the previous exercise.
2. In the new python file, create a class named PetDog that inherits from Dog.
3. Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
4. Add the following methods:
a.train: prints the output of bark and switches the trained boolean to True

b.play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

c.do_a_trick: If the dog is trained the method should print one of the following sentences at random:
“dog_name does a barrel roll”.
“dog_name stands on his back legs”.
“dog_name shakes your hand”.
“dog_name plays dead”."""

class Petdog(Dog):
    def __init__(self, name:str, age:int, weight:int, trained:bool = False):
        super().__init__(name, age, weight)
        
        self.trained = trained
        
    def train(self):
        print("BARK! 🐶")
        self.trained = True
    
    def play(self, *args:Dog):
        dog_names = []
        if len(args) > 0:
            for dog in args:
                dog_names.append(dog.name)
        print(f"{', '.join(dog_names)} play with {self.name}. Yaay!") ##may have overcomplicated...🤡
    def do_a_trick(self):
        tricks = ["does a barrel roll",
                  "stands on his back legs", 
                  "shakes your hand", 
                  "plays dead"]
        if self.trained == True:
            rand_num = random.randint(0,3)
            print(f"{self.name} {tricks[rand_num]}")
        else: 
            print(f"{self.name} stares at you...")
    

my_dog = Petdog("rex", 3, 2)
his_dog = Petdog("kiki", 5, 1)
their_dog = Petdog("lulu", 2, 8)
sams_dog = Petdog("riko", 7, 2)
your_dawg = Petdog("mario", 3, 2)
my_dog.train()
my_dog.play(his_dog, their_dog, your_dawg)
my_dog.do_a_trick()

