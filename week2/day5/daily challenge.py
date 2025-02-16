'''
Part 1 : Quizz :
Answer the following questions

What is a class?
What is an instance?
What is encapsulation?
What is abstraction?
What is inheritance?
What is multiple inheritance?
What is polymorphism?
What is method resolution order or MRO?


Part 2: Create a deck of cards class.
The Deck of cards class should NOT inherit from a Card class.

The requirements are as follows:

The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
The Deck class :
should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.
'''

# 1
# What is a class?
# A class is a bluprint for how an instance should be created and behaving
# What is an instance?
# an instance is an object created from a class
# What is encapsulation?
# encapsulation prevent data from being access from outside an object in oop
# What is abstraction?
# abstraction expose only the nessesary and hide all what is not
# What is inheritance?
# inheritence let clases inherit attributes form other classes
# What is multiple inheritance?
# you can make a class inherit more than one class
# What is polymorphism?
# polymorphysm is the ability for objects to be able to act in different form
# int and floats.
# What is method resolution order or MRO?
# its a rule that python uses to see in what order classes should be inherited

# 2
import random

class Card:
    def __init__(self, suit: str, value: str):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):

        if len(self.cards) == 52:
            random.shuffle(self.cards)
        else:
            print("deck not complete")

    def deal(self):
        if len(self.cards) > 0:
            choice = random.choice(self.cards)
            self.cards.remove(choice)
            return choice
        else:
            return "no more cards"


deck = Deck()

print(deck.cards)
deck.shuffle()
print(deck.cards)
print(deck.deal())
print(len(deck.cards))
