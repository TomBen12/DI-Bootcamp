import random


class Game:

    def __init__(self):
        self.rps = ["rock", "paper", "scissor"]
        self.results = ["Draw", "Win", "Lost"]

    def data_formater(self, item):
        item.strip().lower()
        return True if item.isalpha() and item in self.rps else False

    def get_user_item(self):
        r, p, s = self.rps
        while True:
            user_item = input(f"\nChoose by entering {r}, {p}, or {s}: ")
            if self.data_formater(user_item):
                return user_item
            else:
                print(f'only "{r}", "{p}" or "{s}" are available commands...')
                continue

    def get_computer_item(self):
        cpu_item = random.choice(self.rps)
        return cpu_item

    def get_game_result(self, user_item, computer_item):
        r, p, s = self.rps
        draw, win, loss = self.results
        if user_item == computer_item:
            return draw
        elif user_item == r and computer_item == s:
            return win
        elif user_item == p and computer_item == r:
            return win
        elif user_item == s and computer_item == p:
            return win
        else:
            return loss

    def play(self):
        draw = "Draw"
        cpu_item = self.get_computer_item()
        usr_item = self.get_user_item()
        result = self.get_game_result(usr_item, cpu_item)

        if result == draw:
            return f"You both selected {usr_item} ... it's a {draw}", result
        else:
            return (
                f"\n🅾🅾🅾 You selected {usr_item}. The computer selected {cpu_item}. You {result}! 🅾🅾🅾\n",
                result,
            )
