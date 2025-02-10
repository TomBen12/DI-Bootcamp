class Phone:
    def __init__(self, phone_number:int):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    
    def call(self, other_phone: "Phone"):
        call = f'{self.phone_number} called {other_phone.phone_number}'
        print(call)
        self.call_history.append(call)
    
    def show_call_history(self):
        for call in self.call_history:
            print(call)
            
    def send_message(self, other_phone: "Phone", message:str):
        message_data = {}
        message_data["to"] = other_phone.phone_number
        message_data["from"] = self.phone_number
        message_data["content"] = message
        self.messages.append(message_data)
        other_phone.messages.append(message_data)
    
    def show_outgoing_messages(self):
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message["content"])
                
    def show_incoming_messages(self):
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message["content"])
                
    def show_messages_from(self):
        for message in self.messages:
            if message["from"] != self.phone_number:
                print(message["content"],"<---- ", f"this message was from: {message["from"]}")

tom_phone = Phone(123456789)
his_phone = Phone(987654321)

tom_phone.call(his_phone)
his_phone.call(tom_phone)
his_phone.call(tom_phone)
his_phone.call(tom_phone)
his_phone.send_message(tom_phone, "Where are you???!")
his_phone.send_message(tom_phone, "ANSWER!!!!!")
tom_phone.send_message(his_phone, "turn aroud !!!")

tom_phone.show_call_history()
tom_phone.show_incoming_messages()
tom_phone.show_outgoing_messages()
tom_phone.show_messages_from()

