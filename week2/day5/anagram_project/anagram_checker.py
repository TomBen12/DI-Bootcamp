class Anagram:

    def __init__(self):
        try:
            with open("sowpods.txt", "r") as wrds:
                self.word_list_string = wrds.read()
                self.word_list = self.word_list_string.split("\n")
        except Exception:
            print(f"something Went wrong")

    def is_valid_word(self, word: str):
        upper_word = word.upper()
        for w in self.word_list:
            if upper_word != w:
                continue
            else:
                return True

    def get_anagrams(self, word):
        anagram_list = []
        upper_word = word.upper()
        sorted_word = sorted(upper_word)
        for w in self.word_list:
            sorted_w = sorted(w)
            if sorted_word == sorted_w and upper_word != w:
                anagram_list.append(w)
        return anagram_list
