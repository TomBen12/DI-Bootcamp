'''
🌟 Solve the Matrix

Given a “Matrix” string:

7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!

'''
'''
Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
To reproduce the grid, the matrix should be a 2D list, not a string

To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

Using his technique, try to decode this matrix.

Hints:
Use
● lists for storing data
● Loops for going through the data
● if/else statements to check the data
● String for the output of the secret message

Hint (if needed) : Look at the remote learning “Matrix” video.
'''


# MATRIX_STRING='''
# 7ii
# Tsx
# h%?
# i #
# sM 
# $a 
# #t%
# ^r!
# '''

# [[][][]]
10

matrix_string='''7ii
Tsx
h%?
i #
sM
$a
#t%
^r!'''
# x=0
# v=x+0
# b=x+1
# f=x+2
# for x in matrix:
#     a=list(matrix[v]+matrix[b]+matrix[f])
#     print(a)
# Steps:
#1 to create a 2D list
#2 decrypt the matrix: for loop to check characters
#3 replace every group of symbols between two alpha characters by a space
#4 output a string with the message
matrix=[]
# for i in range(len(matrix_string)):
#     row= list(matrix_string[i:i+3])
#     print(row)
#     matrix.append(row)
# print(matrix)
rows= matrix_string.split('\n')
print(rows)
for row in rows:
    matrix.append(list(row))
print(matrix)
for column in matrix:
    column_0=[column[0] for column in matrix]
    column_1=[column[1] for column in matrix]
    column_2=[column[2] for column in matrix]
column_matrix=[]
column_matrix.append(column_0)
column_matrix.append(column_1)
column_matrix.append(column_2)
print(column_matrix)
output_string= ""
for col_list in column_matrix:
    # print(sub_list)
    for i in range(len(col_list)):
        # print(char)
        if col_list[i].isalpha():
            output_string+= col_list[i]
        else:
            if len(output_string)!= 0 and output_string[-1]!=' ':
                output_string+= ' '
print(output_string)