"""
Instructions : Old MacDonald's Farm
1. Take a look at the following code and output:
File: market.py

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
Output

McDonald's farm

cow : 5
sheep : 2
goat : 12

    E-I-E-I-0!


Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

1. Create a class called Farm. How should it be implemented?
2. Does the Farm class need an __init__ method? If so, what parameters should it take?
3. How many methods does the Farm class need?
4. Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
5. Test your code and make sure you get the same results as the example above.
6. Bonus: nicely line the text in columns as seen in the example above. Use string formatting.
"""
"""
Expand The Farm
1. Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

2. Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald's farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
- Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let's say that if there is more than 1 animal, an “s” should be added at the end of the word.

"""
class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = []
    
    def add_animal(self, animal, animal_quantity = 1):
        for d in range(animal_quantity): #used an underscore because i'm not using the i just want to repeat the apend.
            self.animals.append(animal)
    
    def get_info(self):
        animal_dict = {}
        for animal in self.animals:
            if animal in animal_dict:
                animal_dict[animal] += 1
            else:
                animal_dict[animal] = 1
                
        print(f"{self.name}'s farm\n")
        for key,val in animal_dict.items():
            print(f"{key} : {val}")
        print("\n\tE-I-E-A-O!!!!🐮")
        
    def get_animal_types(self):
        animal_types = sorted(list(set(self.animals)))
        return animal_types
        
    def get_short_info(self):
        anima_list = self.get_animal_types()
        
        for i, animal in enumerate(anima_list):
            if self.animals.count(animal) > 1:
                anima_list[i] = animal + "s"
            if (self.animals.count(animal) > 1) and (len(anima_list) == i + 1): #I want the one before the last
                anima_list[i] = " and " + animal + "s"
                
        print(f'{self.name}\'s farm has {",".join(anima_list)}')
        
            
my_farm = Farm("McDonald")
my_farm.add_animal("giraffe", 5)
my_farm.add_animal("chokobo", 2)
my_farm.add_animal("pikachu", 10)
my_farm.get_info()
my_farm.get_animal_types()
my_farm.get_short_info()
