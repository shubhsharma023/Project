import datetime as dt
import asyncio
from typing import Any, Text, Dict, List
from rasa_sdk.events import SlotSet
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import UserUttered
import os
from datetime import datetime
from pymongo import MongoClient
from datetime import datetime

mongo_uri = "mongodb+srv://admin:admin1234@summersembot.djdpave.mongodb.net/?retryWrites=true&w=majority"
database_name = "rasaChatBot"

client = MongoClient(mongo_uri)
database = client[database_name]

print("Database Connected!!!!")

class ActionGreet(Action):
    def name(self) -> Text:
        return "action_greet"

    async def run(self, dispatcher: CollectingDispatcher,
                  tracker: Tracker,
                  domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        current_hour = dt.datetime.now().hour
    
        if 5 <= current_hour < 12:
            greeting = "Good morning!"
        elif 12 <= current_hour < 17:
            greeting = "Good afternoon!"
        else:
            greeting = "Good evening!"
        
        dispatcher.utter_message(text=greeting)
        dispatcher.utter_message(text="🤖  Hii. I am available to help you during the summer semester.")
        dispatcher.utter_message(text="You can ask me your queries regarding the summer semester whether it would be regarding timetable, fees, course limit, evaluation pattern, or anything else.")
        dispatcher.utter_message(text="I will be happy to assist you 😊")

        return []

class ActionFallBack(Action):
    def name(self) -> Text:
        return "fallback"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        user_query = tracker.latest_message["text"]

        # Specify the folder name
        folder_name = "logs"

        # Create the folder if it doesn't exist
        if not os.path.exists(folder_name):
            os.makedirs(folder_name)

        collection_name = "outOfScopeQueries"
       # Connect to MongoDB
        collection = database[collection_name]

        # Get the current date and time
        current_date = datetime.now().strftime("%Y-%m-%d")

        # Construct the file path within the folder
        file_path = os.path.join(folder_name, "out.txt")

         # Log the user query along with the date to MongoDB
        out_of_scope_queries_form = {
           "date": current_date,
            "user_query": user_query,
        }

        print(out_of_scope_queries_form)

        collection.insert_one(out_of_scope_queries_form)

        # Get the original query from the last user message
        dispatcher.utter_message(text="Sorry, I don't understand your query.Please try to stick with queries related to summer semester.")
        return []
    
class ActionFeedBackAsking(Action):
    def name(self) -> Text:
        return "ask_feedback"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        # Get the original query from the last user message
        dispatcher.utter_message(text = "Feedback",buttons=[
            {"title": "Click if unsatisfied else Ask another", "payload": "manav", "disable_on_click": True,"type":"reply"}
        ])

        return []
########### 

# response collected in MongoDB instead of negative
class FeedBackQuestionFetcher(Action):
    def name(self) -> Text:
        return "negative"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        # Access the user message from three states back
        user_query = self.get_user_query_from_nth_step(tracker, n=4)
        # response variable 
        user_response = self.get_user_response(tracker,n=3)

        collection_name = "feedback_collection"
        collection = database[collection_name]


        # Get the current date and time
        current_date = datetime.now().strftime("%Y-%m-%d")

        # Log the user query along with the date to MongoDB
        feedback_document = {
            "date": current_date,
            "user_query": user_query,
            "feedback_type": user_response
        }

        collection.insert_one(feedback_document)
        # Respond to the user
        dispatcher.utter_message(text="I'm so sorry to hear that. I will improve myself 😊")

        return []

    def get_user_query_from_nth_step(self, tracker: Tracker, n: int) -> Text:
        # Check if there are enough events in the history
        if len(tracker.events) >= n * 2:
            # Get the user message event from the nth step
            user_message_event = tracker.events[-(n * 2) - 1]
            # print("User message event from {} steps back:".format(n), user_message_event)
            # Extract the user message text from the event
            user_query = user_message_event.get("text","")
            return user_query
        else:
            return ""


    # response fetching function 
    def get_user_response(self, tracker: Tracker, n: int) -> Text:
        # Check if there are enough events in the history
        if len(tracker.events) >= n * 2:
            # Get the user message event from the nth step
            user_message_event = tracker.events[-(n * 2) - 1]
            # print("User message event from {} steps back:".format(n), user_message_event)
            # Extract the user message text from the event
            user_response = user_message_event.get("name","")
            return user_response
        else:
            return ""

####################### 
# Registration Link Embed krna hai response mai 
# Auxiliary ka form link 
        

# Time Table link Embed response 
class TimeTableResponse(Action):
    def name(self) -> Text:
        return "Time_Table_Response"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
  
        fetched_link = "link"
        response = f"The summer term typically lasts for six weeks, from the first week of June to the end of July. For Exact Time Table,Academic calender and datesheet link click {fetched_link}"

        dispatcher.utter_message(text = response)

        return []

class Registration_Response(Action):
    def name(self) -> Text:
        return "Registration_response"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        fetched_link = "registration link"
        Auxi_link = "Auxi link"

        response = f"The registration forms of auxiliary exams will be available in first of week of Jan and July at this {Auxi_link} and for summer semester the forms will be available after the end of every even semester at {fetched_link}. The forms needed to be submit online"

        dispatcher.utter_message(text = response)

        return []
