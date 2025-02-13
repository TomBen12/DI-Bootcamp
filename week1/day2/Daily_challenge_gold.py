"""
Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
Display a little cake as seen below:
       ___iiiii___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~

The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

Bonus : If they were born on a leap year, display two cakes !
"""

from datetime import datetime, date


def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)


##last leap year 29/02/2016
b_day_list = input("enter your birth date in a dd/mm/yyyy format: ").split("/")

dd, mm, yyyy = [int(d) for d in b_day_list]
bday_date = datetime(yyyy, mm, dd)
date_now = datetime.now()
age_diff = date_now - bday_date
age_year = age_diff.days // 365
print(age_year)
la_digit = age_year % 10
cake = f"""
       ___iiii{la_digit}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""
if not is_leap_year(yyyy):
    print(cake)
else:
    print(cake * 2)
