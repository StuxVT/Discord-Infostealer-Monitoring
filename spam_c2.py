"""
TODO: Generate more realistic metadata
    EX:     "city": "CityName",
            "region": "RegionName",
this is easily filter-able ^
"""


import requests
import random
import string

API_BASE_URL = 'https://serenos.site/api/'
USER_ID = '7065707072'  # same user id for all agents I think -- todo: verify


def random_string(length=10):
    """Generate a random string of fixed length."""
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for i in range(length))




def post_new_injection():
    url = f'{API_BASE_URL}new-injection'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "computer_name": random_string(10),
        "ram": random.randint(4, 64),
        "cpu": random_string(15),
        "injections": ["Discord"],
        "distro": random_string(),
        "uptime": random.randint(10000, 1000000),
        "network": {
            "ip": "192.168.1.1",
            "country": "US",
            "city": "CityName",
            "region": "RegionName",
        }
    }
    response = requests.post(url, json=data, headers=headers)
    print_response(response)


def post_valid_tokens():
    url = f'{API_BASE_URL}valid-tokens'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "valid_tokens": [{"token": random_string(24), "found_in": "Discord"} for _ in range(5)],
        "computer_name": random_string(10),
    }
    response = requests.post(url, json=data, headers=headers)
    print_response(response)


def post_browsers_data():
    url = f'{API_BASE_URL}browsers-data'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "computer_name": random_string(10),
        "data": {
            "cookies": [random_string(10) for _ in range(5)],
            "autofills": [random_string(10) for _ in range(5)],
            "passwords": [random_string(10) for _ in range(5)],
        }
    }
    response = requests.post(url, json=data, headers=headers)
    print_response(response)


def print_response(response):
    if response.status_code == 200:
        print("Data posted successfully.")
    else:
        print(f"Failed to post data. Status code: {response.status_code}, Response: {response.text}")


def main():
    num_requests = 1  # Number of dummy requests to send. Adjust as needed.
    for _ in range(num_requests):
        post_new_injection()
        post_valid_tokens()
        post_browsers_data()


if __name__ == "__main__":
    main()
