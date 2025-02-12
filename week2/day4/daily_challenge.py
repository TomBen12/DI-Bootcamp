import string

class Text:
    
    def __init__(self, text:str):
        self.text = text
        

    def text_frequency(self,):
        word_list = self.text.lower().split()
        counter = 0
        word = word_list[0]
    
        for i in word_list:
            frequency = word_list.count(i)
            if(frequency> counter):
                counter = frequency
                word = i
        if counter < 2:
            return None
        else:
            return f"the word '{word}' apears '{counter}' times"
    
    def most_frequent(self):
        word_list = self.text.lower().split()
        most_frequent_word = max(set(word_list), key=word_list.count)
        return most_frequent_word
    
    def unique_words(self):
        word_list = self.text.lower().split()
        return list(set(word_list))
        
t1 = Text('A good book would sometimes cost as much as a good house.')
t2 = Text('no words have a high frequency here')
# print(t1.text_frequency())
# (t2.text_frequency())
# print(t1.most_frequent())
# print(t1.unique_words())



with open("the_stranger.txt", "r") as stranger:
    stranger_str = stranger.read()
    translator = str.maketrans("", "", string.punctuation)  
    stranger_str = stranger_str.translate(translator)
    stranger_str = " ".join(stranger_str.split())

t3 = Text(stranger_str)
print('🤡 TXT FREQUENCy:  ',t3.text_frequency())
print('🌟 MOST FREQUENT:  ',t3.most_frequent())
print('👽 UNIQUE WORDS:  ', t3.unique_words())
