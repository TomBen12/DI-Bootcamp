import psycopg2


class MenuItem:

    @staticmethod
    def connect_db():
        return psycopg2.connect(
            database='restaurant',
            user='tom',
            password='\\\\',
            host='localhost',
            port='5432',
        )

    def __init__(self, name, price):
        self.item_name = name
        self.item_price = price

    def save(self):
        connection = self.connect_db()
        cursor = connection.cursor()
        query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        cursor.execute(query, (self.item_name, self.item_price))
        connection.commit()
        cursor.close()
        connection.close()
        print(f" '{self.item_name}' was added to the menu.")

    def delete(self):

        connection = self.connect_db()
        cursor = connection.cursor()
        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (self.item_name,))
        connection.commit()
        cursor.close()
        connection.close()
        print(f" '{self.item_name}' was removed from the menu.")

    def update(self, new_name, new_price):
        connection = self.connect_db()
        cursor = connection.cursor()
        query = (
            "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
        )
        cursor.execute(query, (new_name, new_price, self.item_name))
        connection.commit()
        cursor.close()
        connection.close()
        self.item_name = new_name
        self.item_price = new_price
        print(
            f" '{self.item_name}' was updated to '{new_name}' with price {new_price}."
        )


class MenuManager:
    @staticmethod
    def connect_db():
        return psycopg2.connect(
            database='restaurant',
            user='tom',
            password='\\\\',
            host='localhost',
            port='5432',
        )

    @classmethod
    def get_by_name(cls, name):
        connection = cls.connect_db()
        cursor = connection.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (name,))
        item = cursor.fetchone()
        cursor.close()
        connection.close()

        if item:
            print(f"Found: {item[0]} - ${item[1]}")
            return item
        else:
            print(f"'{name}' not found in the menu.")
            return None

    @classmethod
    def all_items(cls):
        connection = cls.connect_db()
        cursor = connection.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items"
        cursor.execute(query)
        items = cursor.fetchall()
        cursor.close()
        connection.close()

        if items:
            print("All menu items:")
            for item in items:
                print(f"- {item[0]}: {item[1]}$")
            return items
        else:
            print("No items found in the menu.")
            return []


# item = MenuItem('Pizza', 23)
# item.save()
# item.delete()
# item.update('Burger', 37)
# item2 = MenuManager.get_by_name('Fish')
# items = MenuManager.all()
