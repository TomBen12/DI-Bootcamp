import turtle
from math import pi
# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles


class Circle:
    def __init__(self, diameter = None, radius= None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
    
    def __str__(self):
        return f'Radius: {self.radius}\nDiameter: {self.diameter} '
    
    def __add__(self, other):
        sum_radius = self.radius + other.radius
        return Circle(radius=sum_radius)
    
    def __gt__(self, other):
        if self.diameter > other.diameter:
            return True
        else:
            return False
        
    def __lt__(self, other):
        if self.diameter < other.diameter:
            return True
        else:
            return False        
    
    def __eq__(self, other):
        if self.diameter == other.diameter:
            return True
        else:
            return False
    
    def area(self):
        return pi * self.radius**2
    
c1 = Circle(radius=4)
c2 = Circle(diameter=24)
c3 = Circle(radius= 2)
c4 = Circle(diameter=37)
c5 = Circle(diameter=10)

print(c1+c2)
print(c1)
print(c2)

c_list = [c1, c2, c3, c4 ,c5]
c_list.sort()

for i, c in enumerate(c_list):
    print(f"circle {i} = {c}")
# s = turtle.getscreen()
# t = turtle.Turtle()
# t.goto(100,100)


        
    
            