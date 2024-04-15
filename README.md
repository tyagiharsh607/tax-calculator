# Tax Calculator

## Overview

The tax calculation works based on the following formula:

- Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
  - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
  - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
- Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
  - 30% for people with age < 40
  - 40% for people with age ≥ 40 but < 60
  - 10% for people with age ≥ 60
  - Example
    - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs

## Features

- Do not restrict the user from entering incorrect values like characters in the number fields.
  - Highlight an error icon to the right of the input field (shown as an example in the above image as a circle with `!`). Hovering over it should show the error in a tooltip.
  - If no errors are present, don't show the error icon.
  - This should be present in all the number fields.
- The age dropdown field should have 3 values:
  - <40
  - ≥ 40 & < 60
  - ≥ 60
  - If the user has not entered this value and clicks on submit, show an error icon hovering over which should show that the input field is mandatory.
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal that would display the final values based on the above calculations.

## How to Use

1. Clone the repository.
2. Open the `index.html` file in a web browser.

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

