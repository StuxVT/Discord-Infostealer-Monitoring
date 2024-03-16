import datetime
import os
import requests
import random
import string

CITY_NAMES = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]
REGION_NAMES = ["California", "Texas", "Florida", "New York", "Pennsylvania", "Illinois", "Ohio", "Georgia", "North Carolina", "Michigan"]
DISTROS = ["Windows 10", "Windows 11", "macOS 12", "macOS 13", "Ubuntu 22.04", "Fedora 37", "CentOS 8", "Debian 11", "Arch Linux", "OpenSUSE Leap 15.4"]
COMPUTER_NAMES = [
    "DESKTOP-A1B2C3", "LAPTOP-XYZ123", "WORKSTATION-001", "SERVER-123ABC",
    "MACBOOK-PRO", "IMAC-27", "THINKPAD-T490", "SURFACE-BOOK-2",
    "HP-PAVILION", "DELL-XPS-15", "ACER-ASPIRE", "LENOVO-YOGA",
    "ASUS-ROG", "MSI-GAMING", "TOSHIBA-SATELLITE", "SAMSUNG-NOTEBOOK"
]

def generate_computer_name():
    return random.choice(COMPUTER_NAMES) + "-" + random_string(random.randint(4, 8))

def generate_discord_token():
    # Generate a valid-looking Discord token
    parts = []
    for _ in range(3):
        parts.append(''.join(random.choices(string.ascii_letters + string.digits, k=24)))
    parts.append(''.join(random.choices(string.ascii_letters + string.digits + '-' + '_', k=38)))
    return '.'.join(parts)

def generate_public_ip():
    # Generate a random public IP address
    return f"{random.randint(1, 255)}.{random.randint(0, 255)}.{random.randint(0, 255)}.{random.randint(1, 254)}"

def random_string(length):  # used for any other data I have yet to realistically randomize
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

API_BASE_URL = 'https://serenos.site/api/'
USER_ID = '7065707072'  # same user id for all agents I think -- todo: verify


def post_new_injection():
    url = f'{API_BASE_URL}new-injection'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "computer_name": generate_computer_name(),
        "ram": random.randint(4, 64),
        "cpu": random_string(15),
        "injections": ["Discord"],
        "distro": random.choice(DISTROS),
        "uptime": random.randint(10000, 1000000),
        "network": {
            "ip": generate_public_ip(),
            "country": "US",
            "city": random.choice(CITY_NAMES),
            "region": random.choice(REGION_NAMES),
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_valid_tokens():
    url = f'{API_BASE_URL}valid-tokens'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "valid_tokens": [
            {"token": generate_discord_token(), 
             "found_in": "Discord"} for _ in range(1 if random.random() < 0.7 else random.randint(2, 3))
                # bias tokens to 1, most people only have 1 account 
            ],
        "computer_name": generate_computer_name(),
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_browsers_data():
    url = f'{API_BASE_URL}browsers-data'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "computer_name": generate_computer_name(),
        "data": {
            "cookies": [random_string(10) for _ in range(random.randint(1, 14))],
            "autofills": [random_string(10) for _ in range(random.randint(1, 12))],
            "passwords": [random_string(10) for _ in range(random.randint(1, 21))],
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def print_response(response, endpoint, payload):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"{timestamp} - Endpoint: {endpoint}\n"
    log_entry += f"Payload: {payload}\n"
    log_entry += f"Status Code: {response.status_code}\n"
    log_entry += f"Response Text: {response.text}\n"
    log_entry += f"Response Headers: {response.headers}\n"
    log_entry += f"Elapsed Time: {response.elapsed.total_seconds()} seconds\n"
    log_entry += "-------------------------\n"

    print(log_entry)

    # Save log entry to a file
    log_directory = "logs"
    os.makedirs(log_directory, exist_ok=True)
    log_filename = f"{log_directory}/api_log_{datetime.datetime.now().strftime('%Y%m%d')}.log"
    with open(log_filename, "a") as log_file:
        log_file.write(log_entry)


def main():
    num_requests = 1000000 # Number of dummy requests to send. Adjust as needed.
    for _ in range(num_requests):
        print(f'sending request {_}')
        post_new_injection()
        post_valid_tokens()
        post_browsers_data()


if __name__ == "__main__":
    main()
