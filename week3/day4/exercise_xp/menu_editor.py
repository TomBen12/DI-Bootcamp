from menu_item import MenuItem, MenuManager


def add_item_to_menu():
    try:
        print("\n-----------------------\nEnter a name\n-----------------------")
        item_name = input('Enter item name: ').strip().lower()

        print("\n-----------------------\nEnter a price\n-----------------------")
        item_price = int(input('Enter item price: ').strip())

        menu = MenuItem(item_name, item_price)
        menu.save()
        print(f" '{item_name.title()}' was added to the menu at ${item_price}.")

    except ValueError:
        print("Invalid input. Please enter a valid number for the price.")

    except Exception as e:
        print(f"There was an error: {e}")


def remove_item_from_menu():
    try:
        print("\n-----------------------\nRemove an Item\n-----------------------")
        item_name = input('Enter item name: ').strip().lower()

        menu = MenuItem(item_name)
        menu.delete()
        print(f" '{item_name.title()}' was removed from the menu.")

    except Exception as e:
        print(f"There was an error: {e}")


def update_item_from_menu():
    try:
        print(
            "\n-----------------------\nEnter the CURRENT name\n-----------------------"
        )
        item_name = input('Enter current item name: ').strip().lower()

        print("\n-----------------------\nEnter the NEW name\n-----------------------")
        item_new_name = input('Enter new item name: ').strip().lower()

        print("\n-----------------------\nEnter the NEW price\n-----------------------")
        item_new_price = int(input('Enter new item price: ').strip())

        menu = MenuItem(item_name, 0)
        menu.update(item_new_name, item_new_price)
        print(
            f" '{item_name.title()}' was updated to '{item_new_name.title()}' with price ${item_new_price}."
        )

    except ValueError:
        print("Invalid input. Please enter a valid number for the price.")

    except Exception as e:
        print(f"There was an error: {e}")


def show_user_menu():
    while True:
        print(
            """
        What do you want to do?
        -----------------------
        View an Item (V)
        Add an Item (A)
        Delete an Item (D)
        Update an Item (U)
        Show the Menu (S)
        Exit          (E)
        -----------------------
        """
        )

        try:
            input_text = input('Enter choice: ').strip().lower()

            if input_text not in ['v', 'a', 'd', 'u', 's', 'e']:
                print("Invalid choice! Please enter V, A, D, U, S, or E.")
                continue

            if input_text == 'v':
                item_name = input('Enter item Name: ').strip().lower()
                item = MenuManager.get_by_name(item_name)
                if item:
                    print(f"Item found: {item[0]} - ${item[1]}")
                else:
                    print("Item not found.")

            elif input_text == 'a':
                add_item_to_menu()

            elif input_text == 'd':
                remove_item_from_menu()

            elif input_text == 'u':
                update_item_from_menu()

            elif input_text == 's':
                MenuManager.all_items()

            elif input_text == 'e':
                print("The menu : ")
                MenuManager.all_items()
                print("Exiting program.")
                break

        except Exception as e:
            print(f"An error occurred: {e}. Please try again.")


show_user_menu()
