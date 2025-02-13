from game import Game


def format_data_validation(usr_input):
    usr_input.strip()
    try:
        usr_num = int(usr_input)
        if 0 < usr_num < 4:
            return usr_num
    except Exception:
        print(f"Invalid input: '{usr_input}' is unknown ")
        get_user_menu_choice()


def get_user_menu_choice():
    user_input = input(
        "\nEnter 1 to Play.\nEnter 2 to Display Score.\nEnter 3 to Quit\n\nYour choice: "
    )
    usr_int = format_data_validation(user_input)
    if usr_int == 1:
        return "Play"
    elif usr_int == 2:
        return "Display Score"
    elif usr_int == 3:  ##formating logic handled in format_data_validation()
        return "Quit"


def print_results(results):
    print("\u0332".join("Here are Your Results\n"))
    for k, v in results.items():
        print(f"{k} : {v}")


def main():

    print("\n", "\u0332".join("WELCOME TO ROCK PAPER SCISSORS!"))
    print("--------------------------------")
    result_records = {"Win": 0, "Loss": 0, "Draw": 0}

    while True:

        user_choice = get_user_menu_choice()

        if user_choice == "Quit":
            print_results(result_records)
            print("\u0332".join("\nThank you for Playing\n"))
            print("\n", "\u0332".join("SEE YOU NEXT TIME!"), "\n")
            break

        elif user_choice == "Play":
            rock_paper_scissors = Game()
            str_result, result = rock_paper_scissors.play()
            if result == "Win":
                result_records["Win"] += 1
            elif result == "Lost":
                result_records["Loss"] += 1
            elif result == "Draw":
                result_records["Draw"] += 1
            print("--------------------------------")

            print(str_result)
            print_results(result_records)
            print("--------------------------------")

        elif user_choice == "Display Score":
            print_results(result_records)


main()
