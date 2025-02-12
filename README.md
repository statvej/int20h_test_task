# int20h_test_task
## Requirements
- Java 17
- Maven 3+
- Docker
- Docker-compose
- npm
- bash

## How to run
1. Clone the repository

2. Launch script
```bash
    bash start-project.bash
```

## Про Проєкт

### На жаль, ми не змоглив повній мірі закінчити тестове завдання, надане для хакатону, адже нам не вистачило часу. В секції нижче розказується, як можна протестувати готову частину проєкту. Також, ви можете передивитись вихідний код у папках frontend -> frontend-app, а також backend. 

### Як побачити доступний функціонал?

Коли проєкт скомпілюється, ви потрапите на сторінку Login. Ви можете, або пройти верифікацію через Googlе, або ж натиснути на кнопку Sign Up в Header. В полях реєстрації та логіну ми створили базову перевірку полей вводу (Ви не можете створити пароль, де немає хоча б 1 маленької, великої літери, та цифри).

Щоб зареєструватися в нашому додатку, ви маєте заповнити всі поля реєстрації, а потім перейти в браузері на localhost:8025, та перейти по посиланню, яке редиректить вас на логін, де ви маєте перейти в новостворенний аккаунт.

На жаль, ми не змогли створити функціонал для створення квестів, але ви все ще можете подивитись, Backend та front-end частину окремо. Ви можете подивитись, як мали б створюватися квести, якщо в хедері перейдете в Create Quiz. Також ви можете спробувати подивитись, як мав би виглядати превью Квеста, та натиснувши кнопку Play, могли б зіграти в тестовий варінт квеста, та отримати результат, або ж не встигнути по таймеру і побачити екран поразки. 

Якщо ж перейти в профіль користувача, то там можна побачити його Username, а також темплейт того, як воно мало б виглядати.

Говорячи про Backend частину, ви можете перейти на localhost:8080/openapi/ui, аби побачити готові (майже всі) ендпоінти, для додатка, з повним описом та документації.

Також на front-end частині, ви можете спробувати перейти на різні не існуючі раути, та побачити, як ми це хендлимо. Також є введена система з Fallback ui.

Щиро дякую за приділений час для перевірки завдання!

Команда Ganghofer Team не може дочекатися можливості проявити свій повний потенціал на самому Хакатоні!🚀



# English version

## About the Project

### Unfortunately, we were unable to fully complete the test task given for the hackathon due to time constraints. In the section below, we explain how you can test the completed parts of the project. You can also check out the source code in the frontend -> frontend-app and backend directories.

### How to View the Available Functionality?

Once the project is compiled, you will land on the Login page. You can either verify your account via Google or click the Sign Up button in the Header. We have implemented basic input validation for both login and registration fields (you cannot create a password without at least one lowercase letter, one uppercase letter, and a number).

To register in our application, you need to fill in all the registration fields and then go to localhost:8025 in your browser. There, you will find a confirmation link that redirects you to the login page, allowing you to sign in to your newly created account.

Unfortunately, we didn't have enough time to implement the functionality for creating quests, but you can still explore the backend and frontend parts separately. In the Header, you will find the Create Quiz button, which gives an idea of how quest creation would have worked. You can also check out a quest preview and, by clicking Play, try out a test version of the quest. If you complete it, you will see your results. If you run out of time, you will see a game over screen.

In the User Profile, you can view the Username and a template of how the profile page was supposed to look.

As for the backend, you can visit localhost:8080/openapi/ui to see the available (almost all) API endpoints with full descriptions and documentation.

On the frontend, you can try navigating to non-existing routes to see how we handle them. We have also implemented a Fallback UI system.

Thank you for taking the time to review our test task!

The Ganghofer Team can't wait to unleash our full potential at the hackathon! 🚀
## What we did

| **functionality** | **Frontend** | **Connected** | **Backend**      |
|-------------------|--------------|---------------|------------------|
| register          | +            | +             | +                |
| login             | +            | +             | +                |
| mail verify       |   +           | -             | +                |
| jwt auth          |         +     | +             | +(no checks tho) |
| get user          |       +       | +             | +                |
| quiz create       |     +         | -             | +                |
| quiz walkthrough  |        +      | -             | -                |
| reviews           |    +          | -             | +                |
| history           |   -           | -             | -                |
