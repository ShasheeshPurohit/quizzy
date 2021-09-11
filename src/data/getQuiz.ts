import {Quiz} from "./quizTypes"


const quizOne: Quiz = {
    
    quizName: "Meme Quiz 2021",
    quizImg:"https://pbs.twimg.com/media/E3sT8WXXoAYBMte.jpg",
    questions: [
        {
            question: "Which famous meme related to cricket was sold as a NFT?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Angry Indian",
                    isRight: false,
                },
                {
                    text: "Angry Pakistani",
                    isRight:true,
                },
                {
                    text: "Angry Kohli",
                    isRight: false,
                },
                {
                    text: "Angry American",
                    isRight: false
                }
            ]
        },
        {
            question: "A recent Indian engineer turned music composer had turned viral after his remix where he set rap beats to a popular Hindi serial. What was the name of this composer?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Ankush Bahuguna",
                    isRight: false,
                },
                {
                    text: "Ajey Nagar",
                    isRight:false,
                },
                {
                    text: "Yashraj Mukhate",
                    isRight: true,
                },
                {
                    text: "Ashish Chanchlani",
                    isRight: false,
                }
            ]
        },
        {
            question: "One of the viral memes that ruled 2020 was the famous ‘Coffin Dance’ where a group of dancing pallbearers carried a coffin on their shoulders and danced as it was the last wish of the deceased. Which country did this video originate from?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Nigeria",
                    isRight: false,
                },
                {
                    text: "Jamaica",
                    isRight: false,
                },
                {
                    text: "Ghana",
                    isRight: true,
                },
                {
                    text: "Trinidad and Tobago",
                    isRight: false
                }
            ]
        },
        {
            question: "The Grumpy Cat became an internet sensation in 2012 and was turned into many fun memes! What was the real name of the Grumpy Cat?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Tardar Sauce",
                    isRight: true,
                },
                {
                    text: "Grouchy",
                    isRight: false,
                },
                {
                    text: "Tartar Smith",
                    isRight: false,
                },
                {
                    text: "Grizzy",
                    isRight: false
                }
            ]
        },
        {
            question: "There were a lot of memes made with this viral game that gained immense popularity among the masses in 2020. What is the name of this game?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Among us",
                    isRight: true
                },
                {
                    text: "PUBG",
                    isRight: false,
                },
                {
                    text: "Imposter",
                    isRight: false,
                },
                {
                    text: "Ludo King",
                    isRight: false
                }
            ]
        }            
    ]
    
}

const quizTwo: Quiz = {
    
    quizName: "Indian Food Quiz",
    quizImg:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1844&q=80",
    questions: [
        {
            question: "What oil is largely used in the cooking of South India?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Cottonseed Oil",
                    isRight: false,
                },
                {
                    text: "Groundnut Oil",
                    isRight:false,
                },
                {
                    text: "Coconut Oil",
                    isRight: true,
                },
                {
                    text: "Sunflower Oil",
                    isRight: false
                }
            ]
        },
        {
            question: "Which of the following street-foods is largely found on most streets across India?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Dal Makhani",
                    isRight: false,
                },
                {
                    text: "Dahi Bhalle",
                    isRight:false,
                },
                {
                    text: "Pani Puri",
                    isRight: true,
                },
                {
                    text: "Chicken Tikka Masala",
                    isRight: false,
                }
            ]
        },
        {
            question: "Which of these was considered as the ‘food of gods’ in ancient India?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Fruits",
                    isRight: false,
                },
                {
                    text: "Yoghurt",
                    isRight: true,
                },
                {
                    text: "Milk",
                    isRight: false,
                },
                {
                    text: "Ghee",
                    isRight: false
                }
            ]
        },
        {
            question: "Which city is famous for its Pav Bhaji & Vada Pav?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Mumbai",
                    isRight: true,
                },
                {
                    text: "Kolkata",
                    isRight: false,
                },
                {
                    text: "Ahmedabad",
                    isRight: false,
                },
                {
                    text: "Rajasthan",
                    isRight: false
                }
            ]
        },
        {
            question: "Which city in India is famous for its Biryani?",
            points: 5,
            negativePoints: 2,
            options:[
                {
                    text: "Hyderabad",
                    isRight: true
                },
                {
                    text: "Delhi",
                    isRight: false,
                },
                {
                    text: "Amritsar",
                    isRight: false,
                },
                {
                    text: "Goa",
                    isRight: false
                }
            ]
        }            
    ]
    
}

export {quizOne, quizTwo}