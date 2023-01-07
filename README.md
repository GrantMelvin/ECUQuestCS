# ECUQuestCS
A web application that allows lower-level computer science students to practice topics that are central to the East Carolina Univertsity cirriculum.

(Until it's posted to the cloud)
To run this:<br/>
-git clone https://github.com/GrantMelvin/ECUQuestCS.git
-npm install
-npm start
-cd src/server
-npm run dev

--------------------------------------------------------------------------

![image](https://user-images.githubusercontent.com/92465197/211129997-5e151c0e-2fd6-4501-b304-72130257ad05.png)

Account verification is required. The user must create an account before logging in.

![image](https://user-images.githubusercontent.com/92465197/211130013-d72c0b79-f4ad-4f60-b1a6-03f443b6a6ef.png)

The user is asked that for a valid-typed email address, first name, last name, and password in order to create an account that can be inserted into the postgresql accounts table for the database.

![image](https://user-images.githubusercontent.com/92465197/211130070-d794c6f5-7e77-4df9-a643-897ad5a68b67.png)

Once logged in, the dashboard displays<br/>
*The recommended question sets for this specific user based off of accuracy percentages and general progress<br/>
*A button that allows the user to redo any missed questions that they have<br/>
*An activity graph for how many questions theyve answered<br/>
*Article recommendations regarding the currently recommended question sets<br/>
*A sidebar that displays different pages that the user has access to<br/>

![image](https://user-images.githubusercontent.com/92465197/211130235-d2cce0e7-2230-494d-8702-97ec99f85a05.png)

The profile page allows the user to change any of the information given during the account creation. This is done through basic postgresql queries.

![image](https://user-images.githubusercontent.com/92465197/211130267-474a6ca1-ce30-479d-baea-ebd4cd8f6de8.png)

The analytics page allows the user to see the percentage of questions that they answer correctly, incorrectly, or haven't answered yet for each question set they have participated in. Question sets that they haven't done yet are invisible.

![image](https://user-images.githubusercontent.com/92465197/211130314-db81ca32-6f53-4cb2-b1f7-90a0eb03711e.png)

![image](https://user-images.githubusercontent.com/92465197/211130283-f1e0a2e1-b297-4b66-a078-887c4072254e.png)

![image](https://user-images.githubusercontent.com/92465197/211130286-592aaadb-1089-4422-b267-acbd6295e5c6.png)

Each of the courses pages contain three different question sets that users can participate in. Currently there are 10 questions in each set but can be added to very easily.

![image](https://user-images.githubusercontent.com/92465197/211130342-7bcb769e-3b2f-4047-91a9-2fb9794f3557.png)

Each question set contains this format of question. 

![image](https://user-images.githubusercontent.com/92465197/211130346-b10b24ed-4b60-4d89-89b2-a0487f3cf78e.png)

Once an answer is selected, the answer options are disabled along with the result of their answer being displayed at the top of the pageand the next question button appears.

![image](https://user-images.githubusercontent.com/92465197/211130325-9c003621-661f-4b78-9b3b-3148f03ea53b.png)

Once a user has completed all questions in a question set they are met with this message.<br/>
The website also has a dark/light mode feature. If the mode is changed by the user then all black text goes to white with different colored backgrounds and sidebar.


