![image](https://github.com/StuxVT/SonicGlyde-Discord-Malware/assets/100985218/8171e62f-5c13-40c0-9ce5-5647c7d9dcee)

# SonicGlyde-Discord-Malware

A few of my friends got hit by this malware. Decided to reverse it to see what is under the hood.

virus.7z includes an electron-based credential grabber which steals discord tokens and browser data
 - it also includes a decrypted copy of the grabber source, with hardcoded C2 info
 - password: `stux`

It is being distributed via a manual phishing in discord DMs using the stolen accounts. Linking users to: `https://sonicglyde.com/` to download a fake game which is the aforementioned malware

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
