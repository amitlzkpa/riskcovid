export default {
  callToAction: 'Estimate your risk exposure to COVID-19',
  launchButton: "Start",
  formId: 'registration',
  questions: [
    {
      key: "age",
      question: "Please tell us how old are you?",
      type: "number"
    },
    {
      key: "sex",
      question: 'What gender do you identify with?',
      type: "single-select",
      answers: [
        {
          answer: 'Male',
          action: 'continue',
          key: 'M'
        },
        {
          answer: 'Female',
          action: 'continue',
          key: 'F'
        },
        {
          answer: 'Other',
          action: 'continue',
          key: 'O'
        }
      ],
    },
    {
      key: "race",
      question: "How would you identify your race?",
      type: "single-select",
      answers: [
        {
          answer: "American Indian or Alaska Native",
          action: "continue",
          key: "A"
        },
        {
          answer: "Asian",
          action: "continue",
          key: "S"
        },
        {
          answer: "Asian (Indian)",
          action: "continue",
          key: "I"
        },
        {
          answer: "Black or African American",
          action: "continue",
          key: "B"
        },
        {
          answer: "White or Caucasian",
          action: "continue",
          key: "W"
        },
        {
          answer: "Native Hawaiian or Other Pacific Islander",
          action: "continue",
          key: "O"
        },
      ]
    },
    {
      key: "country",
      question: "Which country are you living in?",
      type: "text"
    },
    {
      key: "zip",
      question: "What is your pincode?",
      type: "number"
    },
    
    {
      key: "medical-conditions",
      question: 'Do you deal with any of the following medical conditions?',
      type: "multiple-select",
      answers: [
        {
          answer: 'Asthma'
        },
        {
          answer: 'Diabetes Mellitus'
        },
        {
          answer: 'Chronic Lung Disease'
        },
        {
          answer: 'Cardiovascular Disease'
        },
        {
          answer: 'Immunocompromized'
        },
        {
          answer: 'Chronic Renal Disease'
        },
        {
          answer: 'Pregnancy'
        },
        {
          answer: 'Neuro Disorder Conditions'
        },
        {
          answer: 'Chronic Liver Disease'
        },

      ],
    },
    {
      key: "smoking-habits",
      question: 'Do you smoke?',
      type: "single-select",
      answers: [
        {
          answer: 'Yes. I am an active smoker',
          action: 'continue',
          key: 'Y'
        },
        {
          answer: 'I used to smoke but not anymore',
          action: 'continue',
          key: 'M'
        },
        {
          answer: 'No. I never smoked',
          action: 'continue',
          key: 'N'
        }
      ],
    },
    
    {
      key: "isolated",
      question: 'How well have you managed to isolate yourself since the beginning of March?',
      type: "single-select",
      answers: [
        {
          answer: 'I have been doing it pretty well. Very few interactions besides the ones absolutely necessary.',
          action: 'continue'
        },
        {
          answer: 'I have been okay. Not been a hermite, but no partying either.',
          action: 'continue'
        },
        {
          answer: 'What isolation?!',
          action: 'continue',
        },
        {
          answer: 'I am not sure',
          action: 'continue',
        }
      ],
    },
    {
      key: "social-distancing",
      question: 'How well have you taken social distancing precautions?',
      type: "single-select",
      answers: [
        {
          answer: 'Very strictly. I karate chop people closer than 6 feet when I am outside.',
          action: 'continue'
        },
        {
          answer: 'I have been okay with that. There is only so much you can do.',
          action: 'continue'
        },
        {
          answer: 'Social distancing is not for me.',
          action: 'continue',
        },
        {
          answer: 'I am not sure',
          action: 'continue',
        }
      ],
    },
    {
      key: "wear-mask",
      question: 'Have you been wearing masks when you are in public?',
      type: "single-select",
      answers: [
        {
          answer: 'Yes. I always have mine on me.',
          action: 'continue'
        },
        {
          answer: 'Mostly. Baring a few incidents I have always worn one.',
          action: 'continue'
        },
        {
          answer: 'No. I do not wear masks',
          action: 'continue',
        },
        {
          answer: 'I am not sure.',
          action: 'continue',
        }
      ],
    },
    {
      key: "sanitize",
      question: 'Have you been careful about staying in well sanitizing environments?',
      type: "single-select",
      answers: [
        {
          answer: 'Yes. I have always been in a well sanitized environment.',
          action: 'continue'
        },
        {
          answer: 'Mostly. I have been careful but not always.',
          action: 'continue'
        },
        {
          answer: 'No.',
          action: 'continue',
        },
        {
          answer: 'I am not sure',
          action: 'continue',
        }
      ],
    },

    {
      key: "symptoms",
      question: 'Please mark any of the following symptoms you think you may have',
      type: "multiple-select",
      answers: [
        {
          answer: 'Sore Throat'
        },
        {
          answer: 'Dry Cough'
        },
        {
          answer: 'Nasal Congestion'
        },
        {
          answer: 'Runny Nose'
        },
        {
          answer: 'Shortness of Breath'
        },
        {
          answer: 'Fever'
        },
        {
          answer: 'Anosmia'
        },
        {
          answer: 'Tiredness'
        },
        {
          answer: 'Aches'
        },
        {
          answer: 'Diarrhoea'
        }

      ],
    },

    {
      id: 'thank-you',
      question: 'Great! Please click submit and wait for the results.',
      type: 'submit',
    }
  ]
};
