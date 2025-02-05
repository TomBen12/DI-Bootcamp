
#Challenge 1
'''
1 . Ask a user for a word
Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

a. Make sure the letters are the keys.
b. Make sure the letters are strings.
c. Make sure the indexes are stored in a list and those lists are values.

Examples

"dodo" ➞ { "d": [0, 2], "o": [1, 3] }

"froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

"grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}
'''
# usr_word = list(input("Give me a word...please:"))
# dict_1 = {}

# for  index, letter  in enumerate(usr_word):
#     if letter in dict_1:
#         dict_1[letter].append(index)
#     else:dict_1[letter] = [index] #has to be a list of indexes!!!!
# print(dict_1)

### Exercise 2
'''
1. Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
2. Sort the list in alphabetical order.
3. Return “Nothing” if you can't afford anything from the store.

Hint : make sure to convert the amount from dollars to numbers. Create a 

program that deletes the $ sign, and the comma (for thousands)
'''

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = ("$100")
wallet_int = int(wallet.strip("$")) #strip() when unwated at begining or end
print(wallet_int)

afford_items = []

for item, price in items_purchase.items():
    item_price = int(price.replace("$", "").replace(",", ""))#rplce() whn anywhr
    if item_price <= wallet_int:
        afford_items.append(item)
#2
afford_items.sort()
#3
if afford_items == []:
    print("nothing 💩")
else: print(str(", ".join(afford_items))) #just to make it more readable 