"""
Challenge 1 : Sorting


Instructions
1. Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
2. Use List Comprehension
Example:

Suppose the following input is supplied to the program: without,hello,bag,world
Then, the output should be: bag,hello,without,world
"""


# user_input = input("Enter a few words separated by a comma: ")
# # user_input_test = "sometime,I,feel,like,coding"

# def sorting_things(input:str):
#     list_input = input.split(",")
#     sorted_inputs_list = [ word for word in sorted(list_input)]
#     print(",".join(sorted_inputs_list))

# sorting_things(user_input)



"""
Challenge 2 : Longest Word
Instructions
1. Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
Characters such as apostrophe, comma, period count as part of the word (e.g. O'Connor is 8 characters long).
Examples

longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

longest_word("A thing of beauty is a joy forever.") ➞ "forever."

longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
# """

# test_sentence = "I don't know any long words"
some_words = input("Enter words separated by spaces: ")
def longest_word(input_sentence:str):
    word_list = input_sentence.split()
    longest_words = [word for word in word_list if len(word) == max(len(wrd) for wrd in word_list)]
    the_longest_word = longest_words[0]
    print(the_longest_word)
    
longest_word(some_words)

