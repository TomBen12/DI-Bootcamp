import re

MATRIX_STRING = "7iiTsxh%?i #sM $a #t%^r!"
COLUMNS = 3
ROWS = 8

def create_matrix():
    matrix = [char for char in MATRIX_STRING]
    matrix = [list(row) for row in zip(*[iter(matrix)]*COLUMNS)]
    return matrix

def decrypt_matrix(matrix):
    no_digits_list = list()
    for col in range(COLUMNS):
        for row in range(ROWS):
            if not matrix[row][col].isdigit():
                no_digits_list.append(matrix[row][col])

    no_digits_string = "".join(no_digits_list)
    return no_digits_string

matrix = create_matrix()
no_digits_string = decrypt_matrix(matrix)

print(re.sub('[^A-Za-z0-9]+', ' ', no_digits_string))