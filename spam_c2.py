"""
May or may not work, you are responsible for your own actions
    and following the laws in your jurisdiction.

TODO: Verify functionality with more dynamic analysis on virus ^
"""
import requests
import random
import string

CITY_NAMES = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego",
              "Dallas", "San Jose"]
REGION_NAMES = ["California", "Texas", "Florida", "New York", "Pennsylvania", "Illinois", "Ohio", "Georgia",
                "North Carolina", "Michigan"]
DISTROS = ["Windows 10", "Windows 11", "macOS 12", "macOS 13", "Ubuntu 22.04", "Fedora 37", "CentOS 8", "Debian 11",
           "Arch Linux", "OpenSUSE Leap 15.4"]
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
            "cookies": [
                {
                    "browser": random.choice(["Chrome", "Firefox", "Edge"]),
                    "list": [f"cookie{i}" for i in range(random.randint(1, 10))]
                }
            ],
            "autofills": [
                {
                    "browser": random.choice(["Chrome", "Firefox", "Edge"]),
                    "list": [f"autofill{i}" for i in range(random.randint(1, 5))]
                }
            ],
            "passwords": [
                {
                    "browser": random.choice(["Chrome", "Firefox", "Edge"]),
                    "list": [f"password{i}" for i in range(random.randint(1, 8))]
                }
            ]
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_2fa_enable():
    url = f'{API_BASE_URL}2fa-enable/'
    headers = {'Content-Type': 'application/json'}
    data = {
        "user": f'{{"id": "{random_string(18)}", "username": "{random_string(8)}", "email": "{random_string(8)}@example.com"}}',
        "profile": f'{{"bio": "Hello, I\'m {random_string(8)}!", "avatar": "{random_string(18)}"}}',
        "billing": f'{{"paymentMethods": [{{"type": "creditCard", "last4": "{random.randint(1000, 9999)}"}}]}}',
        "duvet_user": USER_ID,
        "login": {
            "password": random_string(12),
            "token": generate_discord_token()
        },
        "two_factor": {
            "secret": random_string(16),
            "code": str(random.randint(100000, 999999))
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_2fa_disable():
    url = f'{API_BASE_URL}2fa-disable/'
    headers = {'Content-Type': 'application/json'}
    data = {
        "user": f'{{"id": "{random_string(18)}", "username": "{random_string(8)}", "email": "{random_string(8)}@example.com"}}',
        "profile": f'{{"bio": "Hello, I\'m {random_string(8)}!", "avatar": "{random_string(18)}"}}',
        "billing": f'{{"paymentMethods": [{{"type": "creditCard", "last4": "{random.randint(1000, 9999)}"}}]}}',
        "duvet_user": USER_ID,
        "login": {
            "token": generate_discord_token()
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_password_change():
    url = f'{API_BASE_URL}password-change/'
    headers = {'Content-Type': 'application/json'}
    data = {
        "user": f'{{"id": "{random_string(18)}", "username": "{random_string(8)}", "email": "{random_string(8)}@example.com"}}',
        "profile": f'{{"bio": "Hello, I\'m {random_string(8)}!", "avatar": "{random_string(18)}"}}',
        "billing": f'{{"paymentMethods": [{{"type": "creditCard", "last4": "{random.randint(1000, 9999)}"}}]}}',
        "duvet_user": USER_ID,
        "login": {
            "password": random_string(12),
            "new_password": random_string(12),
            "token": generate_discord_token()
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_email_change():
    url = f'{API_BASE_URL}email-change/'
    headers = {'Content-Type': 'application/json'}
    data = {
        "user": f'{{"id": "{random_string(18)}", "username": "{random_string(8)}", "email": "{random_string(8)}@example.com"}}',
        "profile": f'{{"bio": "Hello, I\'m {random_string(8)}!", "avatar": "{random_string(18)}"}}',
        "billing": f'{{"paymentMethods": [{{"type": "creditCard", "last4": "{random.randint(1000, 9999)}"}}]}}',
        "duvet_user": USER_ID,
        "login": {
            "password": random_string(12),
            "email": f"{random_string(8)}@example.com",
            "token": generate_discord_token()
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def post_discord_login():
    url = f'{API_BASE_URL}discord-login/'
    headers = {'Content-Type': 'application/json'}
    data = {
        "user": f'{{"id": "{random_string(18)}", "username": "{random_string(8)}", "email": "{random_string(8)}@example.com"}}',
        "profile": f'{{"bio": "Hello, I\'m {random_string(8)}!", "avatar": "{random_string(18)}"}}',
        "billing": f'{{"paymentMethods": [{{"type": "creditCard", "last4": "{random.randint(1000, 9999)}"}}]}}',
        "duvet_user": USER_ID,
        "login": {
            "password": random_string(12),
            "token": generate_discord_token()
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(e)
        pass


def main():
    num_requests = 1
    for _ in range(num_requests):
        print(f'sending request {_}')
        post_new_injection()
        post_valid_tokens()
        post_browsers_data()
        post_2fa_enable()
        post_2fa_disable()
        post_password_change()
        post_email_change()
        post_discord_login()


if __name__ == "__main__":
    main()