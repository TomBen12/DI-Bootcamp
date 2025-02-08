'''
check os
to make boarn not print again!
'''


"""
the board:
list[] containing
    row1 = [0,0,0]
    row2 = [0,0,0]
    row3 = [0,0,0] 
funtion that:
1. print the whole empty board.
the board needs to be turned into a string befor printing,
each column should be separated by a "|"
each row should be separated by "- - -" string line \n

2.
takes a position
check if position is taken
if taken print message and call player input method again if not it will place a 0 or 1 (depending on player turn(who is who))in the position chosen


"""
board = [[1,2,3],
         [4,5,6],
         [7,8,9]]

def check_who_turn(board_turn):
     #if False player 1 turn / if True player 2 turn
     if board_turn %2 == 0:
        return False
     else :
        return True
     
#  def player_input():
#     player_position = input("please enter a position to")


def display_board(board):
    
    board_turn = 1
    player_spot = 0
    player2_turn = check_who_turn(board_turn) #1
    player1_sign = 'X'
    player2_sign = 'O'

    for row in board:
        for position in row:
            if player_spot == position and player2_turn == True:
                position = player2_sign
                print(position, end="")
            elif player_spot == position and player2_turn == False:
                position = player1_sign
                print(position, end="")
            elif player_spot == player1_sign or player2_sign:
                print(position, end="")
            elif position != player1_sign or player2_sign:
                print(position, end="")
                
        print("") #create a line jump by default when you don't include end="value" (if not here all prints will be on same line)
    board_turn += 1



display_board()

