# import random
#
# def generate_random_six_digit_number():
#     return ''.join(str(random.randint(0, 9)) for _ in range(6))
#
# # Generate and print the random 6-digit number
# random_number = generate_random_six_digit_number()
# print(f"Random 6-digit number: {random_number}")

import random
import subprocess

def generate_random_six_digit_number():
    return ''.join(str(random.randint(0, 9)) for _ in range(6))

# Generate the random 6-digit number
random_number = generate_random_six_digit_number()

# Copy the number to the clipboard using `pbcopy`
process = subprocess.Popen('pbcopy', env={'LC_CTYPE': 'UTF-8'}, stdin=subprocess.PIPE)
process.communicate(random_number.encode('utf-8'))

print(f"Random 6-digit number: {random_number} (Temporarily copied to clipboard!)")
