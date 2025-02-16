"""🌟 Exercise 1 : Student Grade Summary
Instructions
You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.



Initial Data:


student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}


Requirements:
1.Calculate the average grade for each student and store the results in a new dictionary called student_averages.
2.Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
A: 90 and above
B: 80 to 89
C: 70 to 79
D: 60 to 69
F: Below 60
3.Calculate the class average (the average of all students' averages) and print it.
4Print the name of each student, their average grade, and their letter grade.
Hints:
Use loops to iterate through the student_grades dictionary.
You may use sum() and len() functions to help calculate averages.
Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.

"""

# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72],
# }
# # students_average = {}
# # for k, v in student_grades.items():
# #     average = round((sum(v)/len(v)),1)
# #     students_average[k]=average
# # or

# student_averages = {
#     name: round(sum(grade) / len(grade), 1) for name, grade in student_grades.items()
# }
# # 2
# student_letter_grade = {}

# for student, avg in student_averages.items():
#     if avg >= 90:
#         student_letter_grade[student] = 'A'
#     elif 80 <= avg <= 89:
#         student_letter_grade[student] = 'B'
#     elif 70 <= avg <= 79:
#         student_letter_grade[student] = 'C'
#     elif 60 <= avg <= 69:
#         student_letter_grade[student] = 'D'
#     else:
#         student_letter_grade[student] = 'F'
# # 3
# cla_avg = sum(student_averages.values()) / len(student_averages)
# print(cla_avg)
# # 4

# for student, letter_grade in student_letter_grade.items():
#     print(f'{student}: Grade: {student_averages[student]} Letter Grade: {letter_grade}')

"""🌟 Exercise 2 : Advanced Data Manipulation and Analysis
Instructions
In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.



sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]


Tasks:
1Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

2Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

3Sales Data Enhancement:

Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
Use a loop to modify the sales_data list with this new information.
High-Value Transactions:

4Using list comprehension, create a list of all transactions where the total price is greater than $500.
Sort this list by the total price in descending order.
Customer Loyalty Identification:

5Identify any customer who has made more than one purchase, suggesting potential loyalty.
Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.
Bonus: Insights and Analysis:

6Calculate the average transaction value for each product category.
Identify the most popular product based on the quantity sold.
Provide insights into how these analyses could inform the company's marketing strategies."""

sales_data = [
    {
        "customer_id": 1,
        "product": "Smartphone",
        "price": 600,
        "quantity": 1,
        "date": "2023-04-03",
    },
    {
        "customer_id": 2,
        "product": "Laptop",
        "price": 1200,
        "quantity": 1,
        "date": "2023-04-04",
    },
    {
        "customer_id": 1,
        "product": "Laptop",
        "price": 1000,
        "quantity": 1,
        "date": "2023-04-05",
    },
    {
        "customer_id": 2,
        "product": "Smartphone",
        "price": 500,
        "quantity": 2,
        "date": "2023-04-06",
    },
    {
        "customer_id": 3,
        "product": "Headphones",
        "price": 150,
        "quantity": 4,
        "date": "2023-04-07",
    },
    {
        "customer_id": 3,
        "product": "Smartphone",
        "price": 550,
        "quantity": 1,
        "date": "2023-04-08",
    },
    {
        "customer_id": 1,
        "product": "Headphones",
        "price": 100,
        "quantity": 2,
        "date": "2023-04-09",
    },
]
# 1
# total_sales = {}

# for sale in sales_data:
#     product_name = sale['product']
#     total_product_price = sale['quantity'] * sale['price']
#     if product_name in total_sales:
#         total_sales[product_name] += total_product_price
#     else:
#         total_sales[product_name] = total_product_price

# print(total_sales)

# 2
"""2Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent."""
Customer_Spending_Profile = {}

##to be continued
