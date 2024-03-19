"""
May or may not work, you are responsible for your own actions
    and following the laws in your jurisdiction.

TODO: Verify functionality with more dynamic analysis on virus ^
"""
import requests
import random
import string
from spam_c2 import COMPUTER_NAMES

API_BASE_URL = 'https://serenos.site/api/'
USER_ID = '5896714143'


def random_string(length):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


def generate_computer_name():
    return random.choice(COMPUTER_NAMES) + "-" + random_string(random.randint(4, 8))


def post_error(error_type, error_message):
    url = f'{API_BASE_URL}errors/'
    headers = {'Content-Type': 'application/json'}
    data = {
        "duvet_user": USER_ID,
        "computer_name": generate_computer_name(),
        "data": {
            "error": f"{error_type}: {error_message}"
        }
    }
    try:
        requests.post(url, json=data, headers=headers, timeout=0.1)
    except Exception as e:
        print(f"Error: {e}")
        pass


def post_injection_error():
    error_messages = [
        "Error injecting into Discord client",
        "Failed to write to Discord client's index.js file",
        "Error executing injection module",
        "Injection module not found",
        "Error restarting Discord client after injection"
    ]
    error_message = random.choice(error_messages)
    post_error("Injection Error", error_message)


def post_discord_tokens_error():
    error_messages = [
        "Error decrypting Discord token",
        "Failed to retrieve encrypted key from Local State file",
        "Error parsing Discord token file",
        "Discord token file not found",
        "Error validating Discord token"
    ]
    error_message = random.choice(error_messages)
    post_error("Discord Tokens Error", error_message)


def post_browser_data_error():
    error_messages = [
        "Error decrypting browser cookie",
        "Failed to retrieve browser cookie database",
        "Error parsing browser autofill data",
        "Browser password file not found",
        "Error decrypting browser password"
    ]
    error_message = random.choice(error_messages)
    post_error("Browser Data Error", error_message)


def post_unhandled_rejection_error():
    error_messages = [
        "Unhandled promise rejection: Failed to send data to API",
        "Unhandled promise rejection: Error parsing JSON response",
        "Unhandled promise rejection: Timeout exceeded for API request",
        "Unhandled promise rejection: Invalid response from API",
        "Unhandled promise rejection: Network error occurred"
    ]
    error_message = random.choice(error_messages)
    post_error("Unhandled Rejection", error_message)


def post_uncaught_exception_error():
    error_messages = [
        "Uncaught exception: TypeError - Cannot read property 'id' of undefined",
        "Uncaught exception: ReferenceError - Variable not defined",
        "Uncaught exception: SyntaxError - Unexpected token",
        "Uncaught exception: RangeError - Invalid array length",
        "Uncaught exception: Error - An unexpected error occurred"
    ]
    error_message = random.choice(error_messages)
    post_error("Uncaught Exception", error_message)


def post_uncaught_exception_monitor_error():
    error_messages = [
        "Uncaught exception monitor: TypeError - Cannot call method 'push' of undefined",
        "Uncaught exception monitor: ReferenceError - Function not defined",
        "Uncaught exception monitor: SyntaxError - Unexpected end of input",
        "Uncaught exception monitor: RangeError - Maximum call stack size exceeded",
        "Uncaught exception monitor: Error - An unexpected exception occurred"
    ]
    error_message = random.choice(error_messages)
    post_error("Uncaught Exception Monitor", error_message)


def main():
    num_requests = 1000000
    for _ in range(num_requests):
        print(f'sending error request {_}')
        post_injection_error()
        post_discord_tokens_error()
        post_browser_data_error()
        post_unhandled_rejection_error()
        post_uncaught_exception_error()
        post_uncaught_exception_monitor_error()


if __name__ == "__main__":
    main()
