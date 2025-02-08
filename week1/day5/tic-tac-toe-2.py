### TIC_TAC_TOE Mini Project ###

def play():
    board = [[1, 2, 3],    
            [4, 5, 6], 
            [7, 8, 9]]

    player_x = "🅧"
    player_o = "🅞"
    winner = None
    half_turn = 0
    current_player = (player_x if half_turn %2 == 0 else player_o)
    
            
    ##print board function.
    def display_board(board):
        print()
        for row in board:
            print(" | ".join(str(position) for position in row ))
            print("---"*3)
        print()
        
    #player input (player)
    def player_input(current_player):
        while True:
            player_position = int(input(f"Player {current_player}  pick a position on the board:  "))
            
            if  (0 < player_position < 10):
                for i, row in enumerate(board):
                    for j, col in enumerate(row):
                        if player_position == col and col not in [player_x, player_o]:
                            board[i][j] = current_player
                            return
                print("position already taken! 🚨 ") # if function never returned
            else: 
                print("position doesn't exist 🚨 ")
    
    #check if/who wins
    def check_win():
        for row in board:
            if row[0] == row[1] == row[2] == current_player:
                return current_player
                
        for col in range(3):
            if board[0][col] == board[1][col] == board[2][col] == current_player:
                return current_player

        if board[0][0] == board[1][1] == board[2][2] == current_player:
                return current_player
                
        if board[0][2] == board[1][1] == board[2][0] == current_player:
                return current_player
        
        for row in board:
            for col in row:
                if isinstance(col, int): #check each col if it's an int 
                    return None
        return "Draw"
    
    def start():
        nonlocal half_turn, winner, current_player ## took me forever to figure this out 🥶
        print("   ##### Welcome to Tic-Tac-Toe  #####   ")
        while winner == None :
            display_board(board)
            current_player = (player_x if half_turn %2 == 0 else player_o)
            player_input(current_player)
            winner = check_win()
            
            if winner == "Draw":
                print("It's a Draw 👺")
                break
            
            elif winner == current_player:
                print(f" 🌟 Congratulation Player {current_player} !!!")
                display_board(board)
                break
            
            half_turn +=1
    start()
play()