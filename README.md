# SonicGlyde-Discord-Malware

virus.7z includes an electron-based credential grabber which steals discord tokens and browser data
 - it also includes a decrypted copy of the grabber source, with hardcoded C2 info

## Features

- Generates random user and system metadata.
- Simulates the posting of new injections, valid tokens, and browser data to the live C2.

## Requirements

- `requests ~= 2.31.0`

You can install the requirements with pip:

```bash
pip install -r requirements.txt
```

## Usage

To run the program, execute the `spam_c2.py` script:

```bash
python spam_c2.py
```

This will start the program, which will begin sending simulated data to the specified API.

## Disclaimer

This project is for educational purposes only. It is not intended to be used for malicious purposes. The user is responsible for their own actions.

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.
