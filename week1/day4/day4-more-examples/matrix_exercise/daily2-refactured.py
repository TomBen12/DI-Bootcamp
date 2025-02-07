MATRIX_STRING = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''



# 4 - output a string with the message 
# 1 - to create a 2D list
def create_matrix(matrix_string):
    rows = matrix_string.split('\n')
    matrix = [list(row) for row in rows]
    return matrix

# Decrypt step1:  (create columns so the message has the right sequence)
def transpose_matrix(matrix):
    column_matrix = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
    return column_matrix

# Decrypt step2: replaces every group of symbols between two alpha characters by a space.
def decrypt_message(column_matrix):
    output_string = ''
    for col_list in column_matrix:
        for char in col_list:
            if char.isalpha():
                output_string += char
            else:
                if len(output_string) != 0 and output_string[-1] != ' ':
                    output_string += ' '
    return output_string


matrix = create_matrix(MATRIX_STRING)
column_matrix = transpose_matrix(matrix)
message = decrypt_message(column_matrix)
print(message)

