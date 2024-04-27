# Password Generator

Your task is to finnish an app that generates passwords. There should be a 'Generate Password' button which the user can click to show a new password using all letters and different characters.

By default, the password generated should use mixed cases (both lowercase and uppercase). Examples for generated passwords:
 - `876FocMkcCv98teXc(Ov`
 - `%lfXcrLt-#ke3r6R5§-?`
 - `Nd1Z\$yRx`

## Requirements

1. Don't change `index.html`, work in `js/index.js`

2. Use the constant "charset" in your function (move it there). It contains all characters to use.

   ```javascript
   const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_';
   ```

3. Your function should have 2 arguments:

   - length (Number) The length of the password
   - mixedCase (Boolean) Whether or not to use mixed cases (lowercase + uppercase)

4. If the second argument is true, use uppercase for every third character.

5. Use the function `getRandomInt()` to generate random numbers where you need them.

6. Create a `form` element and add an **input** `id="length"` field inside it to define the length of the password the default value is "*20*".

7. Add a **checkbox** `id="mixedCases"` in the form to define if the password should use mixed cases the default value is `true` (mixed cases).

8. Register an *submit* form event for the *form* to generate a new password.

9. Update the generated password inside of the **div** `id="output"` element.

10. Generate the first password as soon as the page is loaded, using a default length of 20 .

## Example

   ![](demo.gif)
