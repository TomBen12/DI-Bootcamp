import menu_item
import re

def clean_input(text):
    text = text.strip().lower()  # Remove spaces & lowercase
    cleaned_text = re.sub(r"[^a-z0-9\s]", "", text)
    # Remove everything except letters, numbers, spaces
    return text

def show_user_menu():

    manager = menu_item.MenuManager()


    print('\n What do you whant to do? \n')
    print('View an Item View an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)')

    choice = input()
    if choice = 'v':
        item_choice = i
         manager.get_by_name()
    elif choice = 'a':

    elif choice = 'd':

    elif choice = 'u':

    elif choice = 's':
