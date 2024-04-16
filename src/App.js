import React, {useState} from 'react';
import './App.css';
import 'animate.css';
import Button from '@mui/material/Button';
import {Grid} from '@mui/material';

const QUESTIONS = [
  {
    question: "Have I thought about it for at least two weeks?",
    choices: ["Yes", "No"]
  },
  {
    question: "Does it solve a problem that I've genuinely noticed?",
    choices: ["Yes", "No"]
  },
  {
    question: "Do I already own something similar?",
    choices: ["No", "Yes"]
  },
  {
    question: "Is buying it worth giving up progress towards my next financial goal?",
    choices: ["Yes", "No"]
  },
  {
    question: "Where will it be in five years?",
    choices: ["Used or In Use", "Not in Use"]
  },
  {
    question: "Where will I put it if I buy it?",
    choices: ["I have a place in mind", "Not Sure"]
  },
  {
    question: "How long will I have to work in order to pay for it?",
    choices: ["Not Very Long", "A Significant Amount of Time"]
  },
  {
    question: "Can I be productive and happy without it?",
    choices: ["No", "Yes"]
  },
  {
    question: "What is the cost of it per use?",
    choices: ["Worth my money", "Not Worth My Money"]
  },
  {
    question: "Does buying it support my priorities?",
    choices: ["Yes", "No"]
  },
  {
    question: "Is this the best way for me to obtain it?",
    choices: ["Yes", "No"]
  },
  {
    question: "Is it a high-quality item with a reasonable price tag?",
    choices: ["Yes", "No"]
  },
  {
    question: "What is my current mental status?",
    choices: ["Calm and Neutral", "Altered by Internal or External Forces"]
  },
  {
    question: "What is the real reason I'm considering buying it?",
    choices: ["An Intentional Reason", "An Impulsive Reason"]
  }
];

function App() {

  const [currentQ, setCurrentQ] = useState(0);
  const [buy, setBuy] = useState(0);
  const [notBuy, setNotBuy] = useState(0);

  const handleChoiceSelection = (questionIndex, choiceIndex) => {
    if (choiceIndex === 0) {
      setBuy(buy + 1);
    } else {
      setNotBuy(notBuy + 1);
    }

    if (questionIndex === QUESTIONS.length - 1) {
      // End of test alert who won, reset counters
      if (buy > notBuy) {
        // Alert to buy
        alert("Buy");
      } else {
        // Alert to not buy
        alert("Don't Buy");
      }

      setBuy(0);
      setNotBuy(0);
      setCurrentQ(0);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="animate__animated animate__fadeIn">{QUESTIONS[currentQ].question}</h1>
          </Grid>

          {QUESTIONS[currentQ].choices.map((choice, choiceIndex) => (
            <Grid item xs={6}>
              <Button onClick={() => handleChoiceSelection(currentQ, choiceIndex)} variant="contained" key={choiceIndex}>{choice}</Button>
            </Grid>
            ))
          }

      </Grid>
    </div>
  );

  }

export default App;
